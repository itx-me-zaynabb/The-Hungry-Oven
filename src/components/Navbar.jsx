import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const linkClass =
    "relative text-sm uppercase tracking-wider hover:text-cheese transition";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-display text-cheese tracking-wide">
          The Hungry Oven
        </h1>

        {/* Links */}
        <div className="flex gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/menu" className={linkClass}>
            Menu
          </NavLink>

          <NavLink to="/deals" className={linkClass}>
            Deals
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
}
