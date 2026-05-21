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
];

export default function CreateBill() {
  const [billItems, setBillItems] = useState([]);

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
          size: size.label,
          price: size.price,
          quantity: 1,
        },
      ]);
    }
  };

  const total = billItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      {/* ✅ PRINT ONLY STYLES */}
      <style>{`
        .screen { display: block; }

        .print-receipt { display: none; }

        @media print {
          body * {
            visibility: hidden;
          }

          .print-receipt,
          .print-receipt * {
            visibility: visible;
          }

          .print-receipt {
            position: absolute;
            left: 0;
            top: 0;
            width: 80mm;
            padding: 10px;
            font-family: monospace;
            color: black;
          }

          .receipt {
            width: 100%;
            text-align: center;
          }

          .item {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            margin: 4px 0;
          }

          hr {
            border: none;
            border-top: 1px dashed black;
            margin: 8px 0;
          }

          @page {
            size: 80mm auto;
            margin: 0;
          }

          /* hide screen UI */
          .screen {
            display: none !important;
          }
        }
      `}</style>

      {/* ===================== */}
      {/* 🧾 PRINT RECEIPT ONLY */}
      {/* ===================== */}
      <div className="print-receipt">
        <div className="receipt">
          <h2>🍕 Hungry Oven</h2>
          <p>{date}</p>

          <hr />

          {billItems.map((item) => (
            <div key={item.id} className="item">
              <span>
                {item.name} ({item.size})
              </span>
              <span>
                {item.quantity} x {item.price}
              </span>
            </div>
          ))}

          <hr />

          <h3>Total: Rs {total}</h3>

          <hr />

          <p>Thanks for your order ❤️</p>
        </div>
      </div>

      {/* ===================== */}
      {/* 🔥 SCREEN UI (NO PRINT) */}
      {/* ===================== */}
      <div className="screen">
        <section className="min-h-screen bg-black text-white p-10">
          <h1 className="text-3xl font-bold text-orange-400 text-center">
            Create Bill 🧾
          </h1>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* MENU */}
            <div>
              {menuData.map((food) => (
                <div key={food.id} className="mb-5 bg-white/10 p-4 rounded">
                  <h2 className="font-bold">{food.name}</h2>

                  {food.sizes.map((size) => (
                    <button
                      key={size.label}
                      onClick={() => addItem(food, size)}
                      className="block w-full mt-2 bg-orange-500/30 p-2 rounded"
                    >
                      {size.label} - Rs {size.price}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* BILL */}
            <div className="bg-white/10 p-5 rounded">
              <h2 className="text-xl font-bold">Live Bill</h2>

              {billItems.map((item) => (
                <div key={item.id} className="flex justify-between mt-2">
                  <span>
                    {item.name} ({item.size})
                  </span>
                  <span>{item.quantity}</span>
                  <span>Rs {item.price * item.quantity}</span>
                </div>
              ))}

              <h3 className="mt-5 font-bold">Total: Rs {total}</h3>

              <button
                onClick={() => window.print()}
                className="mt-5 w-full bg-orange-500 py-2 rounded"
              >
                Print Bill 🖨️
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
