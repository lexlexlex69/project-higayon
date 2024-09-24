import { NavLink, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useRef, useState } from "react"
import axios from "axios" // Import axios for making the API request
import axiosClient from "../axios-client"

export default function Profile() {
  const storageUrl = import.meta.env.VITE_STORAGE_URL
  const image_pathRef = useRef()
  const location = useLocation()
  const isPostsPage = location.pathname.includes("posts")
  const { user, currentUser, updatePhoto } = useAuth()
  const [imageUrl, setImageUrl] = useState(currentUser.image_path || "")

  // Function to handle image upload
  const handleImageUpload = async () => {
    const imagepath = image_pathRef.current.files[0] // Get the selected file

    if (imagepath) {
      const formData = new FormData()
      formData.append("imagepath", imagepath) // Append the file to the form data
      formData.append("_method", "PUT") // Append the file to the form data
      updatePhoto(formData)
    }
  }

  return (
    <div className="flex flex-col h-screen px-10 pt-10 overflow-auto">
      <div className="h-[50%] flex flex-col items-center justify-center gap-16 font-MuseoModerno border-b-2">
        <div className="bg-white w-[400px] h-[160px] flex items-center px-6 gap-3 border-black border-2 rounded-xl">
          <div className="size-[130px] overflow-hidden rounded-full">
            <img
              src={
                imageUrl
                  ? `${storageUrl}${imageUrl}`
                  : `${storageUrl}images/default.jpg`
              }
              alt="Profile"
            />
          </div>
          <div className="flex items-center flex-1 pl-4">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-lg">{user.username}</span>
              <span className="text-navbarInactiveLink">
                <span className="flex gap-1">
                  <p className="font-semibold text-black">{"6"}</p> Posts
                </span>
                <span className="flex gap-1">
                  <p className="font-semibold text-black">{"10"}</p> Followers
                </span>
                <span className="flex gap-1">
                  <p className="font-semibold text-black">{"11"}</p> Following
                </span>
              </span>
            </div>
          </div>
        </div>
        <input
          ref={image_pathRef}
          id="dropzone-file"
          type="file"
          onChange={(e) => console.log(e.target.files[0])}
        />
        <button onClick={handleImageUpload}>Update Photo</button>
        <div className="flex gap-3">
          <NavLink
            to="/profile/posts"
            className={`${!isPostsPage && "text-gray-400"}`}
          >
            Posts
          </NavLink>
          |
          <NavLink
            to="/profile/activities"
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
