"use client"
import Image from "next/image"
import TiltCard from '@/components/TiltCard'

export default function HomeAchievements() {
  return (
    <section className="py-4 mt-4">
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
                <p className="text-base md:text-lg text-foreground/90 font-medium tracking-tight"> INCQuest 3.0 Hackathon </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              Built ChalkBox MVP, a decentralized platform empowering students to learn from peers, earn through verified gigs,
              and grow with badge-based profiles. Built with MERN stack + Prisma ORM, Polygon Testnet + OpenAttestation for smart contracts,
              cosine similarity-based job matching, and community-powered dispute resolution.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">
              INCQuest 3.0 Hackathon - ChalkBox
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto order-1 md:order-2 flex justify-center md:justify-start">
            <TiltCard
              strength={40}
              className="w-full max-w-[300px] md:w-[300px] h-[200px] md:h-[300px] !rounded-lg overflow-hidden"
            >
              <Image
                src="/hackathon.png"
                alt="INCQuest 3.0 Hackathon - ChalkBox"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
