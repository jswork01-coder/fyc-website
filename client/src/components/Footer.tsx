/**
 * Footer Component
 * Design: Minimalist Momentum
 * - Clean, minimal design
 * - Sage green accent line
 * - Links and contact information
 */

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

      <div className="ml-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">FYC</span>
              </div>
              <span className="font-bold text-foreground">Find You Coaching</span>
            </div>
            <p className="text-sm text-foreground/60">
              A unique perspective on what it takes to build a sustainable coaching business.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#focus"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Areas of Focus
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:jessie@findyoucoaching.com"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; 2025 Find You Coaching. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
