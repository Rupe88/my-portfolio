const achievements = [
  {
    id: 1,
    icon: "🏆",
    title: "Winner – IICQuest 3.0 Hackathon",
    organization: "IICQuest 3.0"
  },
  {
    id: 2,
    icon: "🤖",
    title: "Built Docs AI - RAG-Based Assistant for Contributors",
    organization: "Personal Project"
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
              className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-800 hover:shadow-md dark:hover:shadow-gray-900/20 transition-shadow"
            >
              <div className="text-3xl flex-shrink-0">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {achievement.title}
                </h3>
                {achievement.organization && (
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {achievement.organization}
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
