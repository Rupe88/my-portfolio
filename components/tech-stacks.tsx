import { 
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiNestjs,
  SiMongodb,
  SiPrisma,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiBun,
  SiRedhat
} from "react-icons/si"

const techStacks = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-600"
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-800 dark:text-gray-200"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-gray-100"
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-blue-500"
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "text-red-600"
  },
  {
    name: "Elysia.js",
    icon: SiNodedotjs,
    color: "text-purple-600"
  },
  {
    name: "Bun",
    icon: SiBun,
    color: "text-yellow-600"
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-500"
  },
  {
    name: "Red Hat Linux",
    icon: SiRedhat,
    color: "text-red-600"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-700"
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-blue-600"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-700"
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-600"
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-gray-800 dark:text-gray-200"
  }
]

export default function TechStacks() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Tech Stacks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and programming languages I work with
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStacks.map((tech) => {
            const IconComponent = tech.icon
            return (
              <div 
                key={tech.name} 
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-900/20 transition-shadow cursor-pointer group bg-white dark:bg-neutral-800"
              >
                <IconComponent 
                  className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform`} 
                />
                <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
