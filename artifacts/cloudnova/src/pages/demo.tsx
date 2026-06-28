import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageSquare, Terminal, ShieldCheck } from "lucide-react";

const trustItems = [
  { icon: Calendar, label: "Response within 24 hours" },
  { icon: MessageSquare, label: "No sales scripts — real engineers" },
  { icon: Terminal, label: "Live product walkthrough" },
  { icon: ShieldCheck, label: "NDA available on request" },
];

export default function Demo() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-24 pb-20 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/8 via-background to-background -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              GET A DEMO
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              See CloudNova{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                in production.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Schedule a technical walkthrough with our engineering team. We'll map your
              infrastructure to the right CloudNova product and show you it working against real
              workflows — not a scripted demo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Trust signals */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-10 lg:sticky lg:top-32"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">What to expect</h2>
                  <ul className="space-y-5">
                    {trustItems.map((t) => (
                      <li
                        key={t.label}
                        className="flex items-center gap-4"
                        data-testid={`item-trust-${t.label.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        <div className="bg-primary/10 p-2.5 rounded-lg border border-primary/20 flex-shrink-0">
                          <t.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground/90">{t.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right: Setmore booking */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-2xl border border-border bg-card p-4 md:p-6 overflow-hidden"
              >
                <div className="mb-4 md:mb-6">
                  <h2 className="text-xl font-bold mb-1">Book a demo</h2>
                  <p className="text-sm text-muted-foreground">
                    Pick a time directly from our live scheduling page.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-border/50 bg-background">
                  <iframe
                    src="https://cloudnovabbcc.setmore.com"
                    title="CloudNova Setmore Booking"
                    className="w-full min-h-[820px]"
                    style={{ border: 0 }}
                  />
                </div>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  If the scheduler does not load,{" "}
                  <a
                    href="https://cloudnovabbcc.setmore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    open the booking page in a new tab
                  </a>
                  .
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}