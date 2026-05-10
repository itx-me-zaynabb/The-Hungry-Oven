/* eslint-disable react-hooks/purity */

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const cards = [
    {
      title: "Create Bill",
      desc: "Generate premium customer bills instantly",
      icon: "🧾",
      path: "/create-bill",
    },

    {
      title: "Orders",
      desc: "Track and manage all restaurant orders",
      icon: "🍕",
      path: "/orders",
    },

    {
      title: "Analytics",
      desc: "View sales and restaurant performance",
      icon: "📊",
      path: "/analytics",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/pizza-bg.jpg"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.30),transparent_60%)]" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(10)].map((_, i) => (
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
            duration: 7 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
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
            Admin Dashboard 🔥
          </h1>

          <p className="mt-4 text-orange-100/70 text-sm sm:text-base md:text-lg">
            Control your premium restaurant experience
          </p>
        </motion.div>

        {/* 🔥 STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 max-w-6xl mx-auto">
          {[
            {
              title: "Total Orders",
              value: "1,248",
              icon: "🍕",
            },

            {
              title: "Revenue",
              value: "Rs 248K",
              icon: "💰",
            },

            {
              title: "Customers",
              value: "892",
              icon: "👨‍🍳",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
              "
            >
              {/* glow */}
              <div className="absolute inset-0 bg-orange-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="text-5xl">{item.icon}</div>

                <h2 className="mt-5 text-lg text-orange-200">{item.title}</h2>

                <p className="mt-2 text-4xl font-black text-white">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 ACTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              onClick={() => navigate(card.path)}
              className="
                group
                relative
                cursor-pointer
              "
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-[35px]" />

              {/* CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[35px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  h-full
                "
              >
                <div className="text-6xl">{card.icon}</div>

                <h2 className="mt-6 text-3xl font-bold text-orange-300">
                  {card.title}
                </h2>

                <p className="mt-4 text-white/70 leading-7">{card.desc}</p>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    mt-8
                    px-6
                    py-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-orange-400
                    to-yellow-400
                    text-black
                    font-bold
                  "
                >
                  Open
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 LOGOUT */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255,140,0,0.5)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-red-500
              to-orange-500
              text-white
              font-bold
              text-lg
            "
          >
            Logout
          </motion.button>
        </div>
      </div>
    </section>
  );
}
