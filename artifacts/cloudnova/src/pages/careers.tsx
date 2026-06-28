import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const roles = [
  {
    title: "Marketing Manager",
    type: "Full-time / Contract",
    location: "Remote",
    description:
      "Lead CloudNova’s marketing execution across content, campaigns, product positioning, and growth initiatives. You will also support early sales efforts, partnerships, and pipeline development as we grow.",
  },
  {
    title: "Sales & Partnerships",
    type: "Flexible",
    location: "Remote",
    description:
      "Help us build relationships with customers, partners, and distribution channels. This role focuses on outreach, deal flow, partnerships, and turning market interest into real conversations.",
  },
];

const principles = [
  "Small team, real ownership",
  "Build practical systems, not slide decks",
  "Automation-first mindset",
  "Remote-friendly and execution-focused",
];

export default function Careers() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-24 pb-20 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-background to-background -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              CAREERS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Build tools that help real teams move faster.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              CloudNova is building practical automation products across alerting,
              AI workflows, developer tooling, and operational systems.
              We care about clarity, reliability, and shipping useful things.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">How we work</h2>
            <ul className="space-y-4">
              {principles.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground border-b border-border/40 pb-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {role.type} · {role.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full border bg-primary/10 text-primary border-primary/20 w-fit">
                    OPEN
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {role.description}
                </p>
                <a
                  href="https://cloudnovabbcc.setmore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="font-semibold">
                    Start a conversation
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}