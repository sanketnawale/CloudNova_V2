import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, Terminal, Database, Zap } from "lucide-react";

const bots = [
  {
    name: "NoivaBot Engage",
    tagline: "AI-powered customer engagement at scale",
    description:
      "Deploy intelligent conversational agents on WhatsApp that understand natural language, handle complex queries, and integrate seamlessly with your CRM and ERP systems.",
    features: ["Natural Language Processing", "CRM & ERP Integration", "Multi-language Support", "Real-time Analytics"],
    icon: MessageSquare,
    badge: "AI Bot",
    color: "from-cyan-500/20 to-primary/10",
  },
  {
    name: "NoivaBot Support",
    tagline: "Automated 24/7 customer support on WhatsApp",
    description:
      "Resolve customer issues around the clock with an AI agent that escalates intelligently, learns from every interaction, and delivers consistent brand voice.",
    features: ["Smart Escalation Logic", "Ticket Auto-creation", "Sentiment Analysis", "SLA Monitoring"],
    icon: Zap,
    badge: "AI Bot",
    color: "from-violet-500/20 to-primary/10",
  },
];

const mainframeProducts = [
  {
    name: "JCL Cat",
    tagline: "Enterprise JCL cataloging and management",
    description:
      "A precision tool for mainframe teams that brings modern catalog management to JCL workflows. Search, version, and audit your job control libraries with zero overhead.",
    features: ["Full JCL Catalog Search", "Version Control", "Audit Trail", "Batch Scheduling Integration"],
    icon: Terminal,
    badge: "Mainframe",
    color: "from-amber-500/20 to-primary/10",
  },
  {
    name: "8bit CTA.in",
    tagline: "Mainframe-era call-to-action and conversion layer",
    description:
      "Bridge legacy system outputs to modern conversion flows. 8bit CTA.in transforms mainframe-generated data into actionable, modern interfaces without rewriting core logic.",
    features: ["Legacy Output Transformation", "API Bridge Layer", "Real-time Data Relay", "Zero-rewrite Migration"],
    icon: Database,
    badge: "Mainframe",
    color: "from-green-500/20 to-primary/10",
  },
  {
    name: "Zagnet",
    tagline: "Enterprise data connectivity for mainframe systems",
    description:
      "Zagnet is the integration backbone for enterprises running mainframe infrastructure. Connect, transform, and route data between mainframe cores and modern cloud services.",
    features: ["Multi-protocol Connectors", "Real-time Data Routing", "Schema Translation", "Cloud-native Output"],
    icon: Zap,
    badge: "Mainframe",
    color: "from-rose-500/20 to-primary/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Products() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-24 pb-20 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/8 via-background to-background -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              PRODUCT CATALOG
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Tools built for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                enterprise edge.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Five precision-engineered products across two verticals — AI-powered conversation and
              mainframe modernization. Each built to run where failure is not an option.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Bots */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border/40" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest px-4 py-1.5 border border-border/40 rounded-full">
              AI WhatsApp Bots
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {bots.map((product) => (
              <motion.div
                key={product.name}
                variants={item}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300`}
                data-testid={`card-product-${product.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl ${product.color} rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none group-hover:scale-110 transition-transform duration-700`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {product.badge}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/demo">
                    <Button variant="outline" className="group/btn border-border hover:border-primary hover:bg-primary/5" data-testid={`button-demo-${product.name.replace(/\s+/g, "-").toLowerCase()}`}>
                      Request a Demo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mainframe Solutions */}
      <section className="py-20 md:py-28 border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border/40" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest px-4 py-1.5 border border-border/40 rounded-full">
              Mainframe Solutions
            </span>
            <div className="h-px flex-1 bg-border/40" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {mainframeProducts.map((product) => (
              <motion.div
                key={product.name}
                variants={item}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300"
                data-testid={`card-product-${product.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className={`absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl ${product.color} rounded-full blur-3xl -mr-28 -mt-28 pointer-events-none group-hover:scale-110 transition-transform duration-700`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {product.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/demo">
                    <Button variant="ghost" size="sm" className="group/btn hover:text-primary px-0" data-testid={`button-demo-${product.name.replace(/\s+/g, "-").toLowerCase()}`}>
                      Get a Demo
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which product fits?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Our engineering team will map your infrastructure to the right CloudNoiva stack.
          </p>
          <Link href="/demo">
            <Button size="lg" className="h-12 px-8 font-semibold" data-testid="button-cta-products">
              Talk to an Engineer <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
