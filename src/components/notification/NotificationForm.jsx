import { ThumbsUp } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function NotificationForm() {
  return (
    <NavLink className="w-[350px] h-[90px] bg-white border-2 border-black rounded-lg flex flex-row items-center px-4 relative m-2">
      <div className="absolute flex items-center justify-center bg-white border-2 border-black border-dashed rounded-sm -left-3 -top-3 box-border aspect-square h-[40%]">
        <ThumbsUp />
      </div>
      <div className="flex flex-col flex-1">
        <span className="flex items-center ">
          <div className="flex items-end min-w-2 text-sm gap-1 ">
            <span className="box-border aspect-square w-[12%] overflow-hidden rounded-full">
              <img src="/passporte.jpg" alt="" className="object-contain " />
            </span>
            <span className="font-semibold  ">@username</span>
            and other {"10"} likes
          </div>
          <div className="absolute left-4 bottom-2 text-sm text-navbarInactiveLink">
            10 mins ago
          </div>
        </span>
      </div>
      <div className="box-border aspect-square h-[80%] bg-green-300 flex items-center justify-center overflow-hidden rounded-md">
        <img src="/passporte.jpg" alt="" />
      </div>
    </NavLink>
  )
}
