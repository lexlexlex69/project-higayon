import Post from "../../components/friends/Post"
import { useOverlayContext } from "../../OverlayContext"

export default function PostPreview() {
  const { toggle } = useOverlayContext()
  return (
    <div
      onClick={toggle}
      className="fixed flex justify-center items-center z-[999] right-0 top-0 w-screen h-screen bg-overlayBG "
    >
      <Post purpose={"Preview Post"} />
    </div>
  )
}
