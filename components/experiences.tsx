import Image from "next/image"

const experiences = [
    {
        id: 1,
        title: "MERN Developer",
        period: "Sep 2025 - Present",
        company: "Digital Pathshala",
        logo: "/logo/digital-pathsala.png",
        description: "Building scalable web applications using MERN stack. Developing full-stack solutions with modern technologies and best practices."
    },
    {
        id: 2,
        title: "Full Stack Developer",
        period: "May 2024 - Dec 2024",
        company: "MapMentors",
        logo: "/logo/mapmentors.jpeg",
        description: "Built an LMS (Learning Management System) platform from scratch. Worked in CI/CD environment to ensure smooth deployments. Tech stack: TypeORM, Node.js, TypeScript, and Next.js."
    },
    {
        id: 3,
        title: "MERN Intern",
        period: "Jan 2024 - Apr 2024",
        company: "Youth IT",
        logo: "/logo/youth-it.png",
        description: "Gained hands-on experience in MERN stack development. Worked on real-world projects, learned industry best practices, and contributed to team projects."
    }
]

export default function Experiences() {
    return (
        <section className="py-4 mt-4">
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-foreground font-bricolage">Experiences</h2>

                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex items-start gap-4">
                            <div className="shrink-0">
                                <Image
                                    src={experience.logo}
                                    alt={experience.company}
                                    width={56}
                                    height={56}
                                    className="size-14 rounded"
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <h3 className="text-lg font-semibold text-foreground font-bricolage">{experience.title}</h3>
                                    <span className="text-sm text-muted-foreground">{experience.period}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{experience.company}</p>
                                <p className="text-base text-foreground leading-relaxed">
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
