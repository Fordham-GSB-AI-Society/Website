"use client"
import Head from "next/head"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Users,
  Code,
  Database,
  Palette,
  TrendingUp,
  FileSearch,
  FileEdit,
  CheckCircle,
  ArrowLeft,
  Target,
  Award,
  Briefcase,
  GitBranch,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HackathonPage() {
  const challenges = [
    {
      title: "Retrieval",
      description: "Answer diligence questions from contracts with citations (JSON output)",
      icon: FileSearch,
    },
    {
      title: "Drafting",
      description: "Generate SPA clauses with redlines from LOI documents (DOCX + traceability)",
      icon: FileEdit,
    },
    {
      title: "Evaluation",
      description: "Build clause-level evaluator for hallucinations/missing representations (metrics)",
      icon: CheckCircle,
    },
    {
      title: "UX",
      description: "Design a one-screen review UI (Figma prototype)",
      icon: Palette,
    },
    {
      title: "Data",
      description: "Develop a PII/privilege redactor for legal documents (Python notebook)",
      icon: Database,
    },
    {
      title: "GTM",
      description: "Identify pilot firms, workflows, and buying committees (spreadsheet + outreach plan)",
      icon: TrendingUp,
    },
  ]

  const scoringCriteria = [
    { criterion: "Problem Framing", points: 15 },
    { criterion: "Technical Correctness / Research Rigor", points: 25 },
    { criterion: "Evidence, Traceability, Reproducibility", points: 20 },
    { criterion: "UX Clarity or Operational Practicality", points: 15 },
    { criterion: "Communication & Teamwork", points: 15 },
    { criterion: "Velocity & Time Management", points: 10 },
  ]

  const timeline = [
    { milestone: "T-21 days", description: "Finalize tasks, data, rubrics, mentors, and prizes" },
    { milestone: "T-14 days", description: "Open registration, publish rules and starter kit" },
    { milestone: "T-7 days", description: "Host office hours, release dataset. Registration closes" },
    { milestone: "T-0", description: "Kickoff, checkpoints, submissions and oral evaluations (4-hour event)" },
    { milestone: "T+1", description: "Auto-evaluation, demos, awards, and interviews" },
  ]

  const judgingPanel = [
    { role: "Partner-level Lawyer", icon: Briefcase},
    { role: "ML Lead", icon: Code },
    { role: "Product Lead", icon: Target },
    { role: "Design Lead", icon: Palette },
    { role: "External Advisor", icon: Users },
  ]

  const tooling = [
    "Repository template, starter code, and evaluation scripts",
    "Colab/Modal compute tiers with limited LLM key access",
    "Vector DB sandbox + embeddings",
    "Figma library for UI design",
  ]

  return (
            
            <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <Link href="/#events">
                      <Button variant="ghost" className="mb-8 transition-all duration-300 hover:scale-105">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Events
                      </Button>
                    </Link>
                  </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                 <div className="flex flex-col items-center mb-6">
            <div className="flex justify-center items-center gap-12 mb-4 w-full">
                {/* Fordham GSB AI Society Logo */}
                <div className="flex justify-center items-center">
                <img
                    src="/fgsbais_logo-removebg-preview.png"
                    alt="Fordham GSB AI Society Logo"
                    className="mx-auto"
                    style={{
                    display: "block",
                    height: "300px",
                    maxHeight: "100%",
                    width: "auto",
                    maxWidth: "400px",
                    minWidth: "180px",
                    }}
                />
                </div>
                {/* X Image */}
                <div className="flex justify-center items-center" style={{ marginLeft: "60px", marginRight: "60px" }}>
                <img
                    src="/redcross.png"
                    alt="X Symbol"
                    className="mx-auto"
                    style={{
                    display: "block",
                    height: "256px", // Adjust height to match the design, e.g., half the logo height
                    width: "auto",
                    maxWidth: "300px",
                    minWidth: "80px",
                    }}
                />
                </div>
                {/* QLaws.ai Logo */}
                <a
                href="https://www.qlaws.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                <img
                    src="/qlaws6.png"
                    alt="QLaws.ai Logo"
                    className="mx-auto"
                    style={{
                    display: "block",
                    height: "380px",
                    maxHeight: "100%",
                    width: "auto",
                    maxWidth: "400px",
                    minWidth: "180px",
                    }}
                />
                </a>
            </div>
            <h1 className="text-4xl-red sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="text-[#800000]">Hackathon</span>
            </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              A strategic initiative to identify and recruit talented people within AI for QLaws.ai. Build AI
              solutions for legal tech and advance to interviews, trial projects, and internships.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span>TBA</span>
              </div>
              <div className="flex items-center text-lg">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <span>4 Hours</span>
              </div>
              <div className="flex items-center text-lg">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>On-Site Event</span>
              </div>
              <div className="flex items-center text-lg">
                <Users className="h-5 w-5 mr-2 text-primary" />
                <span>Teams of 1-2</span>
              </div>
            </div>

            <Button size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
                Register Your Team
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Purpose & Opportunity</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              This hackathon serves as a skills-signal funnel where top performers advance to interviews, trial
              projects, and internships with potential conversion to full-time roles at QLaws.ai. We're looking for
              talented individuals across multiple disciplines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-semibold">Backend / AI Engineer</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-semibold">Applied ML / NLP</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-semibold">Legal Research Analyst</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-semibold">Product Ops (Prompt + Evaluation)</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-semibold">UX/UI</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-semibold">GTM / Business Development Ops</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Challenge Menu</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Select 2–3 tasks to complete during the hackathon, each with specific deliverables
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <challenge.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{challenge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Rubric Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Scoring Rubric</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Submissions are evaluated on a 100-point scale across six key criteria
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {scoringCriteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-center justify-between p-6">
                    <p className="font-semibold text-lg">{item.criterion}</p>
                    <p className="text-2xl font-bold text-primary">{item.points} pts</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Format & Logistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Format & Logistics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    4-hour on-site event with mentorship check-ins at 1h, 2h, and 3h
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Teams
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">1-2 members per team</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                    GitHub Repository
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Teams will be invited to the QLaws.ai Hackathon GitHub organization. Create a private repo using
                    format: team-name-hackathon-2025
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Submission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Push final code to your team's GitHub repo by the end of the 4-hour event. Include all code,
                    deliverables, and README
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Registration Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Teams must sign up via the provided Google Form. Registration closes at T-7 days before the event.
                </p>
                <Button asChild className="transition-all duration-300 hover:scale-105">
                  <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tooling Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Tooling Provided</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tooling.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{tool}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Datasets & Guardrails Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Datasets & Guardrails</h2>
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Provided Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">• 30–100 de-identified contracts + small gold-label dataset</p>
                  <p className="text-muted-foreground">• Published APIs and expected schemas</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">• README documenting assumptions and limitations</p>
                  <p className="text-muted-foreground">• NDA and data-use policy enforced</p>
                  <p className="text-muted-foreground">
                    • No external LLM calls with sensitive documents unless routed through company proxy
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Winning entries assigned to QLaws.ai; non-winners retain rights
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talent Funnel Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Talent Funnel</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center text-pretty">
              Your path from hackathon participant to QLaws.ai team member
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Score ≥70 Points</p>
                      <p className="text-muted-foreground">Fast-tracked to interview</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">30-Minute Panel Interview</p>
                      <p className="text-muted-foreground">
                        Code walkthrough or portfolio review + legal reasoning mini-case
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Paid 2-Week Trial Project</p>
                      <p className="text-muted-foreground">Work on a real project with the team</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">3–6 Month Internship</p>
                      <p className="text-muted-foreground">Defined OKRs with potential conversion to full-time role</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Event Timeline</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Key milestones leading up to and following the hackathon
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex-shrink-0">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-lg">{item.milestone}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Panel Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Judging Panel</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Top-performing teams will present to our expert panel in a 30–60 minute final round
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {judgingPanel.map((judge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
                  <CardContent className="p-6">
                    <judge.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="font-semibold">{judge.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prizes & Recognition</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Win more than just prizes—gain career opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
                <CardHeader>
                  <Trophy className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl">Cash Prize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Monetary reward for winning team</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
                <CardHeader>
                  <Briefcase className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl">Guaranteed Interview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Fast-track to QLaws.ai interview process</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
                <CardHeader>
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl">Ship Prize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Winning repository merged to sandbox with author credit</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Launch Your Career in Legal AI?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Register your team now to compete for prizes, interviews, and internship opportunities at QLaws.ai.
              Closes T-7 days before the event.
            </p>
            <Button size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
                Register Your Team Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
