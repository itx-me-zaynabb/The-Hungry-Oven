import { useState } from "react";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />

        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/cart"
          element={<Cart cartItems={cart} setCart={setCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
