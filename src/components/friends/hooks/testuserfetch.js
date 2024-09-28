import axiosClient from "../../../axios-client"

export async function getUsers() {
  try {
    const { data } = await axiosClient.get("/suggestedUsers")
    return data
  } catch (e) {
    console.log(e)
  }
}

export async function followedUsersHook(id) {
  try {
    const { data } = await axiosClient.get("/userFollowed/" + id)
    return data
  } catch (e) {
    console.log(e)
  }
}

export async function suggestedUsersHooks(id) {
  try {
    const { data } = await axiosClient.get("/userSuggestions/" + id)
    return data
  } catch (e) {
    console.log(e)
  }
}

export async function checkProfileHooks(id) {
  try {
    const { data } = await axiosClient.get("/profileCheck/" + id)
    return data
  } catch (e) {
    console.log(e)
  }
}
