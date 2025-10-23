import { Lora, Great_Vibes } from "next/font/google"
import WeddingHeader from "@/components/wedding-header"
import DateAnnouncement from "@/components/date-announcement"
import CoupleProfiles from "@/components/couple-profiles"
import WeddingDetails from "@/components/wedding-details"
import WeddingGallery from "@/components/wedding-gallery"
import InstagramSection from "@/components/instagram-section"
import OurStory from "@/components/our-story"
import RsvpSection from "@/components/rsvp-section"
import Footer from "@/components/footer"
import NavigationMenu from "@/components/navigation-menu"
import FaqSection from "@/components/faq-section"
import SectionDivider from "@/components/section-divider"
import AnimatedSection from "@/components/animated-section"
import { Calendar, Users, Gift, Camera, MessageSquare } from "lucide-react"

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

      {/*<SectionDivider icon={<Users className="h-4 w-4 text-blue-500" />} />

      <AnimatedSection animation="slide-up">
        <section id="couple">
          <CoupleProfiles />
        </section>
      </AnimatedSection>
      */}

      <SectionDivider icon={<Calendar className="h-4 w-4 text-blue-500" />} />

      <AnimatedSection animation="fade-in">
        <section id="details">
          <WeddingDetails />
        </section>
      </AnimatedSection>

      <SectionDivider icon={<Gift className="h-4 w-4 text-pink-500" />} color="accent" />

      <AnimatedSection animation="fade-in">
        <section id="story">
          <OurStory />
        </section>
      </AnimatedSection>

     {/* <SectionDivider icon={<MessageSquare className="h-4 w-4 text-blue-500" />} /> */}

      {/* Movemos la sección RSVP justo después de la sección "La boda" */}
      {/*<AnimatedSection animation="fade-in">
        <section id="rsvp">
          <RsvpSection />
        </section>
      </AnimatedSection>
      */}

      <SectionDivider color="accent" />

      <AnimatedSection animation="slide-up">
        <section id="instagram">
          <InstagramSection />
        </section>
      </AnimatedSection>

      <SectionDivider icon={<Camera className="h-4 w-4 text-blue-500" />} />

      <AnimatedSection animation="scale-in">
        <section id="gallery">
          <WeddingGallery />
        </section>
      </AnimatedSection>

      <SectionDivider icon={<MessageSquare className="h-4 w-4 text-blue-500" />} />

      <AnimatedSection animation="slide-up">
        <section id="faq">
          <FaqSection />
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  )
}

