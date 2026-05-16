/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */

import { useState } from "react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const API = "http://localhost:5000";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPass, setShowPass] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);

      setError("");

      // ✅ FAKE USER LOGIN
      // USER KE LIYE PASSWORD CHECK NAHI HOGA

      const res = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      console.log("res", res);

      // ✅ SAVE
      localStorage.setItem("token", res.data.token);

      localStorage.setItem("role", res.data.role);

      localStorage.setItem("email", res.data.email);

      // 👑 ADMIN
      if (res.data.role === "admin") {
        navigate("/admin");
      }

      // 👤 USER
      else {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);

      setError("Server not running or login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      px-4
      text-white
    "
    >
      {/* 🍕 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/pizza-bg.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.3),transparent_60%)]" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(14)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute w-16 opacity-10 hidden md:block"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 🔐 CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-[35px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-8
          shadow-[0_0_50px_rgba(255,140,0,0.25)]
        "
      >
        {/* TITLE */}
        <div className="text-center">
          <h1
            className="
            text-4xl
            font-black
            text-orange-400
          "
          >
            Hungry Oven 🍕
          </h1>

          <p className="mt-2 text-sm text-orange-100/70">Login To Continue</p>
        </div>

        {/* ERROR */}
        {error && (
          <div
            className="
            mt-5
            rounded-xl
            border
            border-red-500/20
            bg-red-500/10
            p-3
            text-sm
            text-red-300
          "
          >
            {error}
          </div>
        )}

        {/* EMAIL */}
        <div className="mt-7">
          <label className="text-sm text-orange-200/80">Email</label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              mt-2
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/40
              px-4
              py-3
              outline-none
              focus:border-orange-400
            "
          />
        </div>

        {/* PASSWORD */}
        <div className="mt-5 relative">
          <label className="text-sm text-orange-200/80">Password</label>

          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              mt-2
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/40
              px-4
              py-3
              outline-none
              focus:border-orange-400
            "
          />

          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="
              absolute
              right-4
              top-11
              text-sm
              text-orange-300
            "
          >
            {showPass ? "Hide" : "Show"}
          </button>
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={handleLogin}
          disabled={loading}
          className="
            mt-8
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-orange-400
            to-yellow-300
            py-3
            text-lg
            font-bold
            text-black
          "
        >
          {loading ? "Logging in..." : "Enter The Oven 🍕"}
        </motion.button>

        {/* FOOTER */}
        <p className="mt-6 text-center text-xs text-white/40">
          Crafted with ❤️ by Hungry Oven
        </p>
      </motion.div>
    </section>
  );
}
