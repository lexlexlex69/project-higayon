import { Link, NavLink } from "react-router-dom"

export default function NavLabel({ icon, name, url }) {
  return (
    <li>
      <NavLink
        to={url}
        // class="flex flex-row items-center font-MuseoModerno p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        className={({ isActive }) =>
          isActive
            ? "gap-3 flex flex-row items-center font-semibold font-MuseoModerno p-2 rounded-lg bg-navbarActive text-black "
            : "gap-3 flex flex-row items-center font-MuseoModerno p-2  rounded-lg hover:bg-navbarHover hover:text-gray-800 text-navbarInactiveLink "
        }
      >
        {icon}
        {/* // className={({ isActive }) => */}
        {/* // isActive ? "ms-3 text-black" : "ms-3 text-navbarInactiveLink" // } //
        className="ms-3 text-gray-800" */}
        {name}
      </NavLink>
    </li>
  )
}
