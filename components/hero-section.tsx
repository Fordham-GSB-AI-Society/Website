import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 mt-16">
            <span className="logo"> <img src="/fgsbais_logo-removebg-preview.png"></img></span>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">

            <span>AI for students building the </span><span className="text-primary">future</span>
      
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
          <p>
            Empower your learning journey with artificial intelligence. Join our community of innovators, researchers,
            and builders shaping tomorrow's technology.
          </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          className= "flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://fordhamgsb.campuslabs.com/engage/organization/ais" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
