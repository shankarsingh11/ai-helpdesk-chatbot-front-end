import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import FloatingCards from "./FloatingCards";

const orbitParticles = Array.from({ length: 12 });

export default function AIOrb() {
  return (
    <div
      className="
      relative
      flex
      items-center
      justify-center

      h-[340px]
      w-[340px]

      md:h-[430px]
      md:w-[430px]

      lg:h-[560px]
      lg:w-[560px]
    "
    >
      {/* ================================================= */}
      {/* Background Glow */}
      {/* ================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.65, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          h-[240px]
          w-[240px]

          md:h-[340px]
          md:w-[340px]

          rounded-full

          bg-gradient-to-r
          from-cyan-500/25
          via-indigo-500/20
          to-violet-500/20

          blur-[120px]
        "
      />

      {/* ================================================= */}
      {/* OUTER RING */}
      {/* ================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[300px]
          w-[300px]

          md:h-[380px]
          md:w-[380px]

          lg:h-[430px]
          lg:w-[430px]

          rounded-full

          border

          border-cyan-400/20

          shadow-[0_0_40px_rgba(34,211,238,.12)]
        "
      >
        <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.9)]" />
      </motion.div>

      {/* ================================================= */}
      {/* MIDDLE RING */}
      {/* ================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[240px]
          w-[240px]

          md:h-[320px]
          md:w-[320px]

          lg:h-[360px]
          lg:w-[360px]

          rounded-full

          border

          border-indigo-400/20

          shadow-[0_0_30px_rgba(99,102,241,.15)]
        "
      >
        <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-indigo-400 shadow-lg" />
      </motion.div>

      {/* ================================================= */}
      {/* INNER RING */}
      {/* ================================================= */}

      <motion.div
        aria-hidden="true"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[180px]
          w-[180px]

          md:h-[240px]
          md:w-[240px]

          rounded-full

          border

          border-violet-400/30
        "
      />

      {/* ================================================= */}
      {/* Orbiting Particles */}
      {/* ================================================= */}

      {orbitParticles.map((_, index) => {

        const angle = index * 30;

        return (
          <motion.div
            key={index}
            aria-hidden="true"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 14 + index,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{
              width: 420,
              height: 420,
              transform: `rotate(${angle}deg)`,
            }}
          >
            <div
              className="
                absolute
                left-1/2
                top-0

                h-2
                w-2

                -translate-x-1/2

                rounded-full

                bg-cyan-300

                shadow-[0_0_15px_rgba(34,211,238,.9)]
              "
            />
          </motion.div>
        );
      })}

      {/* ================================================= */}
      {/* AI Core */}
      {/* ================================================= */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          relative
          z-20

          flex

          h-40
          w-40

          md:h-44
          md:w-44

          items-center
          justify-center

          rounded-full

          border

          border-cyan-400/20

          bg-slate-900/70

          backdrop-blur-3xl

          shadow-[0_0_70px_rgba(34,211,238,.25)]
        "
      >
        {/* Inner Glow */}

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.75, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-0

            rounded-full

            bg-gradient-to-br

            from-cyan-500/30
            via-indigo-500/20
            to-violet-500/30
          "
        />

        {/* AI Icon */}

        <div className="relative z-10">

          <Bot
            size={82}
            className="text-cyan-300"
          />

        </div>
      </motion.div>

      {/* ================================================= */}
      {/* Floating Dashboard Cards */}
      {/* ================================================= */}

      <FloatingCards />

    </div>
  );
}