import { ExternalLink } from "lucide-react";

const dashboardUrl =
  "https://mira-stats.cloudnova.tech/public/dashboard/37ececd1-b4f1-48e2-b2bd-743090dd15aa#theme=night&bordered=false&titled=false&background=false&refresh=60";

export default function MiraMonitoring() {
  return (
    <main className="fixed inset-x-0 top-16 bottom-0 overflow-hidden bg-background text-foreground">
      <div className="flex h-full w-full flex-col overflow-hidden">
        <header className="flex shrink-0 items-center justify-between border-b border-border/40 bg-background/80 px-4 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 md:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/mira-logo.svg"
              alt="MIRA WhatsApp Stats"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl bg-background p-1 object-contain shadow-sm"
            />

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                MIRA
              </p>
              <h1 className="text-xl font-semibold text-foreground">
                WhatsApp Stats
              </h1>
            </div>
          </div>

          <a
            href={dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-primary-border bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors hover-elevate active-elevate-2"
          >
            Open full dashboard
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </header>

        <section className="min-h-0 flex-1 overflow-hidden bg-background">
          <iframe
            src={dashboardUrl}
            title="MIRA WhatsApp Stats Dashboard"
            className="h-full w-full border-0 bg-background"
            allowFullScreen
          />
        </section>
      </div>
    </main>
  );
}