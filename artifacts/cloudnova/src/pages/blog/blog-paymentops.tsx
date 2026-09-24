import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LIFECYCLE = `Payment instruction
        ↓
Payment message
        ↓
Status update
        ↓
Account event
        ↓
Reconciliation
        ↓
Exception if something does not align`;

export default function BlogPaymentOps() {
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
            PAYMENTS
          </Badge>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Building CloudNova PaymentOps:{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
              A practical platform for ISO 20022 operations.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Not another payment processor. Not another payment rail. Not a
            system that moves money. PaymentOps is focused on what happens
            around the payment data itself.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>September 24, 2026</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span>9 min read</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
          <p className="text-xl leading-8 text-foreground md:text-2xl">
            Payments infrastructure is becoming richer, more structured, and
            more interconnected. ISO 20022 is a big part of that shift.
          </p>

          <p>
            But richer payment messages also create a different operational
            reality: more fields to validate, more references to correlate,
            more lifecycle events to track, more reconciliation work, and more
            exceptions that still need a human to understand what actually
            happened.
          </p>

          <p>
            That is the problem we started working on with{" "}
            <strong className="text-foreground">CloudNova PaymentOps</strong>.
          </p>

          <p>
            Not another payment processor. Not another payment rail. Not a
            system that moves money. PaymentOps is focused on what happens
            around the payment data itself.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            The problem we wanted to solve
          </h2>

          <p>
            A payment can move through several systems and produce multiple
            records along the way. You might have:
          </p>

          <ul className="space-y-3 border-l border-primary/30 pl-6">
            <li>an original payment instruction</li>
            <li>a payment message</li>
            <li>a status update</li>
            <li>an account entry</li>
            <li>a reconciliation record</li>
            <li>an operational exception</li>
          </ul>

          <p>
            Each one can contain useful information, but connecting them
            reliably is not always simple. Small differences matter. A
            reference may be formatted differently. An address may be
            incomplete. One system may normalize a name differently from
            another. A status message may arrive before another event. An
            amount can match while a currency does not.
          </p>

          <p>
            Operations teams then have to answer questions like: is this
            message valid? Can this data be repaired safely? Does this account
            entry belong to this payment? Why did these records fail to
            reconcile? Should this exception be automatically classified or
            reviewed by a person?
          </p>

          <p>That became the foundation for PaymentOps.</p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Three core pillars
          </h2>

          <p>We designed the platform around three areas.</p>

          <h3 className="pt-4 text-xl font-bold tracking-tight text-foreground md:text-2xl">
            1. Validation and Repair
          </h3>

          <p>
            PaymentOps can analyze supported ISO 20022 payment data and
            identify validation or data-quality issues. Instead of silently
            modifying payment information, the platform can create a{" "}
            <strong className="text-foreground">repair candidate</strong>.
          </p>

          <p>
            That distinction matters. A repair candidate can be reviewed,
            validated again, and audited before anyone decides to use it. The
            goal is not autonomous modification. The goal is controlled,
            explainable payment-data operations.
          </p>

          <h3 className="pt-4 text-xl font-bold tracking-tight text-foreground md:text-2xl">
            2. Matching and Reconciliation
          </h3>

          <p>
            Matching sounds simple until real-world payment data becomes
            involved. Two records can represent the same business event
            without being textually identical. PaymentOps combines:
          </p>

          <ul className="space-y-3 border-l border-primary/30 pl-6">
            <li>exact comparison</li>
            <li>normalized comparison</li>
            <li>string similarity</li>
            <li>weighted deterministic scoring</li>
            <li>critical conflict rules</li>
          </ul>

          <p>
            The score is deliberately{" "}
            <strong className="text-foreground">not treated as a probability</strong>.
            A high similarity score should never override a critical
            contradiction such as a currency or other important field
            conflict. Ambiguous cases can instead move into human review.
          </p>

          <p>
            That was one of the most important architecture decisions we made:
            deterministic systems should remain authoritative in core payment
            operations.
          </p>

          <h3 className="pt-4 text-xl font-bold tracking-tight text-foreground md:text-2xl">
            3. Exception Operations
          </h3>

          <p>
            A platform like this only becomes useful when it helps people work
            with the exceptions it discovers. PaymentOps therefore includes
            operational workflows around:
          </p>

          <ul className="space-y-3 border-l border-primary/30 pl-6">
            <li>cases</li>
            <li>review</li>
            <li>approvals and rejections</li>
            <li>batches</li>
            <li>audit history</li>
            <li>lifecycle evidence</li>
            <li>dashboards</li>
            <li>tenant isolation</li>
          </ul>

          <p>
            The idea is simple:{" "}
            <strong className="text-foreground">
              find the exception, explain the evidence, and give the operator a
              controlled path forward.
            </strong>
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Going beyond a single payment message
          </h2>

          <p>
            We did not want PaymentOps to become a one-message XML validator.
            The current evaluation release works with a focused set of ISO
            20022 message versions:
          </p>

          <ul className="space-y-3 border-l border-primary/30 pl-6 font-mono text-sm md:text-base">
            <li>pain.001.001.13</li>
            <li>pacs.008.001.08</li>
            <li>pacs.009.001.13</li>
            <li>pacs.002.001.16</li>
            <li>camt.053.001.14</li>
            <li>camt.054.001.14</li>
          </ul>

          <p>
            This allows us to work across more of the payment lifecycle. For
            example:
          </p>

          <pre className="overflow-x-auto rounded-2xl border border-border bg-card p-6 font-mono text-sm leading-7 text-foreground">
            <code>{LIFECYCLE}</code>
          </pre>

          <p>
            That lifecycle view is much more interesting to us than simply
            answering whether an XML file passes a schema check.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Structured address readiness
          </h2>

          <p>
            Another area we explored deeply is structured payment-address data.
            Payment systems are moving toward richer and more structured
            information, but converting free-form addresses into reliable
            structured fields is not trivial.
          </p>

          <p>
            We built an internal address-provider architecture that lets
            PaymentOps analyze address readiness and produce structured
            candidates when appropriate. The current development dataset
            focuses on:
          </p>

          <ul className="space-y-3 border-l border-primary/30 pl-6">
            <li>Italy</li>
            <li>India</li>
            <li>Saudi Arabia</li>
            <li>United Kingdom</li>
            <li>Germany</li>
            <li>France</li>
            <li>Spain</li>
            <li>Netherlands</li>
          </ul>

          <p>
            We intentionally do not describe this as global coverage.
            Production geography support should depend on the customer&apos;s
            requirements, available datasets, licensing, and validation needs.
            That principle applies throughout PaymentOps:{" "}
            <strong className="text-foreground">
              be precise about what the system supports rather than pretending
              everything is universal.
            </strong>
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Why we did not put an LLM in the decision path
          </h2>

          <p>
            It would have been easy to market PaymentOps as an &quot;AI payment
            platform.&quot; We deliberately chose not to do that.
          </p>

          <p>
            Core validation, reconciliation, matching, lifecycle correlation,
            and repair decisions are deterministic. Where similarity is useful,
            we use measurable string and field comparisons. Where a conflict
            matters, explicit rules win. Where evidence is ambiguous, a human
            can review it.
          </p>

          <p>
            An LLM may eventually be useful for explaining a case or
            summarizing evidence, but it should not become the authoritative
            source of truth for whether two financial records match. That
            boundary is important.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Building for controlled bank and fintech evaluation
          </h2>

          <p>
            PaymentOps is currently at{" "}
            <strong className="text-foreground">v0.1.0-eval</strong>. That
            wording is intentional. We are not claiming that a young platform
            is automatically production-ready for every financial institution.
            Instead, we built the current release for controlled evaluation and
            PoCs.
          </p>

          <p>The platform now includes:</p>

          <ul className="space-y-3 border-l border-primary/30 pl-6">
            <li>authenticated user access</li>
            <li>role-based permissions</li>
            <li>tenant isolation</li>
            <li>audit events</li>
            <li>API client management</li>
            <li>deterministic validation and reconciliation</li>
            <li>lifecycle correlation</li>
            <li>account reconciliation</li>
            <li>case management</li>
            <li>demo tooling</li>
            <li>PostgreSQL-backed integration tests</li>
            <li>Kubernetes deployment</li>
            <li>GitOps delivery</li>
            <li>security scanning</li>
            <li>immutable container images</li>
          </ul>

          <p>
            We also built a dedicated public site for the product. The private
            application remains completely separate and authenticated. That
            separation matters as much commercially as it does technically.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            A platform that does not move money
          </h2>

          <p>
            One of the clearest boundaries in PaymentOps is what it does{" "}
            <strong className="text-foreground">not</strong> do. PaymentOps
            does not:
          </p>

          <ul className="space-y-3 border-l border-primary/30 pl-6">
            <li>initiate payments</li>
            <li>authorize payments</li>
            <li>debit or credit an account</li>
            <li>settle money</li>
            <li>transmit live SWIFT messages</li>
            <li>make autonomous AML decisions</li>
          </ul>

          <p>
            That may sound like a limitation. We see it as focus. There is
            already substantial infrastructure responsible for executing
            payments. Our interest is in making the operational layer around
            payment data easier to understand, validate, reconcile,
            investigate, and audit.
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What we learned building it
          </h2>

          <p>A few lessons became clear during development.</p>

          <p>
            First, payment operations are less about flashy AI and more about
            reliable evidence. Second, reconciliation needs hard conflict
            rules, not only fuzzy matching. Third, a repair workflow should
            preserve the difference between a suggestion and an approved
            change. Fourth, lifecycle context is extremely valuable. Looking at
            one message in isolation gives you only part of the story.
          </p>

          <p>
            And finally, enterprise payment software has to be honest about
            scope. Supporting six carefully defined message versions is more
            useful than claiming vague support for &quot;all ISO 20022.&quot;
          </p>

          <h2 className="pt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            What comes next
          </h2>

          <p>
            The engineering foundation is now strong enough for the next stage.
            And the next stage is not simply adding more features. It is
            working with real payment teams.
          </p>

          <p>We want to understand:</p>

          <ul className="space-y-3 border-l border-primary/30 pl-6">
            <li>where validation still consumes operational time</li>
            <li>which reconciliation cases are genuinely difficult</li>
            <li>how different institutions classify exceptions</li>
            <li>where structured-address readiness creates friction</li>
            <li>which lifecycle correlations matter most in real environments</li>
          </ul>

          <p>
            That feedback should determine what PaymentOps becomes next. We are
            currently opening a small number of conversations with banks,
            fintechs, payment processors, and transaction-banking teams for
            controlled evaluation and PoC discussions.
          </p>

          <p>
            If you work in payment operations, ISO 20022 transformation,
            reconciliation, or transaction banking and this sounds familiar, we
            would be interested in hearing how your team handles these
            workflows today.
          </p>
        </div>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            CloudNova product
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Explore PaymentOps
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            PaymentOps is at v0.1.0-eval. Learn more about the platform and see
            how it handles validation, reconciliation, and exception operations
            across the ISO 20022 lifecycle.
          </p>

          <a
            href="https://paymentops.cloudnova.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex"
          >
            <Button size="lg" className="h-12 px-6 font-semibold">
              Visit PaymentOps
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
