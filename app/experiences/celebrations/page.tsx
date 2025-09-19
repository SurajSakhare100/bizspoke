import { getCelebrationsForGrid } from '@/sanity/lib/celebrations'
import ReachOut from '../../components/ReachOut'
import ExperienceTypeGrid from '../../components/ExperienceTypeGrid'

export default async function CelebrationsPage() {
  const celebrations = await getCelebrationsForGrid()

  return (
    <main className="page-container">
      <div className="content-wrapper">
        <ExperienceTypeGrid
          experiences={celebrations}
          title="Celebrations"
          baseUrl="/experiences/celebrations"
        />
        <ReachOut />
      </div>
    </main>
  )
}
