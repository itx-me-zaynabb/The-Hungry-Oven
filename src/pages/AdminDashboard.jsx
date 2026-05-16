/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */

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
      glow: "from-orange-500/30 to-yellow-500/10",
    },

    {
      title: "Orders",
      desc: "Track and manage all restaurant orders",
      icon: "🍕",
      path: "/orders",
      glow: "from-red-500/30 to-orange-500/10",
    },

    {
      title: "Analytics",
      desc: "View sales and restaurant performance",
      icon: "📊",
      path: "/analytics",
      glow: "from-yellow-500/30 to-orange-500/10",
    },
  ];

  const stats = [
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
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* 🍕 BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/pizza-bg.jpg"
          alt=""
          className="
            w-full
            h-full
            object-cover
            scale-110
            opacity-40
            animate-pulse
          "
        />
      </div>

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* 🔥 RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.35),transparent_60%)]" />

      {/* 🍕 FLOATING PIZZAS */}
      {[...Array(14)].map((_, i) => (
        <motion.img
          key={i}
          src="/images/pizza.webp"
          className="
            absolute
            w-10
            sm:w-14
            md:w-20
            opacity-10
            pointer-events-none
          "
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute
              rounded-full
              bg-orange-400
              opacity-30
            "
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div
        className="
          relative
          z-10
          px-4
          sm:px-6
          lg:px-10
          py-10
          sm:py-14
        "
      >
        {/* 🔥 TOP BAR */}
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <motion.h1
              animate={{
                textShadow: [
                  "0px 0px 15px rgba(255,140,0,0.3)",
                  "0px 0px 35px rgba(255,140,0,0.8)",
                  "0px 0px 15px rgba(255,140,0,0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                text-orange-400
              "
            >
              Hungry Oven 🔥
            </motion.h1>

            <p
              className="
                mt-3
                text-sm
                sm:text-base
                text-orange-100/70
              "
            >
              Premium Restaurant Admin Experience
            </p>
          </div>

          {/* RIGHT */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              px-6
              py-4
              text-center
              shadow-[0_0_30px_rgba(255,140,0,0.15)]
            "
          >
            <p className="text-sm text-orange-200/70">Welcome Back 👑</p>

            <h2 className="mt-1 text-xl font-bold">Admin Panel</h2>
          </motion.div>
        </motion.div>

        {/* 📊 STATS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-6
            mt-14
            max-w-7xl
            mx-auto
          "
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-7
                shadow-[0_0_40px_rgba(255,140,0,0.12)]
              "
            >
              {/* glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-orange-500/10
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "
              />

              {/* shine */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-0
                  left-0
                  w-1/2
                  h-full
                  bg-white/10
                  skew-x-12
                "
              />

              <div className="relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="text-5xl"
                >
                  {item.icon}
                </motion.div>

                <h2
                  className="
                    mt-5
                    text-lg
                    text-orange-200
                  "
                >
                  {item.title}
                </h2>

                <p
                  className="
                    mt-2
                    text-4xl
                    sm:text-5xl
                    font-black
                  "
                >
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 ACTION CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-16
            max-w-7xl
            mx-auto
          "
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.2,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              onClick={() => navigate(card.path)}
              className="
                group
                relative
                cursor-pointer
              "
            >
              {/* animated glow */}
              <div
                className={`
                  absolute
                  inset-0
                  rounded-[40px]
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  ${card.glow}
                `}
              />

              {/* card */}
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
                  shadow-[0_0_45px_rgba(255,140,0,0.12)]
                "
              >
                {/* animated border */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    -top-32
                    -right-32
                    w-64
                    h-64
                    rounded-full
                    border
                    border-orange-400/10
                  "
                />

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="text-6xl"
                >
                  {card.icon}
                </motion.div>

                <h2
                  className="
                    mt-6
                    text-2xl
                    sm:text-3xl
                    font-black
                    text-orange-300
                  "
                >
                  {card.title}
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    leading-7
                    text-white/70
                  "
                >
                  {card.desc}
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    mt-8
                    rounded-2xl
                    bg-gradient-to-r
                    from-orange-400
                    to-yellow-300
                    px-6
                    py-3
                    text-sm
                    sm:text-base
                    font-black
                    text-black
                    shadow-[0_0_25px_rgba(255,140,0,0.35)]
                  "
                >
                  Open Dashboard →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 QUICK ACTIONS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            mt-16
            max-w-7xl
            mx-auto
            rounded-[35px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-6
            sm:p-8
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-6
            "
          >
            <div className="text-center lg:text-left">
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-orange-300
                "
              >
                Restaurant Control Center 🍕
              </h2>

              <p className="mt-3 text-white/70">
                Manage orders, customers, analytics & restaurant operations.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                rounded-full
                bg-gradient-to-r
                from-orange-400
                to-yellow-300
                px-8
                py-4
                text-black
                font-black
                shadow-[0_0_30px_rgba(255,140,0,0.35)]
              "
            >
              Explore Features 🚀
            </motion.button>
          </div>
        </motion.div>

        {/* 🚪 LOGOUT */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 30px rgba(255,100,0,0.5)",
            }}
            whileTap={{
              scale: 0.94,
            }}
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="
              rounded-full
              bg-gradient-to-r
              from-red-500
              via-orange-500
              to-yellow-400
              px-10
              py-4
              text-base
              sm:text-lg
              font-black
              text-white
              shadow-[0_0_35px_rgba(255,100,0,0.35)]
            "
          >
            Logout 🔥
          </motion.button>
        </div>
      </div>
    </section>
  );
}
