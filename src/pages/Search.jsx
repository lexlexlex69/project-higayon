import FriendMiniProfileContent from "../components/friends/FriendMiniProfileContent"
import MainUpper from "../components/main/MainUpper"
import { navlabels } from "../data/navlabels"

export default function Search() {
  return (
    <div className="bg-white w-full h-screen overflow-x-hidden font-MuseoModerno">
      <div className="flex justify-center items-center bg-white h-[8rem]">
        <MainUpper />
      </div>
      <div className=" px-10">
        <p className="text-navbarInactiveLink">Search Result:</p>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))] ">
          {navlabels.map((asd) => (
            <FriendMiniProfileContent name={"asdfasdf"} key={asd.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
