import { useRef } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"

export default function Signup() {
  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmRef.current.value,
    }
    signup(payload)
    // console.log(payload)
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 font-MuseoModerno text-md py-2"
    >
      <input
        ref={emailRef}
        type="text"
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="E-mail"
      />
      <input
        ref={usernameRef}
        type="text"
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="Username"
      />
      <input
        ref={passwordRef}
        type="password"
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="Password"
      />
      <input
        ref={passwordConfirmRef}
        type="password"
        className="border-2 bg-gray-100 p-2 rounded-md"
        placeholder="Confirm password"
      />
      <button className="mt-4 bg-higayon text-white p-2 rounded-md">
        Signup
      </button>
      <span className="">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>{" "}
        now.
      </span>
    </form>
  )
}
