/**
 * Benefits Section Component
 * Design: Minimalist Momentum
 * - Clean card layout
 * - Sage green and gold accents
 * - Emphasizes transformation and results
 */

import { CheckCircle2 } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "From Knowledge to Action",
      description:
        "Transform everything you learned in your certification into real, implemented systems in your coaching business.",
    },
    {
      title: "Accountability That Works",
      description:
        "Regular check-ins and progress tracking keep you moving forward. No more starting and stopping.",
    },
    {
      title: "Overcome Implementation Blocks",
      description:
        "Hit a wall? We navigate obstacles together, finding creative solutions that fit your unique business.",
    },
    {
      title: "Build Sustainable Habits",
      description:
        "Implementation becomes your way of operating. You develop the systems and mindset for continuous growth.",
    },
    {
      title: "Maximize Your Investment",
      description:
        "You've already invested in your certification. Let's make sure you get the full ROI by actually implementing it.",
    },
    {
      title: "Confidence & Clarity",
      description:
        "Move from overwhelm to clarity. Know exactly what to do next and why it matters for your business.",
    },
  ];

  return (
    <section className="relative bg-background py-16 sm:py-24 lg:py-32">
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

      <div className="ml-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-2">
            Why Partner With Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Real Results from Real Implementation
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 sm:p-8 bg-card rounded-lg border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
