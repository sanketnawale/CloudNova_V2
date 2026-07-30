import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BlogMiraLaunch() {
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

          <Badge className="mt-10 border-primary/20 bg-primary/10 font-mono text-xs tracking-widest text-primary">
            PRODUCT LAUNCH
          </Badge>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Introducing{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
              MIRA
            </span>
            : your permesso di soggiorno, tracked on WhatsApp.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            CloudNova is launching MIRA, a WhatsApp assistant that monitors
            your permesso di soggiorno status and notifies you the moment it
            changes — so you stop refreshing government portals and start
            living your life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>July 30, 2026</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span>3 min read</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <img
            src="/mira-logo.svg"
            alt="MIRA logo — WhatsApp assistant for permesso di soggiorno tracking"
            width={1600}
            height={900}
            loading="eager"
            className="aspect-[16/9] w-full bg-background object-contain p-12"
          />
        </section>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
          <p className="text-xl leading-8 text-foreground md:text-2xl">
            Waiting for a permesso di soggiorno is one of the most stressful
            parts of moving to Italy. MIRA was built to remove the guesswork.
          </p>

          <p>
            Instead of checking the Portale Immigrazione every day or making
            unnecessary trips to the questura, you share your practice ID and
            questura with MIRA once, on WhatsApp. From there, MIRA checks your
            status regularly and sends you a message the moment something
            changes.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            How it works
          </h2>

          <p>
            MIRA follows three simple steps: you send your 12-digit practice
            ID and select your questura, MIRA securely monitors the official
            system on your behalf, and you get notified on WhatsApp the moment
            your status changes to &quot;pronto per la consegna&quot; (ready
            for collection).
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Built for real life in Italy
          </h2>

          <p>
            MIRA supports multiple languages, including English, Italian, and
            Russian, so updates are clear no matter where you are from. It is
            an independent tool built to make one specific part of Italian
            bureaucracy easier — not a replacement for official government
            communication.
          </p>
        </div>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            CloudNova product
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Start tracking your permesso today
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            MIRA is live now on WhatsApp. Share your practice ID and let MIRA
            handle the waiting for you.
          </p>
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