import { Link } from "wouter";
import { Linkedin, Twitter, Github, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <img src="/logo.svg" alt="CloudNova" className="w-6 h-6" />
              <span className="font-sans font-bold text-xl tracking-tight text-foreground">Cloud<span className="text-primary font-mono font-medium">Nova</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise reliability meets modern cloud agility. Powerful cloud-powered sub-products for forward-thinking organizations.
            </p>
           <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/110665563"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="CloudNova on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Cloodnova/CLOUDNOVA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="CloudNova on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">8-Bit Cat</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Avvisami</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Z-Agent</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Custom AI Bot Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/company" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link></li>
              <li><Link href="/blogs" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog</Link></li>
              <li><Link href="/demo" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

         <div>
          <h4 className="font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-3">
            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CloudNova Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Operating with precision</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs">SYS_OK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
