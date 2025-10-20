import { Lora, Great_Vibes } from "next/font/google"
import WeddingHeader from "@/components/wedding-header"
import DateAnnouncement from "@/components/date-announcement"
import WeddingDetails from "@/components/wedding-details"
import InstagramSection from "@/components/instagram-section"
import OurStory from "@/components/our-story"
import Footer from "@/components/footer"
import NavigationMenu from "@/components/navigation-menu"
import SectionDivider from "@/components/section-divider"
import AnimatedSection from "@/components/animated-section"
import { Calendar, Gift } from "lucide-react"

// Reemplazamos Playfair_Display por Lora
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dancing",
})

export default function Home() {
  return (
    <main className={`${lora.variable} ${greatVibes.variable} font-serif`}>
      <NavigationMenu />
      <section id="header">
        <WeddingHeader />
      </section>

      <AnimatedSection>
        <section id="date">
          <DateAnnouncement />
        </section>
      </AnimatedSection>

      <SectionDivider icon={<Calendar className="h-4 w-4 text-blue-500" />} />

      <AnimatedSection animation="fade-in">
        <section id="details">
          <WeddingDetails />
        </section>
      </AnimatedSection>

      <SectionDivider color="accent" />

      <AnimatedSection animation="fade-in">
        <section id="story">
          <OurStory />
        </section>
      </AnimatedSection>

      <SectionDivider icon={<Gift className="h-4 w-4 text-pink-500" />} color="accent" />

      <AnimatedSection animation="slide-up">
        <section id="instagram">
          <InstagramSection />
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  )
}
