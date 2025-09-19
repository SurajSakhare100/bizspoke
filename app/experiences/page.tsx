import { getRetreatsForGrid } from '@/sanity/lib/retreats'
import { getEventsOffsitesForGrid } from '@/sanity/lib/eventsOffsites'
import { getMiceForGrid } from '@/sanity/lib/mice'
import { getCelebrationsForGrid } from '@/sanity/lib/celebrations'
import ReachOut from '../components/ReachOut'
import ExperienceTypeGrid from '../components/ExperienceTypeGrid'

export default async function ExperiencesPage() {
  // Fetch all experience types and limit to 5 items each
  const [retreats, events, mice, celebrations] = await Promise.all([
    getRetreatsForGrid(),
    getEventsOffsitesForGrid(),
    getMiceForGrid(),
    getCelebrationsForGrid()
  ])

  // Limit to 5 items each for preview
  const limitedRetreats = retreats.slice(0, 5)
  const limitedEvents = events.slice(0, 5)
  const limitedMice = mice.slice(0, 5)
  const limitedCelebrations = celebrations.slice(0, 5)

  return (
    <main className="page-container">
      <div className="content-wrapper">
        {/* Page Header */}
        <section className="section-padding">
          <div className="container-responsive text-center">
            <h1 className="text-blue-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-canela-trial leading-tight text-balance mb-4 sm:mb-6">
              Our Experiences
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 font-dm-sans max-w-3xl mx-auto">
              Discover our curated collection of luxury retreats and exceptional experiences designed to inspire and transform.
            </p>
          </div>
        </section>

        {/* Luxury Retreats */}
        {limitedRetreats.length > 0 && (
          <ExperienceTypeGrid
            experiences={limitedRetreats}
            title="Luxury Retreats"
            baseUrl="/experiences/retreats"
            showViewMore={retreats.length > 5}
            viewMoreUrl="/experiences/retreats"
          />
        )}

        {/* Events and Off-sites */}
        {limitedEvents.length > 0 && (
          <ExperienceTypeGrid
            experiences={limitedEvents}
            title="Events and Off-sites"
            baseUrl="/experiences/eventsOffsites"
            showViewMore={events.length > 5}
            viewMoreUrl="/experiences/events"
          />
        )}

        {/* MICE */}
        {limitedMice.length > 0 && (
          <ExperienceTypeGrid
            experiences={limitedMice}
            title="MICE"
            baseUrl="/experiences/mice"
            showViewMore={mice.length > 5}
            viewMoreUrl="/experiences/mice"
          />
        )}

        {/* Celebrations */}
        {limitedCelebrations.length > 0 && (
          <ExperienceTypeGrid
            experiences={limitedCelebrations}
            title="Celebrations"
            baseUrl="/experiences/celebrations"
            showViewMore={celebrations.length > 5}
            viewMoreUrl="/experiences/celebrations"
          />
        )}

        <ReachOut />
      </div>
    </main>
  )
}

