import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* BACKGROUND IMAGE (FIXED + BETTER SCALING) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: "url('/images/bg.webp')",
        }}
      />

      {/* GRADIENT OVERLAY (MORE PREMIUM THAN JUST BLACK) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-[2px]" />

      {/* FLOATING PIZZAS (MULTIPLE + SMOOTH ANIMATION) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pizza 1 */}
        <motion.img
          src="/images/pizza.jpg"
          className="absolute top-10 left-10 w-16 opacity-70"
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Pizza 2 */}
        <motion.img
          src="/images/pizza.jpg"
          className="absolute bottom-20 right-10 w-20 opacity-60"
          animate={{ y: [0, 25, 0], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Pizza 3 */}
        <motion.img
          src="/images/pizza.jpg"
          className="absolute top-1/3 right-1/4 w-14 opacity-50"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* Pizza 4 */}
        <motion.img
          src="/images/pizza.jpg"
          className="absolute bottom-1/3 left-1/4 w-18 opacity-40"
          animate={{ x: [0, -20, 0], rotate: [0, 20, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 max-w-3xl">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-display text-cheese tracking-widest drop-shadow-lg"
        >
          The Hungry Oven
        </motion.h1>

        {/* QUOTE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl italic text-gray-300 leading-relaxed"
        >
          “Burst Your Hunger – It’s Not Just Food, It’s an Experience”
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
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
