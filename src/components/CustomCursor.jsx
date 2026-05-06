import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* 🔵 OUTER GLOW RING (smooth follow feel) */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      >
        <div className="w-10 h-10 rounded-full border border-cheese/40 opacity-60 blur-[0.5px]" />
      </div>

      {/* 🟡 MAIN CORE DOT (sharp focus point) */}
      <div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      >
        <div className="w-3 h-3 bg-cheese rounded-full shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
      </div>

      {/* ✨ INNER SOFT GLOW (premium feel) */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      >
        <div className="w-16 h-16 bg-cheese/10 rounded-full blur-xl" />
      </div>
    </>
  );
}
