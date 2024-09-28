import { createBrowserRouter, Navigate } from "react-router-dom"
import Search from "./pages/Search"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import AddPost from "./pages/AddPost"
import Main from "./layout/Main"
import Guest from "./layout/Guest"
import Notification from "./pages/Notification"
import Profile from "./pages/Profile"
import ProfilePosts from "./components/profile/ProfilePosts"
import ProfileActivities from "./components/profile/ProfileActivities"
import Login from "./layout/guest/Login"
import Signup from "./layout/guest/Signup"

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
        path: "/profile/:userId",
        element: <Profile />,
        // children: [
        //   {
        //     path: "/profile/:userId/posts",
        //     element: <ProfilePosts />,
        //   },
        //   {
        //     path: "/profile/:userId/activities",
        //     element: <ProfileActivities />,
        //   },
        //   {
        //     path: "/profile/:userId",
        //     element: <Navigate to="/profile/:userId/posts" replace />,
        //   },
        // ],
      },
    ],
  },
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
])

export default router
