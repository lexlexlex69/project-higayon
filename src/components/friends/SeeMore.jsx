import { Link, NavLink } from "react-router-dom"

export default function SeeMore({ title }) {
  return title === "Friends" ? (
    <button className="text-navbarInactiveLink text-sm underline">
      See more
    </button>
  ) : (
    <NavLink to="/search" className="text-navbarInactiveLink text-sm underline">
      See more
    </NavLink>
  )
}
