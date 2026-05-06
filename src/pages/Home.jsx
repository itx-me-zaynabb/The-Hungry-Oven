/* eslint-disable react-hooks/purity */
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / innerHeight - 0.5) * 40);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const x = useTransform(mouseX, (v) => v);
  const y = useTransform(mouseY, (v) => v);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* BACKGROUND */}
      <motion.div
        style={{ x, y, backgroundImage: "url('/images/bg.webp')" }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* ✨ PARTICLES (CHEESE GLOW DOTS) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cheese rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🍕 FLOATING PIZZAS (PARALLAX LINKED) */}
      <motion.img
        src="/images/pizza.webp"
        style={{ x: mouseX, y: mouseY }}
        className="absolute top-10 left-10 w-16 opacity-60"
      />

      <motion.img
        src="/images/pizza.webp"
        style={{ x: mouseX, y: mouseY }}
        className="absolute bottom-20 right-10 w-20 opacity-50"
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 max-w-3xl">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-display text-cheese tracking-widest"
        >
          The Hungry Oven
        </motion.h1>

        {/* ✨ TYPING EFFECT */}
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
          className="mt-6 text-xl md:text-2xl text-gray-300"
        />

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-10 py-3 bg-cheese text-black font-semibold rounded-full shadow-lg shadow-cheese/30"
        >
          Order Now 🍕
        </motion.button>
      </div>
    </section>
  );
}
