/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";

const deals = [
  {
    title: "Weekend Feast 🔥",
    desc: "2 Large Pizzas + 1 Drink",
    price: 1999,
  },
  {
    title: "Student Deal 🎓",
    desc: "1 Medium Pizza + Drink",
    price: 799,
  },
  {
    title: "Birthday Blast 🎂",
    desc: "3 Large Pizzas + Cake",
    price: 2999,
  },
];

export default function Deals() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* 🌅 CINEMATIC OVEN BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f0a] via-[#2a1208] to-[#0f0a08]" />

      {/* 🔥 FLOATING LIGHT ORBS */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-44 h-44 rounded-full bg-orange-400/10 blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🍕 ROTATING BRAND STAMP */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 text-orange-400 text-4xl opacity-40"
      >
        🍕 HOT FRESH DEALS 🍕
      </motion.div>

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-5xl md:text-6xl font-bold text-center pt-20"
      >
        <span className="text-orange-400">Special Deals</span> 🔥
      </motion.h1>

      {/* SUBTITLE */}
      <p className="text-center text-white/60 mt-3">
        Freshly baked offers — straight from our oven to your table
      </p>

      {/* DEALS */}
      <div className="relative mt-20 flex flex-wrap justify-center gap-10 px-6">
        {deals.map((deal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.08 }}
            className="relative w-72 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            {/* 🔥 HOT RIBBON */}
            <div className="absolute top-4 right-4 bg-orange-400 text-black text-xs px-3 py-1 rounded-full font-bold animate-pulse">
              HOT 🔥
            </div>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-orange-500/10 blur-2xl opacity-0 hover:opacity-100 transition" />

            {/* TITLE */}
            <h2 className="text-2xl font-bold">{deal.title}</h2>

            {/* DESC */}
            <p className="text-white/60 mt-2">{deal.desc}</p>

            {/* PRICE */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl font-extrabold text-orange-400 mt-6"
            >
              Rs {deal.price}
            </motion.div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgba(251,146,60,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative mt-6 w-full py-3 rounded-2xl bg-orange-400 text-black font-semibold overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition" />
              <span className="relative z-10">Grab Deal 🍕</span>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* 💬 FINAL ATTRACTIVE MESSAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative text-center mt-24 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
          “Good Food. Good Mood. Great Moments.” 🍕
        </h2>

        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          At The Hungry Oven, every deal is freshly crafted with love, melted
          cheese, and a promise of happiness in every bite.
        </p>

        {/* small underline glow */}
        <div className="w-40 h-1 bg-orange-400 mx-auto mt-6 blur-sm opacity-60" />
      </motion.div>
    </section>
  );
}
