import OurExpertise from './components/OurExpertise'
import InstagramSection from './components/InstagramSection'
import DestinationsSection from './components/DestinationsSection'
import HeroSection from './components/HeroSection'
import ReachOut from './components/ReachOut'

export default function Home() {
  return (
    <main className="page-container">
      <div className="content-wrapper">
        <HeroSection />
        <OurExpertise />
        <ReachOut />
        <DestinationsSection />
        <InstagramSection />
      </div>
    </main>
  )
}
