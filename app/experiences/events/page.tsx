import { getEventsOffsitesForGrid } from '@/sanity/lib/eventsOffsites'
import ReachOut from '../../components/ReachOut'
import ExperienceTypeGrid from '../../components/ExperienceTypeGrid'

export default async function EventsPage() {
  const events = await getEventsOffsitesForGrid()

  return (
    <main className="page-container">
      <div className="content-wrapper">
        <ExperienceTypeGrid
          experiences={events}
          title="Events and Off-sites"
          baseUrl="/experiences/events"
        />
        <ReachOut />
      </div>
    </main>
  )
}
