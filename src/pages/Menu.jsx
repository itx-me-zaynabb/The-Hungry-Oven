import { useState } from "react";
import { motion } from "framer-motion";

const menuData = [
  {
    id: 1,
    name: "Chicken Fajita",
    category: "pizza",
    price: "900",
  },
  {
    id: 2,
    name: "BBQ Tikka",
    category: "pizza",
    price: "1000",
  },
  {
    id: 3,
    name: "Alfredo Pasta",
    category: "pasta",
    price: "700",
  },
  {
    id: 4,
    name: "Loaded Fries",
    category: "fries",
    price: "500",
  },
  {
    id: 5,
    name: "Coke",
    category: "drinks",
    price: "150",
  },
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
    <section className="min-h-screen bg-dark text-white px-8 py-24">

      {/* Heading */}
      <h1 className="text-5xl font-display text-center text-cheese mb-10">
        Our Menu 🍕
      </h1>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["all", "pizza", "pasta", "fries", "drinks"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border ${
              filter === cat
                ? "bg-cheese text-black"
                : "border-white/20 hover:bg-white/10"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-gray-300/20 flex items-center justify-center mb-4">
              Image
            </div>

            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-cheese mt-2">Rs {item.price}</p>

            <button
              onClick={() => addToCart(item)}
              className="mt-4 w-full py-2 bg-primary hover:bg-red-800 rounded-lg transition"
            >
              Add to Cart 🛒
            </button>
          </motion.div>
        ))}
      </div>

      {/* CART PREVIEW */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl mb-4">🛒 Cart Items: {cart.length}</h2>
      </div>
    </section>
  );
}