/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Cart({ cartItems, setCart }) {
  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

  const removeItem = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <section className="min-h-screen text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f08] to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl text-orange-400 font-bold text-center">
          Your Cart 🛒
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center mt-10 text-white/60">Cart is empty 🍕</p>
        ) : (
          <>
            <div className="mt-10 space-y-4">
              {cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-white/5 p-4 rounded-xl"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.img}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div>
                      <h2>{item.name}</h2>
                      <p className="text-orange-300">Rs {item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(i)}
                    className="text-red-400"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <h2 className="text-2xl text-orange-400 font-bold">
                Total: Rs {total}
              </h2>

              <button className="mt-4 px-6 py-3 bg-orange-400 text-black rounded-xl">
                Checkout 🍕
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
