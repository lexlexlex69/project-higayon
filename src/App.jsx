import { useState } from "react"
import Main from "./layout/Main"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
    </>
  )
}

export default App
