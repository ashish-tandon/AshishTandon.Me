import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ResearchSection from '@/components/sections/ResearchSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import BlogSection from '@/components/sections/BlogSection'
import VolunteerSection from '@/components/sections/VolunteerSection'
import ContactSection from '@/components/sections/ContactSection'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ResearchSection />
      <ProjectsSection />
      <BlogSection />
      <VolunteerSection />
      <ContactSection />
      
      <Footer />
    </main>
  )
}
