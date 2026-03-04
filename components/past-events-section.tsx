"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function PastEventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pastEvents = [
    {
      title: "Exclusive Design Thinking & Agentic AI Workshop @ Microsoft NYC",
      date: "March 2, 2026",
      time: "8:00 AM - 2:00 PM (EST)",
      location: "11 Times Square, New York, NY 10036",
      description: `Our first major workshop was a huge success! We took Fordham students inside the Microsoft Office for an exclusive hands-on session on Design Thinking & Agentic AI.`,
      image: "/Microsoft-Event.jpeg",
      type: "Workshop",
      link: "/workshop"
    }
  ]

  return (
    <section id="past-events" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Past Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Take a look at what we've been up to recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {event.image && (
                    <div className="w-full mb-4 flex justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={event.image}
                        alt={event.title}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  <p className="text-muted-foreground mb-4 text-pretty">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  {event.link && (
                    <Button asChild variant="outline" className="w-full">
                      <a href={event.link}>View Recaps</a>
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
