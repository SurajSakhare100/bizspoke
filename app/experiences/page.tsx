import Link from 'next/link'
import DestinationsGrid from '../components/DestinationsGrid'
import ReachOut from '../components/ReachOut'

export default function TravelPage() {
  return (
    <main className="page-container">
      <div className="content-wrapper">
        {/* Travel Page Header */}
        

        <DestinationsGrid />
        
        <ReachOut />
      </div>
    </main>
  )
}

