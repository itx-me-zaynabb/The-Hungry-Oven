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
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* 🔥 ULTRA SHARP BACKGROUND */}
      <motion.div
        style={{
          x,
          y,
          backgroundImage: "url('/images/bgg.jpg')",
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform contrast-110 brightness-105"
      />

      {/* 🎬 LIGHT OVERLAY (doesn't kill image) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 🎯 DEPTH GRADIENT (bottom only) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* 🍕 FLOATING PIZZAS */}
      <motion.img
        src="/images/pizza.jpg"
        className="absolute top-16 left-10 w-16 opacity-60"
        animate={{ y: [0, -15, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.img
        src="/images/pizza.jpg"
        className="absolute bottom-20 right-16 w-20 opacity-50"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <motion.img
        src="/images/pizza.jpg"
        className="absolute top-1/3 right-1/4 w-14 opacity-40"
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
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
      <div className="relative z-10 px-6 max-w-3xl">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-display text-cheese tracking-widest drop-shadow-2xl"
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
          className="mt-6 text-lg md:text-2xl text-gray-200"
        />

        {/* 🚀 PREMIUM CTA BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px rgba(251,191,36,0.9)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-10 px-10 py-3 rounded-full bg-cheese text-black font-semibold overflow-hidden"
        >
          {/* Glow layer */}
          <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition" />
          Order Now 🍕
        </motion.button>
      </div>
    </section>
  );
}
