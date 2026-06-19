/**
 * Hero Section Component
 * Design: Minimalist Momentum
 * - Asymmetric layout with image on right
 * - Large typography with Playfair Display
 * - Warm cream background with sage green accents
 * - Emphasizes partnership and co-pilot metaphor
 */

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

      <div className="ml-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-2">
                Implementation Support
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                You Know What to Do.
                <br />
                <span className="text-primary">Now Let's Do It.</span>
              </h1>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              You've invested in coaching certification. You've learned the frameworks. But implementation? That's where most certified coaches get stuck. I'm here to sit beside you as your co-pilot—guiding you through each stepping stone while you keep your hands on the wheel of your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <img
              src="/images/hero-partnership.png"
              alt="Coach and certified coach working together in partnership"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
