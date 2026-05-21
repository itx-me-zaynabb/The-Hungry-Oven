/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import CreateBill from "./pages/CreateBill";

function App() {
  const role = localStorage.getItem("role");

  return (
    <>
      {/* NAVBAR ALWAYS */}
      <Navbar />
      <CustomCursor />

      <Routes>
        {/* PUBLIC PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADMIN ONLY */}
        <Route
          path="/admin"
          element={role === "admin" ? <AdminDashboard /> : <Navigate to="/" />}
        />

        <Route
          path="/create-bill"
          element={role === "admin" ? <CreateBill /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
