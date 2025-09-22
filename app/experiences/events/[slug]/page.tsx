import { getEventsOffsitesBySlug } from '@/sanity/lib/eventsOffsites'
import { notFound } from 'next/navigation'
import ReachOut from '../../../components/ReachOut'
import ImageSlideshow from '../../../components/ImageSlideshow'

interface EventsOffsitesPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function EventsOffsitesPage({ params }: EventsOffsitesPageProps) {
  const { slug } = await params
  const EventsOffsites = await getEventsOffsitesBySlug(slug)
  
  if (!EventsOffsites) {
    notFound(   )
  }

  return (
    <main className="page-container">
      <div className="content-wrapper">
      {/* ev Header */}
      <section className="section-padding">
        <div className="container-responsive">
          <h1 className="text-center text-blue-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-canela-trial leading-tight text-balance mb-8 sm:mb-12">
            {EventsOffsites.name}
          </h1>
          
          {/* Image Slideshow */}
          <div className="my-8 sm:my-16">
            <ImageSlideshow 
              images={EventsOffsites.images}
              imageName={EventsOffsites.name}
              // autoPlay={true}
              
              autoPlayInterval={2000}
            />
          </div>
          
          {/* Description Text */}
          <div className="text-left">
            <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed font-dm-sans font-medium text-balance">
              {EventsOffsites.description}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-dm-sans text-balance">
              {EventsOffsites.subDescription}
            </p>
          </div>
        </div>
      </section>


        {/* Reach Out Section */}
        <ReachOut />
      </div>
    </main>
  )
}
