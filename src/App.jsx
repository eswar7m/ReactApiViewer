
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DataPage from "./pages/DataPage"
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/data" element={<DataPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
