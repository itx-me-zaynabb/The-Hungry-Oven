/* eslint-disable react-hooks/purity */

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

export default function CreateBill() {
  const [billItems, setBillItems] = useState([]);

  // ✅ FIXED: date added safely
  const date = new Date().toLocaleString();

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

  const increaseQty = (id) => {
    setBillItems(
      billItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setBillItems(
      billItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const total = billItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      {/* 🖨️ PRINT CSS */}
      <style>{`
        .print-bill { display: none; }

        @media print {
          body * { visibility: hidden; }

          .print-bill,
          .print-bill * { visibility: visible; }

          .print-bill {
            display: block !important;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: white;
          }

          .receipt {
            width: 280px;
            margin: auto;
            font-family: monospace;
            color: black;
            text-align: center;
          }

          .item {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin: 6px 0;
          }

          hr {
            border: none;
            border-top: 1px dashed black;
            margin: 10px 0;
          }

          @page {
            size: 80mm auto;
            margin: 0;
          }
        }
      `}</style>

      {/* 🧾 PRINT RECEIPT */}
      <div className="print-bill">
        <div className="receipt">
          <h1>🍕 Hungry Oven</h1>
          <p>{date}</p>
          <hr />

          {billItems.map((item) => (
            <div key={item.id} className="item">
              <span>
                {item.name} ({item.size})
              </span>
              <span>
                {item.quantity} x Rs {item.price}
              </span>
            </div>
          ))}

          <hr />
          <h2>Total: Rs {total}</h2>
          <p>✨ Thank you for your order ❤️</p>
        </div>
      </div>

      {/* 🔥 MAIN UI */}
      <section className="relative min-h-screen text-white no-print">
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 p-10">
          <h1 className="text-4xl font-bold text-center text-orange-400">
            Create Premium Bill 🧾
          </h1>

          <div className="grid lg:grid-cols-[1fr_400px] gap-10 mt-10">
            {/* MENU */}
            <div className="grid sm:grid-cols-2 gap-6">
              {menuData.map((food) => (
                <div key={food.id} className="bg-white/10 p-4 rounded-xl">
                  <h2 className="text-xl font-bold">{food.name}</h2>

                  {food.sizes.map((size) => (
                    <button
                      key={size.label}
                      onClick={() => addItem(food, size)}
                      className="block w-full mt-2 bg-orange-500/20 p-2 rounded"
                    >
                      {size.label} - Rs {size.price}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* BILL */}
            <div className="bg-white/10 p-5 rounded-xl">
              <h2 className="text-2xl font-bold">Live Bill</h2>

              {billItems.map((item) => (
                <div key={item.id} className="flex justify-between mt-3">
                  <div>
                    {item.name} ({item.size})
                  </div>

                  <div>
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <div>Rs {item.price * item.quantity}</div>
                </div>
              ))}

              <h3 className="mt-5 text-xl font-bold">Total: Rs {total}</h3>

              <button
                onClick={() => window.print()}
                className="mt-5 w-full bg-orange-500 py-3 rounded"
              >
                Print Bill 🖨️
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
