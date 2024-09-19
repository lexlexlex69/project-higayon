import { ThumbsUp } from "lucide-react"
import MainUpper from "../components/main/MainUpper"
import { navlabels } from "../data/navlabels"
import Post from "../components/friends/Post"

export default function Home() {
  return (
    <div className="bg-white w-full h-screen overflow-x-hidden">
      <div className="flex justify-center items-center bg-white h-[8rem]">
        <MainUpper />
      </div>
      <div className="flex flex-col items-center pt-10 ">
        {navlabels.map(() => (
          <Post />
        ))}
      </div>
    </div>
  )
}
