import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-dark text-white px-8 py-24"
    >
      {/* Heading */}
      <h1 className="text-5xl font-display text-cheese text-center mb-16">
        Contact Us 📍
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold">The Hungry Oven 🍕</h2>

          <p className="text-gray-300">
            Serving happiness with every slice. Reach out for orders, deals, or
            special events.
          </p>

          <div className="space-y-3">
            <p>📍 Address: Your Location Here</p>
            <p>📞 Phone: 03XX-XXXXXXX</p>
            <p>🚚 Free Delivery Available</p>
          </div>

          {/* Map Placeholder */}
          <div className="h-52 bg-gray-300/20 flex items-center justify-center rounded-xl">
            Map
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass p-8 rounded-2xl space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-cheese text-white font-semibold rounded-lg hover:scale-105 transition"
          >
            Send Message ✉️
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}
