"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-xl">Fordham Artificial Intelligence Society</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
              Events
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="https://fordhamgsb.campuslabs.com/engage/organization/ais" target="_blank" rel="noopener noreferrer">
            <Button>Join Club</Button>
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <nav className="flex flex-col space-y-4 py-4">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                >
                  Projects
                </a>
                <a
                  href="#events"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                >
                  Events
                </a>
                <a
                  href="#team"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                >
                  Team
                </a>
                <Button className="w-fit transition-all duration-300 hover:scale-105">Join Club</Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
