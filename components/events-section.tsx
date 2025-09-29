import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "AI Workshop: Introduction to Machine Learning",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Fordham Lincoln Center - Room 415",
      description: "Learn the fundamentals of machine learning with hands-on coding exercises.",
      type: "Workshop",
    },
    {
      title: "Guest Speaker: Industry AI Applications",
      date: "March 22, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      description: "Hear from AI professionals about real-world applications in various industries.",
      type: "Speaker Event",
    },
    {
      title: "AI Hackathon 2024",
      date: "April 5-7, 2024",
      time: "48 Hours",
      location: "Fordham Rose Hill Campus",
      description: "Build innovative AI solutions in teams over a weekend-long hackathon.",
      type: "Hackathon",
    },
  ]

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join us for workshops, speaker events, hackathons, and networking opportunities to expand your AI knowledge
            and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                    {event.type}
                  </span>
                </div>
                <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>

                <Button className="w-full">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
