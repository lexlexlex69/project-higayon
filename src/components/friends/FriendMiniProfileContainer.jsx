import { UserRoundPlus } from "lucide-react"
import { navlabels } from "../../data/navlabels"
import SeeMore from "./SeeMore"
import FriendMiniProfileContent from "./FriendMiniProfileContent"
import { useEffect, useState } from "react"
import axiosClient from "../../axios-client"
import { getUsers } from "./hooks/testuserfetch"

export default function FriendMiniProfile({ title, users }) {
  return (
    <div id="friends" className="flex flex-col gap-3 mt-4">
      <span className="flex items-center justify-between">
        {title} <SeeMore title={title} />
      </span>
      <div className="flex gap-3 flex-col max-h-48 overflow-auto scrollbar-hidden">
        {users &&
          users.map((user) => (
            <FriendMiniProfileContent
              users={user}
              title={title}
              key={user.username}
            />
          ))}
      </div>
    </div>
  )
}
