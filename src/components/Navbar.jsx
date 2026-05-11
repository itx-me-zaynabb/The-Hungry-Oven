import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // 🔥 AUTH DATA (backend NestJS JWT based)
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/deals", name: "Deals" },
    { path: "/contact", name: "Contact" },
  ];

  const linkClass =
    "relative text-sm uppercase tracking-[3px] text-white/75 hover:text-orange-300 transition";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-white/10
        bg-black/35 backdrop-blur-2xl
      "
    >
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        {/* 🍕 LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-orange-400 to-yellow-300 flex items-center justify-center">
            🍕
          </div>

          <h1 className="text-orange-300 font-bold text-lg">Hungry Oven</h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {/* NORMAL LINKS */}
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}

          {/* 🔥 ADMIN LINKS ONLY */}
          {token && role === "admin" && (
            <>
              <NavLink
                to="/admin"
                className="text-orange-300 uppercase text-sm"
              >
                Admin
              </NavLink>

              <NavLink
                to="/create-bill"
                className="text-orange-300 uppercase text-sm"
              >
                Create Bill
              </NavLink>
            </>
          )}

          {/* LOGIN / LOGOUT */}
          {!token ? (
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
          ) : (
            <button
              onClick={logout}
              className="
                px-5 py-2 rounded-full
                bg-red-500/80 text-white
                text-sm font-bold
              "
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-orange-300 text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/70"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-white/80 uppercase text-sm"
                >
                  {item.name}
                </NavLink>
              ))}

              {/* ADMIN MOBILE */}
              {token && role === "admin" && (
                <>
                  <NavLink
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="text-orange-300 uppercase text-sm"
                  >
                    Admin
                  </NavLink>

                  <NavLink
                    to="/create-bill"
                    onClick={() => setOpen(false)}
                    className="text-orange-300 uppercase text-sm"
                  >
                    Create Bill
                  </NavLink>
                </>
              )}

              {/* AUTH */}
              {!token ? (
                <NavLink to="/login" onClick={() => setOpen(false)}>
                  Login
                </NavLink>
              ) : (
                <button onClick={logout} className="text-red-400 text-left">
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
