import Link from 'next/link'
import Image from 'next/image'
import { getDestinationsForGrid } from '@/sanity/lib/destinations'

export default async function DestinationsGrid() {
  const destinations = await getDestinationsForGrid()

  // Create alternating pattern: odd rows (3 images), even rows (1 big image)
  const rows = []
  let currentIndex = 0
  
  while (currentIndex < destinations.length) {
    if (rows.length % 2 === 0) {
      // Even row (0, 2, 4...) - three images
      const rowDestinations = destinations.slice(currentIndex, currentIndex + 3)
      if (rowDestinations.length > 0) {
        rows.push({ type: 'three', destinations: rowDestinations })
        currentIndex += 3
      } else {
        break
      }
    } else {
      // Odd row (1, 3, 5...) - one big image
      const destination = destinations[currentIndex]
      if (destination) {
        rows.push({ type: 'big', destination })
        currentIndex += 1
      } else {
        break
      }
    }
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {row.type === 'three' ? (
                // Three images row
                row?.destinations?.map((destination) => (
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
                ))
              ) : (
                // One big image row
                <Link
                  key={row?.destination?._id}
                  href={`/destination/${row?.destination?.slug.current}`}
                  className="md:col-span-2 lg:col-span-3 relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={row?.destination?.image?.asset?.url || ''}
                    alt={row?.destination?.image?.alt || row?.destination?.name || ''}
                    width={960}
                    height={320}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-3xl font-bold tracking-wider">{row?.destination?.name}</h3>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
