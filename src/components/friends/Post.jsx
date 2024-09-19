import { ThumbsUp } from "lucide-react"

export default function Post() {
  return (
    <div className="relative flex flex-col items-center gap-7 w-[400px] h-[470px] pt-6 bg-white rounded-md border-2 border-solid border-gray-800 mb-14 font-MuseoModerno font-semibold text-lg shadow-[-15px_15px_1px_0px_#E8E8E8]">
      <img
        src="/passporte.jpg"
        className="absolute bg-white -left-10 -top-10 w-20 h-20 me-2 rounded-full object-cover border-dashed border-2 border-gray-400 p-1 mr-3"
      />
      <div className="flex items-center justify-center box-border h-[22rem] w-[22rem] bg-blue-300 border-2 border-solid border-gray-600 overflow-hidden">
        <img src="/passporte.jpg" alt="" />
      </div>
      <span className="flex items-center gap-2">
        <button className="active:animate-bounce">
          <ThumbsUp size={32} color="#609FFF" absoluteStrokeWidth />
        </button>
        <button className="hover:underline">{10} likes</button>
      </span>
    </div>
  )
}
