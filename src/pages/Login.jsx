/* eslint-disable react-hooks/purity */

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(email, password);

    if (success) {
      navigate("/admin");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 text-white">
      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/pizza-bg.jpg"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* 🔥 ORANGE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(8)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute w-14 md:w-20 opacity-10 hidden sm:block"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🔥 LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
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
          sm:p-10
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-orange-500/10 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* TITLE */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                text-4xl
                sm:text-5xl
                font-black
                text-orange-400
                drop-shadow-[0_0_20px_rgba(255,140,0,0.7)]
              "
            >
              Hungry Admin 🔥
            </motion.h1>

            <p className="mt-3 text-sm sm:text-base text-orange-100/70">
              Enter the premium restaurant dashboard
            </p>
          </div>

          {/* EMAIL */}
          <div className="mt-10">
            <label className="text-sm text-orange-200/80">Email Address</label>

            <input
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                mt-2
                w-full
                rounded-2xl
                bg-black/40
                border
                border-white/10
                px-5
                py-4
                outline-none
                text-white
                placeholder:text-gray-400
                focus:border-orange-400
                transition
              "
            />
          </div>

          {/* PASSWORD */}
          <div className="mt-6">
            <label className="text-sm text-orange-200/80">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                mt-2
                w-full
                rounded-2xl
                bg-black/40
                border
                border-white/10
                px-5
                py-4
                outline-none
                text-white
                placeholder:text-gray-400
                focus:border-orange-400
                transition
              "
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(255,140,0,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={handleLogin}
            className="
              mt-8
              w-full
              rounded-2xl
              bg-linear-to-r
              from-orange-400
              to-yellow-400
              py-4
              font-bold
              text-black
              text-lg
              transition-all
            "
          >
            Enter The Oven 🍕
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
