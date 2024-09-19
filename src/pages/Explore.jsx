import MainUpper from "../components/main/MainUpper"
import { navlabels } from "../data/navlabels"

export default function Explore() {
  return (
    <div className="bg-red-300 w-full h-screen overflow-x-hidden">
      <div className="flex justify-center items-center bg-white h-[8rem]">
        <MainUpper />
      </div>
      <div className="flex flex-col items-center pt-10 ">
        {navlabels.map(() => (
          <div className="w-[400px] h-[400px] bg-blue-500 m-5">sdfsdf</div>
        ))}
      </div>
    </div>
  )
}
