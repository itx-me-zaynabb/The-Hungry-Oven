import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-all duration-200 ${
        hovering ? "w-12 h-12 bg-cheese/40" : "w-6 h-6 bg-cheese"
      }`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    />
  );
}
