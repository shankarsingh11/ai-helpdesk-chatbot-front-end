import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  FileText,
  MessageSquare,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const particles = [
  {
    Icon: Bot,
    color: "text-cyan-400/20",
    size: 42,
    top: "10%",
    left: "8%",
    duration: 10,
  },
  {
    Icon: BrainCircuit,
    color: "text-violet-400/20",
    size: 50,
    top: "25%",
    right: "12%",
    duration: 12,
  },
  {
    Icon: MessageSquare,
    color: "text-indigo-400/20",
    size: 36,
    top: "70%",
    left: "15%",
    duration: 11,
  },
  {
    Icon: FileText,
    color: "text-cyan-300/20",
    size: 40,
    top: "75%",
    right: "18%",
    duration: 13,
  },
  {
    Icon: Sparkles,
    color: "text-yellow-300/30",
    size: 30,
    top: "45%",
    left: "50%",
    duration: 9,
  },
  {
    Icon: ShieldCheck,
    color: "text-green-400/20",
    size: 38,
    top: "18%",
    left: "72%",
    duration: 14,
  },
];

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {particles.map((item, index) => {

        const Icon = item.Icon;

        return (

          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
              rotate: [0, 12, -12, 0],
              opacity: [0.15, 0.45, 0.15],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: item.duration,
              ease: "easeInOut",
            }}
          >
            <Icon size={item.size} />
          </motion.div>

        );

      })}
    </div>
  );
}