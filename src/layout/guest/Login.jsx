import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import { useRef } from "react"
import axiosClient from "../../axios-client"

export default function Login() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    }
    // setErrors(null)
    login(payload)
    // console.log(payload)
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 font-MuseoModerno text-md"
    >
      <input
        type="text"
        ref={usernameRef}
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="Username"
      />
      <input
        type="password"
        ref={passwordRef}
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="Password"
      />
      <button className="mt-4 bg-higayon text-white p-2 rounded-md">
        Login
      </button>
      <span className="">
        Dont have an account?{" "}
        <Link to="/signup" className="underline">
          Sign up
        </Link>{" "}
        now.
      </span>
    </form>
  )
}
