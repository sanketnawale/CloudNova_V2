import { Link } from "wouter";
import { ArrowRight, BarChart3, MessageCircle, ShieldCheck } from "lucide-react";

const MIRA_MONITORING_URL = "https://cloudnova.tech/mira-monitoring";
const MIRA_WHATSAPP_URL = "https://wa.me/393510172022";

export default function BlogMiraMonitoringLaunch() {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-10 md:py-16">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          CloudNova Blog
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          MIRA WhatsApp Monitoring Is Live
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A live dashboard for MIRA — Migration Intelligence &amp; Response
          Assistant — now gives the CloudNova team a clear view of WhatsApp
          activity, notifications, and service growth.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={MIRA_MONITORING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Open MIRA monitoring
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <a
            href={MIRA_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
          >
            Start MIRA on WhatsApp
            <MessageCircle className="ml-2 h-4 w-4" />
          </a>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border bg-background p-10 shadow-sm">
          <img
            src="/mira-logo.svg"
            alt="MIRA — Migration Intelligence & Response Assistant"
            className="max-h-64 w-full object-contain"
            loading="lazy"
            width={900}
            height={600}
          />
        </div>

        <aside className="rounded-3xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            What the dashboard shows
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>Active and completed permesso tracking cases.</li>
            <li>WhatsApp users and recent user growth.</li>
            <li>Notification delivery and message-status trends.</li>
            <li>New tracking requests over time.</li>
            <li>User language distribution.</li>
            <li>Permesso collection-ready notifications by month.</li>
          </ul>
        </aside>
      </section>

      <section className="mt-10 space-y-6">
        <div className="flex items-center gap-3">
          <BarChart3 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold tracking-tight">
            Why this matters
          </h2>
        </div>

        <div className="space-y-4 text-base leading-7 text-muted-foreground">
          <p>
            MIRA helps people follow the status of their permesso di soggiorno
            through WhatsApp. The monitoring page gives the CloudNova team a
            single, live view of how the service is being used and how it is
            growing over time.
          </p>

          <p>
            It helps us monitor case activity, understand which languages
            users need, confirm that notifications are being delivered, and
            identify changes that may need attention.
          </p>

          <p>
            The dashboard is designed around aggregated service data. It should
            never display users&apos; names, phone numbers, practice IDs, or
            other personal information.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />

          <div>
            <h2 className="text-xl font-semibold">Privacy by design</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              The public view is for high-level service performance only. MIRA
              remains an independent CloudNova service and does not expose
              personal tracking details through the monitoring dashboard.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <Link href="/blogs">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
            Read more from CloudNova
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </article>
  );
}