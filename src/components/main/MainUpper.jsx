import { NavLink, useLocation } from "react-router-dom"
import { navlabels } from "../../data/navlabels"
import { CheckCheckIcon, PlusCircleIcon, PlusIcon } from "lucide-react"

export default function MainUpper() {
  const location = useLocation()
  const title = navlabels.find((navlabel) => navlabel.url === location.pathname)
  return (
    <>
      <div
        className={`flex justify-center items-center ${
          title.name === "Add Post" ? "bg-higayon text-white" : "bg-white"
        }  w-3/5 h-3/4 rounded-lg border-2 border-solid border-gray-800 font-MuseoModerno shadow-[-10px_10px_1px_0px_#E8E8E8] `}
      >
        <span className="flex items-center gap-2 text-3xl">
          {title.iconMain}
          {}
          {title.name === "Search" ? (
            <input
              className="w-[20rem] h-[2.5rem] p-2 rounded-lg border-2 border-solid border-gray-600 font-MuseoModerno shadow bg-gray-100 text-sm"
              placeholder="Search for a friend..."
            />
          ) : title.name === "Add Post" ? (
            "Post preview"
          ) : (
            title.name
          )}
          {}
        </span>
      </div>
      {title.name === "Home" && (
        <NavLink
          to="/addPost"
          className="absolute right-10 h-[4.5rem] w-[4.5rem] rounded-full border-2 border-solid border-gray-800 shadow-[-10px_10px_1px_0px_#E8E8E8] flex items-center justify-center bg-higayon"
        >
          <PlusIcon size={40} color="white" />
        </NavLink>
      )}
      {title.name === "Add Post" && (
        <button className="absolute right-10 h-[4.5rem] w-[4.5rem] rounded-full border-2 border-solid border-gray-800 shadow-[-10px_10px_1px_0px_#E8E8E8] flex items-center justify-center bg-higayon">
          <CheckCheckIcon size={40} color="white" />
        </button>
      )}
    </>
  )
}
