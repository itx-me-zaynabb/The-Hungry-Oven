import { motion } from "framer-motion";

const deals = [
  {
    title: "Weekend Feast 🔥",
    desc: "2 Large Pizzas + 1 Drink",
    price: "Rs 1999",
  },
  {
    title: "Student Deal 🎓",
    desc: "1 Medium Pizza + Drink",
    price: "Rs 799",
  },
  {
    title: "Birthday Blast 🎂",
    desc: "3 Large Pizzas + Cake",
    price: "Rs 2999",
  },
];

export default function Deals() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-dark text-white px-8 py-24"
    >
      {/* Heading */}
      <h1 className="text-5xl font-display text-cheese text-center mb-16">
        Special Deals 🔥
      </h1>

      {/* Deals Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {deals.map((deal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-8 text-center shadow-lg hover:shadow-cheese/40 transition"
          >
            {/* Image Placeholder */}
            <div className="h-40 bg-gray-300/20 flex items-center justify-center mb-6 rounded-xl">
              Image
            </div>

            <h2 className="text-2xl font-semibold mb-3">{deal.title}</h2>
            <p className="text-gray-300">{deal.desc}</p>

            <p className="text-cheese text-xl mt-4">{deal.price}</p>

            <button className="mt-6 px-6 py-2 bg-primary rounded-full hover:scale-110 transition">
              Grab Deal 🍕
            </button>
          </motion.div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="mt-24 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-display text-cheese"
        >
          “Limited Time Offers – Don’t Miss Out!”
        </motion.h2>
      </div>
    </motion.section>
  );
}
