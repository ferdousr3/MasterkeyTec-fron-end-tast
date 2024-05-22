/** @format */
import {Route, Routes} from "react-router-dom"
import "./App.css"
import MainLayout from "./layouts/mainLayouts"
import AlTileInt from "./pages/alTileInt/AlTileInt"
import Home from "./pages/home/home"
import NotFound from "./pages/404/NotFound"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="al-tile-int" element={<AlTileInt />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
