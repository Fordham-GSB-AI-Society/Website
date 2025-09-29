import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  // Use bio: tag if you want to include bio
  const team = [
    {
      name: "Mainak Panja",
      role: "President",
      major: "FTMBA '26",
      image: "/mainak.jpg",
      email: "",
      linkedin: "",
      github: ""
    },
    {
      name: "Ipsha Gautam",
      role: "Vice President of Event and Outreach",
      major: "MS AI '26",
      image: "/ipsha.jpg",
      email: "",
      linkedin: "",
      github: ""
    },
    {
      name: "Sam Cleland",
      role: "Vice President of Tech and Research",
      major: "FTMBA '26",
      image: "/sam.jpg",
      email: "esc11@fordham.edu",
      linkedin: "https://www.linkedin.com/in/samcleland34/",
      github: "https://github.com/SamCleland034"
    },
    {
      name: "Grace",
      role: "Vice President of",
      major: "MS AI '26",
      image: "/grace.png",
      email: "",
      linkedin: "",
      github: ""
    },

    {
      name: "SN Attreya",
      role: "Vice President of Marketing",
      major: "FTMBA '27",
      image: "/sn.jpg",
      email: "",
      linkedin: "",
      github: ""
    },

    {
      name: "Nathanael Lara",
      role: "Assistant VP of Tech and Research",
      major: "MS AI '26",
      image: "/nathan.jpg",
      email: "",
      linkedin: "",
      github: ""
    },
    {
      name: "Shawyan T",
      role: "Assistant VP of Tech and Research",
      major: "MS Finance '26",
      image: "/shawyan.jpg",
      email: "",
      linkedin: "",
      github: ""
    },
        {
      name: "Habana Rubio",
      role: "Assistant VP of Event and Outreach",
      major: "MS Marketing Intelligence '26",
      image: "/habana.jpg",
      email: "",
      linkedin: "",
      github: ""
    },

    {
      name: "Gabriele Usai",
      role: "Treasurer",
      major: "MS IT '26",
      image: "/gabriele.jpg",
      email: "",
      linkedin: "",
      github: ""
    },
    
  ]

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our dedicated leadership team is committed to fostering AI education and building a strong community of AI
            enthusiasts at Fordham.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
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
          ))}
        </div>
      </div>
    </section>
  )
}
