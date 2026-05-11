/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../config/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("email", res.data.email);

      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden text-white">
      {/* 🌌 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/pizza-bg.jpg"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute w-14 opacity-10 hidden sm:block"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 🔐 LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative z-10
          w-full max-w-md
          rounded-[30px]
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-8 sm:p-10
          shadow-[0_0_40px_rgba(255,140,0,0.2)]
        "
      >
        {/* TITLE */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-orange-400">
            Hungry Admin 🔥
          </h1>
          <p className="text-sm text-orange-100/60 mt-2">Secure Login Portal</p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-500/10 p-3 rounded-xl">
            {error}
          </div>
        )}

        {/* EMAIL */}
        <div className="mb-5">
          <label className="text-sm text-orange-200/80">Email</label>
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
              focus:border-orange-400
              focus:shadow-[0_0_15px_rgba(255,140,0,0.3)]
            "
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6 relative">
          <label className="text-sm text-orange-200/80">Password</label>

          <input
            type={showPass ? "text" : "password"}
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
              focus:border-orange-400
              focus:shadow-[0_0_15px_rgba(255,140,0,0.3)]
            "
          />

          {/* SHOW PASSWORD */}
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-9 text-orange-300 text-sm"
          >
            {showPass ? "Hide" : "Show"}
          </button>
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
            bg-linear-to-r from-orange-400 to-yellow-300
            py-3
            font-bold
            text-black
            text-lg
            shadow-[0_0_20px_rgba(255,140,0,0.4)]
          "
        >
          {loading ? "Logging in..." : "Login 🍕"}
        </motion.button>

        {/* FOOTER NOTE */}
        <p className="text-center text-xs text-white/40 mt-6">
          Secure access for restaurant management system
        </p>
      </motion.div>
    </section>
  );
}
