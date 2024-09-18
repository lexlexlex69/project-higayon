import { createBrowserRouter } from "react-router-dom"
import Search from "./pages/Search"
import Explore from "./pages/Explore"
import Home from "./pages/home"
import AddPost from "./pages/AddPost"
import Main from "./layout/Main"
import Notification from "./pages/Notification"

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
    ],
  },
])

export default router
