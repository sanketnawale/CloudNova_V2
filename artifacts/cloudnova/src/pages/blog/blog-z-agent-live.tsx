import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogZAgentLive() {
  return (
    <article className="min-h-screen">
      <header className="relative overflow-hidden border-b border-border/40 pt-24 pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <Link href="/blogs">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to insights
            </span>
          </Link>

          <Badge className="mt-10 bg-amber-500/10 font-mono text-xs tracking-widest text-amber-400 border-amber-500/20">
            MAINFRAME
          </Badge>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Z-Agent is Live:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
              A Small Step Toward Modern IBM Z Operations.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A modern web experience for exploring IBM Z operations, learning
            mainframe concepts, and getting useful AI-assisted guidance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>July 25, 2026</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span>5 min read</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <img
            src="/z-agent-preview.jpg"
            alt="Z-Agent dashboard showing modern IBM Z operations tools"
            width={1600}
            height={900}
            loading="eager"
            className="w-full object-cover"
          />
        </section>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
          <p className="text-xl leading-8 text-foreground md:text-2xl">
            Today, we are happy to share that Z-Agent is live.
          </p>

          <p>
            IBM Z systems remain extremely important, but the way people
            interact with them can still feel difficult—especially for students
            and engineers who are new to mainframe operations. The technology
            is powerful, stable, and trusted, but the learning curve is real.
          </p>

          <p>
            Z-Agent started with a simple idea: make IBM Z operations easier to
            explore and understand through a modern web interface, with AI
            assistance where it actually helps.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            An assistant layer, not a replacement
          </h2>

          <p>
            Z-Agent is not built to replace established tools such as Zowe or
            z/OSMF. It is designed to sit around them as an assistant layer:
            helping users read job output, understand spool content, browse
            datasets, explore USS files, and view operational information in a
            simpler way.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What is available now
          </h2>

          <p>
            The current version includes practical tools for exploring IBM Z
            environments and understanding operational information:
          </p>

          <ul className="space-y-3 border-l border-primary/30 pl-6">
            <li>Job and spool views</li>
            <li>Dataset and member exploration</li>
            <li>USS file browsing</li>
            <li>AI-assisted explanations</li>
            <li>Safety settings and audit logs</li>
            <li>Early performance insights</li>
          </ul>

          <p>
            It is still growing, but the foundation is now working and publicly
            available.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Built with learning in mind
          </h2>

          <p>
            One of the most important goals behind Z-Agent is education. For
            now, Z-Agent is free for students to use and explore. The aim is to
            help people who are curious about mainframes but do not know where
            to begin.
          </p>

          <p>
            If someone can open a browser, explore concepts, and slowly build
            confidence in IBM Z operations, then the project is already moving
            in the right direction.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What comes next
          </h2>

          <p>
            The next step is improving the demo experience with better sample
            data, clearer documentation, a stronger landing page, easier local
            setup, and more useful AI explanations for job failures, spool
            output, and performance signals.
          </p>

          <p>
            Safety, masking, and auditability will continue to be priorities.
            Operational tools should be helpful without becoming risky.
          </p>

          <p>
            For CloudNova, Z-Agent represents the kind of work we want to
            build: practical, modern, and connected to real enterprise systems.
            Mainframe modernization is not only about replacing old systems.
            Sometimes, it means making existing systems easier to understand,
            easier to operate, and easier for the next generation to learn.
          </p>
        </div>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Available now
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Explore Z-Agent
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Z-Agent is live now. Explore the platform and see how a modern
            assistant layer can make IBM Z operations easier to navigate.
          </p>

          <a
            href="https://zagent.cloudnova.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex"
          >
            <Button size="lg" className="h-12 px-6 font-semibold">
              Try Z-Agent
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </section>

        <div className="mx-auto mt-12 max-w-3xl">
          <Link href="/blogs">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Read more from CloudNova
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </main>
    </article>
  );
}