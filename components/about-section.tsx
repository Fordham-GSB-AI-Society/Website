"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Users, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Brain,
      title: "AI Research",
      description: "Explore cutting-edge research in machine learning, deep learning, and artificial intelligence.",
    },
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Build real-world AI applications and contribute to open-source projects.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded students, researchers, and industry professionals.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Turn your AI ideas into reality with mentorship and collaborative support.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About Our Club</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            The Fordham GSB AI Society is a student-led organization dedicated to advancing artificial intelligence education,
            research, and innovation on campus and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
