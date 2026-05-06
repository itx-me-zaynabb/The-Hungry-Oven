/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white px-6 py-24">
      {/* 🔥 CINEMATIC KITCHEN BACKGROUND (MORE PROMINENT + FOOD STYLE) */}
      <div className="absolute inset-0 bg-[url('/images/kitchen.jpg')] bg-cover bg-center scale-125 brightness-110 contrast-110 saturate-110" />

      {/* 🌫 SOFT GRADIENT OVERLAY (LIGHTER THAN BEFORE) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/75" />

      {/* 🍕 CENTER VIGNETTE (FOCUS ON CONTENT) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.65)_75%)]" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute w-12 opacity-25"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-5xl font-bold text-center text-yellow-400"
      >
        Contact The Kitchen 📍
      </motion.h1>

      <p className="text-center text-white/70 mt-3">
        Fresh pizza • Real chefs • Hot delivery 🔥
      </p>

      {/* MAIN GRID */}
      <div className="relative max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-yellow-300">
            The Hungry Oven 🍕
          </h2>

          <p className="text-white/75">
            Step inside our kitchen where every pizza is freshly baked, every
            pasta is creamy, and every bite is made with love.
          </p>

          {/* FEATURES */}
          <div className="space-y-3 mt-6 text-white/80">
            <div>🍕 Hot & Fresh From Oven</div>
            <div>🚚 Free Home Delivery Available</div>
            <div>👨‍🍳 Chef Crafted Recipes</div>
            <div>⏱ 30–40 Min Fast Delivery</div>
          </div>

          {/* MAP */}
          <div className="h-52 mt-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 backdrop-blur-xl">
            📍 Kitchen Location Map
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-5 overflow-hidden"
        >
          {/* glow */}
          <div className="absolute inset-0 bg-yellow-500/10 blur-2xl opacity-0 hover:opacity-100 transition" />

          <h3 className="text-2xl font-bold text-yellow-300">
            Order / Contact Us ✉️
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-yellow-400 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-yellow-400 transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message / Order"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-yellow-400 transition"
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(250,204,21,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-yellow-400 text-black font-bold rounded-xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition" />
            <span className="relative z-10">Send & Order 🍕</span>
          </motion.button>
        </motion.form>
      </div>

      {/* 💬 FINAL NOTE (CLEAR + PREMIUM + MORE PROMINENT) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mt-24 max-w-3xl mx-auto text-center"
      >
        <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-3xl" />

        <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-yellow-400">
            🍕 Your Craving Deserves Fresh Pizza
          </h2>

          <p className="text-white/85 mt-4 leading-relaxed">
            Don’t wait for hunger to grow — our kitchen is always active. One
            message and your hot cheesy pizza is on its way from oven to your
            door.
          </p>

          <div className="mt-6 text-white/70 text-sm space-y-1">
            🚚 Free Delivery Available 🔥 Fresh From Oven ⏱ Fast 30–40 Min
            Delivery
          </div>

          <div className="mt-6 text-yellow-300 font-semibold">
            “Order now & turn hunger into happiness 🍕🔥”
          </div>
        </div>
      </motion.div>
    </section>
  );
}
