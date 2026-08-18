import { motion } from "framer-motion";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  // ✅ NEW POST — Welcome to CloudNova
  {
    id: 0,
    slug: "welcome-to-cloudnova",
    title: "Welcome to CloudNova: Building Automation Products from the Ground Up",
    excerpt:
      "CloudNova started with a simple idea: build useful technology that solves real operational problems. Here is how we got started and what we are building.",
    category: "Company",
    date: "June 28, 2026",
    readTime: "5 min",
    featured: true,
  },
  
 
  {
    id: 1,
    slug: "jcl-cat",
    title: "JCL Cat: Bringing JCL Validation into the Modern DevOps Era",
    excerpt:
      "Why JCL Cat was built, how it helps developers validate JCL earlier, and how version 2 brings profiles, Docker support, and a stronger DevOps workflow.",
    category: "Mainframe",
    date: "June 28, 2026",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 2,
    slug: "avvisami-multilingual-permit-updates",
    title: "Avvisami: Multilingual Permit Status Updates",
    excerpt:
      "How Avvisami helps users track permit progress with multilingual notifications, clearer communication, and faster updates without repeated manual checking.",
    category: "AI Bots",
    date: "June 28, 2026",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 3,
    slug: "monitoring-launch",
    title: "CloudNova Monitoring Is Live",
    excerpt:
      "A live monitoring page now shows the Avvisami Telegram dashboard with activity, status, and growth in one place.",
    category: "Company",
    date: "July 4, 2026",
    readTime: "4 min",
    featured: false,
  },
  {
    id: 4,
    slug: "z-agent-live",
    title: "Z-Agent is Live: A Small Step Toward Modern IBM Z Operations",
    excerpt:
      "Z-Agent is now live: a modern web experience for exploring IBM Z operations, job output, spool data, datasets, USS files, and AI-assisted guidance.",
    category: "Mainframe",
    date: "July 25, 2026",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 5,
    slug: "welcoming-feryal-akmoum",
    title: "Welcoming Feryal Akmoum to CloudNova",
    excerpt:
      "CloudNova welcomes Feryal Akmoum from Algeria as a Business Consultant, supporting practical business improvement and long-term growth.",
    category: "People & Culture",
    date: "July 25, 2026",
    readTime: "2 min",
    featured: false,
    image: "/feryal-akmoum-preview.jpeg",
  },
  {
    id: 6,
    slug: "mira-launch",
    title: "Introducing MIRA: Track Your Permesso di Soggiorno on WhatsApp",
    excerpt:
      "MIRA is CloudNova's new WhatsApp assistant that monitors your permesso di soggiorno and notifies you the moment your status changes.",
    category: "Product Launch",
    date: "July 30, 2026",
    readTime: "3 min",
    featured: true,
    image: "/mira-logo.svg",
  },
  {
    id: 7,
    slug: "mira-whatsapp-monitoring",
    title: "MIRA WhatsApp Monitoring Is Live",
    excerpt:
      "CloudNova now has a live dashboard for MIRA, showing aggregated WhatsApp activity, tracking cases, notification trends, and service growth.",
    category: "Product Updates",
    date: "August 18, 2026",
    readTime: "3 min",
    featured: true,
    image: "/mira-logo.svg",
  },
];

const categoryColors: Record<string, string> = {
  Mainframe: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "AI Bots": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Cloud Strategy": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Case Study": "bg-green-500/10 text-green-400 border-green-500/20",
  Security: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Company: "bg-primary/10 text-primary border-primary/20",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// Wraps a card in a Link if slug exists, otherwise just renders the card
function MaybeLink({
  slug,
  children,
}: {
  slug: string | null;
  children: React.ReactNode;
}) {
  if (slug) {
    return <Link href={`/blog/${slug}`}>{children}</Link>;
  }
  return <>{children}</>;
}

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
              The CloudNova{" "}
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
              <MaybeLink key={post.id} slug={post.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors duration-300 cursor-pointer flex flex-col h-full"
                  data-testid={`card-blog-${post.id}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                        categoryColors[post.category] ??
                        "bg-muted text-muted-foreground border-border"
                      }`}
                    >
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
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-border/40">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.article>
              </MaybeLink>
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
              <MaybeLink key={post.id} slug={post.slug}>
                <motion.article
                  variants={item}
                  className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors duration-300 cursor-pointer flex flex-col h-full"
                  data-testid={`card-blog-${post.id}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                        categoryColors[post.category] ??
                        "bg-muted text-muted-foreground border-border"
                      }`}
                    >
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
              </MaybeLink>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}