/* eslint-disable react-hooks/purity */

import { useState } from "react";
import { motion } from "framer-motion";

const menuData = [
  // 🍕 PIZZAS
  {
    id: 1,
    name: "Chicken Fajita",
    category: "Pizza",
    image: "/images/1.webp",

    sizes: [
      { label: "Small", price: 899 },
      { label: "Medium", price: 1499 },
      { label: "Large", price: 1999 },
    ],
  },

  {
    id: 2,
    name: "BBQ Tikka",
    category: "Pizza",
    image: "/images/2.webp",

    sizes: [
      { label: "Small", price: 999 },
      { label: "Medium", price: 1599 },
      { label: "Large", price: 2199 },
    ],
  },

  // 🍝 PASTA
  {
    id: 3,
    name: "Alfredo Pasta",
    category: "Pasta",
    image: "/images/4.webp",

    sizes: [
      { label: "Half", price: 499 },
      { label: "Full", price: 899 },
    ],
  },

  {
    id: 4,
    name: "Arrabiata Pasta",
    category: "Pasta",
    image: "/images/5.webp",

    sizes: [
      { label: "Half", price: 549 },
      { label: "Full", price: 999 },
    ],
  },

  // 🍟 FRIES
  {
    id: 5,
    name: "Loaded Fries",
    category: "Fries",
    image: "/images/6.webp",

    sizes: [
      { label: "Regular", price: 499 },
      { label: "Large", price: 799 },
    ],
  },

  // 🍗 WINGS
  {
    id: 6,
    name: "Hot Wings",
    category: "Wings",
    image: "/images/10.webp",

    sizes: [
      { label: "6 pcs", price: 699 },
      { label: "12 pcs", price: 1299 },
    ],
  },
];

export default function CreateBill() {
  const [billItems, setBillItems] = useState([]);

  // 🔥 ADD ITEM
  const addItem = (food, size) => {
    const existing = billItems.find(
      (item) => item.name === food.name && item.size === size.label,
    );

    if (existing) {
      setBillItems(
        billItems.map((item) =>
          item.name === food.name && item.size === size.label
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setBillItems([
        ...billItems,
        {
          id: Date.now(),
          name: food.name,
          category: food.category,
          size: size.label,
          price: size.price,
          quantity: 1,
        },
      ]);
    }
  };

  // ➕ QUANTITY
  const increaseQty = (id) => {
    setBillItems(
      billItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // ➖ QUANTITY
  const decreaseQty = (id) => {
    setBillItems(
      billItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // 💰 TOTAL
  const total = billItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      {/* 🖨️ PRINT CSS */}
      <style>
        {`
          @media print {

            body {
              background: white !important;
            }

            .no-print {
              display: none !important;
            }

            .print-bill {
              display: block !important;
            }
          }

          .print-bill {
            display: none;
          }
        `}
      </style>
      {/* 🧾 PRINT RECEIPT ONLY */}
      <div className="print-bill hidden">
        <div className="receipt">
          <h1>Hungry Oven</h1>
          <p>{date}</p>
          <hr />

          {billItems.map((item) => (
            <div key={item.id} className="receipt-item">
              <p>
                {item.name} ({item.size})
              </p>
              <p>
                {item.quantity} x Rs {item.price}
              </p>
              <p>Rs {item.price * item.quantity}</p>
            </div>
          ))}

          <hr />

          <h2>Total: Rs {total}</h2>

          <p className="thanks">Thanks for your order ❤️</p>
        </div>
      </div>

      {/* 🖨️ REAL RECEIPT BILL */}
      <div className="print-bill p-6 text-black">
        <div
          style={{
            width: "300px",
            margin: "0 auto",
            fontFamily: "monospace",
          }}
        >
          <div className="text-center border-b pb-3">
            <h1 className="text-2xl font-bold">🍕 Hungry Oven</h1>

            <p className="text-sm mt-1">Premium Restaurant Billing</p>
          </div>

          <div className="mt-4">
            {billItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-3">
                <div>
                  <p className="font-bold">
                    {item.name} ({item.size})
                  </p>

                  <p>
                    {item.quantity} x Rs {item.price}
                  </p>
                </div>

                <p className="font-bold">Rs {item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed pt-4 mt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Bill</span>

              <span>Rs {total}</span>
            </div>
          </div>

          <div className="text-center mt-8 text-sm">
            <p>✨ Thank you for dining with Hungry Oven.</p>

            <p className="mt-1">
              🍕 We truly appreciate your order and hope to serve you again soon
              ❤️
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 MAIN UI */}
      <section className="relative min-h-screen overflow-hidden text-white no-print">
        {/* 🌑 OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* 🔥 GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />

        {/* 🍕 FLOATING PIZZAS */}
        {[...Array(8)].map((_, i) => (
          <motion.img
            key={i}
            src="/images/pizza.webp"
            className="absolute w-14 md:w-20 opacity-10 hidden sm:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
            }}
          />
        ))}

        {/* 🔥 MAIN CONTENT */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-14">
          {/* HEADER */}
          <div className="text-center">
            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-black
                text-orange-400
                drop-shadow-[0_0_30px_rgba(255,140,0,0.7)]
              "
            >
              Create Premium Bill 🧾
            </h1>

            <p className="mt-4 text-orange-100/70">
              Restaurant POS Billing Experience
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 mt-16">
            {/* 🍕 MENU */}
            <div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {menuData.map((food, i) => (
                  <motion.div
                    key={food.id}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: i * 0.05,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group relative"
                  >
                    {/* glow */}
                    <div className="absolute inset-0 bg-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-[35px]" />

                    {/* CARD */}
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[35px]
                        bg-white/5
                        backdrop-blur-2xl
                        border
                        border-white/10
                      "
                    >
                      {/* IMAGE */}
                      <div className="h-56 overflow-hidden">
                        <img
                          src={food.image}
                          alt=""
                          className="
                            w-full
                            h-full
                            object-cover
                            group-hover:scale-110
                            transition
                            duration-700
                          "
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="p-5">
                        <p className="text-orange-300 uppercase text-xs tracking-[3px]">
                          {food.category}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold">{food.name}</h2>

                        {/* SIZES */}
                        <div className="mt-5 space-y-3">
                          {food.sizes.map((size) => (
                            <motion.button
                              key={size.label}
                              whileHover={{
                                scale: 1.02,
                              }}
                              whileTap={{
                                scale: 0.96,
                              }}
                              onClick={() => addItem(food, size)}
                              className="
                                w-full
                                flex
                                items-center
                                justify-between
                                rounded-2xl
                                bg-orange-400/10
                                border
                                border-orange-400/20
                                px-4
                                py-3
                                hover:bg-orange-400/20
                                transition
                              "
                            >
                              <span>{size.label}</span>

                              <span className="font-bold text-orange-300">
                                Rs {size.price}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 🧾 BILL PANEL */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="
                h-fit
                sticky
                top-6
                rounded-[35px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-4 sm:p-6
              "
            >
              {/* glow */}
              <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-[35px]" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-black text-orange-300">
                  Live Bill 🔥
                </h2>

                {/* ITEMS */}
                <div className="mt-8 space-y-4 max-h-125 overflow-auto pr-2">
                  {billItems.length === 0 && (
                    <p className="text-white/50">No items added yet.</p>
                  )}

                  {billItems.map((item) => (
                    <div
                      key={item.id}
                      className="
                        rounded-2xl
                        bg-black/30
                        border
                        border-white/10
                        p-4
                      "
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-sm sm:text-base">
                            {item.name}
                          </h3>

                          <p className="text-xs sm:text-sm text-orange-200/70">
                            {item.size}
                          </p>
                        </div>

                        <div className="text-orange-300 font-bold text-sm sm:text-base">
                          Rs {item.price}
                        </div>
                      </div>

                      {/* QTY */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="
                              w-9
                              h-9
                              rounded-full
                              bg-red-500/20
                              border
                              border-red-500/30
                            "
                          >
                            -
                          </button>

                          <span className="font-bold">{item.quantity}</span>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="
                              w-9
                              h-9
                              rounded-full
                              bg-green-500/20
                              border
                              border-green-500/30
                            "
                          >
                            +
                          </button>
                        </div>

                        <div className="font-bold text-base sm:text-lg">
                          Rs {item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TOTAL */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold">Total</h3>

                    <span className="text-2xl sm:text-3xl font-black text-orange-300">
                      Rs {total}
                    </span>
                  </div>

                  {/* PRINT */}
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 0px 25px rgba(255,140,0,0.5)",
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    onClick={() => window.print()}
                    className="
                      mt-6
                      w-full
                      rounded-2xl
                      bg-linear-to-r
                      from-orange-400
                      to-yellow-400
                      py-4
                      text-black
                      font-bold
                      text-lg
                    "
                  >
                    Print Bill 🖨️
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
