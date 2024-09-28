import { UserRoundPlus } from "lucide-react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import axiosClient from "../../axios-client"

export default function FriendMiniProfileContent({ users, title }) {
  const storageUrl = import.meta.env.VITE_STORAGE_URL
  const { user } = useAuth()
  async function follow() {
    // console.log(user.id)
    // console.log(users.id)
    const payload = { followedUser: users.id }
    const data = await axiosClient.post("/follow", payload)
    // console.log(data)
  }
  return (
    <div className="relative p-2 w-full h-14 rounded-full flex items-center justify-between hover:bg-blue-100 bg-blue-200 border-2 border-black">
      {users && (
        <>
          <Link to={`/profile/${users.id}`} className="flex items-center">
            <img
              src={
                users.imagepath
                  ? `${storageUrl}/${users.imagepath}`
                  : "/emptyProfile.png"
              }
              className="w-12 h-12 me-2 rounded-full object-cover border-dashed border-2 border-gray-400 p-1 mr-3"
            />
            <span>{users.username}</span>
          </Link>
        </>
      )}
      {title !== "Followed" && (
        <button
          onClick={() => follow()}
          className=" hover:border-2 hover:border-gray-800 rounded-full flex items-center justify-center p-2 pl-[13px] h-[3rem]"
        >
          <UserRoundPlus />
        </button>
      )}
    </div>
  )
}
