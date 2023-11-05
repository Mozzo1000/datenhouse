import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NavigationMenu from "./components/Navbar";
import Datasets from "./pages/Datasets";
import Footer from "./components/Footer";

function App() {
 
  return (
    <div className="min-h-screen">
    <Router>
      <NavigationMenu />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="datasets" element={<Datasets/>}/>
        </Routes>
      </Router>
      <Footer />

    </div>
  )
}

export default App