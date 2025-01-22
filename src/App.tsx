import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";

import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {" "}
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
