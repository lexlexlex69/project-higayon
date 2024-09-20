import { UserRoundPlus } from "lucide-react"

export default function FriendMiniProfileContent({ name, title }) {
  return (
    <div className="relative p-2 w-full h-14 rounded-full flex items-center justify-between hover:bg-blue-100 bg-blue-200 border-2 border-black">
      <span className="flex items-center">
        <img
          src="/passporte.jpg"
          className="w-12 h-12 me-2 rounded-full object-cover border-dashed border-2 border-gray-400 p-1 mr-3"
        />
        {name}
      </span>
      {title !== "Friends" && (
        <button className=" hover:border-2 hover:border-gray-800 rounded-full flex items-center justify-center p-2 pl-[13px] h-[3rem]">
          <UserRoundPlus />
        </button>
      )}
    </div>
  )
}
