"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "signals", label: "Services" },
  { id: "work", label: "Our Work" },
  { id: "principles", label: "About" },
  { id: "colophon", label: "Contact" },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[60] h-20 bg-background/80 backdrop-blur-sm border-b border-border/30 flex items-center justify-between px-6">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }} className="relative w-12 h-12 overflow-hidden rounded-full shadow-sm shadow-blue-500/10 block">
          <Image
            src="/TDC LOGO.png"
            alt="The Daddy Cinematics Logo"
            fill
            className="object-cover"
            priority
          />
        </a>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Studio</span>
      </header>

      {/* Desktop Side Navigation */}
      <nav className="fixed left-0 top-0 z-50 h-screen w-16 md:w-20 hidden md:flex flex-col border-r border-border/30 bg-background/80 backdrop-blur-sm">
        {/* Logo Area */}
        <div className="absolute top-0 left-0 w-full flex justify-center py-6">
          <div className="relative w-10 h-10 md:w-16 md:h-16 overflow-hidden rounded-full shadow-sm shadow-blue-500/10">
            <Image
              src="/TDC LOGO.png"
              alt="The Daddy Cinematics Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-center gap-6 px-4">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollToSection(id)} className="group relative flex items-center gap-3">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all duration-300",
                  activeSection === id ? "bg-accent scale-125" : "bg-muted-foreground/40 group-hover:bg-foreground/60",
                )}
              />
              <span
                className={cn(
                  "absolute left-6 font-mono text-[10px] uppercase tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:left-8 whitespace-nowrap",
                  activeSection === id ? "text-accent" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
