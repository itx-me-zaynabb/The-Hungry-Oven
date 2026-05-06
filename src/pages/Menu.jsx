/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion } from "framer-motion";

const menuData = [
  { id: 1, name: "Chicken Fajita Pizza", category: "pizza", price: 1499 },
  { id: 2, name: "BBQ Tikka Pizza", category: "pizza", price: 1599 },
  { id: 3, name: "Creamy Alfredo Pasta", category: "pasta", price: 1199 },
  { id: 4, name: "Spicy Cheese Fries", category: "fries", price: 899 },
  { id: 5, name: "Cola Chill Drink", category: "drinks", price: 299 },
];

const icons = {
  pizza: "🍕",
  pasta: "🍝",
  fries: "🍟",
  drinks: "🥤",
};

export default function Menu() {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState([]);

  const filtered =
    filter === "all" ? menuData : menuData.filter((i) => i.category === filter);

  const addToCart = (item) => setCart([...cart, item]);

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* 🌌 PIZZA WORLD BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/images/pizza-bg.jpg')] bg-cover bg-center scale-110 opacity-40" />

      {/* DARK CINEMATIC LAYER */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      {/* 🍕 FLOATING PIZZAS BACKGROUND ANIMATION */}
      {[...Array(12)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute w-10 opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center text-6xl font-bold text-cheese pt-20"
      >
        The Hungry Universe 🍕
      </motion.h1>

      {/* FLOATING CATEGORY ORBS (NEW STYLE) */}
      <div className="relative flex justify-center gap-4 mt-12 flex-wrap">
        {["all", "pizza", "pasta", "fries", "drinks"].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.2 }}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-xl border transition ${
              filter === cat
                ? "bg-cheese text-black"
                : "bg-white/10 border-white/20"
            }`}
          >
            {icons[cat] || "🍴"} {cat}
          </motion.button>
        ))}
      </div>

      {/* 🌟 FLOATING FOOD ITEMS (NOT CARDS) */}
      <div className="relative mt-20 flex flex-wrap justify-center gap-12 px-6">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{
              scale: 1.15,
              rotate: 2,
            }}
            className="relative group cursor-pointer"
          >
            {/* GLOW ORBIT */}
            <div className="absolute inset-0 bg-cheese/20 blur-3xl opacity-0 group-hover:opacity-100 transition rounded-full" />

            {/* FLOATING FOOD ICON */}
            <div className="text-7xl text-center">{icons[item.category]}</div>

            {/* NAME */}
            <h2 className="text-center mt-3 text-lg font-semibold">
              {item.name}
            </h2>

            {/* PRICE BADGE */}
            <div className="text-center mt-2">
              <span className="px-4 py-1 bg-cheese text-black rounded-full text-sm font-bold">
                Rs {item.price}
              </span>
            </div>

            {/* ADD BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => addToCart(item)}
              className="mt-4 px-5 py-2 bg-white/10 border border-white/20 rounded-full hover:bg-cheese hover:text-black transition w-full"
            >
              Add 🍕
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* 🛒 FLOATING CART ORB */}
      <div className="fixed bottom-6 right-6 bg-cheese text-black px-5 py-3 rounded-full shadow-lg font-bold">
        🛒 {cart.length}
      </div>
    </section>
  );
}
