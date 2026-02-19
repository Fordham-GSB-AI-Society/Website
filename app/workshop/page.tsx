"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ArrowLeft, Pizza, Users, Workflow } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const EVENT_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9creWOjvcwWPnou8zOuX1vxT4BpVdrB_ITE41inbMcdvlHg/viewform?usp=send_form"

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
                background: "rgba(24, 24, 27, 0.85)",
                color: "#ef5a74",
                border: "1px solid #4c1d1d1a"
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2 text-[#ef5a74]" />
              Back to Events
            </Link>
            <div className="flex items-center gap-3 mb-4">
              {/* Red-transparent tag */}
              <span
                className="px-3 py-1"
                style={{
                  background: "rgba(239,90,116,0.13)",
                  color: "#ef5a74",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  borderRadius: "0.375rem",
                }}
              >
                Workshop
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
              Exclusive Design Thinking & Agentic AI Workshop @ Microsoft NYC
            </h1>
            {/* Microsoft logo added here, above the description and below heading */}
            <div className="mt-2 mb-4 flex justify-center items-center gap-6">
              <Image
                src="/microsoft-logo.png"
                alt="Microsoft Logo"
                width={250}
                height={125}
                className="!bg-transparent"
                style={{
                  background: "transparent",
                  borderRadius: "0.375rem",
                  boxShadow: "none",
                  padding: 0,
                  maxWidth: "190px",
                  height: "auto",
                }}
                priority
              />
              <Image
                src="/fgsbais_logo-removebg-preview.png"
                alt="Fordham AI Society Logo"
                width={200}
                height={100}
                className="!bg-transparent"
                style={{
                  background: "transparent",
                  borderRadius: "0.375rem",
                  boxShadow: "none",
                  padding: 0,
                  maxWidth: "210px",
                  height: "auto",
                }}
                priority
              />
            </div>
            <p className="text-2xl text-muted-foreground mb-8 max-w-4xl text-pretty">
              Fordham, get ready: the AI Society is taking you inside the Microsoft Office for an exclusive Design Thinking & Agentic AI Workshop you do not want to miss.
              <span className="block mt-4">
                <strong className="text-foreground">Limited: Only 150 seats available!</strong>
              </span>
              <span className="block mt-4 text-center w-full">
                <strong className="text-foreground">Registration closes February 28th, 2026</strong>
              </span>
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6 text-[#ef5a74]" />
                <span className="font-medium">March 2, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <Clock className="h-6 w-6 text-[#ef5a74]" />
                <span className="font-medium">8:00 AM - 2:00 PM (EST)</span>
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <MapPin className="h-6 w-6 text-[#ef5a74]" />
                <a
                  href="https://www.google.com/maps?q=11+Times+Square,+New+York,+NY+10036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: "#ef5a74" }}
                >
                  11 Times Square, New York, NY 10036
                </a>
              </div>
            </div>
            {/* Signup button with external link */}
            <Button
              className="w-full md:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg text-2xl py-8"
              asChild
              size="lg"
              style={{
                background: "rgba(24, 24, 27, 0.88)",
                color: "#ef5a74",
                borderRadius: "0.5rem",
                fontWeight: 600,
                border: "1px solid rgba(239,90,116,0.13)",
              }}
            >
              <a
                href={EVENT_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ef5a74",
                  textShadow: "0 1px 10px rgba(239,90,116,0.07)",
                }}
              >
                Register Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Event Image */}
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
                maxWidth: "900px",
                margin: "0 auto",
                minHeight: "600px",
              }}
            >
              <Image
                src="/Microsoft-Event.jpeg"
                alt="Exclusive Design Thinking & Agentic AI Workshop at Microsoft"
                width={1100}
                height={700}
                className="object-contain rounded-2xl"
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
            <h2 className="text-3xl font-bold mb-8 text-center">What You'll Experience</h2>
            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <div className="space-y-6 text-muted-foreground text-lg">
                  <div className="flex items-start gap-4">
                    <Workflow className="h-7 w-7 text-[#ef5a74] mt-1" />
                    <div>
                      <strong className="text-foreground">Design Thinking & Real-World AI Building:</strong> Dive into the process of mapping workflows, breaking down real-world business challenges, and architecting agentic AI systems from scratch—guided by industry best practices.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="h-7 w-7 text-[#ef5a74] mt-1" />
                    <div>
                      <strong className="text-foreground">Team Collaboration:</strong> Collaborate with peers in dynamic teams to “cook up” AI-powered solutions hands-on. Think like an AI architect and experience the teamwork process of industry innovation.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Pizza className="h-7 w-7 text-[#ef5a74] mt-1" />
                    <div>
                      <strong className="text-foreground">Pizza, Drinks & Networking:</strong> After we build, unwind with pizza, beverages, and great conversation in the Microsoft Times Square lounge.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ArrowLeft className="h-7 w-7 text-[#ef5a74] mt-1 rotate-90" />
                    <div>
                      <strong className="text-foreground">Limited Seats:</strong> This event is exclusive for only 150 people. Make sure to <a href={EVENT_FORM_LINK} className="underline" target="_blank" rel="noopener noreferrer">register right away</a> to claim your spot.
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Build at Microsoft?</h2>
            <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              This is your invitation to step inside one of New York’s most iconic offices, work alongside peers and AI leaders, and create something real. Open to all Fordham students—no prior experience needed. Curiosity required!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-2xl py-6"
                asChild
                style={{
                  background: "rgba(24, 24, 27, 0.88)",
                  color: "#ef5a74",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  border: "1px solid rgba(239,90,116,0.13)",
                }}
              >
                <a
                  href={EVENT_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ef5a74",
                  }}
                >
                  Register Now
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
