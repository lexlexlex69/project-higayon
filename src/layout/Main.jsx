import { Outlet } from "react-router-dom"
import { NavLink, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import SidebarRigth from "../components/SidebarRigth"
import { SidebarProvider, useSidebarContext } from "../SidebarContext"
import PostPreview from "../components/overlay/PostPreview"
import { useOverlayContext } from "../OverlayContext"

export default function Main() {
  const { close, isSmallOpen } = useSidebarContext()
  const { isPostPreviewOpen } = useOverlayContext()
  const location = useLocation()
  const isProfileRoute = location.pathname.includes("/profile")
  return (
    <div className="flex flex-row justify-between w-full h-full">
      <nav
        id="logo-sidebar"
        className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        // aria-label="Sidebar"
      >
        <Navbar />
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>
      <aside
        className={`z-40 w-72 h-screen ${isProfileRoute && "hidden"}`}
        aria-label="Sidebar"
      >
        <SidebarRigth />
      </aside>
      {isPostPreviewOpen && <PostPreview />}
    </div>
  )
}
