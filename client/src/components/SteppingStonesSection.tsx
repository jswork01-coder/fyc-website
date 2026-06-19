/**
 * Stepping Stones Section Component
 * Design: Minimalist Momentum\n * - Card-based layout showing progression\n * - Sage green and gold color scheme\n * - Clear visual hierarchy with numbered steps\n */

export default function SteppingStonesSection() {
  const stones = [
    {
      step: 1,
      title: "Assessment & Clarity",
      description:
        "We start by understanding where you are now, what you've learned, and what's holding back implementation. Clarity is the foundation.",
    },
    {
      step: 2,
      title: "Strategic Planning",
      description:
        "Together, we map out your implementation roadmap—breaking down your coaching knowledge into actionable, sequential stepping stones.",
    },
    {
      step: 3,
      title: "Guided Implementation",
      description:
        "You take action on each stepping stone while I provide guidance, feedback, and course correction. You do the work; I ensure you stay on track.",
    },
    {
      step: 4,
      title: "Accountability & Momentum",
      description:
        "Regular check-ins keep you accountable and motivated. We celebrate wins, learn from obstacles, and maintain forward momentum.",
    },
    {
      step: 5,
      title: "Integration & Mastery",
      description:
        "As each stepping stone becomes integrated into your business, we move to the next. Over time, implementation becomes your natural way of operating.",
    },
    {
      step: 6,
      title: "Sustainable Growth",
      description:
        "You've built the habits, systems, and confidence to implement what you learn. You're now the driver of your own coaching business evolution.",
    },
  ];

  return (
    <section id="stepping-stones" className="relative bg-card py-16 sm:py-24 lg:py-32">
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

      <div className="ml-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-2">
            The Framework
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Your Stepping Stones to Implementation
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl">
            A structured approach to transform your coaching knowledge into business results. Each stepping stone builds on the last, creating momentum and sustainable change.
          </p>
        </div>

        {/* Stones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stones.map((stone, index) => (
            <div
              key={index}
              className="relative group bg-background rounded-lg p-6 sm:p-8 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              {/* Step Number Circle */}
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                {stone.step}
              </div>

              {/* Content */}
              <div className="pt-4">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {stone.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {stone.description}
                </p>
              </div>

              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-300 rounded-b-lg"></div>
            </div>
          ))}
        </div>

        {/* Connection visualization */}
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-foreground/60 text-sm font-medium uppercase tracking-wide mb-4">
            Each stepping stone builds on the last
          </p>
          <div className="flex justify-center items-center gap-2 text-accent text-2xl">
            <span>●</span>
            <span className="text-foreground/30">→</span>
            <span>●</span>
            <span className="text-foreground/30">→</span>
            <span>●</span>
            <span className="text-foreground/30">→</span>
            <span>●</span>
            <span className="text-foreground/30">→</span>
            <span>●</span>
            <span className="text-foreground/30">→</span>
            <span>●</span>
          </div>
        </div>
      </div>
    </section>
  );
}
