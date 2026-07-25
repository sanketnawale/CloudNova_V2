import { Link } from "wouter";

export default function BlogMonitoringLaunch() {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-10">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          CloudNova Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          CloudNova Monitoring Is Live
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A new live dashboard for Avvisami Telegram now shows activity, status, and growth in one place.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://cloudnova.tech/monitoring"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Open monitoring
          </a>
          <a
            href="https://cloudnova.tech/monitoring"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
          >
            Preview the page
          </a>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-3xl border bg-background shadow-sm">
          <img
            src="/Avvisami.png"
            alt="Avvisami Telegram alert bot"
            className="h-full w-full object-cover"
            loading="lazy"
            width="1200"
            height="900"
          />
        </div>

        <aside className="rounded-3xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">What the dashboard shows</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>Active and completed cases.</li>
            <li>Total users and users older than 30 days.</li>
            <li>Message status distribution.</li>
            <li>New users per day.</li>
            <li>User language breakdown.</li>
            <li>Completed cases by month.</li>
          </ul>
        </aside>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Why this matters</h2>
        <div className="space-y-4 text-base leading-7 text-muted-foreground">
          <p>
            The monitoring page gives a quick, real-time view of the Avvisami Telegram system without needing to open Metabase directly.
          </p>
          <p>
            It is useful for checking activity trends, tracking completions, and spotting changes in user behavior over time.
          </p>
          <p>
            Open the live page anytime at{' '}
            <a
              href="https://cloudnova.tech/monitoring"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              cloudnova.tech/monitoring
            </a>
            .
          </p>
        </div>
      </section>
    </article>
  );
}
