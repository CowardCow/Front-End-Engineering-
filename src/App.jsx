import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Products from "./pages/Products";
import About from "./pages/About";
function App() {
 
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
