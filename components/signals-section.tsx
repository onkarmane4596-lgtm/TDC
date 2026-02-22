"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const signals = [
  // Parent Brand: The Daddy Cinematics (Commercial/Showroom)
  {
    category: "The Daddy Cinematics",
    date: "Weddings & Pre-Weddings",
    title: "Cinematic Marriages",
    note: "Full cinematic wedding films, highlight reels, teaser films, and romantic pre-wedding concept shoots.",
  },
  {
    category: "The Daddy Cinematics",
    date: "Commercial & Ads",
    title: "Brand Productions",
    note: "Shop openings, promotional commercials, ad films, and high-quality banner designs.",
  },
  {
    category: "The Daddy Cinematics",
    date: "Events & FX",
    title: "Event Milestones",
    note: "Engagement, Haldi, Birthdays, plus Cold Fire and Paper Blaster event services.",
  },

  // Sub-Brand: @thetejaslokhande (Personal Brand)
  {
    category: "@thetejaslokhande",
    date: "Founder & BTS",
    title: "Trust Building",
    note: "Behind the scenes, camera talks, client reactions, and 'How we shot this' breakdowns.",
  },

  // Sub-Brand: @draftsbysoul (Creative/Artistic)
  {
    category: "@draftsbysoul",
    date: "Creative Edits",
    title: "Aesthetic Mastery",
    note: "Color grading breakdowns, advanced transitions, and experimental storytelling reels.",
  },

  // Sub-Brand: @Kaylagaa Vlogs (Entertainment)
  {
    category: "@Kaylagaa Vlogs",
    date: "Mass Entertainment",
    title: "Viral reach",
    note: "Fun reels, trending topics, lifestyle Vlogs, and travel content for the local audience.",
  },
]

export function SignalsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Framer Motion Scroll setup for header parallax/fade
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax elements inside the section
  const headerY = useTransform(scrollYProgress, [0, 0.2], [50, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return

    const section = sectionRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power3.out",
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", handleMouseEnter)
    section.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", handleMouseEnter)
      section.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 pl-6 md:pl-28">
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50",
          "w-12 h-12 rounded-full border-2 border-accent bg-accent",
          "transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Section header with Framer Motion entry */}
      <motion.div
        className="mb-12 pr-6 md:pr-12 shrink-0"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">01 / The Showroom</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          OUR SERVICES
        </h2>
      </motion.div>

      {/* Manual Horizontal Scroll Container */}
      <div
        className="flex gap-8 overflow-x-auto pb-8 pr-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {signals.map((signal, index) => (
          <SignalCard key={index} signal={signal} index={index} />
        ))}
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="mt-8 flex items-center justify-end gap-2 pr-6 md:hidden opacity-70">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Swipe to explore</span>
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-accent animate-pulse"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
      </div>
    </section>
  )
}

function SignalCard({
  signal,
  index,
}: {
  signal: { category: string; date: string; title: string; note: string }
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex-shrink-0 w-80",
        "transition-all duration-500 ease-out cursor-pointer",
        "hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(var(--accent-rgb),0.3)]",
      )}
    >
      {/* Card with paper texture effect */}
      <div className="relative bg-card overflow-hidden border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-8 h-full min-h-[320px] flex flex-col group-hover:border-accent/40 transition-colors duration-500">

        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top torn edge effect */}
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

        {/* Issue number - editorial style */}
        <div className="flex items-baseline justify-between mb-2 relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-accent transition-colors duration-300">
            No. {String(index + 1).padStart(2, "0")}
          </span>
          <time className="font-mono text-[10px] text-muted-foreground/60">{signal.date}</time>
        </div>

        {/* Category / Sub-brand Tag */}
        <div className="mb-6 relative z-10">
          <span className="inline-block bg-accent/10 text-accent font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-1 rounded-sm border border-accent/20">
            {signal.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-[var(--font-bebas)] text-4xl tracking-tight mb-4 group-hover:text-accent transition-colors duration-300 relative z-10">
          {signal.title}
        </h3>

        {/* Divider line */}
        <div className="w-12 h-px bg-accent/60 mb-6 group-hover:w-full transition-all duration-500 relative z-10" />

        {/* Description */}
        <p className="font-mono text-xs text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground/80 transition-colors duration-300">
          {signal.note}
        </p>

        {/* Decorative corner accent */}
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-accent/0 group-hover:border-accent/40 transition-all duration-500" />

        {/* Action Button */}
        <div className="mt-8 pt-4 border-t border-border/20 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-left">
          <a
            href={`https://wa.me/919503939294?text=${encodeURIComponent('Hi The Daddy Cinematics! I am interested in your ' + signal.title + ' services.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Inquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Shadow/depth layer */}
      <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 bg-accent/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.article>
  )
}
