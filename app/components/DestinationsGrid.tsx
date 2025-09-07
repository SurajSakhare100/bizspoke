import Link from 'next/link'
import Image from 'next/image'
import { getDestinationsForGrid } from '@/sanity/lib/destinations'

export default async function DestinationsGrid() {
  const destinations = await getDestinationsForGrid()

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top Row - Two images */}
          {destinations.slice(0, 2).map((destination, index) => (
            <Link 
              key={destination._id} 
              href={`/destination/${destination.slug.current}`} 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={destination.image.asset.url}
                alt={destination.image.alt || destination.name}
                width={320}
                height={320}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold tracking-wider">{destination.name}</h3>
              </div>
            </Link>
          ))}

          {/* Duplicate second image for layout */}
          {destinations[1] && (
            <Link 
              href={`/destination/${destinations[1].slug.current}`} 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={destinations[1].image.asset.url}
                alt={destinations[1].image.alt || destinations[1].name}
                width={320}
                height={320}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold tracking-wider">{destinations[1].name}</h3>
              </div>
            </Link>
          )}

          {/* Middle Row - Full width image */}
          {destinations[2] && (
            <Link 
              href={`/destination/${destinations[2].slug.current}`} 
              className="md:col-span-2 lg:col-span-3 relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={destinations[2].image.asset.url}
                alt={destinations[2].image.alt || destinations[2].name}
                width={320}
                height={320}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-3xl font-bold tracking-wider">{destinations[2].name}</h3>
              </div>
            </Link>
          )}

          {/* Bottom Row - Two images */}
          {destinations.slice(3, 5).map((destination, index) => (
            <Link 
              key={destination._id} 
              href={`/destination/${destination.slug.current}`} 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={destination.image.asset.url}
                alt={destination.image.alt || destination.name}
                width={320}
                height={320}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold tracking-wider">{destination.name}</h3>
              </div>
            </Link>
          ))}

          {/* Duplicate last image for layout */}
          {destinations[4] && (
            <Link 
              href={`/destination/${destinations[4].slug.current}`} 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={destinations[4].image.asset.url}
                alt={destinations[4].image.alt || destinations[4].name}
                width={320}
                height={320}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold tracking-wider">{destinations[4].name}</h3>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
