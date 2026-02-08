"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function WorkshopEventPage() {
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
            <Link
              href="/#events"
              className="inline-flex items-center text-white hover:underline mb-6 font-semibold rounded-md px-4 py-2 shadow transition"
              style={{
                background: "rgba(24, 24, 27, 0.85)", // Black, more opaque
                color: "#ef5a74", // Light red for text (matching the "tag" below)
                border: "1px solid #4c1d1d1a", // Extra subtle border
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2 text-[#ef5a74]" />
              Back to Events
            </Link>
            <div className="flex items-center gap-3 mb-4">
              {/* Red-transparent tag */}
              <span className="px-3 py-1" style={{
                background: "rgba(239,90,116,0.13)", // red, semi-opaque
                color: "#ef5a74",
                fontWeight: 500,
                fontSize: "0.95rem",
                borderRadius: "0.375rem",
              }}>
                Workshop
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
              Learn How to Predict Sports Games Results Workshop!
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-4xl text-pretty">
              An interactive workshop where you'll learn the basics of data-driven sports prediction using AI and machine learning! No prior experience necessary – just bring your curiosity and enthusiasm.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6 text-[#ef5a74]" />
                <span className="font-medium">February 12th, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Clock className="h-6 w-6 text-[#ef5a74]" />
                <span className="font-medium">1:00pm - 2:30pm</span>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <MapPin className="h-6 w-6 text-[#ef5a74]" />
                <span className="font-medium" style={{ color: "#ef5a74" }}>
                  Room 333, Fordham Lincoln Center
                </span>
              </div>
            </div>
            {/* Signup button with external link */}
            <Button
              className="w-full md:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg text-2xl py-8"
              asChild
              size="lg"
              style={{
                background: "rgba(24, 24, 27, 0.88)", // Black, more opaque
                color: "#ef5a74",
                borderRadius: "0.5rem",
                fontWeight: 600,
                border: "1px solid rgba(239,90,116,0.13)",
              }}
            >
              <a
                href="https://fordhamgsb.campuslabs.com/engage/event/12187116"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ef5a74",
                  textShadow: "0 1px 10px rgba(239,90,116,0.07)",
                }}
              >
                Sign Up 
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Event Image - Even bigger and no background color */}
      <section className="py- bg-muted/30">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl flex justify-center items-center"
          >
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "1100px",   // Even bigger than before
                margin: "0 auto",
                minHeight: "700px",    // Bigger minimum height
              }}
            >
              <Image
                src="/workshop event.png"
                alt="Workshop Event Poster"
                width={1100}
                height={700}
                className="object-contain rounded-2xl"
                // No custom background color
                style={{
                  minHeight: "700px",
                }}
                priority
                sizes="(max-width: 767px) 98vw, (min-width: 768px) 1100px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Workshop Details</h2>
            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    <strong className="text-foreground">Introduction to Sports Prediction:</strong> Understand how AI and machine learning can be used to forecast sports results.
                  </p>
                  <p>
                    <strong className="text-foreground">Hands-on Data Analysis:</strong> Walk through basic data science techniques and see how data is prepared for making predictions.
                  </p>
                  <p>
                    <strong className="text-foreground">Interactive Demos:</strong> Try your hand at simple prediction models and get a glimpse into the power of data-driven decisions.
                  </p>
                  <p>
                    <strong className="text-foreground">Q&amp;A Session:</strong> Bring your questions and curiosity—no question is too basic!
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
            <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
            <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don&apos;t miss your chance to learn how artificial intelligence can be used to predict real-world outcomes. Open to all majors and experience levels!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-2xl py-6"
                asChild
                style={{
                  background: "rgba(24, 24, 27, 0.88)", // Black, more opaque
                  color: "#ef5a74",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  border: "1px solid rgba(239,90,116,0.13)",
                }}
              >
                <a
                  href="https://fordhamgsb.campuslabs.com/engage/event/12187116"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ef5a74",
                  }}
                >
                  Sign Up
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-105 bg-transparent text-2xl py-6"
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
