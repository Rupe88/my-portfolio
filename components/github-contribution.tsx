"use client"

import GithubContributionGraph from '@/components/GithubContributionGraph'

export default function GithubContribution() {
    return (
        <section className="py-16">
            <div className="space-y-6 max-w-4xl mx-auto">
                <div>
                    <h2 className="text-2xl font-bold text-foreground font-bricolage mb-2">
                        My Github Contribution
                    </h2>
                    <p className="text-base text-muted-foreground">
                        Track my coding activity and contributions to open source projects
                    </p>
                </div>

                <div className="w-full flex justify-center" style={{ overflow: "visible" }}>
                    <GithubContributionGraph
                        username="Rupe88"
                        apiBaseUrl="https://github-contributions-api.jogruber.de"
                        rows={7}
                        columns={52}
                        theme="green"
                        enableTooltip={true}
                        gridStyles={{
                            maxWidth: "100%",
                            width: "fit-content",
                            overflow: "visible"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
