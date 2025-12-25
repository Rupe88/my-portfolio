import LayoutWrapper from "@/components/layout-wrapper"
import AboutHero from "@/components/about-hero"
import GithubContribution from "@/components/github-contribution"
import TechStacks from "@/components/tech-stacks"
import Achievements from "@/components/achievements"

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <AboutHero />
      <GithubContribution />
      <TechStacks />
      <Achievements />
    </LayoutWrapper>
  )
}
