import OurExpertise from './components/OurExpertise'
import InstagramSection from './components/InstagramSection'
import DestinationsSection from './components/DestinationsSection'
import HeroSection from './components/HeroSection'
import ReachOut from './components/ReachOut'
import AboutUs from './components/AboutUs'
export default function Home() {
  return (
    <main className="page-container">
      <div className="content-wrapper">
        <HeroSection />
        <AboutUs />
        <OurExpertise />
        <ReachOut />
        <DestinationsSection />
        <InstagramSection />
      </div>
    </main>
  )
}
