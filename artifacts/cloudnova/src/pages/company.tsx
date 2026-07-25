import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcomes, not outputs",
    desc: "We measure success by what's running in production — not by lines of code written, hours billed, or decks delivered.",
  },
  {
    icon: Eye,
    title: "Radical transparency",
    desc: "We tell our clients what we see, not what they want to hear. Our reputation is built on honest assessments and honest timelines.",
  },
  {
    icon: Heart,
    title: "Built to last",
    desc: "We build systems we'd be proud to support for a decade. Shortcuts in architecture are a debt we refuse to take on.",
  },
];

const milestones = [
  {
    year: "Jul 2025",
    event: "CloudNova began product development around automation, technical workflows, and developer tools.",
  },
  {
    year: "Jan 1, 2026",
    event: "8-Bit Cat launched as an early developer-focused workflow tool.",
  },
  {
    year: "Feb 2026",
    event: "Work started on the Airport Assistance Bot for guided user support workflows.",
  },
  {
    year: "Mar 6, 2026",
    event: "Avvisami Telegram launched with smart status alerts and user notifications.",
  },
  {
    year: "Apr 2026",
    event: "Avvisami expanded toward WhatsApp to support a broader messaging workflow.",
  },
  {
    year: "Jun 19, 2026",
    event: "Z-Agent launched for job monitoring, spool analysis, dataset queries, and workflow guidance.",
  },
  {
    year: "2026+",
    event: "CloudNova continues building AI automation bots, alerting platforms, and developer operations tools.",
  },
];

export default function Company() {
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
              OUR STORY
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Built by engineers, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                for engineers.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              CloudNova builds practical automation products for real operational workflows. We focus on useful software, reliable systems, and products that reduce manual effort.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card"
                data-testid={`card-value-${i}`}
              >
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 w-fit mb-6">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/20 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The problem we couldn't stop thinking about.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CloudNova started with one simple belief: useful automation should not feel complicated.
                </p>
                <p>
                  We began in July 2025 by building ideas around developer tools, technical workflows, and automation.
                  Those experiments quickly turned into a clear direction: reduce manual work, connect systems, and help people move faster.
                </p>
                <p>
                  Since then, CloudNova has grown into a product studio focused on AI automation bots,
                  smart alerting platforms, and developer operations tools.
                </p>
                <p>
                  Today, we are still early — but the mission is clear: build practical products that solve real problems and make work easier.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute left-16 top-0 bottom-0 w-px bg-border/60" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-6"
                    data-testid={`milestone-${m.year}`}
                  >
                    <div className="w-12 text-right flex-shrink-0">
                      <span className="text-xs font-mono font-bold text-primary">{m.year}</span>
                    </div>
                    <div className="relative flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background relative z-10" />
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed pt-0.5">{m.event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to work with us?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            We build practical tools for automation, observability, and operational workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="h-12 px-8 font-semibold" data-testid="button-cta-company">
                Start a conversation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}