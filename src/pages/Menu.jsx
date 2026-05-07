/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    name: "Volcano Extreme Pizza",
    category: "pizza",
    price: 1899,
    img: "/images/volcano.webp",
  },
  {
    id: 5,
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    price: 1199,
    img: "/images/4.webp",
  },
  {
    id: 6,
    name: "Spicy Arrabiata Pasta",
    category: "pasta",
    price: 1099,
    img: "/images/5.webp",
  },
  {
    id: 7,
    name: "Loaded Cheese Fries",
    category: "fries",
    price: 899,
    img: "/images/6.webp",
  },
  {
    id: 8,
    name: "Peri Peri Fries",
    category: "fries",
    price: 799,
    img: "/images/7.webp",
  },
  {
    id: 9,
    name: "Classic Cola Chill",
    category: "drinks",
    price: 299,
    img: "/images/8.webp",
  },
  {
    id: 10,
    name: "Strawberry Fizz Drink",
    category: "drinks",
    price: 349,
    img: "/images/9.webp",
  },
];

export default function Menu() {
  const [filter, setFilter] = useState("all");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const filtered =
    filter === "all" ? menuData : menuData.filter((i) => i.category === filter);

  const addToCart = (item) => setCart((prev) => [...prev, item]);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/images/pizza-bg.jpg')] bg-cover bg-center scale-125 brightness-110 contrast-110" />

      {/* ORANGE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.35),transparent_55%)]" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* HEADER */}
      <div className="relative z-10 text-center pt-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-400">
          The Hungry Universe 🍕
        </h1>
        <p className="text-white/70 mt-3 text-sm md:text-base">
          Fresh Pizza • Pasta • Fries • Drinks
        </p>
      </div>

      {/* FILTER */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mt-10 px-4">
        {["all", "pizza", "pasta", "fries", "drinks"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              filter === cat
                ? "bg-orange-400 text-black"
                : "bg-white/10 border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="relative z-10 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src={item.img}
              className="h-52 w-full object-cover"
              alt={item.name}
            />

            <div className="p-4 text-center">
              <h2 className="font-semibold">{item.name}</h2>

              <p className="text-orange-300 mt-2">Rs {item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="mt-4 w-full py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-black rounded-xl font-bold"
              >
                Add to Cart 🍕
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CART BUTTON */}
      <motion.div
        onClick={() => navigate("/cart")}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-orange-400 to-yellow-400 text-black px-5 py-3 rounded-full font-bold cursor-pointer shadow-lg z-50"
      >
        🛒 {cart.length}
      </motion.div>
    </section>
  );
}
