import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/deals", name: "Deals" },
    { path: "/contact", name: "Contact" },
    { path: "/login", name: "Admin" },
  ];

  const linkClass =
    "relative text-sm uppercase tracking-[3px] text-white/75 hover:text-orange-300 transition duration-300";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-white/10
        bg-black/35
        backdrop-blur-2xl
      "
    >
      {/* 🔥 TOP GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        {/* 🍕 LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-gradient-to-br
              from-orange-400
              to-yellow-300
              flex
              items-center
              justify-center
              shadow-[0_0_25px_rgba(255,140,0,0.45)]
            "
          >
            🍕
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-black text-orange-300 tracking-wide">
              Hungry Oven
            </h1>

            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[4px]">
              Premium Taste
            </p>
          </div>
        </motion.div>

        {/* 🖥 DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "text-orange-300" : ""}`
              }
            >
              {({ isActive }) => (
                <div className="relative">
                  {item.name}

                  {isActive && (
                    <motion.div
                      layoutId="navGlow"
                      className="
                        absolute
                        -bottom-2
                        left-0
                        w-full
                        h-[2px]
                        bg-orange-400
                        rounded-full
                        shadow-[0_0_15px_rgba(255,140,0,0.9)]
                      "
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}

          {/* 🔥 ORDER BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255,140,0,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            className="
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-orange-400
              to-yellow-300
              text-black
              font-bold
              text-sm
              shadow-[0_0_25px_rgba(255,140,0,0.4)]
            "
          >
            Order Now
          </motion.button>
        </div>

        {/* 📱 MOBILE MENU BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            w-11
            h-11
            rounded-xl
            bg-white/10
            border
            border-white/10
            flex
            items-center
            justify-center
            text-orange-300
            text-2xl
            backdrop-blur-xl
          "
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="
              md:hidden
              overflow-hidden
              border-t
              border-white/10
              bg-black/70
              backdrop-blur-2xl
            "
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    text-sm
                    uppercase
                    tracking-[3px]
                    transition
                    ${
                      isActive
                        ? "text-orange-300"
                        : "text-white/75 hover:text-orange-300"
                    }
                  `
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* MOBILE BUTTON */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{
                  boxShadow: "0px 0px 20px rgba(255,140,0,0.5)",
                }}
                className="
                  mt-3
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-orange-400
                  to-yellow-300
                  text-black
                  font-bold
                "
              >
                Order Now 🍕
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
