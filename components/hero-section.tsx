import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="mr-2">🤖</span>
            Fordham Artificial Intelligence Society
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            AI for students building the <span className="text-primary">future</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            Empower your learning journey with artificial intelligence. Join our community of innovators, researchers,
            and builders shaping tomorrow's technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://fordhamgsb.campuslabs.com/engage/organization/ais" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
