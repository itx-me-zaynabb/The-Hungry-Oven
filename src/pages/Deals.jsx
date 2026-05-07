/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";

const deals = [
  {
    title: "Weekend Feast 🔥",
    desc: "2 Large Pizzas + 1 Cold Drink + Fries",
    price: 1999,
    img: "/images/deal1.webp",
  },
  {
    title: "Student Deal 🎓",
    desc: "1 Medium Pizza + Drink",
    price: 799,
    img: "/images/deal2.webp",
  },
  {
    title: "Birthday Blast 🎂",
    desc: "3 Large Pizzas + Cake + Drinks",
    price: 2999,
    img: "/images/deal3.webp",
  },
];

export default function Deals() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white px-4 sm:px-6 lg:px-10 py-20">
      {/* 🍕 PREMIUM FOOD BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/pizza-bg.jpg"
          alt=""
          className="w-full h-full object-cover scale-125 brightness-[0.45] saturate-[1.25]"
        />
      </div>

      {/* 🧡 CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-br from-[#2c1207]/85 via-[#1a0d08]/70 to-black/90" />

      {/* ✨ SOFT ORANGE LIGHTS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ff9d2f]/10 blur-3xl"
            style={{
              width: `${180 + Math.random() * 120}px`,
              height: `${180 + Math.random() * 120}px`,
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🍕 FLOATING MINI PIZZAS */}
      {[...Array(5)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute w-10 sm:w-14 opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 🔥 ROTATING STAMP */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute hidden lg:flex top-10 right-10 text-[#ff9d2f] text-3xl opacity-20 font-bold"
      >
        🍕 HOT DEALS 🍕
      </motion.div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
          <span className="text-[#ff9d2f]">Special Deals</span> 🔥
        </h1>

        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Crispy crust, melted cheese, spicy flavors & refreshing drinks —
          crafted for every foodie craving.
        </p>

        <div className="w-28 h-0.75 rounded-full bg-[#ff9d2f] mx-auto mt-5 opacity-70" />
      </motion.div>

      {/* 🍕 DEALS GRID */}
      <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {deals.map((deal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            {/* ✨ HOVER GLOW */}
            <div className="absolute inset-0 bg-[#ff9d2f]/0 group-hover:bg-[#ff9d2f]/5 transition duration-500" />

            {/* 🍕 FOOD IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={deal.img}
                alt={deal.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* hot badge */}
              <div className="absolute top-4 right-4 bg-[#ff9d2f] text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                HOT 🔥
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative p-6">
              <h2 className="text-2xl font-bold">{deal.title}</h2>

              <p className="text-white/65 mt-3 leading-relaxed text-sm">
                {deal.desc}
              </p>

              {/* PRICE */}
              <div className="flex items-center justify-between mt-6">
                <motion.h3
                  animate={{ opacity: [1, 0.85, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-3xl font-black text-[#ff9d2f]"
                >
                  Rs {deal.price}
                </motion.h3>

                <span className="text-[#ffbe73] text-sm">Free Delivery 🚚</span>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 18px rgba(255,157,47,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-7 w-full py-3 rounded-2xl bg-gradient-to-r from-[#ff9d2f] to-[#ffbf69] text-black font-bold tracking-wide transition-all"
              >
                Grab Deal 🍕
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 💬 PREMIUM FINAL NOTE */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mt-24 max-w-5xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-[35px] border border-[#ff9d2f]/20 bg-white/5 backdrop-blur-xl p-8 sm:p-12 text-center">
          {/* glow */}
          <div className="absolute inset-0 bg-[#ff9d2f]/10 blur-3xl" />

          <h2 className="relative text-3xl sm:text-4xl font-black text-[#ff9d2f] leading-tight">
            Good Food Creates Great Memories 🍕
          </h2>

          <p className="relative text-white/75 mt-5 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
            Every deal at The Hungry Oven is freshly baked with premium cheese,
            rich flavors, and the perfect oven-fired experience — made to turn
            every meal into a moment worth remembering.
          </p>

          {/* FEATURES */}
          <div className="relative mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10">
              🚚 Fast Delivery
            </div>

            <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10">
              🔥 Hot & Crispy
            </div>

            <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10">
              🧀 Extra Cheese
            </div>
          </div>

          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative mt-8 text-[#ffbe73] font-semibold text-lg"
          >
            “One Slice Is Never Enough...” ✨
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
