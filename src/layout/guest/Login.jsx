import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div action="" className="flex flex-col gap-3 font-MuseoModerno text-md">
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
      <button className="mt-4 bg-higayon text-white p-2 rounded-md">
        Login
      </button>
      <span className="">
        Dont have an account? <Link className="underline">Sign up</Link> now.
      </span>
    </div>
  )
}
