import Image from 'next/image'
import { getDestinationBySlug } from '@/sanity/lib/destinations'
import { notFound } from 'next/navigation'
import ReachOut from '../../components/ReachOut'

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
          
          {/* Two Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-6 sm:my-16">
            {destination.images.slice(0, 2).map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  width={600}
                  height={400}
                  src={image.asset.url}
                  alt={image.alt || `${destination.name} - Image ${index + 1}`}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
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

      {/* Additional Images Grid */}
      {destination.images.length > 2 && (
        <section className="section-padding bg-gray-40">
          <div className="container-responsive">
            <h2 className="text-center text-blue-100 text-2xl sm:text-3xl md:text-4xl font-medium font-canela-trial leading-tight mb-8 sm:mb-12">
              More Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {destination.images.slice(2).map((image, index) => (
                <div key={index + 2} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={400}
                    height={300}
                    src={image.asset.url}
                    alt={image.alt || `${destination.name} - Image ${index + 3}`}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

        {/* Reach Out Section */}
        <ReachOut />
      </div>
    </main>
  )
}
