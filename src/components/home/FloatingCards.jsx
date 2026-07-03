import { motion } from "framer-motion";
import {
  Bot,
  FileText,
  Mic,
  TicketCheck,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

const cards = [
  {
    title: "AI Assistant",
    subtitle: "Hello! How can I help today?",
    icon: Bot,
    color: "text-cyan-400",
    position:
      "top-0 left-0 lg:-left-8 lg:top-6",
    delay: 0,
  },
  {
    title: "Voice Assistant",
    subtitle: "Listening...",
    icon: Mic,
    color: "text-green-400",
    position:
      "top-8 right-0 lg:-right-12",
    delay: .4,
  },
  {
    title: "PDF Uploaded",
    subtitle: "Policy.pdf",
    icon: FileText,
    color: "text-orange-400",
    position:
      "bottom-24 left-0 lg:-left-14",
    delay: .8,
  },
  {
    title: "Ticket Created",
    subtitle: "#HD-10482",
    icon: TicketCheck,
    color: "text-indigo-400",
    position:
      "bottom-0 right-0 lg:-right-10",
    delay: 1.2,
  },
  {
    title: "AI Processing",
    subtitle: "Analyzing request...",
    icon: BrainCircuit,
    color: "text-violet-400",
    position:
      "top-1/2 -translate-y-1/2 left-0 lg:-left-20",
    delay: 1.6,
  },
  {
    title: "Issue Resolved",
    subtitle: "Completed Successfully",
    icon: CheckCircle2,
    color: "text-emerald-400",
    position:
      "top-1/2 -translate-y-1/2 right-0 lg:-right-20",
    delay: 2,
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card) => {

        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              scale: .8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              delay: card.delay,
              duration: 4,
              repeat: Infinity,
            }}
            className={`absolute ${card.position} hidden w-64 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:block`}
          >

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-slate-800 p-3">

                <Icon className={`${card.color} h-6 w-6`} />

              </div>

              <div>

                <h4 className="font-semibold text-white">
                  {card.title}
                </h4>

                <p className="text-sm text-slate-400">
                  {card.subtitle}
                </p>

              </div>

            </div>

          </motion.div>
        );

      })}
    </>
  );
}