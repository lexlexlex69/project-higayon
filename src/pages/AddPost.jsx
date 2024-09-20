import Post from "../components/friends/Post"
import MainUpper from "../components/main/MainUpper"
import { navlabels } from "../data/navlabels"

export default function AddPost() {
  return (
    <div className=" w-full h-screen overflow-x-hidden">
      <div className="flex justify-center items-center bg-white h-[8rem] relative">
        <MainUpper />
      </div>
      <div className="flex flex-col items-center pt-10 ">
        <Post />
      </div>
    </div>
  )
}
