import OurExpertise from './components/OurExpertise'
import InstagramSection from './components/InstagramSection'
import DestinationsSection from './components/DestinationsSection'
import HeroSection from './components/HeroSection'
import ReachOut from './components/ReachOut'
import AboutUs from './components/AboutUs'
import { getAllOurExpertise } from '../sanity/lib/OurExpertise'
import { getHeroSection } from '../sanity/lib/heroSection'

export default async function Home() {
  const [expertiseData, heroData] = await Promise.all([
    getAllOurExpertise(),
    getHeroSection()
  ])
  
  return (
    <main className="page-container">
      <div className="content-wrapper">
        <HeroSection heroData={heroData} />
        <AboutUs />
        <OurExpertise expertiseData={expertiseData} />
        <ReachOut />
        <DestinationsSection />
        <InstagramSection />
      </div>
    </main>
  )
}
