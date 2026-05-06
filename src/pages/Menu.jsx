/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    id: 1,
    name: "Chicken Fajita Pizza",
    category: "pizza",
    price: 1499,
    img: "/images/1.webp",
  },
  {
    id: 2,
    name: "BBQ Tikka Pizza",
    category: "pizza",
    price: 1599,
    img: "/images/2.webp",
  },
  {
    id: 3,
    name: "Cheesy Pepperoni Pizza",
    category: "pizza",
    price: 1699,
    img: "/images/3.webp",
  },
  {
    id: 4,
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    price: 1199,
    img: "/images/4.webp",
  },
  {
    id: 5,
    name: "Spicy Arrabiata Pasta",
    category: "pasta",
    price: 1099,
    img: "/images/5.webp",
  },
  {
    id: 6,
    name: "Loaded Cheese Fries",
    category: "fries",
    price: 899,
    img: "/images/6.webp",
  },
  {
    id: 7,
    name: "Peri Peri Fries",
    category: "fries",
    price: 799,
    img: "/images/7.webp",
  },
  {
    id: 8,
    name: "Classic Cola Chill",
    category: "drinks",
    price: 299,
    img: "/images/8.webp",
  },
  {
    id: 9,
    name: "Strawberry Fizz Drink",
    category: "drinks",
    price: 349,
    img: "/images/9.webp",
  },
];

export default function Menu() {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState([]);

  const filtered =
    filter === "all" ? menuData : menuData.filter((i) => i.category === filter);

  const addToCart = (item) => setCart([...cart, item]);

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* 🌌 BACKGROUND (KEEP YOUR ORIGINAL VIBE) */}
      <div className="absolute inset-0 bg-[url('/images/pizza-bg.jpg')] bg-cover bg-center scale-110 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      {/* 🍕 FLOATING PIZZAS (AESTHETIC LAYER) */}
      {[...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute w-10 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
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

      {/* FILTERS */}
      <div className="relative flex justify-center gap-4 mt-12 flex-wrap">
        {["all", "pizza", "pasta", "fries", "drinks"].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.15 }}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-xl border transition ${
              filter === cat
                ? "bg-cheese text-black"
                : "bg-white/10 border-white/20"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* 🍽 FOOD GRID (PREMIUM FLOATING STYLE) */}
      <div className="relative mt-20 flex flex-wrap justify-center gap-10 px-6">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              scale: 1.12,
              rotate: 1,
            }}
            className="relative group w-64"
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-cheese/20 blur-2xl opacity-0 group-hover:opacity-100 transition rounded-3xl" />

            {/* TILE */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg">
              {/* IMAGE */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                {/* NAME */}
                <h2 className="text-sm font-semibold">{item.name}</h2>

                {/* PRICE */}
                <div className="mt-2 text-cheese font-bold text-lg">
                  Rs {item.price}
                </div>

                {/* BUTTON */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(item)}
                  className="mt-3 w-full py-2 rounded-xl bg-cheese text-yellow-600 font-semibold hover:shadow-lg hover:shadow-cheese/40 transition"
                >
                  Add to Cart 🍕
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🛒 CART FLOAT */}
      <div className="fixed bottom-6 right-6 bg-cheese text-black px-5 py-3 rounded-full shadow-lg font-bold">
        🛒 {cart.length}
      </div>
    </section>
  );
}
