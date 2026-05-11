/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      // ✅ SAVE AUTH DATA
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("email", res.data.email);

      // ✅ ROLE BASED NAVIGATION
      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/pizza-bg.jpg"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative z-10
          w-full max-w-md
          sm:max-w-lg
          md:max-w-xl
          rounded-[30px]
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-6 sm:p-10
        "
      >
        {/* TITLE */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-black text-orange-400">
            Hungry Admin 🔥
          </h1>
          <p className="text-sm text-orange-100/70 mt-2">Login to continue</p>
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="text-sm text-orange-200/80">Email Address</label>

          <input
            type="email"
            placeholder="admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              mt-2 w-full
              rounded-xl
              bg-black/40
              border border-white/10
              px-4 py-3
              outline-none
              text-white
              focus:border-orange-400
            "
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="text-sm text-orange-200/80">Password</label>

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              mt-2 w-full
              rounded-xl
              bg-black/40
              border border-white/10
              px-4 py-3
              outline-none
              text-white
              focus:border-orange-400
            "
          />
        </div>

        {/* BUTTON */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          onClick={handleLogin}
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-linear-to-r from-orange-400 to-yellow-400
            py-3
            font-bold
            text-black
            text-lg
          "
        >
          {loading ? "Logging in..." : "Login 🍕"}
        </motion.button>
      </motion.div>
    </section>
  );
}
