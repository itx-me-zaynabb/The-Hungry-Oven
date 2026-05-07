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

      mouseX.set((e.clientX / innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const x = useTransform(mouseX, (v) => v);
  const y = useTransform(mouseY, (v) => v);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
      {/* 🔥 ULTRA SHARP BACKGROUND */}
      <motion.div
        style={{
          x,
          y,
          backgroundImage: "url('/images/bgs.jpg')",
        }}
        className="
          absolute inset-0
          bg-cover bg-center bg-no-repeat
          will-change-transform
          contrast-110 brightness-105
          scale-110
        "
      />

      {/* 🎬 LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 🎯 DEPTH GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

      {/* 🍕 FLOATING PIZZAS */}
      <motion.img
        src="/images/pizza.jpg"
        className="
          absolute
          top-10 left-3
          sm:top-16 sm:left-10
          w-12 sm:w-16
          opacity-60
        "
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      />

      <motion.img
        src="/images/pizza.jpg"
        className="
          absolute
          bottom-16 right-4
          sm:bottom-20 sm:right-16
          w-14 sm:w-20
          opacity-50
        "
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
      />

      <motion.img
        src="/images/pizza.jpg"
        className="
          absolute
          top-1/3 right-[10%]
          sm:right-1/4
          w-10 sm:w-14
          opacity-40
        "
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* ✨ LIGHT PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cheese rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 max-w-3xl">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
            font-display
            text-cheese
            tracking-wide
            md:tracking-widest
            drop-shadow-2xl
            leading-tight
          "
        >
          The Hungry Oven
        </motion.h1>

        {/* TYPING TEXT */}
        <TypeAnimation
          sequence={[
            "Hot. Fresh. Unforgettable.",
            2000,
            "Where Cheese Meets Fire 🔥",
            2000,
            "Every Slice Tells a Story 🍕",
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="
            mt-4 sm:mt-6
            text-sm
            sm:text-lg
            md:text-2xl
            text-gray-200
          "
        />

        {/* 🚀 PREMIUM CTA BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 30px rgba(251,191,36,0.9)",
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
          {/* Glow layer */}
          <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition" />

          <span className="relative z-10">Order Now 🍕</span>
        </motion.button>
      </div>
    </section>
  );
}
