import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarah Chen",
      role: "President",
      major: "Computer Science '25",
      image: "/professional-woman-headshot.png",
      bio: "Passionate about AI ethics and machine learning applications in healthcare.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Vice President",
      major: "Data Science '25",
      image: "/professional-man-headshot.png",
      bio: "Focuses on natural language processing and conversational AI systems.",
    },
    {
      name: "Emily Zhang",
      role: "Technical Lead",
      major: "Computer Science '26",
      image: "/professional-woman-tech-headshot.png",
      bio: "Specializes in computer vision and deep learning architectures.",
    },
    {
      name: "David Kim",
      role: "Events Coordinator",
      major: "Information Systems '24",
      image: "/professional-headshot-man-business.jpg",
      bio: "Organizes workshops and connects students with industry professionals.",
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
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
