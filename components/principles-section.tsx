"use client"

import { useRef } from "react"
import { HighlightText } from "@/components/highlight-text"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  },
}

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const principles = [
    {
      number: "01",
      titleParts: [
        { text: "REAL", highlight: true },
        { text: " EMOTIONS", highlight: false },
      ],
      description: "We capture authentic moments, not staged poses. Your real reactions matter most.",
      align: "left",
    },
    {
      number: "02",
      titleParts: [
        { text: "CINEMATIC", highlight: true },
        { text: " STORYTELLING", highlight: false },
      ],
      description: "Every frame is color-graded and composed to make you feel the day again years later.",
      align: "right",
    },
    {
      number: "03",
      titleParts: [
        { text: "PERSONAL ", highlight: false },
        { text: "ATTENTION", highlight: true },
      ],
      description: "Tejas personally oversees every story we create. Your vision is our focus.",
      align: "left",
    },
    {
      number: "04",
      titleParts: [
        { text: "FILMS ", highlight: false },
        { text: "NOT FOOTAGE", highlight: true },
      ],
      description: "Your story deserves more than documentation. It deserves a film worth rewatching.",
      align: "right",
    },
  ]

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">03 / Philosophy</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          OUR APPROACH
        </h2>
      </motion.div>

      {/* Staggered principles */}
      <div className="space-y-24 md:space-y-32">
        {principles.map((principle, index) => (
          <motion.article
            key={index}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={`group flex flex-col ${principle.align === "right" ? "items-end text-right" : "items-start text-left"
              }`}
          >
            {/* Annotation label */}
            <motion.span
              variants={itemVariants}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 group-hover:text-accent transition-colors duration-300"
            >
              {principle.number} / {principle.titleParts[0].text.split(" ")[0]}
            </motion.span>

            <motion.h3
              variants={itemVariants}
              className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none text-foreground/90 group-hover:text-foreground transition-colors duration-300"
            >
              {principle.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>
                    {part.text}
                  </HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
            >
              {principle.description}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              variants={itemVariants}
              className={`mt-8 h-[2px] bg-border/50 group-hover:bg-accent group-hover:w-48 transition-all duration-500 w-24 md:w-32 ${principle.align === "right" ? "mr-0" : "ml-0"}`}
            />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
