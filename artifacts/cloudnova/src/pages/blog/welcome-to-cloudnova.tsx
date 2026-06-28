import { motion } from "framer-motion";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export default function BlogWelcomeToCloudNova() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="pt-24 pb-12 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/8 via-background to-background -z-10" />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              COMPANY
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Welcome to CloudNova: Building Automation Products from the Ground Up
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-mono">June 2026</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-neutral dark:prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-bold prose-li:text-muted-foreground"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CloudNova started with a simple idea: build useful technology that solves real operational problems.
            Not just dashboards. Not just landing pages. Not just AI demos. We wanted to build practical software
            products that help people automate repetitive work, receive important updates, interact with systems
            more easily, and connect traditional workflows with modern digital tools.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            CloudNova is now growing around three clear directions: AI automation bots, smart alerting platforms,
            and developer operations tools.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Why CloudNova exists</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Many businesses still depend on manual processes, repeated communication, slow status updates, and
            disconnected systems. Customers ask the same questions again and again. Teams manually check statuses.
            Technical users move between tools to understand jobs, logs, workflows, and system outputs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            CloudNova exists to reduce that friction. Our goal is to build products that make communication faster,
            operations simpler, and automation more accessible.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">What we are building</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            CloudNova is currently focused on a small but strong product catalog.
          </p>

          <div className="border border-border/60 rounded-2xl p-6 mb-6 bg-card">
            <h3 className="text-xl font-bold mb-2">Avvisami</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Avvisami is our smart alerting product. It helps users receive timely updates, reminders, and status
              notifications through simple messaging channels. The idea is clear: users should not need to check
              the same website or system again and again. The system should notify them when something important changes.
            </p>
          </div>

          <div className="border border-border/60 rounded-2xl p-6 mb-6 bg-card">
            <h3 className="text-xl font-bold mb-2">Custom AI Bot Solutions</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are building autonomous AI bots for specific business workflows. These bots are designed to guide
              users, answer questions, support processes, and reduce manual communication for teams. Our current
              focus includes migration support workflows and airport service assistance, with more industry-specific
              bots planned in the future.
            </p>
          </div>

          <div className="border border-border/60 rounded-2xl p-6 mb-6 bg-card">
            <h3 className="text-xl font-bold mb-2">JCL Cat</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              JCL Cat is a developer and operations-focused tool for teams working with JCL and technical workflows.
              It is designed to help users understand, analyze, and manage job-related logic in a cleaner and more
              modern way.
            </p>
          </div>

          <div className="border border-border/60 rounded-2xl p-6 mb-8 bg-card">
            <h3 className="text-xl font-bold mb-2">Z-Agent</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Z-Agent is our AI-assisted operations tool. It is focused on helping technical users with job
              monitoring, spool analysis, dataset queries, and workflow guidance through modern automation interfaces.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our approach</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CloudNova is not trying to build everything at once. We believe in building focused products, testing
            them with real use cases, and improving them step by step. Every product we build should answer three
            questions:
          </p>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {[
              "Does it reduce manual work?",
              "Does it make communication or operations faster?",
              "Does it solve a real problem for real users?",
            ].map((q) => (
              <li key={q} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {q}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If the answer is yes, it belongs in the CloudNova ecosystem.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What comes next</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This blog will be the place where we share CloudNova's journey. We will write about product updates,
            engineering decisions, AI bot development, automation ideas, cloud infrastructure, developer tools, and
            the lessons we learn while building.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-2">
            CloudNova is still growing, but the direction is clear:
          </p>
          <ul className="space-y-2 mb-8 list-none pl-0">
            {[
              "Build practical automation products.",
              "Connect systems intelligently.",
              "Help businesses operate with more speed and confidence.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-foreground">Welcome to CloudNova.</p>
        </motion.div>
      </section>
    </div>
  );
}