import { createBrowserRouter } from "react-router-dom"
import Search from "./pages/Search"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import AddPost from "./pages/AddPost"
import Main from "./layout/Main"
import Notification from "./pages/Notification"
import Profile from "./pages/Profile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addPost",
        element: <AddPost />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
])

export default router
