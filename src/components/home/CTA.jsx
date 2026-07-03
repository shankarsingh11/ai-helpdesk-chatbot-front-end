import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      </div>

      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl rounded-[40px] border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-16 backdrop-blur-xl"
      >

        <div className="text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-indigo-300">

            <Sparkles size={18} />

            AI Powered Helpdesk

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-5xl font-bold text-white leading-tight">

            Start Using AI

            <br />

            Today 🚀

          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">

            Transform your support experience with AI-powered ticket
            automation, intelligent chat assistance, secure
            authentication and real-time analytics.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8"
            >
              Get Started

              <ArrowRight className="ml-2 h-5 w-5" />

            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-slate-700 bg-slate-900 text-white hover:bg-slate-800"
            >
              Contact Sales
            </Button>

          </div>

          {/* Bottom Stats */}

          <div className="mt-14 flex flex-wrap justify-center gap-10">

            <Stat title="10K+" subtitle="Active Users" />

            <Stat title="50K+" subtitle="Tickets Solved" />

            <Stat title="99.9%" subtitle="Uptime" />

            <Stat title="24/7" subtitle="AI Support" />

          </div>

        </div>

      </motion.div>

    </section>
  );
}

function Stat({ title, subtitle }) {
  return (
    <div className="text-center">

      <h3 className="text-3xl font-bold text-white">

        {title}

      </h3>

      <p className="mt-2 text-slate-400">

        {subtitle}

      </p>

    </div>
  );
}