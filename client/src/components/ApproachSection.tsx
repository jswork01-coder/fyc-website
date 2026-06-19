/**
 * Approach Section Component
 * Design: Minimalist Momentum
 * - Asymmetric layout alternating image placement
 * - Clear progression with numbered steps
 * - Sage green and gold accents for visual hierarchy
 */

export default function ApproachSection() {
  const approaches = [
    {
      number: "01",
      title: "You're in the Driver's Seat",
      description:
        "You make the decisions. You take the actions. You own the results. This isn't about me telling you what to do—it's about you executing what you already know.",
      image: "/images/hero-partnership.png",
      imagePosition: "right" as const,
    },
    {
      number: "02",
      title: "I'm Your Guide",
      description:
        "I sit beside you, offering guidance, accountability, and strategic stepping stones. When you hit obstacles, we navigate them together. When you need clarity, I help you find it.",
      image: "/images/implementation-journey.png",
      imagePosition: "left" as const,
    },
    {
      number: "03",
      title: "Stepping Stones, Not Leaps",
      description:
        "Implementation doesn't happen overnight. We break down your coaching knowledge into manageable, actionable stepping stones that you can implement in your business immediately.",
      image: "/images/stepping-stones.png",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section id="approach" className="relative bg-background py-16 sm:py-24 lg:py-32">
      {/* Left accent line */}\n      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>

      <div className="ml-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-2">
            The Methodology
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            How Find You Coaching Works
          </h2>
        </div>

        {/* Approaches Grid */}
        <div className="space-y-20 lg:space-y-32">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                approach.imagePosition === "left" ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-accent/30">
                      {approach.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {approach.title}
                    </h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-80 lg:h-96">
                <img
                  src={approach.image}
                  alt={approach.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
