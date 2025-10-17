"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const { data } = await axios.get("/api/jobs")
        setJobs(data)
      } catch (err) {
        console.error("Failed to fetch jobs:", err)
      } finally {
        setLoading(false)
      }
    }
    loadJobs()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#800000]">AI & Business Jobs</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore curated AI-related positions from Built In NYC
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading jobs...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <Button asChild variant="default" className="w-full">
                        <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                          Apply Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
