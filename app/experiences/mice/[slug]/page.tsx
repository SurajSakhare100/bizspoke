import { getMiceBySlug } from '@/sanity/lib/mice'
import { notFound } from 'next/navigation'
import ReachOut from '../../../components/ReachOut'
import ImageSlideshow from '../../../components/ImageSlideshow'

interface MicePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function MicePage({ params }: MicePageProps) {
  const { slug } = await params
  const Mice = await getMiceBySlug(slug)
  
  if (!Mice) {
    notFound(   )
  }

  return (
    <main className="page-container">
      <div className="content-wrapper">
      {/* Mice Header */}
      <section className="section-padding">
        <div className="container-responsive">
          <h1 className="text-center text-blue-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-canela-trial leading-tight text-balance mb-8 sm:mb-12">
            {Mice.name}
          </h1>
          
          {/* Image Slideshow */}
          <div className="my-8 sm:my-16">
            <ImageSlideshow 
              images={Mice.images}
              imageName={Mice.name}
              // autoPlay={true}
              
              autoPlayInterval={2000}
            />
          </div>
          
          {/* Description Text */}
          <div className="text-left">
            <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed font-dm-sans font-medium text-balance">
              {Mice.description}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-dm-sans text-balance">
              {Mice.subDescription}
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
