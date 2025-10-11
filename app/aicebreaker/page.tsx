"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Gift, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function AIcebreakerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <Link href="/#events" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md font-medium">Social Event</span>
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-md font-medium">
                Happy Hour
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">AIcebreaker Happy Hour</h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl text-pretty">
              Join us for an evening of networking, conversation, and community building at The Blessed Kitchen. Connect
              with fellow AI enthusiasts in a relaxed, off-campus setting.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">October 23, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">8:00 PM - 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">The Blessed Kitchen</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                RSVP Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Add to Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Image */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image src="/modern-restaurant-interior-with-warm-lighting-and-.jpg" alt="The Blessed Kitchen venue" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 text-center">
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
                <p className="text-xl text-muted-foreground mb-2">
                  <span className="text-2xl font-bold text-primary">First 30 attendees</span> receive
                </p>
                <p className="text-3xl font-bold text-primary mb-4">1 FREE DRINK</p>
                <p className="text-muted-foreground">Arrive early to claim your complimentary beverage!</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Event Details</h2>


            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Casual Networking:</strong> Meet fellow AI enthusiasts, exchange
                    ideas, and build connections in a relaxed atmosphere away from campus.
                  </p>
                  <p>
                    <strong className="text-foreground">Open Conversation:</strong> No formal presentations or
                    agenda—just good conversation about AI, technology, career paths, and shared interests.
                  </p>
                  <p>
                    <strong className="text-foreground">Community Building:</strong> Strengthen the Fordham AI community
                    and create lasting friendships with people who share your passion for artificial intelligence.
                  </p>
                  <p>
                    <strong className="text-foreground">Food & Drinks:</strong> Enjoy the venue's menu with the first 30
                    attendees receiving one complimentary drink.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to connect with the Fordham AI community in a fun, relaxed setting.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                RSVP Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/#events">View All Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
