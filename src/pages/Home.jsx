/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/exhaustive-deps */

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      const { innerWidth, innerHeight } = window;

      // 👉 smoother & reduced intensity for mobile feel
      const strength = window.innerWidth < 768 ? 10 : 20;

      mouseX.set((e.clientX / innerWidth - 0.5) * strength);
      mouseY.set((e.clientY / innerHeight - 0.5) * strength);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const x = useTransform(mouseX, (v) => v);
  const y = useTransform(mouseY, (v) => v);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
      {/* 🔥 BACKGROUND (SMOOTHER PARALLAX) */}
      <motion.div
        style={{ x, y }}
        className="
          absolute inset-0
          bg-[url('/images/bgs.jpg')]
          bg-cover bg-center bg-no-repeat
          will-change-transform
          scale-110
          contrast-110 brightness-105
        "
      />

      {/* 🎬 OVERLAY */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

      {/* 🍕 FLOATING PIZZAS (OPTIMIZED ANIMATION FOR MOBILE) */}
      <motion.img
        src="/images/pizza.jpg"
        className="absolute top-10 left-3 sm:top-16 sm:left-10 w-12 sm:w-16 opacity-60"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/images/pizza.jpg"
        className="absolute bottom-16 right-4 sm:bottom-20 sm:right-16 w-14 sm:w-20 opacity-50"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -6, 6, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src="/images/pizza.jpg"
        className="absolute top-1/3 right-[10%] sm:right-1/4 w-10 sm:w-14 opacity-40"
        animate={{
          x: [0, 10, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ✨ PARTICLES (SOFT MOBILE VERSION) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cheese rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 max-w-3xl">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
            font-display
            text-cheese
            tracking-wide
            drop-shadow-2xl
            leading-tight
          "
        >
          The Hungry Oven
        </motion.h1>

        {/* TYPE ANIMATION (SMOOTHER ON MOBILE) */}
        <TypeAnimation
          sequence={[
            "Hot. Fresh. Unforgettable.",
            1800,
            "Where Cheese Meets Fire 🔥",
            1800,
            "Every Slice Tells a Story 🍕",
            1800,
          ]}
          wrapper="p"
          speed={55}
          repeat={Infinity}
          className="
            mt-4 sm:mt-6
            text-sm sm:text-lg md:text-2xl
            text-gray-200
          "
        />

        {/* CTA BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0px 0px 25px rgba(251,191,36,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="
            relative
            mt-8 sm:mt-10
            px-7 sm:px-10
            py-3
            rounded-full
            bg-cheese
            text-black
            font-semibold
            text-sm sm:text-base
            overflow-hidden
          "
        >
          <span className="absolute inset-0 bg-white/10 blur-xl opacity-0 hover:opacity-100 transition" />
          <span className="relative z-10">Order Now 🍕</span>
        </motion.button>
      </div>
    </section>
  );
}
