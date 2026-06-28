import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Terms() {
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
              Terms of Service
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
            <h2 className="text-2xl font-bold mb-3">Acceptance of terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the CloudNova website, products, or services,
              you agree to these Terms of Service. If you do not agree, you should
              not use the website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Use of the website</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may use this website only for lawful purposes and in a way that does
              not interfere with the security, performance, or proper operation of the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Acceptable use</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to misuse the website or services, including by attempting
              unauthorized access, introducing malicious code, scraping protected content,
              disrupting infrastructure, impersonating others, or violating applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Intellectual property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All website content, branding, product names, logos, text, designs,
              interfaces, software, and related materials are the property of CloudNova
              or its licensors unless otherwise stated. No rights are granted except
              for limited personal or internal business use of the website as intended.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Product and service information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Information on this website is provided for general informational purposes.
              Product features, service availability, and roadmap details may change
              over time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">No warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              The website and related materials are provided on an “as is” and
              “as available” basis, without warranties of any kind except where
              such warranties cannot legally be excluded.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Limitation of liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, CloudNova will not be liable
              for indirect, incidental, special, consequential, or punitive damages,
              or for loss of data, revenue, profits, or business arising from use of
              the website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Third-party tools and links</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to third-party services or embed tools
              operated by third parties. CloudNova is not responsible for the content,
              policies, or practices of those external services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Termination and changes</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or restrict access to the website or services if needed
              for security, maintenance, legal compliance, or misuse prevention.
              We may also update these Terms from time to time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about these Terms of Service may be directed to CloudNova
              using the contact information available on this website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}