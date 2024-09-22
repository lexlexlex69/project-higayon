import { ThumbsUp } from "lucide-react"
import MainUpper from "../components/main/MainUpper"
import { navlabels } from "../data/navlabels"
import Post from "../components/friends/Post"
import { Link, NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-white w-full h-screen overflow-x-hidden font-MuseoModerno">
      <div className="flex justify-center items-center bg-white h-[8rem] relative">
        <MainUpper />
      </div>
      <div className="flex flex-col items-center pt-10 gap-[5rem]">
        {navlabels.map((navlabel) => (
          <Post key={navlabel.name} />
        ))}
        <p className="pb-[3rem]">
          You've reached the bedrock{" "}
          <NavLink to="/search" className="underline">
            Add more Friends.
          </NavLink>
        </p>
      </div>
    </div>
  )
}
