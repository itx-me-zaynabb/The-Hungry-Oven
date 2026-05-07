import { motion } from "framer-motion";

export default function Cart({ cartItems = [], setCart }) {
  // total price calculate
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* 🌑 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f08] to-black" />

      {/* 🍕 SOFT ORANGE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-20 max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center text-orange-400"
        >
          Your Cart 🛒
        </motion.h1>

        <p className="text-center text-white/60 mt-3">
          Fresh food selected by you — ready to deliver 🔥
        </p>

        {/* EMPTY STATE */}
        {cartItems.length === 0 ? (
          <div className="mt-20 text-center text-white/60">
            <p className="text-xl">Your cart is empty 🍕</p>
            <p className="mt-2">Add something delicious from menu</p>
          </div>
        ) : (
          <>
            {/* CART ITEMS */}
            <div className="mt-12 space-y-4">
              {cartItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4"
                >
                  {/* IMAGE + INFO */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-orange-300 text-sm">Rs {item.price}</p>
                    </div>
                  </div>

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removeItem(i)}
                    className="px-4 py-2 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500/40 transition"
                  >
                    Remove
                  </button>
                </motion.div>
              ))}
            </div>

            {/* TOTAL SECTION */}
            <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Total</h2>
                <h2 className="text-2xl font-bold text-orange-400">
                  Rs {total}
                </h2>
              </div>

              {/* CHECKOUT BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 25px rgba(255,140,0,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold"
              >
                Proceed to Checkout 🍕
              </motion.button>
            </div>
          </>
        )}

        {/* NOTE */}
        <div className="mt-16 text-center text-white/50 text-sm">
          Fresh food is prepared instantly after order confirmation 🔥
          <br />
          Fast delivery • Hot & fresh guarantee 🍕
        </div>
      </div>
    </section>
  );
}
