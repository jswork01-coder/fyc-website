import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Banner Section */}
        <section className="relative w-full h-96 bg-cover bg-center overflow-hidden">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663205989984/DRsH8thz4ZCGrUMGta3hmv/brandedfyc_63ca1073.png"
            alt="Find You Coaching - Pull Back the Curtain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="ml-8 max-w-2xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                Pull Back the Curtain
              </h1>
              <p className="text-xl text-white/90 mb-8 drop-shadow-md">
                Uncover the real you and build the business you've always wanted
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
                  Start Your Journey
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base bg-white/90 hover:bg-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="relative bg-background py-16 sm:py-24 lg:py-32">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          <div className="ml-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663205989984/DRsH8thz4ZCGrUMGta3hmv/fyc-business-banner_feb3cf46.png"
              alt="From Overwhelmed to Empowered"
              className="w-full rounded-lg mb-12 shadow-lg"
            />
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                Your Journey
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                From Overwhelmed to Empowered
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                You have the knowledge. You have the certification. But something's holding you back from building the business you deserve. Together, we'll uncover what that is, build the business fundamentals you need, and create stepping stones to success.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative bg-card py-16 sm:py-24 lg:py-32">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          <div className="ml-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                  About Me
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  I'm Jessie
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  I'm a certified coach who's been through business training myself. I understand what it's like to learn frameworks and then struggle to implement them. I've walked the path you're on, which means I know exactly where you get stuck and how to help you move forward.
                </p>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  I give you a unique perspective to see the possibilities and blind spots in your business. Together, we uncover what's really holding you back—the fears, the doubts, the limiting beliefs—so you can build a business that's not just profitable, but aligned with who you really are.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  And I don't believe in leaving you to figure it out alone. You'll have group support, accountability, and training tailored to what you're actually dealing with.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663205989984/DRsH8thz4ZCGrUMGta3hmv/jessie-profile_574e0dea.webp"
                  alt="Jessie - Find You Coaching"
                  className="w-full h-full object-cover" style={{objectPosition: '50% 35%'}}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise & Background Section */}
        <section className="relative bg-background py-16 sm:py-24 lg:py-32">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          <div className="ml-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                My Background
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Diverse Knowledge, Real Understanding
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl">
                I've studied with mentors across multiple modalities and disciplines. This gives me a unique perspective on what it takes to build a sustainable coaching business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Community */}
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Community</h3>
                <p className="text-foreground/70">
                  Understanding how to build and nurture communities that support each other's growth.
                </p>
              </div>

              {/* Health & Wellness */}
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Health & Wellness</h3>
                <p className="text-foreground/70">
                  Holistic approach to wellbeing—understanding that business success includes personal health and balance.
                </p>
              </div>

              {/* Technology & AI */}
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Technology & AI</h3>
                <p className="text-foreground/70">
                  Practical knowledge of modern tools and AI to help you scale your coaching business efficiently.
                </p>
              </div>

              {/* Accessibility & Inclusion */}
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl mb-3">♿</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Accessibility & Inclusion</h3>
                <p className="text-foreground/70">
                  Deep understanding of accessibility and inclusive practices—building businesses that work for everyone.
                </p>
              </div>

              {/* Business Strategy */}
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Business Strategy</h3>
                <p className="text-foreground/70">
                  I've been through business training and understand financial planning, business models, and implementation. I know the gap between learning and doing—and how to bridge it.
                </p>
              </div>

              {/* Coaching Modalities */}
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Multiple Modalities</h3>
                <p className="text-foreground/70">
                  Trained in various coaching approaches, giving me flexibility to meet you where you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="relative bg-background py-16 sm:py-24 lg:py-32">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          <div className="ml-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                Your Complete Program
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                What You'll Get
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Emotional Clarity */}
              <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Emotional Clarity
                </h3>
                <p className="text-foreground/70">
                  We pull back the curtain on your emotions and limiting beliefs. Understanding what's really holding you back is the first step to moving forward.
                </p>
              </div>

              {/* Business Fundamentals */}
              <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Business Fundamentals
                </h3>
                <p className="text-foreground/70">
                  Business plans, financial projections, Excel spreadsheets—the real tools you need to build a sustainable business. No fluff, just practical strategy.
                </p>
              </div>

              {/* Group Body Doubling */}
              <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Group Body Doubling
                </h3>
                <p className="text-foreground/70">
                  Work on your business alongside other coaches in our group sessions. Accountability, support, and the motivation that comes from building together.
                </p>
              </div>

              {/* Weekly Training */}
              <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Weekly Training
                </h3>
                <p className="text-foreground/70">
                  Training sessions based on what you're actually struggling with. Real problems, real solutions. Not a generic curriculum.
                </p>
              </div>

              {/* AI Skills */}
              <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  AI & Tech Skills
                </h3>
                <p className="text-foreground/70">
                  Learn how to leverage AI and modern tools to scale your coaching business. Save time, increase impact, and stay competitive.
                </p>
              </div>

              {/* Ongoing Support */}
              <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Ongoing Support
                </h3>
                <p className="text-foreground/70">
                  You're not alone in this. Continuous support, guidance, and accountability as you build your stepping stones to success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stepping Stones Section */}
        <section className="relative bg-card py-16 sm:py-24 lg:py-32">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          <div className="ml-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                Your Path Forward
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                The Stepping Stones
              </h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Clarity Call
                  </h3>
                  <p className="text-lg text-foreground/70">
                    We start with a real conversation. You share where you are, what's holding you back, and what you want to build. I listen.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Uncover Your Truth
                  </h3>
                  <p className="text-lg text-foreground/70">
                    Through guided exploration, we pull back the curtain on what's really stopping you. Emotions, beliefs, fears—we get to the root.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Build Your Foundation
                  </h3>
                  <p className="text-lg text-foreground/70">
                    We create your business plan, financial projections, and strategy. Real tools for a real business. You'll have clarity on where you're going.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Take Action Together
                  </h3>
                  <p className="text-lg text-foreground/70">
                    Join our group body doubling sessions. Work on your business while others work on theirs. Accountability, support, and momentum.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Learn & Grow
                  </h3>
                  <p className="text-lg text-foreground/70">
                    Weekly training tailored to what you're dealing with. AI skills, business strategy, mindset work—whatever you need to succeed.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Build Your Success
                  </h3>
                  <p className="text-lg text-foreground/70">
                    With clarity, foundation, and support, you build the business you've always wanted. One stepping stone at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative bg-background py-16 sm:py-24 lg:py-32">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
          <div className="ml-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-medium text-accent uppercase tracking-wide mb-4">
                Success Stories
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                What Others Are Saying
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 - Kimbipi */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    KK
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Kimbipi Krämer</p>
                    <p className="text-sm text-foreground/60">Community Member</p>
                  </div>
                </div>
                <p className="text-foreground/70 italic">
                  "Thank you Jessie, you doing a wonderful job. I am a testament of what you are doing. Helping getting over hurdles which is enabling me to move forward."
                </p>
              </div>

              {/* Testimonial 2 - Anita */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    AN
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Anita</p>
                    <p className="text-sm text-foreground/60">Community Member</p>
                  </div>
                </div>
                <p className="text-foreground/70 italic">
                  "I have had several coaching sessions with Jessie so far and she has helped me clear 2 major blocks that have been holding me back from completing my courses. The knowledge and experiences Jessie has to offer have been invaluable in helping me devise a clear plan for my next steps."
                </p>
              </div>

              {/* Testimonial 3 - Kramer K */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    KK
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Kramer K</p>
                    <p className="text-sm text-foreground/60">Community Member</p>
                  </div>
                </div>
                <p className="text-foreground/70 italic">
                  "I find the first session of the coaching service has been transformative for me. With the guidance, I've been able to overcome past trauma and focus on my goal. Your empathy, encouragement, and practical tools have helped me heal, grow, and move forward with confidence."
                </p>
              </div>

              {/* Testimonial 4 - Cindy-Ann */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    CA
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Cindy-Ann</p>
                    <p className="text-sm text-foreground/60">Community Member</p>
                  </div>
                </div>
                <p className="text-foreground/70 italic">
                  "I believe Jessie's superpower is being helpful. Always willing to lend a hand and is a brilliant note taker who shares her knowledge and wisdom with others. This skills are very valuable when it comes to coaching."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-primary py-16 sm:py-24 lg:py-32">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
          <div className="ml-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Pull Back the Curtain?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's start with a clarity call. No obligation, no pressure. Just an honest conversation about where you are and how I can help you build the business you deserve.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base">
              Schedule Your Clarity Call
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
