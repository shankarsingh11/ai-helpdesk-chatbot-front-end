import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <>

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl"
      >
        <Sparkles size={16} />

        AI Powered Helpdesk
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-black leading-tight text-white md:text-7xl"
      >
        Smart AI Support

        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
          For Modern Teams
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
      >
        AI Helpdesk combines intelligent conversations,
        ticket management, document understanding,
        voice commands and workflow automation into
        one powerful platform.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex flex-wrap gap-5"
      >

        <Button
          size="lg"
          className="rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-8"
        >
          Get Started

          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="rounded-full border-slate-700 bg-slate-900 text-white hover:bg-slate-800"
        >
          <Play className="mr-2 h-5 w-5" />

          Watch Demo
        </Button>

      </motion.div>

      <HeroStats />

    </>
  );
}