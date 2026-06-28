import { motion } from "framer-motion";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export default function BlogAvvisami() {
  return (
    <div className="flex flex-col w-full">
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
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 font-mono text-xs tracking-widest">
              AI BOTS
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Avvisami: Multilingual Permit Status Updates
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-mono">June 2026</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="container mx-auto px-4 md:px-6 max-w-3xl"
        >
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Avvisami is a multilingual permit update system designed to keep users informed
              when their permit status changes. It makes the process easier by sending clear,
              timely updates in the user’s language, so people do not have to keep checking manually.
            </p>

            <p>
              For many users, waiting for permit progress can be confusing and stressful.
              Avvisami solves that problem by turning status changes into simple notifications
              that explain what is happening and what the next step may be.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">Why Avvisami matters</h2>

            <p>
              The system is especially useful for international users and mixed-language communities.
              Because it supports multiple languages, people can understand updates more easily and
              respond with confidence.
            </p>

            <p>
              Avvisami also helps reduce delays in communication. Instead of relying on phone calls,
              emails, or repeated manual checks, users receive important updates as soon as the status changes.
              That makes the process faster and more practical for everyday use.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">A better update experience</h2>

            <p>
              Another benefit of Avvisami is that it keeps information organized. A single update can
              include the permit reference number, the new status, the location, and the date.
              This gives users the key details they need in one place.
            </p>

            <p>
              The service is built for real-world use, where clarity matters. Some users want to know
              whether their permit is still in progress, while others need to understand whether it is
              ready or completed. Avvisami makes those changes easier to follow.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">Built for multilingual users</h2>

            <p>
              Current usage data shows that the system already has a real audience. There are
              240 total users, with 136 active and 61 completed entries.
              That suggests the platform is being used regularly and has an active role in permit tracking.
            </p>

            <p>
              The audience is mostly English-speaking, with additional strong groups in Russian and Italian.
              This shows that multilingual support is not just a feature, but an important part of how the service works and grows.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">More than notifications</h2>

            <p>
              Avvisami is more than a notification system. It is a simple communication layer that helps
              users stay informed, understand status changes, and manage permit progress without unnecessary confusion.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}