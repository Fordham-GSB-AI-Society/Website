"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, ThumbsUp, MessageCircle, Share2, ExternalLink, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface LinkedInPost {
  author: string
  date: string
  content: string
  image: string | null
  likes: number
  comments: number
  shares: number
  link: string
}

const FALLBACK_POSTS: LinkedInPost[] = [
  {
    author: "Fordham AI Club",
    date: "2 days ago",
    content:
      "Excited to announce our upcoming AI Hackathon in partnership with QLaws.ai! Join us for 4 hours of innovation, collaboration, and the chance to work on real-world legal AI challenges. Top performers will have the opportunity to interview for internships and full-time roles.",
    image: "/ai-hackathon-event-poster.jpg",
    likes: 127,
    comments: 23,
    shares: 15,
    link: "https://linkedin.com/company/fordham-ai-club",
  },
  {
    author: "Fordham AI Club",
    date: "1 week ago",
    content:
      "Our members recently presented their research on Natural Language Processing at the Northeast AI Conference. Proud of the innovative work being done by our community in advancing AI applications in legal tech and healthcare.",
    image: "/ai-conference-presentation.jpg",
    likes: 89,
    comments: 12,
    shares: 8,
    link: "https://linkedin.com/company/fordham-ai-club",
  },
  {
    author: "Fordham AI Club",
    date: "2 weeks ago",
    content:
      "Join us for AIcebreaker - our monthly networking happy hour at The Blessed Kitchen! Connect with fellow AI enthusiasts, discuss the latest trends in machine learning, and enjoy complimentary drinks for the first 30 attendees. See you there!",
    image: "/networking-event-happy-hour.jpg",
    likes: 156,
    comments: 34,
    shares: 22,
    link: "https://linkedin.com/company/fordham-ai-club",
  },
]

export function LinkedinPosts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [posts, setPosts] = useState<LinkedInPost[]>(FALLBACK_POSTS)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log("[v0] Starting fetch from:", window.location.origin + "/api/linkedin-posts")
        const response = await fetch("/api/linkedin-posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        console.log("[v0] Response status:", response.status)
        console.log("[v0] Response ok:", response.ok)

        if (!response.ok) {
          const text = await response.text()
          console.log("[v0] Response body:", text)
          throw new Error(`API returned ${response.status}`)
        }

        const data = await response.json()
        console.log("[v0] Received LinkedIn posts:", data)

        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts)
          console.log("[v0] Successfully loaded", data.posts.length, "posts")
        }

        if (data.error) {
          setError(data.error)
          console.log("[v0] API returned error:", data.error)
        }
      } catch (err) {
        console.error("[v0] Error fetching LinkedIn posts:", err)
        setError(err instanceof Error ? err.message : "Failed to load posts")
        // Keep fallback posts on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
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
          {isLoading && (
            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Loading latest posts...</span>
            </div>
          )}
          {error && !isLoading && (
            <div className="mt-4 text-sm text-muted-foreground">Showing recent posts (Live feed unavailable)</div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-[#0A66C2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{post.author}</h3>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{post.content}</p>

                  {post.image && (
                    <div className="aspect-video bg-muted overflow-hidden rounded-lg mb-4">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="LinkedIn post"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 pt-2 border-t">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 transition-colors duration-300 hover:text-foreground">
                        <ThumbsUp className="h-4 w-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1 transition-colors duration-300 hover:text-foreground">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </span>
                      <span className="flex items-center gap-1 transition-colors duration-300 hover:text-foreground">
                        <Share2 className="h-4 w-4" />
                        {post.shares}
                      </span>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] bg-transparent"
                  >
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on LinkedIn
                    </a>
                  </Button>
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
            <a href="https://linkedin.com/company/fordham-ai-club" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              Follow Us on LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
