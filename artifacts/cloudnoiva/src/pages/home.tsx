import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Server, MessageSquare, ShieldCheck, Zap, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 text-primary text-sm font-mono mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SYSTEMS ONLINE: CLOUDNOIVA V2.4
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            >
              Next-generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">cloud ops</span> for the modern enterprise.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Powerful mainframe integration and AI-driven engagement tools, precision-engineered to bridge legacy systems and modern agility.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/demo">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                  Deploy Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto border-border hover:bg-secondary">
                  Explore Products
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-y border-border/40 bg-secondary/30 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Uptime SLA", value: "99.999%", icon: Activity },
              { label: "Latency", value: "<12ms", icon: Zap },
              { label: "Data Secured", value: "SOC 2 Type II", icon: ShieldCheck },
              { label: "Deployments", value: "Zero-Downtime", icon: Server },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center space-y-2"
              >
                <metric.icon className="w-6 h-6 text-primary/70 mb-2" />
                <h4 className="text-3xl font-bold font-mono text-foreground">{metric.value}</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Highlights */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for absolute reliability.</h2>
              <p className="text-lg text-muted-foreground">From mission-critical mainframe tools to high-throughput WhatsApp bots, CloudNoiva products deliver performance without compromise.</p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="group">
                View full catalog <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors p-8 md:p-12"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/20 transition-colors" />
              <Terminal className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-2xl font-bold mb-4">Mainframe Solutions</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                JCL Cat, 8bit CTA.in, and Zagnet. Bridge the gap between legacy core systems and modern cloud infrastructure with zero friction.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> JCL Cataloging & Management</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Enterprise Data Connectivity</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Mainframe-era Conversions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors p-8 md:p-12"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mb-32 group-hover:bg-cyan-500/20 transition-colors" />
              <MessageSquare className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-2xl font-bold mb-4">AI WhatsApp Bots</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Engage customers where they already are. Deploy autonomous, intelligent agents that handle scale natively.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Natural Language Processing</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> High-throughput Architecture</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> CRM & ERP Integrations</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 border-t border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your infrastructure?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Schedule a technical deep-dive with our engineering team to see CloudNoiva in action.
          </p>
          <Link href="/demo">
            <Button size="lg" className="h-14 px-10 text-lg">
              Request a Technical Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
