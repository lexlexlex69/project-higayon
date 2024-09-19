import { createContext, useContext, useState } from "react"

const SidebarContext = createContext(null)

export function useSidebarContext() {
  const value = useContext(SidebarContext)
  return value
}
export function SidebarProvider({ children }) {
  const [isSmallOpen, setIsSmallOpen] = useState(false)

  function toggle() {
    setIsSmallOpen((s) => !s)
    console.log("toogle")
  }

  function close() {
    setIsSmallOpen(false)
  }
  return (
    <SidebarContext.Provider value={{ isSmallOpen, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  )
}
