import { motion } from "framer-motion";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export default function BlogJclCat() {
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              MAINFRAME
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              JCL Cat: Bringing JCL Validation into the Modern DevOps Era
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-mono">By Sanket Nawale</span>
              <span>·</span>
              <span>June 2026</span>
              <span>·</span>
              <span>6 min read</span>
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
              For decades, Job Control Language (JCL) has been the backbone of IBM Z batch processing.
              While the mainframe platform has continued to evolve with APIs, Git, CI/CD pipelines,
              and modern development practices, one thing has remained largely unchanged: validating
              JCL still depends heavily on access to the host environment.
            </p>

            <p>
              That simple observation led me to build JCL Cat.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">Why JCL Cat?</h2>

            <p>
              During my work with mainframe technologies and DevOps, I noticed that developers,
              students, and even experienced engineers often wanted to perform a quick JCL validation
              before submitting jobs to a mainframe.
            </p>

            <p>
              Existing enterprise solutions are powerful, but they generally operate inside z/OS and
              require access to enterprise infrastructure.
            </p>

            <p>Sometimes all you need is:</p>

            <ul className="space-y-2 pl-0 list-none">
              {[
                "Did I miss a DISP?",
                "Is my JOB statement valid?",
                "Does this DD make sense?",
                "Will this syntax obviously fail?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              without logging into a mainframe. That is exactly the problem JCL Cat aims to solve.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">What is JCL Cat?</h2>

            <p>JCL Cat is a web-based JCL validator designed for:</p>

            <ul className="space-y-2 pl-0 list-none">
              {[
                "Learning JCL",
                "Quick syntax validation",
                "Early feedback before submission",
                "DevOps and CI/CD workflows",
                "Teams without immediate host access",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Instead of replacing enterprise validation, JCL Cat provides a lightweight
              pre-validation layer. Think of it as running a linter before compiling code.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">Version 2 Highlights</h2>

            <h3 className="text-xl font-semibold text-foreground pt-2">Validation Profiles</h3>
            <p>
              Different environments require different standards. JCL Cat now supports multiple profiles:
            </p>

            <ul className="space-y-2 pl-0 list-none">
              {[
                "Learning – educational feedback with relaxed rules",
                "Default – balanced everyday validation",
                "Banking – stricter enterprise-oriented rule enforcement",
                "Migration – useful during modernization projects",
                "CI-Fast – quick syntax validation designed for automated pipelines",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              The same JCL can now be validated differently depending on the workflow.
            </p>

            <h3 className="text-xl font-semibold text-foreground pt-2">Docker CLI Support</h3>
            <p>
              Modern development increasingly relies on automation. JCL Cat can now be executed using
              Docker, making it suitable for integration into automated build pipelines and developer workflows.
            </p>

            <h3 className="text-xl font-semibold text-foreground pt-2">Privacy First</h3>
            <p>
              JCL Cat processes submitted JCL in memory only. No JCL is stored, no validation history
              is retained, and no external services receive submitted content.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">Learning From the Community</h2>
            <p>
              The most valuable part of this project has not been writing code. It has been the feedback.
            </p>

            <p>
              Experienced IBM Champions, enterprise architects, production analysts, and mainframe
              engineers have tested JCL Cat using real production-style JCL. Their comments uncovered
              edge cases including continuation line handling, instream processing, formatting tolerance,
              parser robustness, and codepage considerations.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">What JCL Cat Is — and Isn't</h2>
            <p>
              JCL Cat is not intended to replace IBM Z JCL Expert or host-based validation tools.
            </p>

            <p>
              JCL Cat focuses on a different layer: fast feedback, developer productivity, education,
              early validation, and DevOps integration. These two approaches complement each other
              rather than compete.
            </p>

            <h2 className="text-2xl font-bold text-foreground pt-6">Roadmap</h2>
            <ul className="space-y-2 pl-0 list-none">
              {[
                "PROC expansion",
                "Symbolic parameter substitution",
                "Enhanced dataset validation",
                "Additional enterprise rule packs",
                "Improved CI/CD integration",
                "Expanded parser coverage",
                "Better reporting and machine-readable output",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-foreground pt-6">Thank You</h2>
            <p>
              I’d like to thank everyone in the IBM Z and mainframe community who has taken the time
              to test JCL Cat, report issues, and provide thoughtful feedback.
            </p>

            <p>Your real-world examples have directly improved the project.</p>

            <h2 className="text-2xl font-bold text-foreground pt-6">Try JCL Cat</h2>
            <p>
              <a
                href="https://8bitcat.in/services/jcl-check/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://8bitcat.in/services/jcl-check/
              </a>
            </p>

            <p>Feedback, bug reports, and ideas are always welcome.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}