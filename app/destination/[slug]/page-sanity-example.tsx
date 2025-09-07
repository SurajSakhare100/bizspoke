import Image from 'next/image'
import { getDestinationBySlug } from '@/sanity/lib/destinations'
import { notFound } from 'next/navigation'

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
    <main className="min-h-screen">
      {/* Destination Header */}
      <section className="py-20">
        <div className="mx-auto md:px-24">
          <h1 className="text-center justify-start text-[var(--color-blue-100)] text-7xl font-medium font-['Canela_Trial'] leading-[98px]">
            {destination.name}
          </h1>
          
          {/* Two Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            {destination.images.slice(0, 2).map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <Image
                  width={320}
                  height={320}
                  src={image.asset.url}
                  alt={image.alt || `${destination.name} - Image ${index + 1}`}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          {/* Description Text */}
          <div className="mx-auto text-left">
            <p className="text-xl text-gray-700 mb-4 leading-relaxed font-dm-sans">
              {destination.description}
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-dm-sans">
              {destination.subDescription}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
