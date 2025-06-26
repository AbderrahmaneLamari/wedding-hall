import Header from "@/components/header"
import Hero from "@/components/hero"
import WeddingPlanners from "@/components/wedding-planners"
import GrandSection from "@/components/grand-section"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WeddingPlanners />
      <GrandSection />
      <Gallery />
      <Footer />
    </main>
  )
}
