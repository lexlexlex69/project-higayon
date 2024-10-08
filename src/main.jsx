import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./router.jsx"
import { SidebarProvider } from "./SidebarContext.jsx"
import { OverlayProvider } from "./OverlayContext.jsx"
import { ContextProvider } from "./context/AuthProvider.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <OverlayProvider>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </OverlayProvider>
    </ContextProvider>
  </StrictMode>
)
