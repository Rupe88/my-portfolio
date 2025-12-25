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
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-lg md:text-xl font-semibold text-foreground font-bricolage">Winner 🏆</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground font-medium"> IICQuest 3.0 Hackathon </p>
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              Built ChalkBox MVP, a decentralized platform empowering students to learn from peers, earn through verified gigs,
              and grow with badge-based profiles. Built with MERN stack + Prisma ORM, Polygon Testnet + OpenAttestation for smart contracts,
              cosine similarity-based job matching, and community-powered dispute resolution.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">
              IICQuest 3.0 Hackathon - ChalkBox
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto order-1 md:order-2 flex justify-center md:justify-start">
            <TiltCard
              strength={40}
              className="w-full max-w-[300px] md:w-[300px] h-[200px] md:h-[300px] !rounded-lg overflow-hidden"
            >
              <Image 
                src="/1749828202112.jpg" 
                alt="IICQuest 3.0 Hackathon - ChalkBox" 
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
