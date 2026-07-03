import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: "12%", y: "18%" },
  { id: 2, x: "28%", y: "28%" },
  { id: 3, x: "18%", y: "52%" },
  { id: 4, x: "42%", y: "18%" },
  { id: 5, x: "55%", y: "35%" },
  { id: 6, x: "38%", y: "58%" },
  { id: 7, x: "68%", y: "22%" },
  { id: 8, x: "82%", y: "42%" },
  { id: 9, x: "70%", y: "68%" },
];

const lines = [
  [1, 2],
  [2, 3],
  [2, 4],
  [4, 5],
  [5, 6],
  [5, 7],
  [7, 8],
  [8, 9],
  [6, 9],
];

export default function NeuralNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">

      {/* Connection Lines */}

      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {lines.map(([start, end], index) => {
          const a = nodes.find((n) => n.id === start);
          const b = nodes.find((n) => n.id === end);

          return (
            <motion.line
              key={index}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(99,102,241,0.25)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: index * 0.15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </svg>

      {/* AI Nodes */}

      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: node.x,
            top: node.y,
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            delay: index * 0.25,
            repeat: Infinity,
          }}
        >
          <div className="relative">

            {/* Glow */}

            <div className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-xl" />

            {/* Node */}

            <div className="relative h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />

          </div>
        </motion.div>
      ))}
    </div>
  );
}