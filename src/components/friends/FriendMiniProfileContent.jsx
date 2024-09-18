import { UserRoundPlus } from "lucide-react"

export default function FriendMiniProfileContent({ name, title }) {
  return (
    <div className=" w-full h-14 rounded-full flex items-center justify-between hover:bg-gray-200">
      <span className="flex items-center">
        <img
          src="/passporte.jpg"
          className="w-12 h-12 me-2 rounded-full object-cover border-dashed border-2 border-gray-400 p-1 mr-3"
        />
        {name}
      </span>
      {title !== "Friends" && <UserRoundPlus className="m-2" />}
    </div>
  )
}
