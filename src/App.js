import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Homepage from "./Components/Homepage"
import Details from "./Components/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FavouritePage from "./Components/FavouritePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/:company" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
