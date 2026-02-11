import Image from "next/image"

const achievements = [
  {
    id: 1,
    icon: (
      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 dark:border-white/5 bg-white shadow-md">
        <Image
          src="/iic-logo.png"
          alt="INC"
          fill
          className="object-contain p-1"
        />
      </div>
    ),
    title: "Winner – INCQuest 3.0 Hackathon",
    organization: "INCQuest 3.0",
    description: "Secured 1st place among Nepal's top 20+ college teams in a 36-hour intense hackathon."
  },
  {
    id: 2,
    icon: (
      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 dark:border-white/5 bg-white shadow-md">
        <Image
          src="/lingo-dev.png"
          alt="Lingo.dev"
          fill
          className="object-contain p-1"
        />
      </div>
    ),
    title: "Lingo.dev International Hackathon - San Francisco",
    organization: "Lingo.dev",
    description: "Competed globally with over 1k+ developers in a high-stakes hackathon focused on AI and localization."
  }
]

export default function Achievements() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notable accomplishments and recognitions in my journey
          </p>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 hover:shadow-md dark:hover:shadow-gray-900/20 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl flex-shrink-0 self-start sm:self-center">
                {achievement.icon}
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {achievement.title}
                  </h3>
                  {achievement.organization && (
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {achievement.organization}
                    </p>
                  )}
                </div>
                {achievement.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
