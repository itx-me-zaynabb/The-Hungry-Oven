/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion } from "framer-motion";

const menuData = [
  { id: 1, name: "Chicken Fajita", category: "pizza", price: 1499 },
  { id: 2, name: "BBQ Tikka", category: "pizza", price: 1599 },
  { id: 3, name: "Alfredo Pasta", category: "pasta", price: 1099 },
  { id: 4, name: "Loaded Fries", category: "fries", price: 799 },
  { id: 5, name: "Coke", category: "drinks", price: 299 },
];

export default function Menu() {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState([]);

  const filteredItems =
    filter === "all"
      ? menuData
      : menuData.filter((item) => item.category === filter);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <section className="relative min-h-screen text-white px-8 py-24 overflow-hidden">
      {/* 🔥 PIZZA VIBE BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/images/pizza-bg.jpg')] bg-cover bg-center opacity-20 scale-110" />
      <div className="absolute inset-0 bg-black/70" />

      {/* ✨ FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cheese rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-5xl font-display text-center text-cheese mb-10"
      >
        Our Menu 🍕
      </motion.h1>

      {/* FILTERS */}
      <div className="relative flex justify-center gap-4 mb-14 flex-wrap">
        {["all", "pizza", "pasta", "fries", "drinks"].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.1 }}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full transition ${
              filter === cat
                ? "bg-cheese text-black font-semibold"
                : "border border-white/20 hover:bg-white/10"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* CARDS */}
      <div className="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotate: 0.5,
            }}
            className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-cheese/30 transition"
          >
            {/* IMAGE PLACEHOLDER */}
            <div className="h-40 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-gray-400">
              Image Here
            </div>

            {/* NAME */}
            <h2 className="text-2xl font-semibold">{item.name}</h2>

            {/* PRICE (UPGRADED FEEL) */}
            <p className="text-cheese text-xl mt-2 font-bold">
              Rs {item.price}
            </p>

            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(item)}
              className="mt-4 w-full py-2 bg-cheese text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cheese/40 transition"
            >
              Add to Cart 🛒
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* CART */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative mt-20 text-center"
      >
        <h2 className="text-2xl">
          🛒 Cart Items:{" "}
          <span className="text-cheese font-bold">{cart.length}</span>
        </h2>
      </motion.div>
    </section>
  );
}
