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

  const filtered =
    filter === "all" ? menuData : menuData.filter((i) => i.category === filter);

  const addToCart = (item) => setCart([...cart, item]);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* 🍕 ULTRA CINEMATIC BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/pizza-bg.jpg')]
          bg-cover
          bg-center
          md:bg-[length:120%]
          bg-[length:180%]
          scale-125
          brightness-125
          contrast-125
          saturate-125
        "
      />

      {/* 🔥 ORANGE FIRE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.35),transparent_55%)]" />

      {/* 🌑 PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/65 to-black/90" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(8)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute opacity-15 w-14 md:w-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ✨ ORANGE PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🍽 CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-black
              text-orange-400
              drop-shadow-[0_0_25px_rgba(255,140,0,0.7)]
              tracking-wide
            "
          >
            The Hungry Universe 🍕
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-orange-100/80">
            Fresh Pizza • Creamy Pasta • Crispy Fries • Chill Drinks
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["all", "pizza", "pasta", "fries", "drinks"].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255,140,0,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-5 py-2.5
                rounded-full
                text-sm
                md:text-base
                font-semibold
                backdrop-blur-xl
                border
                transition-all
                duration-300
                ${
                  filter === cat
                    ? "bg-orange-400 text-black border-orange-300"
                    : "bg-white/10 border-white/20 text-white hover:bg-orange-400/20"
                }
              `}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* 🍕 MENU GRID */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
            max-w-7xl
            mx-auto
          "
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* 🔥 CARD GLOW */}
              <div className="absolute inset-0 bg-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-[35px]" />

              {/* CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[35px]
                  bg-white/5
                  backdrop-blur-2xl
                  border
                  border-white/10
                "
              >
                {/* IMAGE */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">
                  {/* CATEGORY */}
                  <p className="text-orange-300 text-xs uppercase tracking-[3px]">
                    {item.category}
                  </p>

                  {/* NAME */}
                  <h2 className="mt-2 text-lg font-bold">{item.name}</h2>

                  {/* PRICE */}
                  <div className="mt-3">
                    <span
                      className="
                        px-4 py-1.5
                        rounded-full
                        bg-orange-400/20
                        text-orange-300
                        text-sm
                        font-bold
                        border
                        border-orange-400/20
                      "
                    >
                      Rs {item.price}
                    </span>
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 0px 18px rgba(255,140,0,0.45)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => addToCart(item)}
                    className="
                      mt-5
                      w-full
                      py-3
                      rounded-2xl
                      bg-gradient-to-r
                      from-orange-400
                      to-yellow-400
                      text-black
                      font-bold
                      transition-all
                      duration-300
                    "
                  >
                    Add to Cart 🍕
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✨ BOTTOM NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
            mt-24
            text-center
            max-w-3xl
            mx-auto
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-300">
            Every Slice Comes Straight From The Fire 🔥
          </h2>

          <p className="mt-4 text-white/70 leading-8 text-sm md:text-lg">
            Crafted with melted cheese, smoky sauces, fresh toppings, and
            oven-baked perfection — The Hungry Oven delivers happiness at your
            doorstep.
          </p>
        </motion.div>
      </div>

      {/* 🛒 FLOATING CART */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="
          fixed
          bottom-5
          right-5
          md:bottom-8
          md:right-8
          z-50
          bg-gradient-to-r
          from-orange-400
          to-yellow-400
          text-black
          px-5
          py-3
          rounded-full
          font-bold
          shadow-[0_0_25px_rgba(255,140,0,0.5)]
        "
      >
        🛒 {cart.length}
      </motion.div>
    </section>
  );
}
