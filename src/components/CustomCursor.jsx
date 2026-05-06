import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* MAIN DOT */}
      <div
        className="fixed top-0 left-0 z-[99999] pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      >
        <div className="w-4 h-4 bg-cheese rounded-full shadow-lg shadow-cheese/50" />
      </div>

      {/* OUTER GLOW */}
      <div
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      >
        <div className="w-10 h-10 border border-cheese/40 rounded-full opacity-60" />
      </div>
    </>
  );
}
