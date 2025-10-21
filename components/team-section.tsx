"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    {
      name: "Mainak Panja",
      role: "President",
      major: "FTMBA '26",
      image: "/mainak.jpg",
      email: "",
      linkedin: "https://www.linkedin.com/in/mainak-m-panja-66850824/",
      github: "",
      bio: "Mainak is an MBA candidate at the Fordham Gabelli School of Business who brings rich experience in Product Management, Strategy, and AI. As President, Mainak is steering AIS toward becoming a leading hub for applied AI learning — connecting Fordham students to hands-on projects, industry partnerships, and career-ready skills in an evolving AI landscape."
    },
    {
      name: "Ipsha Gautam",
      role: "Vice President",
      major: "MSAIB '27",
      image: "/ipsha.jpg",
      email: "",
      linkedin: "https://www.linkedin.com/in/ipsha-gautam-56137823a/",
      github: "",
      bio:"Ipsha brings a rare mix of marketing intelligence and quantitative modeling to every table she’s at. She understands both the art and architecture behind data. At Fordham, she’s pursuing her Master’s in Artificial Intelligence in Business, while serving as the Vice President of the AI Society, where she’s focused on translating technologies into accessible strategies for an AI-driven economy."
    },

    {
      name: "Sam Cleland",
      role: "Vice President of Tech and Research",
      major: "FTMBA '26",
      image: "/sam.jpg",
      email: "mailto:esc11@fordham.edu",
      linkedin: "https://www.linkedin.com/in/samcleland34/",
      github: "https://github.com/SamCleland034",
      bio:"Sam is an MBA candidate at Fordham’s Gabelli School of Business with a foundation in computer engineering, software development, and IT analytics. His passion lies in understanding emerging AI trends and making them accessible to the broader student community through research-driven learning and discussion. As VP of Research, Sam is leading AIS’s efforts to connect students with cutting-edge insights, ensuring Fordham’s AI community stays informed and future-ready."

    },
    {
      name: "Grace Assogba",
      role: "Vice President of Event and Outreach",
      major: "MSAIB '27",
      image: "/grace.jpg",
      email: "",
      linkedin: "https://www.linkedin.com/in/grace-a-b21285173/",
      github: "",
      bio:"Grace brings a dynamic background spanning J.P. Morgan Chase, venture capital, her own AI startup Vyntage, and the innovation consultancy Marché Labs. Currently pursuing her MS in Artificial Intelligence at Fordham, Grace is focused on expanding partnerships and curating hands-on programming that helps students gain real-world AI experience and career readiness. Her leadership is helping AIS create a stronger bridge between learning, application, and industry impact."
    },

    {
      name: "SN Attreya",
      role: "Vice President of Marketing",
      major: "FTMBA '27",
      image: "/SN.jpg",
      email: "",
      linkedin: "https://www.linkedin.com/in/sn-attreya-a0629a74/",
      github: "",
      bio:"An MBA candidate at Fordham’s Gabelli School of Business, SN brings over six years of experience spanning product marketing, creative direction, and documentary storytelling — helping brands, startups, and nonprofits communicate their mission with impact. As VP of Marketing, SN is leading the creative vision and communications strategy for AIS — elevating how the community shares ideas, builds connections, and showcases the human side of AI innovation."
    },

    {
      name: "Nathanael Lara",
      role: "Assistant VP of Tech and Research",
      major: "MSAIB '27",
      image: "/nathan.jpg",
      email: "",
      linkedin: "https://www.linkedin.com/in/nathanael-lara/",
      github: "",
      bio: ""
    },
    {
      name: "Shawyan Tabari",
      role: "Assistant VP of Tech and Research",
      major: "MS Finance '27",
      image: "/shawyan.jpg",
      email: "",
      linkedin: "https://www.linkedin.com/in/shawyan-t-36488525b/",
      github: "https://github.com/shawyan-t"
      ,
      bio:"An MS in Finance candidate at Fordham’s Gabelli School of Business with a computer science background, Shawyan works at the intersection of finance and AI. He builds practical tools for market research and data-driven analysis and has professional experience in software development and testing. As AVP of AI Research & Tech for the Fordham AI Society, he supports the club’s technical programming and resources for the student community."
    },
        {
      name: "Habana Rubio",
      role: "Assistant VP of Event and Outreach",
      major: "MS Marketing Intelligence '27",
      image: "/habana.jpg",
      email: "",
      linkedin: "https://www.linkedin.com/in/habana-rubio/",
      github: "",
      bio: ""
    },

    {
      name: "Gabriele Usai",
      role: "Treasurer",
      major: "MS IT '27",
      image: "/gabriele.jpg",
      email: "",
      linkedin: "https://www.linkedin.com/in/gabriele-usai/",
      github: "",
      bio: "Gabriele is analytical and strategic-driven with a background in Business Administration and experience as an IT Analyst in the banking industry; as Treasurer, he manages finances, tracks income and expenses, prepares transparent budgets for events while ensuring university policy compliance, and strengthens accountability through financial governance and strategic fund allocation."
    },
    
    {
      name: "Jake Mazie",
      role: "Marketing Analytics Lead",
      major: "FTMBA '27",
      image: "/jake.jpeg",
      email: "",
      linkedin: "https://www.linkedin.com/in/jake-mazie/",
      github: "",
      bio: "Jake Mazie is an MBA candidate at Fordham’s Gabelli School of Business and serves as the Marketing Analytics Lead for the AI Society. Before Fordham, he worked on the Insights & Analytics team at Creative Artists Agency (CAA Sports), advising Fortune 500 clients on sponsorship strategy, consumer insights, and performance measurement. With four years of experience across sports, entertainment, and brand analytics, Jake focuses on turning complex datasets into strategic recommendations that inform business decisions, optimize partnerships, and deliver measurable business results. He is passionate about leveraging AI to advance data-driven strategy, creativity, and innovation."
    },

    {
      name: "Arnav Joshi",
      role: "Digital Marketing Lead",
      major: "MSBA '27",
      image: "/arnav.jpeg",
      email: "",
      linkedin: "https://www.linkedin.com/in/arnav-r-j-3a05781b6/",
      github: ""
      ,
      bio: ""
    },

    {
      name: "Mondy Cameau",
      role: "Assistant VP of Event and Outreach",
      major: "MSBA '27",
      image: "",
      email: "",
      linkedin: "https://www.linkedin.com/in/mhc1216/",
      github: "",
      bio: ""
    },

  ]

  return (
    <section id="team" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our dedicated leadership team is committed to fostering AI education and building a strong community of AI
            enthusiasts at Fordham.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted transition-transform duration-300 hover:scale-110">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.major}</p>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                <a href={member.email} target="_blank" rel="noopener noreferrer">
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Github className="h-4 w-4" />
                  </button>
                  </a>
                </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}