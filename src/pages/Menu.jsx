/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion } from "framer-motion";

const menuData = [
  // 🍕 PIZZAS
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
    name: "Chicken Supreme Pizza",
    category: "pizza",
    price: 1750,
    img: "/images/1.webp",
  },

  // 🍝 PASTA
  {
    id: 6,
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    price: 1199,
    img: "/images/4.webp",
  },
  {
    id: 7,
    name: "Spicy Arrabiata Pasta",
    category: "pasta",
    price: 1099,
    img: "/images/5.webp",
  },
  {
    id: 8,
    name: "Chicken White Sauce Pasta",
    category: "pasta",
    price: 1299,
    img: "/images/4.webp",
  },

  // 🍟 FRIES
  {
    id: 9,
    name: "Loaded Cheese Fries",
    category: "fries",
    price: 899,
    img: "/images/6.webp",
  },
  {
    id: 10,
    name: "Peri Peri Fries",
    category: "fries",
    price: 799,
    img: "/images/7.webp",
  },
  {
    id: 11,
    name: "Garlic Mayo Fries",
    category: "fries",
    price: 850,
    img: "/images/6.webp",
  },

  // 🍗 HOT WINGS
  {
    id: 12,
    name: "Spicy Hot Wings (6 pcs)",
    category: "wings",
    price: 999,
    img: "/images/10.webp",
  },
  {
    id: 13,
    name: "BBQ Hot Wings (8 pcs)",
    category: "wings",
    price: 1199,
    img: "/images/11.webp",
  },
  {
    id: 14,
    name: "Extra Crispy Wings",
    category: "wings",
    price: 1099,
    img: "/images/12.webp",
  },

  // 🥤 DRINKS
  {
    id: 15,
    name: "Classic Cola Chill",
    category: "drinks",
    price: 299,
    img: "/images/8.webp",
  },
  {
    id: 16,
    name: "Strawberry Fizz Drink",
    category: "drinks",
    price: 349,
    img: "/images/9.webp",
  },
];

export default function Menu() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? menuData : menuData.filter((i) => i.category === filter);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/images/pizza-bg.jpg')] bg-cover bg-center scale-125 brightness-110 contrast-110" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/90" />

      {/* FLOATING ELEMENTS */}
      {[...Array(8)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute opacity-15 w-14 md:w-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-20">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-orange-400 drop-shadow-[0_0_25px_rgba(255,140,0,0.7)]">
            The Hungry Universe 🍕
          </h1>

          <p className="mt-4 text-orange-100/80">
            Crafted Flavors • Premium Ingredients • Bold Taste Experience
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["all", "pizza", "pasta", "fries", "wings", "drinks"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border text-sm transition ${
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
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] overflow-hidden"
            >
              <img src={item.img} className="h-52 w-full object-cover" />

              <div className="p-5 text-center">
                <p className="text-orange-300 text-xs uppercase">
                  {item.category}
                </p>

                <h2 className="mt-2 text-lg font-bold">{item.name}</h2>

                <span className="mt-3 inline-block px-4 py-1 bg-orange-400/20 text-orange-300 rounded-full text-sm">
                  Rs {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

       {/* ✨ BOTTOM NOTE */}
<div className="mt-24 text-center max-w-3xl mx-auto">
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
    
    <h2 className="text-3xl text-orange-300 font-bold">
      Fresh Fire Kitchen 🔥
    </h2>

    <p className="mt-4 text-white/70 leading-8">
      Every item is freshly prepared with premium ingredients, rich flavors,
      and perfect seasoning. From pizzas to pastas, fries, and hot wings —
      everything is crafted to deliver a high-quality dining experience straight from our kitchen to your table.
    </p>

  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
