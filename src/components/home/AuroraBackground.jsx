import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Aurora Layer 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-60 -left-60 h-[650px] w-[650px] rounded-full bg-indigo-500/20 blur-[140px]"
      />

      {/* Aurora Layer 2 */}
      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-220px] top-[120px] h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[160px]"
      />

      {/* Aurora Layer 3 */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] left-[30%] h-[650px] w-[650px] rounded-full bg-violet-500/20 blur-[150px]"
      />

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />
    </div>
  );
}