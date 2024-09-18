import { Link, NavLink } from "react-router-dom"

export default function SeeMore({ title }) {
  return title === "Friends" ? (
    <button>See more</button>
  ) : (
    <NavLink to="/search">See more</NavLink>
  )
}
