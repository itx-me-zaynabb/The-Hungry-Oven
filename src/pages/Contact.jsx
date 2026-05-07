/* eslint-disable react-hooks/purity */
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white px-4 sm:px-6 lg:px-10 py-20">
      {/* 🍕 CINEMATIC KITCHEN BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/kitchen.jpg')]
          bg-cover
          bg-center
          md:bg-[length:115%]
          bg-[length:180%]
          scale-125
          brightness-110
          contrast-110
          saturate-125
        "
      />

      {/* 🔥 ORANGE FIRE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.35),transparent_55%)]" />

      {/* 🌑 PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/85" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(8)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="absolute opacity-20 w-10 sm:w-14"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ✨ ORANGE PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
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

      {/* CONTENT */}
      <div className="relative z-10">
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
              drop-shadow-[0_0_25px_rgba(255,140,0,0.6)]
            "
          >
            Contact The Kitchen 📍
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-orange-100/80">
            Fresh Pizza • Real Chefs • Hot Delivery 🔥
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div
          className="
            mt-16
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-14
            items-start
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              relative
              rounded-[35px]
              bg-white/5
              backdrop-blur-2xl
              border
              border-white/10
              p-6
              sm:p-8
              overflow-hidden
            "
          >
            {/* glow */}
            <div className="absolute inset-0 bg-orange-400/10 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-orange-300">
                The Hungry Oven 🍕
              </h2>

              <p className="mt-5 text-white/75 leading-8 text-sm sm:text-base">
                Step inside our live kitchen where every pizza is freshly baked,
                every pasta is creamy, and every order is crafted with fire,
                cheese, and passion.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">
                {[
                  "🍕 Hot & Fresh From Oven",
                  "🚚 Free Home Delivery Available",
                  "👨‍🍳 Chef Crafted Recipes",
                  "⏱ 30–40 Min Fast Delivery",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="
                      flex
                      items-center
                      gap-3
                      p-4
                      rounded-2xl
                      bg-white/5
                      border
                      border-white/10
                    "
                  >
                    <span className="text-orange-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* MAP */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="
                  mt-8
                  h-60
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  relative
                "
              >
                <img
                  src="/images/map.webp"
                  alt="map"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-orange-400
                      text-black
                      font-bold
                    "
                  >
                    📍 Our Kitchen Location
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              relative
              rounded-[35px]
              bg-white/5
              backdrop-blur-2xl
              border
              border-white/10
              p-6
              sm:p-8
              overflow-hidden
            "
          >
            {/* glow */}
            <div className="absolute inset-0 bg-orange-400/10 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-orange-300">
                Order / Contact Us ✨
              </h3>

              <p className="mt-3 text-white/60 text-sm">
                Send your order and get fresh pizza delivered fast.
              </p>

              {/* INPUTS */}
              <div className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    p-4
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/10
                    outline-none
                    focus:border-orange-400
                    transition
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    p-4
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/10
                    outline-none
                    focus:border-orange-400
                    transition
                  "
                />

                <textarea
                  rows="5"
                  placeholder="Your Message / Order"
                  className="
                    w-full
                    p-4
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/10
                    outline-none
                    focus:border-orange-400
                    transition
                    resize-none
                  "
                />

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 0px 25px rgba(255,140,0,0.5)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-orange-400
                    to-yellow-400
                    text-black
                    font-black
                    text-lg
                  "
                >
                  Send & Order 🍕
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>

        {/* ✨ FINAL NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            mt-24
            max-w-4xl
            mx-auto
            text-center
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[35px]
              bg-white/5
              backdrop-blur-2xl
              border
              border-white/10
              p-8
              sm:p-12
            "
          >
            {/* glow */}
            <div className="absolute inset-0 bg-orange-400/10 blur-3xl" />

            <div className="relative z-10">
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-black
                  text-orange-300
                "
              >
                🍕 Your Craving Deserves Better
              </h2>

              <p
                className="
                  mt-6
                  text-white/75
                  leading-8
                  text-sm
                  sm:text-base
                  md:text-lg
                "
              >
                Don’t let hunger wait. Our ovens are hot, our chefs are ready,
                and your cheesy pizza is just one message away.
              </p>

              {/* badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {[
                  "🚚 Free Delivery",
                  "🔥 Fresh From Oven",
                  "⏱ Fast 30–40 Min",
                  "🧀 Extra Cheese Available",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-orange-400/15
                      border
                      border-orange-400/20
                      text-orange-200
                      text-sm
                      font-semibold
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 text-orange-300 font-bold text-lg sm:text-xl">
                “Order now & turn hunger into happiness 🍕🔥”
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
