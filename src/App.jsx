import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
 
  return (
    <>
    <Router>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App