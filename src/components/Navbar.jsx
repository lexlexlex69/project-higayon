import { Link } from "react-router-dom"
import { navlabels } from "../data/navlabels"
import NavLabel from "./navbar/NavLabel"

export default function Navbar() {
  return (
    <>
      <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800 border-r-4 border-gray-200">
        <Link
          to="/"
          className="flex items-center ps-2.5 mb-8 justify-center py-4"
        >
          <span className="text-[2.5rem] font-MuseoModerno text-higayon whitespace-nowrap dark:text-white">
            Higayon
          </span>
        </Link>
        <ul className="space-y-2 font-medium cursor-pointer">
          {navlabels.map((navlabel) => (
            <NavLabel
              icon={navlabel.icon}
              name={navlabel.name}
              url={navlabel.url}
              key={navlabel.name}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
