import { getMiceForGrid } from '@/sanity/lib/mice'
import ReachOut from '../../components/ReachOut'
import ExperienceTypeGrid from '../../components/ExperienceTypeGrid'

export default async function MicePage() {
  const mice = await getMiceForGrid()

  return (
    <main className="page-container">
      <div className="content-wrapper">
        <ExperienceTypeGrid
          experiences={mice}
          title="MICE (Meetings, Incentives, Conferences, Events)"
          baseUrl="/experiences/mice"
        />
        <ReachOut />
      </div>
    </main>
  )
}
