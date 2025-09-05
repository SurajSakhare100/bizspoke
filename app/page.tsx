import OurExpertise from './components/OurExpertise'
import InstagramSection from './components/InstagramSection'
import DestinationsSection from './components/DestinationsSection'
import HeroSection from './components/HeroSection'
import ReachOut from './components/ReachOut'
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OurExpertise />
      <ReachOut />
      <DestinationsSection />
      <InstagramSection />
    </main>
  )
}
