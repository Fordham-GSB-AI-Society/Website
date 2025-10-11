import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

const websites = ["gsbais@fordham.edu", 
  "https://www.instagram.com/fordhamaisociety/", 
  "https://www.linkedin.com/company/fordham-ai-society/posts/?feedView=all",
   "https://github.com/Fordham-GSB-AI-Society"]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-xl">Fordham GSB AI Society</span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-md text-pretty">
            Empowering the next generation of AI innovators through education, collaboration, and hands-on experience.
          </p>
          <div className="flex space-x-4">
            <a href={`mailto:${websites[0]}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
            <a href={websites[1]} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </a>
            <a href={websites[2]} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href={websites[3]} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
        <p>&copy; 2025 Fordham GSB AI Society. All rights reserved.</p>
      </div>
    </footer>
  )
}