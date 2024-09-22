import { Link } from "react-router-dom"

export default function Signup() {
  return (
    <div
      action=""
      className="flex flex-col gap-3 font-MuseoModerno text-md py-2"
    >
      <input
        type="text"
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="E-mail"
      />
      <input
        type="text"
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="Username"
      />
      <input
        type="password"
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="Password"
      />
      <input
        type="password"
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="Confirm password"
      />
      <button className="mt-4 bg-higayon text-white p-2 rounded-md">
        Signup
      </button>
      <span className="">
        Already have an account? <Link className="underline">Login</Link> now.
      </span>
    </div>
  )
}
