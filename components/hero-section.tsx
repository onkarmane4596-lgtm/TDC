"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { Instagram, Phone } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Deep Parallax Transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          PRODUCTION STUDIO
        </span>
      </div>

      {/* Main content - wrapped in Framer Motion */}
      <motion.div
        className="flex-1 w-full relative z-10"
        style={{ y, opacity, scale, filter }}
      >

        {/* Subtle backdrop glow behind text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <SplitFlapAudioProvider>
          <div className="relative inline-flex flex-col gap-2 p-4 sm:p-6 md:p-10 group w-full sm:w-auto overflow-hidden sm:overflow-visible">
            {/* Cinematic Camera Viewfinder HUD */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden sm:overflow-visible">
              {/* Box border */}
              <div className="absolute inset-2 sm:inset-1 border border-foreground/10 transition-colors duration-700 group-hover:border-accent/30" />

              {/* Corner focus brackets (bold) */}
              <div className="absolute top-0 left-0 w-4 h-4 sm:w-8 sm:h-8 border-t-2 border-l-2 border-accent/60 transition-all duration-500 group-hover:w-6 group-hover:h-6 sm:group-hover:w-12 sm:group-hover:h-12 group-hover:border-accent" />
              <div className="absolute top-0 right-0 w-4 h-4 sm:w-8 sm:h-8 border-t-2 border-r-2 border-accent/60 transition-all duration-500 group-hover:w-6 group-hover:h-6 sm:group-hover:w-12 sm:group-hover:h-12 group-hover:border-accent" />
              <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-8 sm:h-8 border-b-2 border-l-2 border-accent/60 transition-all duration-500 group-hover:w-6 group-hover:h-6 sm:group-hover:w-12 sm:group-hover:h-12 group-hover:border-accent" />
              <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-8 sm:h-8 border-b-2 border-r-2 border-accent/60 transition-all duration-500 group-hover:w-6 group-hover:h-6 sm:group-hover:w-12 sm:group-hover:h-12 group-hover:border-accent" />

              {/* REC indicator */}
              <div className="absolute -top-3 left-10 flex items-center gap-2 bg-background px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-[pulse_1s_infinite] shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-foreground font-bold">REC</span>
              </div>

              {/* Timecode / Camera Stats */}
              <div className="absolute -bottom-3 right-10 flex items-center gap-4 bg-background px-3 font-mono text-[9px] text-foreground/40 uppercase tracking-widest hidden sm:flex">
                <span>ISO 800</span>
                <span>F/1.4</span>
                <span>4K LOG</span>
                <span>24FPS</span>
              </div>

              {/* Center crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 transition-all duration-700 group-hover:opacity-20 group-hover:scale-110 pointer-events-none">
                <div className="w-24 h-24 border border-foreground/30 rounded-full relative flex items-center justify-center">
                  <div className="w-[1px] h-4 bg-foreground/50 absolute -top-2" />
                  <div className="w-[1px] h-4 bg-foreground/50 absolute -bottom-2" />
                  <div className="w-4 h-[1px] bg-foreground/50 absolute -left-2" />
                  <div className="w-4 h-[1px] bg-foreground/50 absolute -right-2" />
                  <div className="w-1.5 h-1.5 bg-accent/80 rounded-full" />
                </div>
              </div>
            </div>

            <div className="relative z-10 w-fit">
              <SplitFlapText text="THE DADDY" speed={80} />
              <SplitFlapText text="CINEMATICS" speed={80} />
            </div>

            <div className="mt-2 relative z-20">
              <SplitFlapMuteToggle />
            </div>

            <div className="relative z-10">
              <h2 className="font-[var(--font-bebas)] text-muted-foreground/80 md:text-foreground/90 text-[clamp(1.25rem,3vw,2.5rem)] mt-2 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                Visual Storytelling & Event Media Production
              </h2>

              <p className="mt-4 max-w-xl font-mono text-xs md:text-sm text-muted-foreground leading-relaxed border-l-2 border-accent/40 pl-6">
                Premium production for <span className="text-foreground">Weddings</span>, <span className="text-foreground">Events</span>, Pre-Weddings, Ads, and Commercial Shoots. We don&apos;t just capture moments; we craft cinematic legacies.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                <a
                  href="https://wa.me/919503939294?text=Hi%20The%20Daddy%20Cinematics!%20I%20came%20from%20your%20website%20and%20would%20like%20to%20check%20availability%20and%20book%20a%20shoot."
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-4 bg-accent/10 border border-accent/40 px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)] hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.5)] transition-all duration-400 ease-out"
                >
                  <ScrambleTextOnHover text="Book Now" as="span" duration={0.6} className="font-bold relative z-10" />
                  <BitmapChevron className="relative z-10 transition-transform duration-[400ms] ease-in-out group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] animate-[shimmer_3s_infinite] pointer-events-none" />
                </a>

                <a
                  href="#work"
                  className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span className="w-8 h-[1px] bg-muted-foreground group-hover:bg-accent group-hover:w-12 transition-all duration-300" />
                  Explore Portfolio
                </a>
              </div>
            </div>
          </div>
        </SplitFlapAudioProvider>
      </motion.div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 flex flex-col items-end gap-3">
        <a
          href="https://www.instagram.com/thedaddycinematics?igsh=MTdvOXNlZnBoYWln"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 border border-border/50 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors bg-background/50 backdrop-blur-sm"
        >
          <Instagram className="w-3.5 h-3.5" />
          Follow on Instagram
        </a>
        <a
          href="tel:+919503939294"
          className="group flex items-center gap-2 border border-emerald-500/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 backdrop-blur-sm relative overflow-hidden hover:bg-emerald-500/20 transition-colors"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 animate-[pulse_2s_infinite]" />
          <Phone className="w-3 h-3 fill-current" />
          Bookings Open
        </a>
      </div>
    </section>
  )
}
