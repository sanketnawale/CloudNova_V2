import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Cloud, ArrowRight, Cpu, MessageSquare, Settings
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Design",
    description:
      "We design secure, scalable, and automation-ready cloud infrastructure for modern applications and enterprise workloads. From architecture planning to deployment strategy, CloudNova helps teams build a strong technical foundation.",
    outcomes: [
      "Cloud architecture planning",
      "Kubernetes and container platforms",
      "CI/CD and automation design",
      "Monitoring and reliability setup",
    ],
  },
  {
    icon: MessageSquare,
    title: "Custom AI Bot Development",
    description:
      "We build autonomous AI bots for business-specific workflows such as customer support, migration assistance, airport service support, document guidance, and operational helpdesks.",
    outcomes: [
      "Requirements and workflow design",
      "Natural language conversations",
      "Backend and API integrations",
      "Deployment and monitoring support",
    ],
  },
  {
    icon: Cpu,
    title: "Mainframe Modernization",
    description:
      "We help teams connect traditional mainframe workflows with modern tools, automation layers, and AI-assisted operations without forcing a full system rewrite from day one.",
    outcomes: [
      "JCL and batch workflow analysis",
      "Job and operations automation",
      "API and integration layer design",
      "AI-assisted mainframe tooling",
    ],
  },
  {
    icon: Settings,
    title: "Enterprise Modernization",
    description:
      "We support organizations in modernizing internal systems, connecting legacy platforms, and improving operational workflows through automation, integrations, and cloud-ready architecture.",
    outcomes: [
      "Legacy system integration",
      "Process automation",
      "Data and workflow connectivity",
      "Modern platform enablement",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-24 pb-20 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/8 via-background to-background -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              SERVICES
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Expert delivery,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                from design to production.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              CloudNova helps businesses design, build, and modernize digital systems through cloud
              infrastructure, AI automation, and enterprise integration. Every engagement is focused
              on practical engineering, clear delivery, and systems that can move toward production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={item}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors duration-300 flex flex-col"
                data-testid={`card-service-${service.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-6 border-t border-border/40">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-xs text-foreground/70">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="py-20 border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How we engage</h2>
            <p className="text-muted-foreground">
              A structured, transparent delivery process — no ambiguity, no surprise invoices.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "We understand your current systems, pain points, and business goals.",
              },
              {
                step: "02",
                title: "Design",
                desc: "We define the architecture, workflow, integration approach, and delivery roadmap.",
              },
              {
                step: "03",
                title: "Build",
                desc: "We develop the solution with clear milestones, testing, and technical documentation.",
              },
              {
                step: "04",
                title: "Deploy",
                desc: "We support production deployment, monitoring, and continuous improvement.",
              },
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
                data-testid={`card-phase-${phase.step}`}
              >
                <div className="text-4xl font-black font-mono text-primary/30 mb-4">{phase.step}</div>
                <h4 className="font-bold text-lg mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start a project?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Tell us what you are building and we will scope it honestly.
          </p>
          <Link href="/demo">
            <Button size="lg" className="h-12 px-8 font-semibold" data-testid="button-cta-services">
              Request a Technical Brief <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}