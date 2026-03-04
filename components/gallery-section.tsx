"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Grid, LayoutPanelLeft, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

// This structure allows for easy addition of new events by adding a new folder and updating this list
const EVENTS_CONFIG = [
  {
    id: "Microsoft AI Workshop",
    name: "AIS x Microsoft Build Session",
    folder: "microsoft_event",
    images: [
      "3.2 AIS x Microsoft Build Session -52.jpg",
      "3.2 AIS x Microsoft Build Session -53.jpg",
      "3.2 AIS x Microsoft Build Session -54.jpg",
      "3.2 AIS x Microsoft Build Session -55.jpg",
      "3.2 AIS x Microsoft Build Session -56.jpg",
      "3.2 AIS x Microsoft Build Session -57.jpg",
      "3.2 AIS x Microsoft Build Session -58.jpg",
      "3.2 AIS x Microsoft Build Session -59.jpg",
      "3.2 AIS x Microsoft Build Session -60.jpg",
      "3.2 AIS x Microsoft Build Session -61.jpg",
      "3.2 AIS x Microsoft Build Session -62.jpg",
      "3.2 AIS x Microsoft Build Session -63.jpg",
      "3.2 AIS x Microsoft Build Session -64.jpg",
      "3.2 AIS x Microsoft Build Session -65.jpg",
      "3.2 AIS x Microsoft Build Session -66.jpg",
      "3.2 AIS x Microsoft Build Session -67.jpg",
      "3.2 AIS x Microsoft Build Session -68.jpg",
      "3.2 AIS x Microsoft Build Session -69.jpg",
      "3.2 AIS x Microsoft Build Session -70.jpg",
      "3.2 AIS x Microsoft Build Session -71.jpg",
      "3.2 AIS x Microsoft Build Session -72.jpg",
      "3.2 AIS x Microsoft Build Session -73.jpg",
      "3.2 AIS x Microsoft Build Session -74.jpg",
      "3.2 AIS x Microsoft Build Session -75.jpg",
    ]
  }
]

function GalleryImage({ src, alt, className, sizes, quality, priority = false }: { 
  src: string; 
  alt: string; 
  className?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-full bg-muted flex items-center justify-center overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/50 backdrop-blur-[2px]">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-all duration-700",
          isLoading ? "scale-105 blur-sm" : "scale-100 blur-0",
          className
        )}
        sizes={sizes}
        quality={quality}
        priority={priority}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

const INITIAL_VISIBLE = 6

export function GallerySection() {
  const [activeEventIndex, setActiveEventIndex] = useState(0)
  const [viewAll, setViewAll] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const activeEvent = EVENTS_CONFIG[activeEventIndex]

  const getImagePath = (folder: string, fileName: string) => {
    return `/${folder}/${fileName}`
  }

  const handleEventChange = (index: number) => {
    setActiveEventIndex(index)
    setViewAll(false)
    setVisibleCount(INITIAL_VISIBLE)
  }

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9)
  }

  // Use only 6 highlights for the slider for peak performance
  const sliderImages = activeEvent?.images.slice(0, 6) || []
  const visibleImages = activeEvent?.images.slice(0, viewAll ? visibleCount : undefined) || []
  const hasMore = viewAll && visibleCount < (activeEvent?.images.length || 0)

  return (
    <section id="gallery" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Event Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Take a look at the highlights from our recent club events.
          </p>
        </motion.div>

        {/* Event Selector */}
        {EVENTS_CONFIG.length > 1 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {EVENTS_CONFIG.map((event, index) => (
              <Button
                key={event.id}
                onClick={() => handleEventChange(index)}
                variant={activeEventIndex === index ? "default" : "outline"}
                className={cn(
                  "rounded-full px-6 transition-all duration-300",
                  activeEventIndex === index ? "scale-105 shadow-md" : "hover:scale-105"
                )}
              >
                {event.name}
              </Button>
            ))}
          </div>
        )}

        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          {/* Active Event Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">{activeEvent?.name}</h3>
          </div>

          <AnimatePresence mode="wait">
            {!viewAll ? (
              <motion.div
                key={`${activeEvent?.id}-carousel`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Carousel
                  className="w-full"
                  opts={{
                    loop: true,
                    dragFree: true,
                    duration: 35, // Snappier movement
                  }}
                >
                  <CarouselContent>
                    {sliderImages.map((fileName, index) => (
                      <CarouselItem key={index}>
                        <div 
                          className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl bg-muted"
                          style={{ transform: 'translateZ(0)', willChange: 'transform' }} // HW Acceleration
                        >
                          <GalleryImage
                            src={getImagePath(activeEvent.folder, fileName)}
                            alt={`${activeEvent.name} - Highlight ${index + 1}`}
                            sizes="(max-width: 768px) 100vw, 800px"
                            quality={80}
                            priority={index === 0}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex -left-16 bg-background/50 backdrop-blur-md border-primary/20 hover:bg-primary/10" />
                  <CarouselNext className="hidden md:flex -right-16 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10" />

                  <div className="flex md:hidden justify-center gap-4 mt-6">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                  </div>
                </Carousel>
              </motion.div>
            ) : (
              <div className="space-y-8">
                <motion.div
                  key={`${activeEvent?.id}-grid`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
                >
                  {visibleImages.map((fileName, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-muted">
                      <GalleryImage
                        src={getImagePath(activeEvent.folder, fileName)}
                        alt={`${activeEvent.name} - Photo ${index + 1}`}
                        className="hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 300px"
                        quality={65}
                      />
                    </div>
                  ))}
                </motion.div>

                {hasMore && (
                  <div className="flex justify-center">
                    <Button
                      onClick={handleLoadMore}
                      variant="ghost"
                      className="text-primary hover:text-primary/80"
                    >
                      Load More Images
                    </Button>
                  </div>
                )}
              </div>
            )}
          </AnimatePresence>

          <div className="mt-12 flex justify-center">
            <Button
              onClick={() => {
                setViewAll(!viewAll)
                if (viewAll) setVisibleCount(INITIAL_VISIBLE)
              }}
              variant="outline"
              size="lg"
              className="gap-2 transition-all duration-300 hover:scale-105"
            >
              {viewAll ? (
                <>
                  <LayoutPanelLeft className="h-5 w-5" />
                  Back to Slider
                </>
              ) : (
                <>
                  <Grid className="h-5 w-5" />
                  View All for this Event
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
