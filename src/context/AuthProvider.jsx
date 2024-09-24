import { createContext, useContext, useState } from "react"
import axiosClient from "../axios-client"

const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
})

export const ContextProvider = ({ children }) => {
  const [user, _setUser] = useState(
    localStorage.getItem("USERS")
      ? JSON.parse(localStorage.getItem("USERS"))
      : null
  )
  // const [token, _setToken] = useState(123)
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"))

  const setUser = (user) => {
    _setUser(user)
    if (user) {
      localStorage.setItem("USERS", JSON.stringify(user))
    } else {
      localStorage.removeItem("USERS")
    }
  }

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token)
    } else {
      localStorage.removeItem("ACCESS_TOKEN")
    }
  }

  async function login(payload) {
    console.log(payload)
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token)
        // console.log(data.user)
      })
      .catch((err) => {
        //debugger;
        const response = err.response
        if (response && response.status === 422) {
          if (response.data.errors) {
            console.log(response.data.errors)
          } else {
            console.log({ email: [response.data.message] })
          }
        }
      })
    // console.log(payload)
  }
  const signup = (payload) => {
    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token)
        window.location.href = "/login"
        // console.log(data.user)
      })
      .catch((err) => {
        //debugger;
        const response = err.response
        if (response && response.status === 422) {
          if (response.data.errors) {
            console.log(response.data.errors)
          } else {
            console.log({ email: [response.data.message] })
          }
        }
      })
  }
  const updatePhoto = (payload) => {
    console.log(payload)
    axiosClient.post("/updatePhoto", payload)
  }

  async function currentUser() {
    return axiosClient
      .get("/currentUser")
      .then(({ data }) => {
        console.log(data)
        return data
        // setUser(data.user)
        // setToken(data.token)
        // window.location.href = "/login"
        // console.log(data.user)
      })
      .catch((err) => {
        //debugger;
        const response = err.response
        if (response && response.status === 422) {
          if (response.data.errors) {
            console.log(response.data.errors)
          } else {
            console.log({ email: [response.data.message] })
          }
        }
      })
  }
  const logout = () => {
    axiosClient.post("/logout").then(() => {
      setToken(null)
    })
  }

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        login,
        logout,
        signup,
        currentUser,
        updatePhoto,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useAuth = () => useContext(StateContext)
