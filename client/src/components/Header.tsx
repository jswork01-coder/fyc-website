/**
 * Header Component
 * Design: Minimalist Momentum
 * - Sage green left accent line (2px) running vertically
 * - Clean navigation with subtle hover effects
 * - Asymmetric layout with left margin breathing room
 */

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="relative border-b border-border bg-card">
      {/* Distinctive left accent line - sage green */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

      <div className="ml-8 flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">FYC</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Find You Coaching</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
          >
            About
          </a>
          <a
            href="#approach"
            className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
          >
            Approach
          </a>
          <a
            href="#stepping-stones"
            className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
          >
            Stepping Stones
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <Button
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200"
          size="sm"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
