import MainUpper from "../components/main/MainUpper"
import { navlabels } from "../data/navlabels"
import NotificationForm from "../components/notification/NotificationForm"

export default function Notification() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className="flex justify-center items-center bg-white h-[8rem]">
        <MainUpper />
      </div>
      <div className="flex flex-col items-center pt-10 ">
        {navlabels.map((asd) => (
          <NotificationForm purpose="Notifications" key={asd.name} />
        ))}
      </div>
    </div>
  )
}
