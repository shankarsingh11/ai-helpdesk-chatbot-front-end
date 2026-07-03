import { motion } from "framer-motion";

const stats = [
  {
    number: "10K+",
    label: "Active Users",
  },
  {
    number: "50K+",
    label: "Tickets Solved",
  },
  {
    number: "99.9%",
    label: "Uptime",
  },
  {
    number: "24/7",
    label: "AI Support",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
          }}
          className="group"
        >
          <h3 className="text-3xl font-bold text-white transition group-hover:text-cyan-400">
            {stat.number}
          </h3>

          <p className="mt-2 text-slate-400">
            {stat.label}
          </p>
        </motion.div>
      ))}

    </div>
  );
}