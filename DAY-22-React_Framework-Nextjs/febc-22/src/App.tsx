import { Route, Routes } from "react-router"

import Course from "./pages/Course"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/course/:id/:slug" element={<Course></Course>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
