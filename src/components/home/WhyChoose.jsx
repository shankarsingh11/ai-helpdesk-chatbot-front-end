import { motion } from "framer-motion";
import {
  Bot,
  ShieldCheck,
  BrainCircuit,
  FileText,
  Mic,
  TicketCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Powered Assistance",
    description: "Get instant answers using intelligent AI agents."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "JWT, OAuth2, encrypted communication and role-based access."
  },
  {
    icon: TicketCheck,
    title: "Smart Ticket Management",
    description: "Automatically create, assign and track support tickets."
  },
  {
    icon: FileText,
    title: "Document Understanding",
    description: "Upload PDFs and documents for AI-powered analysis."
  },
  {
    icon: Mic,
    title: "Voice Assistant",
    description: "Interact naturally using speech recognition."
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="relative"
        >

          {/* Glow */}

          <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-indigo-600/20 blur-[120px]" />

          {/* Dashboard */}

          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-4">

                <Bot className="h-10 w-10 text-white" />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  AI Assistant
                </h3>

                <p className="text-slate-400">
                  Online • Ready to Help
                </p>

              </div>

            </div>

            <div className="mt-10 space-y-5">

              <Card
                title="Average Response"
                value="2 Seconds"
              />

              <Card
                title="Resolved Tickets"
                value="50,000+"
              />

              <Card
                title="Customer Satisfaction"
                value="98%"
              />

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="font-semibold uppercase tracking-widest text-indigo-400">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-white">
            AI That Works
            <br />
            Like Your Best Support Engineer
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Reduce response time, improve customer satisfaction,
            automate repetitive work and empower your support team
            using artificial intelligence.
          </p>

          <div className="mt-12 space-y-8">

            {features.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  whileHover={{ x: 10 }}
                  className="flex gap-5"
                >

                  <div className="rounded-xl bg-indigo-600/20 p-3">

                    <Icon className="h-6 w-6 text-indigo-400" />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

          <Button
            size="lg"
            className="mt-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"
          >
            Learn More

            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>

        </motion.div>

      </div>

    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">

      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}