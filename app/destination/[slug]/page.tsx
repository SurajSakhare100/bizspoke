import { getDestinationBySlug } from '@/sanity/lib/destinations'
import { notFound } from 'next/navigation'
import ReachOut from '../../components/ReachOut'
import ImageSlideshow from '../../components/ImageSlideshow'

interface DestinationPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params
  const destination = await getDestinationBySlug(slug)
  
  if (!destination) {
    notFound()
  }

  return (
    <main className="page-container">
      <div className="content-wrapper">
      {/* Destination Header */}
      <section className="section-padding">
        <div className="container-responsive">
          <h1 className="text-center text-blue-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-canela-trial leading-tight text-balance mb-8 sm:mb-12">
            {destination.name}
          </h1>
          
          {/* Image Slideshow */}
          <div className="my-8 sm:my-16">
            <ImageSlideshow 
              images={destination.images}
              destinationName={destination.name}
              // autoPlay={true}
              autoPlayInterval={5000}
            />
          </div>
          
          {/* Description Text */}
          <div className="text-left">
            <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed font-dm-sans font-medium text-balance">
              {destination.description}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-dm-sans text-balance">
              {destination.subDescription}
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
