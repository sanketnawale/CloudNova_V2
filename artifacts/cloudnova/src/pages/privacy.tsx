import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Privacy() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-24 pb-16 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-mono text-xs tracking-widest">
              LEGAL
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Last updated: June 28, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              CloudNova respects your privacy and is committed to protecting personal
              information shared through this website. This Privacy Policy explains
              what data we collect, how we use it, and what choices you have in relation
              to your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Information we collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect information you provide directly, such as your name,
              company name, email address, phone number, and any details you submit
              through contact, booking, or demo request flows.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We may also collect technical information automatically, such as IP address,
              browser type, device information, referral source, pages visited, and
              usage data through analytics, hosting, and security tools.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">How we use information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use personal information to respond to inquiries, schedule demos,
              provide services, improve the website, monitor performance, maintain
              security, and communicate with prospective or existing customers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Third-party services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party providers to support the website and business
              operations, including hosting providers, analytics providers, scheduling
              tools such as Setmore, email services, infrastructure vendors, and
              security services. These providers may process information on our behalf
              where necessary to deliver their services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Legal basis and use</h2>
            <p className="text-muted-foreground leading-relaxed">
              Where applicable, we process personal data on the basis of legitimate
              interests, contractual necessity, legal obligations, or your consent,
              depending on the nature of the interaction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Data retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain information only for as long as necessary for the purposes
              described in this policy, including communication, service delivery,
              compliance, recordkeeping, and security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Your rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have rights to request access,
              correction, deletion, restriction, or portability of your personal data,
              and to object to certain processing activities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">International processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Because our providers and infrastructure may operate in multiple regions,
              your information may be processed outside your country of residence,
              subject to appropriate safeguards where required.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related questions or requests, contact CloudNova through the
              contact details provided on this website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}