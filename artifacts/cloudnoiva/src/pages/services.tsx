import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Cloud, ArrowRight, ShieldCheck, Cpu, MessageSquare, Settings, LifeBuoy, Code2
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration & Strategy",
    description:
      "We architect your path from legacy on-premise or mainframe environments to modern cloud infrastructure — AWS, GCP, or Azure — with zero disruption to production workloads.",
    outcomes: ["Infrastructure assessment & roadmap", "Phased migration with rollback plans", "Cost optimization modeling", "Post-migration governance"],
  },
  {
    icon: Code2,
    title: "Custom WhatsApp Bot Development",
    description:
      "Our AI team designs and builds bespoke WhatsApp automation tailored to your business logic, CRM stack, and customer journey — from initial brief to production deployment.",
    outcomes: ["Requirements workshops", "NLP model fine-tuning", "CRM/ERP integration build", "Live monitoring setup"],
  },
  {
    icon: Cpu,
    title: "Mainframe Modernization",
    description:
      "We take your COBOL, JCL, and legacy batch systems and bridge them into modern architectures — preserving business logic while exposing it via cloud-native APIs.",
    outcomes: ["JCL and COBOL assessment", "API wrapping & exposure layer", "Data pipeline migration", "Parallel-run validation"],
  },
  {
    icon: Settings,
    title: "Enterprise Integration",
    description:
      "Connect any combination of mainframe, cloud, SaaS, or on-premise systems. We design and implement integration layers that route, transform, and orchestrate data across your stack.",
    outcomes: ["End-to-end integration design", "Event-driven architecture", "ETL/ELT pipeline build", "Data schema translation"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Consulting",
    description:
      "From SOC 2 readiness to mainframe access control, our security consultants harden your systems against modern threat vectors while meeting regulatory requirements.",
    outcomes: ["Security posture assessment", "SOC 2 / ISO 27001 readiness", "Mainframe access hardening", "Penetration testing"],
  },
  {
    icon: LifeBuoy,
    title: "Managed Support & SRE",
    description:
      "24/7 site reliability engineering for CloudNoiva deployments and your broader cloud estate. We own incident response, runbooks, and SLA enforcement so your team can focus on product.",
    outcomes: ["99.99% uptime SLA", "On-call incident response", "Proactive capacity planning", "Weekly reliability reports"],
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
                from strategy to production.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              CloudNoiva's engineering and consulting teams embed with your organization to deliver
              outcomes — not slide decks. Every engagement ends with something running in production.
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            <p className="text-muted-foreground">A structured, transparent delivery process — no ambiguity, no surprise invoices.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "We map your infrastructure, objectives, and constraints in a focused workshop." },
              { step: "02", title: "Architecture", desc: "Our engineers design a solution blueprint and delivery roadmap with clear milestones." },
              { step: "03", title: "Build", desc: "Iterative delivery in 2-week sprints. You see progress early and often." },
              { step: "04", title: "Handover", desc: "Full documentation, runbooks, and a knowledge transfer session with your team." },
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
