/* eslint-disable no-undef */
import { useState } from "react";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import CreateBill from "./pages/CreateBill";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />

        <Route path="/create-bill" element={<CreateBill />} />
      </Routes>
    </>
  );
}

export default App;
