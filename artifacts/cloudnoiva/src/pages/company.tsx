import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const team = [
  {
    name: "Rafael Noiva",
    role: "Founder & CEO",
    bio: "Former IBM mainframe engineer turned cloud architect. Built CloudNoiva after spending a decade watching enterprises struggle to bridge legacy and modern infrastructure.",
    initials: "RN",
    color: "from-cyan-500 to-primary",
  },
  {
    name: "Sofia Almeida",
    role: "Chief Technology Officer",
    bio: "20 years in distributed systems and enterprise integration. Led cloud migration programs at two Fortune 100 companies before joining CloudNoiva.",
    initials: "SA",
    color: "from-violet-500 to-cyan-500",
  },
  {
    name: "Marcus Chen",
    role: "Head of AI Products",
    bio: "NLP researcher turned product leader. Designed the conversation engine powering NoivaBot's industry-leading accuracy across 12 languages.",
    initials: "MC",
    color: "from-amber-500 to-rose-500",
  },
  {
    name: "Priya Kapoor",
    role: "VP of Engineering",
    bio: "Site reliability engineer and mainframe specialist who designed Zagnet's high-throughput data routing architecture from the ground up.",
    initials: "PK",
    color: "from-green-500 to-cyan-500",
  },
  {
    name: "Lucas Ferreira",
    role: "Head of Customer Success",
    bio: "Systems integrator with 15 years of enterprise delivery experience. Leads the team that gets CloudNoiva from contract to production in record time.",
    initials: "LF",
    color: "from-rose-500 to-violet-500",
  },
  {
    name: "Ana Torres",
    role: "VP of Sales & Partnerships",
    bio: "Enterprise technology sales leader who built the partnership network that brought CloudNoiva products to markets across four continents.",
    initials: "AT",
    color: "from-primary to-green-500",
  },
];

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
  { year: "2019", event: "CloudNoiva founded in São Paulo. First product: JCL Cat." },
  { year: "2021", event: "Zagnet launched. First enterprise deployment at a tier-1 Brazilian bank." },
  { year: "2022", event: "Series A funding. Expanded to Portugal and the UK." },
  { year: "2023", event: "NoivaBot Engage released. 10M WhatsApp messages processed in the first month." },
  { year: "2024", event: "8bit CTA.in launched. 50+ enterprise clients globally." },
  { year: "2025", event: "NoivaBot Support released. ISO 27001 and SOC 2 Type II certified." },
  { year: "2026", event: "CloudNoiva V2 platform launched. Operating in 12 countries." },
];

export default function Company() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
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
              CloudNoiva was founded by people who lived the pain of bridging mainframe infrastructure
              and modern cloud expectations. We didn't come from consulting — we came from the
              engine room.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
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

      {/* Story */}
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
                  In 2019, our founder Rafael spent six months on a mainframe modernization project
                  that should have taken three. The tools didn't fit the problem, the consultants
                  were charging for slide decks, and the enterprise had no path from here to there.
                </p>
                <p>
                  So he built JCL Cat on a weekend. Then Zagnet. Then a WhatsApp bot that cut the
                  client's support costs by 40% in 60 days. CloudNoiva grew out of a simple
                  conviction: enterprises deserve tools that work as hard as the people running them.
                </p>
                <p>
                  Today we operate across 12 countries with 50+ enterprise clients — and we still
                  obsess over the same things we always have: reliability, honesty, and shipping
                  things that run for years without drama.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
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

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The team</h2>
            <p className="text-muted-foreground">
              Engineers, researchers, and operators who've collectively spent over 150 years in
              enterprise infrastructure and AI.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
                data-testid={`card-team-${person.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${person.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{person.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{person.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to work with us?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            We're always looking for engineers who care deeply about reliability and craft.
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
