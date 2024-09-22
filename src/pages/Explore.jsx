import Post from "../components/friends/Post"
import MainUpper from "../components/main/MainUpper"
import { navlabels } from "../data/navlabels"

export default function Explore() {
  return (
    <div className="bg-white w-full h-screen overflow-x-hidden font-MuseoModerno">
      <div className="flex justify-center items-center bg-white h-[8rem]">
        <MainUpper />
      </div>
      <div className="flex flex-col gap-[3rem] px-10">
        <p className="text-navbarInactiveLink">Available Posts:</p>
        <div className="grid gap-[5rem] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] px-[3rem]">
          {navlabels.map((asd) => (
            <Post purpose={"Explore"} name={"asdfasdf"} key={asd.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
