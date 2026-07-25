import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BlogWelcomingFeryal() {
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
            PEOPLE &amp; CULTURE
          </Badge>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Welcoming{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
              Feryal Akmoum
            </span>{" "}
            to CloudNova.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We are pleased to welcome Feryal Akmoum from Algeria as a Business
            Consultant at CloudNova.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>July 25, 2026</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span>2 min read</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <section className="mx-auto flex max-w-3xl justify-center">
          <div className="w-44 overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:w-52">
            <img
              src="/feryal-akmoum-preview.jpeg"
              alt="Feryal Akmoum, Business Consultant at CloudNova"
              width={400}
              height={520}
              loading="eager"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
        </section>
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
          <p className="text-xl leading-8 text-foreground md:text-2xl">
            CloudNova is pleased to welcome Feryal Akmoum from Algeria as a
            Business Consultant.
          </p>

          <p>
            Feryal brings a strong background in communication, leadership,
            education, and community-driven initiatives. Her experience includes
            supporting youth-focused programs, organizing meaningful activities,
            and contributing to projects that bring together teamwork, growth,
            and practical impact.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Supporting practical growth
          </h2>

          <p>
            In her role as Business Consultant, Feryal will help CloudNova
            evaluate business operations, understand key challenges, and
            recommend practical solutions that support performance, structure,
            and long-term growth.
          </p>

          <p>
            Her ability to connect people, analyze needs, and turn ideas into
            actionable improvements makes her a valuable addition to
            CloudNova&apos;s expanding international network.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Growing together
          </h2>

          <p>
            We are happy to welcome Feryal to the CloudNova journey and look
            forward to building meaningful progress together.
          </p>
        </div>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            CloudNova team
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Building an international network
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            CloudNova brings together people who combine practical expertise,
            collaborative thinking, and a commitment to creating meaningful
            impact.
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