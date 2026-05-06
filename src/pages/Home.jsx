import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image (ADD YOUR IMAGE HERE) */}
      backgroundImage: "url('/images/pizza bg.webp')"
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/pizza bg.webp')",
        }}
      ></div>
      {/* Dark Overlay + Blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      {/* Floating Pizza Effect (optional placeholder) */}
      <div className="absolute inset-0 opacity-20">
        {/* later we can add small pizza PNGs floating */}
      </div>
      {/* Content */}
      <div className="relative z-10 px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-display text-cheese tracking-widest"
        >
          The Hungry Oven
        </motion.h1>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl italic text-gray-300"
        >
          “Burst Your Hunger – It’s Not Just Food, It’s an Experience”
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 px-8 py-3 bg-cheese text-black font-semibold rounded-full hover:scale-110 transition duration-300"
        >
          Order Now 🍕
        </motion.button>
      </div>
    </section>
  );
}
