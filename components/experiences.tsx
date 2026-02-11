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
                            title: "Associate Software Developer",
                            period: "Present",
                            company: "FloSoftwares",
                            logo: "/flosoft.jpg",
                            description: "Working on scalable applications using Next.js, React Native, and NestJS. Delivering robust solutions for web and mobile platforms."
                        },
                        ...experiences
                    ].map((experience) => (
                        <div
                            key={experience.id}
                            className="group flex items-start gap-5 p-6 rounded-xl border border-border/40 bg-card/30 hover:border-border/60 hover:bg-card/50 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="shrink-0 relative">
                                <div className="w-14 h-14 rounded-lg overflow-hidden border border-border/50 shadow-sm group-hover:shadow-md transition-shadow">
                                    <Image
                                        src={experience.logo}
                                        alt={experience.company}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                    <h3 className="text-lg font-bold text-foreground font-bricolage leading-none group-hover:text-primary transition-colors">
                                        {experience.title}
                                    </h3>
                                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground border border-secondary/50 tabular-nums">
                                        {experience.period}
                                    </span>
                                </div>
                                <div className="text-sm font-medium text-muted-foreground/80 flex items-center gap-2">
                                    {experience.company}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
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
