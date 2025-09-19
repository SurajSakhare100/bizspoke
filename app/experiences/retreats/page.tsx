import { getRetreatsForGrid } from '@/sanity/lib/retreats'
import ReachOut from '../../components/ReachOut'
import ExperienceTypeGrid from '../../components/ExperienceTypeGrid'

export default async function RetreatsPage() {
  const retreats = await getRetreatsForGrid()

  return (
    <main className="page-container">
      <div className="content-wrapper">
        <ExperienceTypeGrid
          experiences={retreats}
          title="Luxury Retreats"
          baseUrl="/experiences/retreats"
        />
        <ReachOut />
      </div>
    </main>
  )
}
