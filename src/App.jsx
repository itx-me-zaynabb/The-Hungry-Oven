/* eslint-disable no-undef */
import { useState } from "react";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminOrders";
import CreateBill from "./pages/CreateBill";

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
        <Route path="/admin" element={<AdminDashboard />} />

        <Route
          path="/cart"
          element={<Cart cartItems={cart} setCart={setCart} />}
        />
        <Route path="/create-bill" element={<CreateBill />} />
      </Routes>
    </>
  );
}

export default App;
