"use client"

import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
}

export function ColophonSection() {

  return (
    <section
      id="colophon"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30 overflow-hidden"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">04 / Contact</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          GET IN TOUCH
        </h2>
      </motion.div>

      {/* Multi-column layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12"
      >
        {/* Founder */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Founder</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Tejas Lokhande</li>
            <li className="font-mono text-xs text-foreground/80">Cinematic Storyteller</li>
          </ul>
        </motion.div>

        {/* Service Areas */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Location</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Pune</li>
            <li className="font-mono text-xs text-foreground/80">Maharashtra</li>
          </ul>
        </motion.div>

        {/* Trust Stats */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Stats</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">100+ Celebrations</li>
            <li className="font-mono text-xs text-foreground/80">Real Emotions</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Bookings Open</h4>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Weddings & Pre-Weddings</li>
            <li className="font-mono text-xs text-foreground/80">Commercial Ads</li>
            <li className="font-mono text-xs font-bold text-accent mt-4">Available Worldwide</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent mb-4 cursor-pointer hover:text-emerald-400 transition-colors">Book Now</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="https://wa.me/919503939294?text=Hello!%20I%20came%20from%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="group font-mono text-xs text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-sm w-fit"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                +91 95039 39294
              </a>
            </li>
            <li>
              <a
                href="mailto:bookings@thedaddycinematics.com"
                className="font-mono text-xs text-foreground/80 hover:text-accent transition-colors duration-200 flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                Email Studio
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Ecosystem */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Ecosystem</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.instagram.com/thedaddycinematics?igsh=MTdvOXNlZnBoYWln"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col font-mono text-[10px] text-foreground/80 hover:text-accent transition-colors"
              >
                <span>@thedaddycinematics</span>
                <span className="text-[9px] text-muted-foreground group-hover:text-accent/60 transition-colors">Main Studio</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/thetejaslokhande?igsh=dWVjdjY5dHpoazYz"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col font-mono text-[10px] text-foreground/80 hover:text-accent transition-colors"
              >
                <span>@thetejaslokhande</span>
                <span className="text-[9px] text-muted-foreground group-hover:text-accent/60 transition-colors">Founder & BTS</span>
              </a>
            </li>
            <li>
              <a href="#" className="group flex flex-col font-mono text-[10px] text-foreground/80 hover:text-accent transition-colors">
                <span>@draftsbysoul</span>
                <span className="text-[9px] text-muted-foreground group-hover:text-accent/60 transition-colors">Creative Edits</span>
              </a>
            </li>
            <li>
              <a href="#" className="group flex flex-col font-mono text-[10px] text-foreground/80 hover:text-accent transition-colors">
                <span>@Kaylagaa Vlogs</span>
                <span className="text-[9px] text-muted-foreground group-hover:text-accent/60 transition-colors">Entertainment</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom copyright & credits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2025 The Daddy Cinematics. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground">Preserving emotions. Crafting films.</p>
        </div>

        <p className="font-mono text-[10px] text-muted-foreground/80 lowercase tracking-wider text-left md:text-right">
          powered by <a href="https://www.techsarthiservices.in/" target="_blank" rel="noreferrer" className="text-accent hover:text-emerald-400 transition-colors">techsarthi</a> : <a href="https://wa.me/919604302814?text=Hi%20Onkar!%20I%20saw%20your%20work%20on%20The%20Daddy%20Cinematics%20website." target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">onkar mane</a>
        </p>
      </motion.div>
    </section>
  )
}
