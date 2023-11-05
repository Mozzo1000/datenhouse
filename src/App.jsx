import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NavigationMenu from "./components/Navbar";

function App() {
 
  return (
    <>
    <Router>
      <NavigationMenu />
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App