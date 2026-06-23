import { Link } from "wouter";
import { Cloud, Linkedin, Twitter, Github, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-foreground">Cloud<span className="text-primary font-mono font-medium">Noiva</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise reliability meets modern cloud agility. Powerful cloud-powered sub-products for forward-thinking organizations.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">WhatsApp Bots</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">JCL Cat</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">8bit CTA.in</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Zagnet</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/company" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/company" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link></li>
              <li><Link href="/blogs" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog</Link></li>
              <li><Link href="/demo" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CloudNoiva Inc. All rights reserved.
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
