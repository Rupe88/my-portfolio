import LayoutWrapper from "@/components/layout-wrapper"
import HeroSection from "@/components/hero-section"
import Experiences from "@/components/experiences"
import HomeAchievements from "@/components/home-achievements"
import Gallery from "@/components/gallery"

export default function HomePage() {
  return (
    <LayoutWrapper>
      <HeroSection />
      <Experiences />
      <HomeAchievements />
      <Gallery />
    </LayoutWrapper>
  )
}
