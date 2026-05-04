import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import WrappedApp from "./components/WrappedApp.tsx"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WrappedApp></WrappedApp>
  </StrictMode>,
)
