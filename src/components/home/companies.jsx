import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "GitHub",
  "Docker",
  "Slack",
  "Vercel",
];

export default function Companies() {
  return (
    <section className="border-y border-slate-800 bg-slate-950 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-lg font-medium tracking-wide text-slate-400"
        >
          Trusted by Developers & Modern Teams
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {companies.map((company) => (
            <motion.div
              key={company}
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              className="flex h-24 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <h3 className="text-lg font-semibold text-slate-300">
                {company}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}