import { Outlet } from "react-router-dom"

export default function Guest() {
  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center ">
      <div className="bg-white flex items-center border-2 border-gray-400 rounded-md w-[43rem] min-h-[40%] py-6">
        <div className="w-[50%] h-[90%] flex justify-center items-center ">
          <span className="text-[4rem] font-MuseoModerno text-higayon whitespace-nowrap dark:text-white">
            Higayon
          </span>
        </div>
        <div className="w-[50%] flex justify-center items-center border-l-2">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
