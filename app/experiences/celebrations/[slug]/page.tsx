import { getCelebrationsBySlug } from '@/sanity/lib/celebrations'
import { notFound } from 'next/navigation'
import ReachOut from '../../../components/ReachOut'
import ImageSlideshow from '../../../components/ImageSlideshow'

interface CelebrationsPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CelebrationsPage({ params }: CelebrationsPageProps) {
  const { slug } = await params
  const Celebrations = await getCelebrationsBySlug(slug)
  
  if (!Celebrations) {
    notFound(   )
  }

  return (
    <main className="page-container">
      <div className="content-wrapper">
      {/* Celebrations Header */}
      <section className="section-padding">
        <div className="container-responsive">
          <h1 className="text-center text-blue-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-canela-trial leading-tight text-balance mb-8 sm:mb-12">
            {Celebrations.name}
          </h1>
          
          {/* Image Slideshow */}
          <div className="my-8 sm:my-16">
            <ImageSlideshow 
              images={Celebrations.images}
              imageName={Celebrations.name}
              // autoPlay={true}
              autoPlayInterval={5000}
            />
          </div>
          
          {/* Description Text */}
          <div className="text-left">
            <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed font-dm-sans font-medium text-balance">
              {Celebrations.description}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-dm-sans text-balance">
              {Celebrations.subDescription}
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
