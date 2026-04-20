"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import confetti from "canvas-confetti"
import TiltCard from '@/components/TiltCard'

export default function HomeAchievements() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const hasCelebratedRef = useRef(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting || hasCelebratedRef.current) return

        hasCelebratedRef.current = true

        const baseConfig = {
          spread: 75,
          startVelocity: 45,
          ticks: 250,
          zIndex: 9999,
        }

        confetti({
          ...baseConfig,
          particleCount: 100,
          origin: { x: 0.2, y: 0.65 },
        })

        confetti({
          ...baseConfig,
          particleCount: 100,
          origin: { x: 0.8, y: 0.65 },
        })
      },
      { threshold: 0.45 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-4 mt-4">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-xl md:text-2xl font-bold text-foreground font-bricolage">Achievements</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="flex-1 space-y-3 order-2 md:order-1">
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-xl overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <Image
                  src="/iic-logo.png"
                  alt="INC Logo"
                  fill
                  className="object-contain p-1 drop-shadow-sm"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 font-bricolage">Winner 🏆</h3>
                  <span className="px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/20 border border-emerald-200/50 dark:border-emerald-800/50 rounded-full">First Place</span>
                </div>
                <p className="text-base md:text-lg text-foreground/90 font-medium tracking-tight"> IICQuest 3.0 Hackathon </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              Built ChalkBox MVP, a decentralized platform for peer learning,
              verified student gigs, and badge-based profiles. Developed with
              MERN + Prisma ORM, Polygon Testnet, OpenAttestation, cosine
              similarity job matching, and community-driven dispute resolution.
              Won first place among 20+ colleges and was featured in a{" "}
              <span className="text-emerald-500">Leapfrog</span> story.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">
              IICQuest 3.0 Hackathon - ChalkBox
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto order-1 md:order-2 flex justify-center md:justify-start">
            <TiltCard
              strength={40}
              className="group w-full max-w-[300px] md:w-[300px] h-[200px] md:h-[300px] !rounded-lg overflow-hidden"
            >
              <Image
                src="/hackathon.png"
                alt="IICQuest 3.0 Hackathon - ChalkBox"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 grayscale brightness-65 contrast-90 opacity-80 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:opacity-100"
              />
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
