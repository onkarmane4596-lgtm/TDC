"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

const experiments = [
  {
    title: "Wedding Films",
    medium: "Main Service",
    description: "Full cinematic weddings, highlights, teasers—real emotions captured.",
    span: "col-span-2 row-span-2",
  },
  {
    title: "Pre-Wedding",
    medium: "Romantic",
    description: "Concept shoots & destination love stories.",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Celebrations",
    medium: "Family Events",
    description: "Engagements, Mehendi, Naming Ceremonies & more.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Personal",
    medium: "Moments",
    description: "Proposals, surprises, milestone celebrations.",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Commercial",
    medium: "Business",
    description: "Brand videos, ads, promotional content.",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Event Effects",
    medium: "Add-ons",
    description: "Cold fire, paper blasters, highlight reels.",
    span: "col-span-1 row-span-1",
  },
]

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={sectionRef} id="work" className="relative pt-12 pb-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 pr-6 md:pr-12"
      >
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">02 / Portfolio</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
            OUR WORK
          </h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Cinematic storytelling across weddings, events, and commercial work—preserving emotions that last forever.
        </p>
      </motion.div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]">
        {experiments.map((experiment, index) => (
          <WorkCard key={index} experiment={experiment} index={index} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}

function WorkCard({
  experiment,
  index,
  progress,
}: {
  experiment: {
    title: string
    medium: string
    description: string
    span: string
  }
  index: number
  progress: MotionValue<number>
}) {
  const [isHovered, setIsHovered] = useState(false)

  // Parallax calculations (even/odd speeds)
  const yOffset = (index % 4 + 1) * -40
  const y = useTransform(progress, [0, 1], [0, yOffset])

  return (
    <motion.div style={{ y }} className={experiment.span}>
      <motion.article
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "group relative border p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden h-full",
          isHovered ? "border-accent/40 bg-accent/5 shadow-[0_10px_30px_-15px_rgba(var(--accent-rgb),0.3)]" : "border-border/40 bg-card/30 hover:bg-card/60",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background layer */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Content */}
        <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent/80 font-semibold group-hover:text-accent transition-colors duration-300">
            {experiment.medium}
          </span>
          <h3
            className={cn(
              "mt-3 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-all duration-500",
              isHovered ? "text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "text-foreground/80",
            )}
          >
            {experiment.title}
          </h3>
        </div>

        {/* Description - reveals on hover */}
        <div className="relative z-10 mt-auto pt-6">
          <p
            className={cn(
              "font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]",
              isHovered ? "opacity-100 translate-y-0 text-foreground/80" : "opacity-0 translate-y-4",
            )}
          >
            {experiment.description}
          </p>
        </div>

        {/* Index marker */}
        <span
          className={cn(
            "absolute bottom-5 right-5 font-mono text-[10px] transition-all duration-500 font-bold",
            isHovered ? "text-accent scale-110" : "text-muted-foreground/30",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Decorative Corner Borders */}
        <div
          className={cn(
            "absolute top-0 left-0 w-8 h-8 transition-all duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />
          <div className="absolute top-0 left-0 w-[2px] h-full bg-accent" />
        </div>
      </motion.article>
    </motion.div>
  )
}
