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

                <div className="space-y-6">
                    {/* New Experience Added */}
                    {[
                        {
                            id: 0,
                            title: "Software Developer",
                            period: "Present",
                            company: "FloSoftwares",
                            logo: "/flosoft.jpg",
                            description: "Working on scalable applications using Next.js, React Native, and NestJS. Delivering robust solutions for web and mobile platforms."
                        },
                        ...experiences
                    ].map((experience) => (
                        <div
                            key={experience.id}
                            className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border border-border/40 bg-card/30 hover:border-border/60 hover:bg-card/50 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="shrink-0 relative">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-border/50 shadow-sm group-hover:shadow-md transition-shadow bg-white p-1">
                                    <Image
                                        src={experience.logo}
                                        alt={experience.company}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3 flex-1 w-full">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                                    <h3 className="text-lg font-bold text-foreground font-bricolage leading-tight group-hover:text-blue-500 transition-colors">
                                        {experience.title}
                                    </h3>
                                    <span className="inline-flex w-fit text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground border border-secondary/50 tabular-nums whitespace-nowrap">
                                        {experience.period}
                                    </span>
                                </div>
                                <div className="text-sm font-semibold text-muted-foreground/90 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                    {experience.company}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
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
