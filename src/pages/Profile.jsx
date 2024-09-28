import { NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useEffect, useRef, useState } from "react"
import axiosClient from "../axios-client"

export default function Profile() {
  const { userId } = useParams()
  // console.log(userId)
  const storageUrl = import.meta.env.VITE_STORAGE_URL
  const image_pathRef = useRef()
  const location = useLocation()
  const isPostsPage = location.pathname.includes("posts")
  const { user, currentUser, updatePhoto } = useAuth()
  const [userDetails, setUserDetails] = useState(null)

  async function getUserDetails(userId) {
    const { data } = await axiosClient.get(`/user/${userId}`)
    setUserDetails(data)
    // console.log(data)
  }
  useEffect(() => {
    getUserDetails(userId)
  }, [])
  const handleImageUpload = async () => {
    const imagepath = image_pathRef.current.files[0] // Get the selected file
    try {
      if (imagepath) {
        const formData = new FormData()
        formData.append("imagepath", imagepath) // Append the file to the form data
        formData.append("_method", "PUT") // Append the file to the form data
        await updatePhoto(formData)
      }

      await currentUser()
      window.location.reload(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col h-screen px-10 pt-10 overflow-auto">
      <div className=" h-[50%] flex flex-col items-center justify-center gap-16 font-MuseoModerno border-b-2">
        <div className="bg-white w-[400px] h-[160px] flex items-center px-6  gap-3 border-black border-2 rounded-xl">
          <div className="size-[130px] overflow-hidden rounded-full">
            {userDetails && (
              <img src={`${storageUrl}/${userDetails.imagepath}`} alt="" />
            )}
          </div>
          {userDetails && (
            <>
              <div className="flex items-center flex-1 pl-4">
                <div className="flex flex-col gap-3">
                  <span className="font-semibold text-lg">
                    {userDetails.username}
                  </span>
                  <span className="text-navbarInactiveLink">
                    <span className="flex gap-1">
                      <p className="font-semibold text-black">
                        {userDetails.posts}
                      </p>{" "}
                      Posts
                    </span>
                    <span className="flex gap-1">
                      <p className="font-semibold text-black">
                        {userDetails.followers}
                      </p>{" "}
                      Followers
                    </span>
                    <span className="flex gap-1">
                      <p className="font-semibold text-black">
                        {userDetails.following}
                      </p>{" "}
                      Following
                    </span>
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <input ref={image_pathRef} id="dropzone-file" type="file" />
        <button onClick={handleImageUpload}>Edit</button>
        <div className="flex  gap-3">
          <NavLink
            to="/profile/:userId/posts"
            className={`${!isPostsPage && "text-gray-400"}`}
          >
            Posts
          </NavLink>
          |
          <NavLink
            to="/profile/:userId/activities"
            className={`${isPostsPage && "text-gray-400"}`}
          >
            Activities
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
