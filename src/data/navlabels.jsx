import { Bell, FilePlus, House, Search, Telescope } from "lucide-react"
export const navlabels = [
  {
    name: "Home",
    icon: <House />,
    iconMain: <House size={32} />,
    url: "/",
  },
  {
    name: "Search",
    icon: <Search />,
    iconMain: <Search size={32} />,
    url: "/search",
  },
  {
    name: "Explore",
    icon: <Telescope />,
    iconMain: <Telescope size={32} />,
    url: "/explore",
  },
  {
    name: "Notifications",
    icon: <Bell />,
    iconMain: <Bell size={32} />,
    url: "/notification",
  },
  {
    name: "Add Post",
    icon: <FilePlus />,
    iconMain: <FilePlus size={32} />,
    url: "/addPost",
  },
]
