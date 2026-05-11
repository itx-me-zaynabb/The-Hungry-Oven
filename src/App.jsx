/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");

  return (
    <>
      {/* NAVBAR ONLY AFTER LOGIN */}
      {token && <Navbar />}

      <Routes>
        {/* LOGIN */}
        <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />

        {/* HOME */}
        <Route path="/home" element={token ? <Home /> : <Navigate to="/" />} />

        {/* MENU */}
        <Route path="/menu" element={token ? <Menu /> : <Navigate to="/" />} />

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
