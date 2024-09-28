import { ChevronDown, UserRoundPlus } from "lucide-react"
import FriendMiniProfile from "./friends/FriendMiniProfileContainer"
import { useSidebarContext } from "../SidebarContext"
import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useEffect } from "react"

export default function SidebarRigth() {
  const { toggle, close, isSmallOpen } = useSidebarContext()
  const { logout, user } = useAuth()
  const storageUrl = import.meta.env.VITE_STORAGE_URL

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await suggestedUsers()

  //     console.log(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <div className="flex flex-col gap-3 h-full px-3 py-4 overflow-y-auto bg-white  dark:bg-gray-800 font-MuseoModerno  ">
        <button
          id="dropdownAvatarNameButton"
          data-dropdown-toggle="dropdownAvatarName"
          className={`bg-slate-200 w-full flex items-center justify-between text-lg pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600`}
          type="button"
          onClick={toggle}
        >
          <span className="flex items-center">
            {user && (
              <img
                className=" w-12 h-12 me-2 rounded-full object-cover border-dashed border-2 border-gray-400 p-1"
                src={`${storageUrl}/${user.imagepath}`}
                alt="user photo"
              />
            )}
            {user.username}
          </span>
          <ChevronDown size={30} />
        </button>

        {/* dri dapat ehide */}
        {isSmallOpen && (
          <div
            onClick={close}
            className="fixed right-0 top-0 w-screen h-screen opacity-50"
          />
        )}
        <div
          id="dropdownAvatarName"
          className={`${
            !isSmallOpen && "hidden"
          } fixed top-[4.5rem] right-5 z-[999] bg-white divide-y divide-gray-100 rounded-lg shadow-[-10px_10px_1px_0px_#4b4b4b1f] w-44 dark:bg-gray-700 dark:divide-gray-600 border-2 border-solid border-gray-500`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium ">{user.username}</div>
            <div className="truncate text-navbarInactiveLink">{user.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            <li>
              <NavLink
                to={`/profile/${user.id}`}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={close}
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={() => {
                logout()
                close()
              }}
            >
              Sign out
            </a>
          </div>
        </div>
        <FriendMiniProfile title={"Friends"} />
        <FriendMiniProfile title={"Suggested"} />
      </div>
    </>
  )
}
