/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";

const deals = [
  {
    title: "Weekend Feast 🔥",
    desc: "2 Large Pizzas + 1 Drink",
    price: 1999,
    tag: "BEST SELLER",
  },
  {
    title: "Student Deal 🎓",
    desc: "1 Medium Pizza + Drink",
    price: 799,
    tag: "STUDENT FAVORITE",
  },
  {
    title: "Birthday Blast 🎂",
    desc: "3 Large Pizzas + Cake",
    price: 2999,
    tag: "PARTY DEAL",
  },
];

export default function Deals() {
  return (
    <section className="relative min-h-screen text-white px-6 py-24 overflow-hidden">
      {/* 🌌 BACKGROUND LAYER (PIZZA VIBE) */}
      <div className="absolute inset-0 bg-[url('/images/pizza-bg.jpg')] bg-cover bg-center opacity-30 scale-110" />
      <div className="absolute inset-0 bg-black/80" />

      {/* 🍕 FLOATING ENERGY DOTS */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cheese rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-5xl font-bold text-cheese text-center mb-16"
      >
        Special Deals 🔥
      </motion.h1>

      {/* DEALS GRID */}
      <div className="relative grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {deals.map((deal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{
              scale: 1.08,
              rotate: 1,
            }}
            className="relative group"
          >
            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-cheese/20 blur-2xl opacity-0 group-hover:opacity-100 transition rounded-3xl" />

            {/* CARD */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center overflow-hidden">
              {/* TAG BADGE */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs bg-cheese text-black rounded-full font-bold">
                {deal.tag}
              </div>

              {/* IMAGE PLACEHOLDER */}
              <div className="h-36 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white/40">
                Image Here
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold">{deal.title}</h2>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mt-2">{deal.desc}</p>

              {/* PRICE (ANIMATED FEEL) */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cheese text-2xl font-bold mt-4"
              >
                Rs {deal.price}
              </motion.div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 25px rgba(251,191,36,0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-6 w-full py-3 rounded-xl bg-cheese text-black font-semibold overflow-hidden"
              >
                {/* glow wave */}
                <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition" />
                <span className="relative z-10">Grab Deal 🍕</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER BANNER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative mt-24 text-center"
      >
        <h2 className="text-3xl font-bold text-cheese">
          “Limited Time Offers – Don’t Miss Out!” 🔥
        </h2>
      </motion.div>
    </section>
  );
}
