"use client"

import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "motion/react"
import ToggleSound, { type ToggleSoundHandle } from "@/components/sound/ToggleSound"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const soundRef = useRef<ToggleSoundHandle>(null)
  
  const toggleTheme = () => {
    soundRef.current?.play()
    setTheme(theme === "dark" ? "light" : "dark")
  }
  
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted text-foreground"
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      <ToggleSound ref={soundRef} />
      {theme === "dark" ? (
        <FaMoon />
      ) : (
        <MdLightMode />
      )}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px' // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [open])

  return (
    <>
      <nav className="sticky font-bricolage top-0 z-[100] w-full max-w-[920px] mx-auto px-4 py-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors">
            Rupesh Chy
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-5">
            <Link href="/" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              Contact
            </Link>
            <Link href="/colophon" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
              Colophon
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted transition-colors"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {open ? (
              <HiX className="h-5 w-5 transition-transform duration-200" />
            ) : (
              <HiMenu className="h-5 w-5 transition-transform duration-200" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.3
            }}
            className="fixed inset-x-0 top-0 z-[9999] sm:hidden bg-background/98 backdrop-blur-2xl shadow-xl pt-20 pb-6 px-4 min-h-screen overflow-y-auto"
            onClick={() => setOpen(false)}
          >
            <div className="flex flex-col h-full">
              {/* Header with close button (optional, as hamburger icon toggles) */}
              <div className="flex items-center justify-between p-4 border-b border-border absolute top-0 inset-x-0">
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg font-semibold text-foreground"
                >
                  Menu
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <HiX className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Navigation links */}
              <div className="flex-1 py-8">
                <nav className="space-y-2">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                    { href: "/colophon", label: "Colophon" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.08, type: "tween", ease: "easeOut" }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-xl font-medium text-foreground hover:text-muted-foreground transition-colors relative group"
                        onClick={() => setOpen(false)}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <motion.div
                          className="absolute inset-0 bg-muted/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                          layoutId={`hover-bg-${item.href}`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Footer with theme toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "tween", ease: "easeOut" }}
                className="pt-6 border-t border-border"
              >
                <div className="flex items-center justify-between px-4">
                  <span className="text-base font-medium text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
