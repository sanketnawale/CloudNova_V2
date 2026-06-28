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
              className="hidden"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SYSTEMS ONLINE: CLOUDNOVA V2.4
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
              Powerful integrations and AI automation bots, precision-engineered to connect legacy systems with modern digital workflows and improve customer engagement.
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

      {/* Products Highlights */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Engineered for absolute reliability.</h2>
              <p className="text-lg text-muted-foreground">From legacy system integrations to autonomous AI bots, CloudNova products help businesses automate workflows, connect platforms, and operate with confidence.</p>
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
              <h3 className="text-2xl font-bold mb-4">Developer & Operations Tools</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                CloudNova builds technical tools for developers and operations teams, helping them automate repetitive tasks, analyze workflows, and connect traditional systems with modern cloud operations.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Workflow Automation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Job & System Support</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> AI-assisted Technical Operations</li>
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
              <h3 className="text-2xl font-bold mb-4">Custom AI Bot Solutions</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                CloudNova builds autonomous AI bots for industry-specific workflows, helping businesses guide users, answer questions, process requests, and automate support operations.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Natural Language Conversations</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Scalable Bot Architecture</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Backend & API Integrations</li>
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
            Schedule a technical deep-dive with our engineering team to see CloudNova in action.
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
