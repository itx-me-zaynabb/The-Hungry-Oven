import { useState } from "react";
import { motion } from "framer-motion";

const menuData = [
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

// ✅ FIX: stable positions — no Math.random() in render
const PIZZA_POSITIONS = [
  { top: "8%", left: "5%" },
  { top: "22%", left: "88%" },
  { top: "40%", left: "2%" },
  { top: "55%", left: "92%" },
  { top: "70%", left: "10%" },
  { top: "80%", left: "80%" },
  { top: "15%", left: "45%" },
  { top: "62%", left: "55%" },
];

export default function CreateBill() {
  const [billItems, setBillItems] = useState([]);

  const addItem = (food, size) => {
    const existing = billItems.find(
      (item) => item.name === food.name && item.size === size.label,
    );
    if (existing) {
      setBillItems(
        billItems.map((item) =>
          item.name === food.name && item.size === size.label
            ? { ...item, quantity: item.quantity + 1 }
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

  const increaseQty = (id) =>
    setBillItems(
      billItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );

  const decreaseQty = (id) =>
    setBillItems(
      billItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );

  const total = billItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      <style>{`
        .print-bill { display: none; }

        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-bill {
            display: block !important;
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            background: white;
          }
        }
      `}</style>

      {/* ✅ Receipt — only visible on print */}
      <div className="print-bill">
        <div
          style={{
            width: "280px",
            margin: "0 auto",
            fontFamily: "monospace",
            color: "black",
            padding: "16px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              borderBottom: "1px dashed black",
              paddingBottom: "10px",
              marginBottom: "10px",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>
              🍕 Hungry Oven
            </h1>
            <p style={{ fontSize: "12px", margin: "4px 0 0" }}>
              Premium Restaurant Billing
            </p>
            <p style={{ fontSize: "11px", margin: "2px 0 0", color: "#555" }}>
              {new Date().toLocaleString()}
            </p>
          </div>

          {billItems.map((item) => (
            <div
              key={item.id}
              style={{ marginBottom: "8px", fontSize: "13px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "bold" }}>
                  {item.name} ({item.size})
                </span>
                <span style={{ fontWeight: "bold" }}>
                  Rs {item.price * item.quantity}
                </span>
              </div>
              <div style={{ color: "#555" }}>
                {item.quantity} x Rs {item.price}
              </div>
            </div>
          ))}

          <div
            style={{
              borderTop: "1px dashed black",
              marginTop: "10px",
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              <span>Total Bill</span>
              <span>Rs {total}</span>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "16px",
              fontSize: "12px",
              color: "#444",
            }}
          >
            <p>✨ Thank you for dining with Hungry Oven.</p>
            <p style={{ marginTop: "4px" }}>
              🍕 Hope to serve you again soon ❤️
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Main UI — hidden on print */}
      <section className="relative min-h-screen overflow-hidden text-white no-print">
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />

        {/* ✅ FIX: stable positions */}
        {PIZZA_POSITIONS.map((pos, i) => (
          <motion.img
            key={i}
            src="/images/pizza.webp"
            className="absolute w-14 md:w-20 opacity-10 hidden sm:block"
            style={{ top: pos.top, left: pos.left }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity }}
          />
        ))}

        <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-14">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-orange-400 drop-shadow-[0_0_30px_rgba(255,140,0,0.7)]">
              Create Premium Bill 🧾
            </h1>
            <p className="mt-4 text-orange-100/70">
              Restaurant POS Billing Experience
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-10 mt-16">
            {/* Menu */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {menuData.map((food, i) => (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-[35px]" />
                  <div className="relative overflow-hidden rounded-[35px] bg-white/5 backdrop-blur-2xl border border-white/10">
                    <div className="h-56 overflow-hidden">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-orange-300 uppercase text-xs tracking-[3px]">
                        {food.category}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">{food.name}</h2>
                      <div className="mt-5 space-y-3">
                        {food.sizes.map((size) => (
                          <motion.button
                            key={size.label}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => addItem(food, size)}
                            className="w-full flex items-center justify-between rounded-2xl bg-orange-400/10 border border-orange-400/20 px-4 py-3 hover:bg-orange-400/20 transition"
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

            {/* Bill Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-fit sticky top-6 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-4 sm:p-6"
            >
              <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-[35px]" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-black text-orange-300">
                  Live Bill 🔥
                </h2>

                <div className="mt-8 space-y-4 max-h-[500px] overflow-auto pr-2">
                  {billItems.length === 0 && (
                    <p className="text-white/50">No items added yet.</p>
                  )}
                  {billItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-black/30 border border-white/10 p-4"
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
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-9 h-9 rounded-full bg-red-500/20 border border-red-500/30 hover:bg-red-500/40 transition font-bold"
                          >
                            -
                          </button>
                          <span className="font-bold">{item.quantity}</span>
                          <button
                            onClick={() => increaseQty(item.id)}
                            className="w-9 h-9 rounded-full bg-green-500/20 border border-green-500/30 hover:bg-green-500/40 transition font-bold"
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

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold">Total</h3>
                    <span className="text-2xl sm:text-3xl font-black text-orange-300">
                      Rs {total}
                    </span>
                  </div>

                  {/* ✅ FIX: bg-gradient-to-r (not bg-linear-to-r) */}
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0px 0px 25px rgba(255,140,0,0.5)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => window.print()}
                    className="mt-6 w-full rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-400 py-4 text-black font-bold text-lg"
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
