import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Mainframe Modernization Without the Rewrite: A Pragmatic Guide",
    excerpt:
      "Most enterprises don't need to kill their mainframe — they need to expose it. Here's how we wrap decades of battle-tested COBOL in cloud-native APIs without touching a line of business logic.",
    category: "Mainframe",
    date: "June 18, 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Why WhatsApp Is the Most Underrated Enterprise Channel in 2026",
    excerpt:
      "Your customers are already on WhatsApp. Your support team isn't. We break down the numbers, the use cases, and why AI bots on WhatsApp are outperforming email and voice in B2C.",
    category: "AI Bots",
    date: "June 12, 2026",
    readTime: "6 min",
    featured: true,
  },
  {
    id: 3,
    title: "JCL Management at Scale: Lessons from 50TB of Job Catalogs",
    excerpt:
      "Running JCL Cat across a Fortune 500 mainframe estate taught us things that no textbook covers. Here are the patterns that scale and the anti-patterns that silently corrupt your catalogs.",
    category: "Mainframe",
    date: "June 5, 2026",
    readTime: "10 min",
    featured: false,
  },
  {
    id: 4,
    title: "Building NLP Pipelines for Enterprise-grade WhatsApp Bots",
    excerpt:
      "Off-the-shelf LLMs fail at domain-specific enterprise tasks. We walk through the fine-tuning and retrieval-augmented generation pipeline behind NoivaBot's industry-leading accuracy.",
    category: "AI Bots",
    date: "May 29, 2026",
    readTime: "12 min",
    featured: false,
  },
  {
    id: 5,
    title: "Cloud Strategy for CIOs: The Hybrid Mainframe Playbook",
    excerpt:
      "Full cloud migration isn't always the right answer. We map out when a hybrid mainframe-cloud architecture outperforms pure-cloud on cost, reliability, and latency — and when it doesn't.",
    category: "Cloud Strategy",
    date: "May 22, 2026",
    readTime: "9 min",
    featured: false,
  },
  {
    id: 6,
    title: "Zagnet in Production: Real-world Data Routing at 500k Events/sec",
    excerpt:
      "A case study on deploying Zagnet as the integration backbone for a tier-1 bank's mainframe-to-cloud data pipeline. The architecture, the tradeoffs, and what surprised us.",
    category: "Case Study",
    date: "May 15, 2026",
    readTime: "14 min",
    featured: false,
  },
  {
    id: 7,
    title: "SOC 2 Type II for Mainframe Environments: The Gaps No One Talks About",
    excerpt:
      "Getting SOC 2 certified with a mainframe footprint exposes gaps in your control framework that cloud-first auditors aren't prepared to handle. Here's how we've seen this go wrong — and right.",
    category: "Security",
    date: "May 8, 2026",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 8,
    title: "The Real Cost of 8bit Legacy Interfaces in Modern Enterprises",
    excerpt:
      "Mainframe-era UI layers are costing enterprises more than anyone wants to admit — in productivity, talent retention, and integration debt. 8bit CTA.in was built to fix exactly that.",
    category: "Mainframe",
    date: "May 1, 2026",
    readTime: "5 min",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Mainframe: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "AI Bots": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Cloud Strategy": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Case Study": "bg-green-500/10 text-green-400 border-green-500/20",
  Security: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Blogs() {
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-24 pb-20 relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/6 via-background to-background -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              INSIGHTS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The CloudNoiva{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                engineering blog.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Deep technical writing from the engineers building mainframe modernization and AI
              automation products. No fluff — production-grade insights only.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
            Featured
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featured.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors duration-300 cursor-pointer flex flex-col"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${categoryColors[post.category] ?? "bg-muted text-muted-foreground border-border"}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime} read
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Regular Posts */}
          <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
            All Articles
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {regular.map((post) => (
              <motion.article
                key={post.id}
                variants={item}
                className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors duration-300 cursor-pointer flex flex-col"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${categoryColors[post.category] ?? "bg-muted text-muted-foreground border-border"}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
