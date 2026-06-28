import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Cookies() {
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
              Cookie Policy
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
            <h2 className="text-2xl font-bold mb-3">What are cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files placed on your device when you visit a
              website. They help websites operate, remember preferences, improve
              performance, and understand how visitors use the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">How we use cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              CloudNova may use cookies and similar technologies to support essential
              website functionality, improve performance, understand usage patterns,
              maintain security, and enhance the user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Types of cookies we may use</h2>
            <p className="text-muted-foreground leading-relaxed">
              These may include essential cookies required for site functionality,
              analytics cookies used to understand traffic and engagement, preference
              cookies used to remember settings, and third-party cookies related to
              embedded services or integrations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Third-party cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some third-party tools integrated into the website, including scheduling,
              analytics, infrastructure, or embedded service providers, may place their
              own cookies or similar technologies subject to their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Managing cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control or delete cookies through your browser settings.
              Depending on your location, you may also be able to manage cookie
              preferences through consent tools presented on the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes
              in our use of cookies, technologies, or legal requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about our use of cookies or similar technologies,
              please contact CloudNova through the contact information provided on this website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}