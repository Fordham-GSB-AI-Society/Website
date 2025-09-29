"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "AI Chatbot Assistant",
      description: "A conversational AI built with natural language processing to help students with academic queries.",
      tech: ["Python", "TensorFlow", "React"],
      image: "/ai-chatbot-interface.png",
    },
    {
      title: "Computer Vision Lab",
      description: "Image recognition and classification system for campus security and accessibility features.",
      tech: ["OpenCV", "PyTorch", "Flask"],
      image: "/computer-vision-dashboard.jpg",
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models to predict student performance and recommend personalized learning paths.",
      tech: ["Scikit-learn", "Pandas", "Jupyter"],
      image: "/data-analytics-dashboard.png",
    },
  ]

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore the innovative AI projects our members are working on, from research prototypes to production-ready
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
