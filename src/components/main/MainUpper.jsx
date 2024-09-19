import { useLocation } from "react-router-dom"
import { navlabels } from "../../data/navlabels"

export default function MainUpper() {
  const location = useLocation()
  console.log(location.pathname === "/")
  const title = navlabels.find((navlabel) => navlabel.url === location.pathname)
  console.log(title)
  return (
    <div className="flex justify-center items-center bg-white w-3/5 h-3/4 rounded-lg border-2 border-solid border-gray-800 font-MuseoModerno shadow-[-10px_10px_1px_0px_#E8E8E8] ">
      <span className="flex items-center gap-2 text-3xl">
        {title.iconMain}
        {title.name}
      </span>
    </div>
  )
}
