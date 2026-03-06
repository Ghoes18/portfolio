import { motion } from "framer-motion";

export interface Capability {
  id: string;
  title: string;
  description: string;
  category: "backend" | "frontend" | "devops";
}

interface CapabilityCardsProps {
  capabilities: readonly Capability[];
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function CapabilityCards({
  capabilities,
}: Readonly<CapabilityCardsProps>) {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
    >
      {capabilities.map((item) => (
        <motion.article
          key={item.id}
          variants={card}
          className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/40"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <span
            className="absolute left-0 top-0 h-full w-1 bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            aria-hidden
          />
          <h3 className="text-h2 mb-3 font-bold uppercase tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="text-body-sm text-muted-foreground">{item.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
