import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "relative text-sm uppercase tracking-wider text-white/80 hover:text-yellow-300 transition";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-8 py-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide">
          🍕 Hungry Oven
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {["/", "/menu", "/deals", "/contact"].map((path, i) => {
            const names = ["Home", "Menu", "Deals", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? "text-yellow-300" : ""}`
                }
              >
                {names[i]}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-300 text-2xl"
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/60 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {["/", "/menu", "/deals", "/contact"].map((path, i) => {
                const names = ["Home", "Menu", "Deals", "Contact"];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-yellow-300 transition text-sm uppercase tracking-wider"
                  >
                    {names[i]}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
