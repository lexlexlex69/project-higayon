import { ChevronDown, UserRoundPlus } from "lucide-react"
import { navlabels } from "../data/navlabels"
import FriendMiniProfile from "./friends/FriendMiniProfileContainer"

export default function SidebarRigth() {
  return (
    <>
      <div className="flex flex-col gap-3 h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800 font-MuseoModerno border-l-4 border-gray-200">
        <button
          id="dropdownAvatarNameButton"
          data-dropdown-toggle="dropdownAvatarName"
          className="bg-slate-200 w-full flex items-center justify-between text-lg pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600"
          type="button"
          onClick={() => console.log("onclick")}
        >
          <span className="flex items-center">
            <img
              className="w-12 h-12 me-2 rounded-full object-cover border-dashed border-2 border-gray-400 p-1"
              src="/passporte.jpg"
              alt="user photo"
            />
            lecks
          </span>
          <ChevronDown size={30} />
        </button>
        {/* dri dapat ehide */}
        <div
          id="dropdownAvatarName"
          className="hidden fixed right-5 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium ">Lecks</div>
            <div className="truncate text-navbarInactiveLink">name@.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profile
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
