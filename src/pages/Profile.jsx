import { NavLink, Outlet, useLocation } from "react-router-dom"

export default function Profile() {
  const location = useLocation()
  const isPostsPage = location.pathname.includes("posts")
  return (
    <div className="flex flex-col h-screen px-10 pt-10 overflow-auto">
      <div className=" h-[50%] flex flex-col items-center justify-center gap-16 font-MuseoModerno border-b-2">
        <div className="bg-white w-[400px] h-[160px] flex items-center px-6  gap-3 border-black border-2 rounded-xl">
          <div className="size-[130px] overflow-hidden rounded-full">
            <img src="/passporte.jpg" alt="" />
          </div>
          <div className="flex items-center flex-1 pl-4">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-lg">@username</span>
              <span className="text-navbarInactiveLink">
                <span className="flex gap-1">
                  <p className="font-semibold text-black">{"6"}</p> Posts
                </span>
                <span className="flex gap-1">
                  <p className="font-semibold text-black">{"10"}</p> Followers
                </span>
                <span className="flex gap-1">
                  <p className="font-semibold text-black">{"11"}</p> Following
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex  gap-3">
          <NavLink
            to="/profile/posts"
            className={`${!isPostsPage && "text-gray-400"}`}
          >
            Posts
          </NavLink>
          |
          <NavLink
            to="/profile/activities"
            className={`${isPostsPage && "text-gray-400"}`}
          >
            Activities
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
