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
    img: "/images/15.webp",
  },
  {
    id: 6,
    name: "Smoky BBQ Chicken Pizza",
    category: "pizza",
    price: 1650,
    img: "/images/14.webp",
  },

  // 🍝 PASTA
  {
    id: 7,
    name: "Creamy Alfredo Pasta",
    category: "pasta",
    price: 1199,
    img: "/images/4.webp",
  },
  {
    id: 8,
    name: "Spicy Arrabiata Pasta",
    category: "pasta",
    price: 1099,
    img: "/images/5.webp",
  },
  {
    id: 9,
    name: "Chicken White Sauce Pasta",
    category: "pasta",
    price: 1299,
    img: "/images/17.webp",
  },
  {
    id: 10,
    name: "Cheesy Garlic Pasta",
    category: "pasta",
    price: 1350,
    img: "/images/16.webp",
  },

  // 🍟 FRIES
  {
    id: 11,
    name: "Loaded Cheese Fries",
    category: "fries",
    price: 899,
    img: "/images/6.webp",
  },
  {
    id: 12,
    name: "Peri Peri Fries",
    category: "fries",
    price: 799,
    img: "/images/7.webp",
  },
  {
    id: 13,
    name: "Garlic Mayo Fries",
    category: "fries",
    price: 850,
    img: "/images/18.webp",
  },
  {
    id: 14,
    name: "Cheesy Volcano Fries",
    category: "fries",
    price: 999,
    img: "/images/6.webp",
  },

  // 🍗 HOT WINGS
  {
    id: 15,
    name: "Spicy Hot Wings (6 pcs)",
    category: "wings",
    price: 999,
    img: "/images/10.webp",
  },
  {
    id: 16,
    name: "BBQ Smoky Wings (8 pcs)",
    category: "wings",
    price: 1199,
    img: "/images/11.webp",
  },
  {
    id: 17,
    name: "Extra Crispy Wings",
    category: "wings",
    price: 1099,
    img: "/images/12.webp",
  },
  {
    id: 18,
    name: "Garlic Parmesan Wings",
    category: "wings",
    price: 1299,
    img: "/images/13.webp",
  },
  {
    id: 19,
    name: "Honey Glazed Wings",
    category: "wings",
    price: 1399,
    img: "/images/10.webp",
  },

  // 🥤 DRINKS
  {
    id: 20,
    name: "Classic Cola Chill",
    category: "drinks",
    price: 299,
    img: "/images/8.webp",
  },
  {
    id: 21,
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
      {/* 🔥 OVERLAYS */}
      <div className="absolute inset-0 bg-black/45 md:bg-black/50" />

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.30),transparent_60%)]
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/20
          via-black/30
          to-black/70
        "
      />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="
            absolute
            opacity-20
            w-10
            sm:w-14
            md:w-20
          "
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute
              w-1.5
              h-1.5
              bg-orange-400
              rounded-full
              opacity-40
            "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              drop-shadow-[0_0_25px_rgba(255,140,0,0.8)]
            "
          >
            The Hungry Universe 🍕
          </h1>

          <p className="mt-4 text-sm sm:text-base text-orange-100/90">
            Pizza • Pasta • Fries • Hot Wings • Drinks
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["all", "pizza", "pasta", "fries", "wings", "drinks"].map((cat) => (
            <motion.button
              key={cat}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255,140,0,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`
                px-5 py-2.5
                rounded-full
                border
                text-sm
                transition-all
                duration-300
                backdrop-blur-xl
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

        {/* GRID */}
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
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              {/* CARD GLOW */}
              <div
                className="
                  absolute inset-0
                  bg-orange-400/20
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  rounded-[35px]
                "
              />

              {/* CARD */}
              <div
                className="
                  relative
                  bg-white/5
                  backdrop-blur-2xl
                  border
                  border-white/10
                  rounded-[30px]
                  overflow-hidden
                "
              >
                {/* IMAGE */}
                <div className="overflow-hidden h-52">
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
                  <p className="text-orange-300 text-xs uppercase tracking-[3px]">
                    {item.category}
                  </p>

                  <h2 className="mt-2 text-lg font-bold">{item.name}</h2>

                  <span
                    className="
                      mt-4
                      inline-block
                      px-4
                      py-1.5
                      rounded-full
                      bg-orange-400/20
                      text-orange-300
                      text-sm
                      font-semibold
                      border
                      border-orange-400/20
                    "
                  >
                    Rs {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✨ NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
            relative
            mt-24
            max-w-3xl
            mx-auto
            text-center
          "
        >
          <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-3xl" />

          <div
            className="
              relative
              p-6
              sm:p-8
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-300">
              A Premium Taste Experience
            </h2>

            <p className="mt-4 text-white/75 leading-7 text-sm sm:text-base">
              Crafted with fire-baked perfection, rich flavors, and premium
              ingredients — every bite is designed to deliver an unforgettable
              experience.
            </p>

            <div className="mt-5 text-orange-200/70 text-sm">
              🍕 Hot & Fresh • 🚚 Fast Delivery • 🔥 Premium Quality
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
