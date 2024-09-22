import { navlabels } from "../../data/navlabels"
import Post from "../friends/Post"

export default function ProfilePosts() {
  return (
    <>
      <div className="grid gap-[5rem] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] px-[3rem] py-16 overflow-auto">
        {navlabels.map((asd) => (
          <Post purpose={"Profile Posts"} name={"asdfasdf"} key={asd.name} />
        ))}
      </div>
    </>
  )
}
