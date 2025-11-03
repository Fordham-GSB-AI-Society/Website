"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect } from "react"

interface EmbeddedPost {
  urn: string
  title: string
  description: string
}

const EMBEDDED_POSTS: EmbeddedPost[] = [

  {
    urn: "urn:li:share:7390455329731424256",
    title: "CTRL + ALT + MEET Annoucement",
    description: "",
  },

  {
    urn: "urn:li:share:7386163387128475648",
    title: "AI Jobs Newsletter October 20-26",
    description: "",
  },
  {
    urn: "urn:li:share:7384343596600188929",
    title: "AI Newsletter October 13-20",
    description: "",
  },
]

export function LinkedinEmbeddedPosts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    // Load LinkedIn embed script
    const script = document.createElement("script")
    script.src = "https://platform.linkedin.com/in.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = "lang: en_US"
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="linkedin" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Linkedin className="h-10 w-10 text-[#0A66C2]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Latest Updates</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stay connected with our latest news, events, and achievements. Follow us on LinkedIn for more updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EMBEDDED_POSTS.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="w-full flex items-center justify-center bg-background p-4">
                    <iframe
                      src={`https://www.linkedin.com/embed/feed/update/${post.urn}?collapsed=1`}
                      height="850"
                      width="600"
                      frameBorder="0"
                      allowFullScreen
                      title="Embedded post"
                      className="max-w-full"
                    />
                  </div>

                  {/* Fallback content if embed doesn't load */}
                  <div className="p-6 border-t">
                    <h3 className="font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] bg-transparent"
                    >
                      <a
                        href={`https://www.linkedin.com/feed/update/${post.urn}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <a href="https://www.linkedin.com/company/fordham-ai-society" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              Follow Us on LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
