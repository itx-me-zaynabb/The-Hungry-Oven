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
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <>
      {/* NAVBAR ONLY AFTER LOGIN */}
      {token && <Navbar />}
      <CustomCursor />
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />

        {/* HOME */}
        <Route path="/home" element={token ? <Home /> : <Navigate to="/" />} />

        {/* MENU */}
        <Route path="/menu" element={token ? <Menu /> : <Navigate to="/" />} />
        <Route
          path="/deals"
          element={token ? <Deals /> : <Navigate to="/" />}
        />
        <Route
          path="/contact"
          element={token ? <Contact /> : <Navigate to="/" />}
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            token && role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/home" />
            )
          }
        />

        {/* CREATE BILL */}
        <Route
          path="/create-bill"
          element={
            token && role === "admin" ? <CreateBill /> : <Navigate to="/home" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
