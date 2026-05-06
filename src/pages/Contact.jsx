/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white px-6 py-24">
      {/* 🌌 NEW BACKGROUND: NEON DELIVERY NIGHT CITY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05070f] via-[#0b1020] to-[#05070f]" />

      {/* 🌟 NEON GRID LIGHT LAYERS */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* 🚀 FLOATING NEON DOTS */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center text-blue-400"
      >
        Contact & Order Hub 🚀
      </motion.h1>

      <p className="text-center text-white/60 mt-3">
        Fast delivery. Real-time response. Zero waiting energy ⚡
      </p>

      {/* MAIN GRID */}
      <div className="relative max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12">
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-blue-300">
            The Hungry Oven 🍕
          </h2>

          <p className="text-white/60">
            Your cravings don’t wait — neither do we. We deliver hot pizza,
            fresh deals, and happiness in minutes.
          </p>

          {/* INFO CARDS */}
          <div className="space-y-4 mt-8">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
              🚚 <span className="ml-2">Ultra Fast Delivery (25–40 min)</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
              📍 <span className="ml-2">Live Tracking Coming Soon</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
              🔥 <span className="ml-2">Hot Food Guaranteed</span>
            </div>
          </div>

          {/* MAP BOX */}
          <div className="h-52 mt-8 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
            📍 Live Map Integration
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-5 overflow-hidden"
        >
          {/* glow layer */}
          <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-0 hover:opacity-100 transition" />

          <h3 className="text-2xl font-bold text-blue-300">Quick Contact ⚡</h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-blue-400 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-blue-400 transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:border-blue-400 transition"
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(59,130,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition" />
            <span className="relative z-10">Send Message 🚀</span>
          </motion.button>
        </motion.form>
      </div>

      {/* 💬 FINAL NOTE (CONVERSION TEXT) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl font-bold text-blue-400">
          “Your Pizza is Just One Message Away 🍕”
        </h2>

        <p className="text-white/60 mt-3 max-w-xl mx-auto">
          Fast response. Fast delivery. Fresh food. Because hunger doesn’t wait
          — and neither do we ⚡
        </p>

        <div className="mt-6 text-white/40 text-sm">
          🚀 Real-time Support • 🚚 Fast Delivery • 🔥 Fresh Always
        </div>
      </motion.div>
    </section>
  );
}
