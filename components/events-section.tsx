"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const events = [
    {
      title: "Fordham AI-cebreaker",
      date: "October 23th, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Picante, 3424 Broadway, New York, NY 10031",
      description: "",
      type: "Social",
      link: '/aicebreaker'
    },

    {
      title: "Fordham AI Society x Qlaws.ai Hackathon",
      date: "TBA",
      time: "TBA",
      location: "Fordham Lincoln Center - McNally Amphitheater, 140 W 62nd St",
      description: "Build innovative AI solutions in teams over a weekend-long hackathon.",
      type: "Hackathon",
      link: "",
    }
  ]

  return (
    <section id="events" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join us for workshops, speaker events, hackathons, and networking opportunities to expand your AI knowledge
            and skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium transition-all duration-300 hover:bg-primary/20">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground hover:translate-x-1 cursor-default">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground hover:translate-x-1 cursor-default">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground hover:translate-x-1 cursor-default">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  {event.link ? (
                    <Button asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <a href={event.link}>Learn More</a> 
                    </Button>
                  ) : (
                    <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Register Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
