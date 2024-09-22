import { navlabels } from "../../data/navlabels"
import Post from "../friends/Post"
import NotificationForm from "../notification/NotificationForm"

export default function ProfileActivities() {
  return (
    <div className="flex flex-col items-center pt-10 ">
      {navlabels.map(() => (
        <NotificationForm purpose="Profile Activities" />
      ))}
    </div>
  )
}
