import { createContext, useContext, useState } from "react"

const OverlayContext = createContext(null)

export function useOverlayContext() {
  const value = useContext(OverlayContext)
  return value
}
export function OverlayProvider({ children }) {
  const [isPostPreviewOpen, setIsPostPreviewOpen] = useState(false)

  function toggle() {
    setIsPostPreviewOpen((s) => !s)
    // console.log("toogle")
  }

  return (
    <OverlayContext.Provider value={{ isPostPreviewOpen, toggle }}>
      {children}
    </OverlayContext.Provider>
  )
}
