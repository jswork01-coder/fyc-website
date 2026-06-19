/**
 * CTA Section Component
 * Design: Minimalist Momentum
 * - Strong call to action
 * - Sage green and gold emphasis
 * - Clear value proposition
 */

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 sm:py-24 lg:py-32">
      {/* Left accent line - lighter shade */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-foreground/30"></div>

      <div className="ml-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to Stop Knowing and Start Doing?
        </h2>

        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          You've got the knowledge. You've got the certification. Now it's time to implement it and build the coaching business you envisioned. Let's get you from stuck to unstoppable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200"
          >
            Schedule a Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
          >
            Learn More
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/70 mt-8">
          No pressure. Just a conversation about where you are and how I can help.
        </p>
      </div>
    </section>
  );
}
