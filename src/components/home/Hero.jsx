import { motion } from "framer-motion";

import AuroraBackground from "./AuroraBackground";
import NeuralNetwork from "./NeuralNetwork";
import HeroContent from "./HeroContent";
import AIOrb from "./AIOrb";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">

      <AuroraBackground />

      <NeuralNetwork />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-28 lg:flex-row">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <HeroContent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-1 items-center justify-center"
        >
          <AIOrb />
        </motion.div>

      </div>

    </section>
  );
}