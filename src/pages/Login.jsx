/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */

import { useState } from "react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const API = "https://hungry-oven-backend.vercel.app";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPass, setShowPass] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {
    // ✅ VALIDATION
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      setError("");

      // ✅ LOGIN API
      const res = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      // ✅ RESPONSE
      console.log("LOGIN RESPONSE:", res.data);

      // ✅ SAVE DATA
      localStorage.setItem("token", res.data.token);

      localStorage.setItem("role", res.data.role);

      localStorage.setItem("email", res.data.email);

      // ✅ ADMIN
      if (res.data.role === "admin") {
        navigate("/admin");
      }

      // ✅ USER
      else {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);

      // ✅ BACKEND ERROR MESSAGE
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Server not running or login failed");
      }
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
      py-10
      text-white
    "
    >
      {/* 🍕 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/pizza-bg.webp"
          alt=""
          className="
            w-full
            h-full
            object-cover
            scale-110
          "
        />
      </div>

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.3),transparent_60%)]" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="
            absolute
            w-10
            sm:w-14
            md:w-16
            opacity-10
            pointer-events-none
          "
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute
              w-1
              h-1
              bg-orange-400
              rounded-full
              opacity-40
            "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🔐 LOGIN CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
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
          p-6
          sm:p-8
          shadow-[0_0_60px_rgba(255,140,0,0.25)]
        "
      >
        {/* 🍕 LOGO */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <img
            src="/images/pizza.webp"
            alt=""
            className="
              w-20
              sm:w-24
              drop-shadow-[0_0_20px_rgba(255,140,0,0.7)]
            "
          />
        </motion.div>

        {/* 🔥 TITLE */}
        <div className="text-center mt-4">
          <h1
            className="
              text-3xl
              sm:text-4xl
              font-black
              text-orange-400
              tracking-wide
            "
          >
            Hungry Oven 🍕
          </h1>

          <p className="mt-2 text-sm text-orange-100/70">
            Premium Restaurant Experience
          </p>
        </div>

        {/* ❌ ERROR */}
        {error && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
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
          </motion.div>
        )}

        {/* 📧 EMAIL */}
        <div className="mt-7">
          <label className="text-sm text-orange-200/80">Email Address</label>

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
              text-sm
              sm:text-base
              outline-none
              transition-all
              duration-300
              focus:border-orange-400
              focus:shadow-[0_0_20px_rgba(255,140,0,0.35)]
            "
          />
        </div>

        {/* 🔒 PASSWORD */}
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
              pr-20
              text-sm
              sm:text-base
              outline-none
              transition-all
              duration-300
              focus:border-orange-400
              focus:shadow-[0_0_20px_rgba(255,140,0,0.35)]
            "
          />

          {/* 👁 SHOW/HIDE */}
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="
              absolute
              right-4
              top-11
              text-sm
              text-orange-300
              hover:text-orange-400
              transition-all
            "
          >
            {showPass ? "Hide" : "Show"}
          </button>
        </div>

        {/* 🚀 LOGIN BUTTON */}
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
            via-yellow-300
            to-orange-500
            py-3
            sm:py-4
            text-base
            sm:text-lg
            font-black
            text-black
            shadow-[0_0_25px_rgba(255,140,0,0.45)]
            transition-all
            duration-300
          "
        >
          {loading ? "Logging in..." : "Enter The Oven 🍕"}
        </motion.button>

        {/* 🔥 FOOTER */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/40">
            Crafted with ❤️ by Hungry Oven
          </p>

          <div className="flex justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-300" />
            <span className="w-2 h-2 rounded-full bg-orange-500" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
