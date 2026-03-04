"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { EventsSection } from "@/components/events-section"
import { PastEventsSection } from "@/components/past-events-section"
import { GallerySection } from "@/components/gallery-section"
import { LinkedinEmbeddedPosts } from "@/components/linkedin-embedded-posts"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <PastEventsSection />
      <GallerySection />
      <LinkedinEmbeddedPosts />
      <TeamSection />
      <Footer />
    </main>
  )
}
