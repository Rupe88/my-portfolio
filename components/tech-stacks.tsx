import {
  SiNodedotjs, SiExpress, SiNextdotjs, SiReact, SiNestjs, SiMongodb,
  SiPrisma, SiTypescript, SiPostgresql, SiGit, SiGithub, SiDocker,
  SiBun, SiRedhat, SiAmazon, SiPostman, SiKubernetes
} from "react-icons/si"
import { TbBrandAzure } from "react-icons/tb"
import Marquee from "@/components/ui/marquee"

const techStacks = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-800 dark:text-gray-200" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-gray-100" },
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "React Native", icon: SiReact, color: "text-blue-500" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  { name: "Elysia", icon: SiBun, color: "text-pink-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
  { name: "Prisma", icon: SiPrisma, color: "text-blue-600" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "DevOps", icon: SiKubernetes, color: "text-blue-600" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
  { name: "Azure", icon: TbBrandAzure, color: "text-blue-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-600" },
  { name: "Bun", icon: SiBun, color: "text-yellow-600" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-200" },
  { name: "Red Hat", icon: SiRedhat, color: "text-red-600" },
]

const firstRow = techStacks.slice(0, techStacks.length / 2)
const secondRow = techStacks.slice(techStacks.length / 2)

const TechCard = ({
  icon: Icon,
  name,
  color,
}: {
  icon: any
  name: string
  color: string
}) => {
  return (
    <div className="relative flex h-24 w-32 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/50 p-4 hover:bg-white dark:border-gray-800 dark:bg-white/5 dark:hover:bg-white/10 transition-colors backdrop-blur-sm cursor-pointer hover:scale-105 duration-300">
      <Icon className={`h-8 w-8 ${color}`} />
      <span className="text-xs font-medium text-gray-900 dark:text-gray-100">{name}</span>
    </div>
  )
}

export default function TechStacks() {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 font-bricolage">Tech Stacks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and programming languages I work with
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  )
}
