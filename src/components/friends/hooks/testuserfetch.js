import axiosClient from "../../../axios-client"

export async function suggestedUsers() {
  await axiosClient
    .get("/suggestedUsers")
    .then(({ data }) => {
      console.log("user", data)
      return data
      // setToken(data.token)
    })
    .catch((err) => {
      //debugger;
      console.log(err)
    })
}

export async function getUsers() {
  try {
    const { data } = await axiosClient.get("/suggestedUsers")
    return data
  } catch (e) {
    console.log(e)
  }
}
