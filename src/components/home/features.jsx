import { motion } from "framer-motion";
import {
  Bot,
  UploadCloud,
  Mic,
  ShieldCheck,
  Zap,
  ChartNoAxesCombined,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chat Assistant",
    description:
      "Ask questions and get instant AI-powered support for your IT issues.",
  },
  {
    icon: UploadCloud,
    title: "File Upload",
    description:
      "Upload PDFs, DOCX, images and documents to analyze with AI.",
  },
  {
    icon: Mic,
    title: "Voice Assistant",
    description:
      "Speak naturally and let AI understand your voice commands.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT Authentication with Google & GitHub OAuth support.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized responses with streaming AI for a better experience.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Analytics Dashboard",
    description:
      "Track tickets, AI usage, and user activity with beautiful reports.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="mb-3 font-semibold text-indigo-400">
            FEATURES
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Our AI Helpdesk combines automation, AI,
            authentication, file processing, and analytics
            into one powerful platform.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: .5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/20">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <h3 className="text-2xl font-semibold text-white">

                  {feature.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-400">

                  {feature.description}

                </p>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}