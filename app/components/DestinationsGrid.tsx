import Link from 'next/link'
import Image from 'next/image'

export default function DestinationsGrid() {
  const destinations = [
    {
      name: "MALDIVES",
      slug: "maldives",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "GOA",
      slug: "goa",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "DUBLIN",
      slug: "dublin",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "MARRAKESH",
      slug: "marrakesh",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "ISTANBUL",
      slug: "istanbul",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top Row - Two images */}
          <Link href={`/destination/${destinations[0].slug}`} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <Image
              src={destinations[0].image}
              alt={destinations[0].name}
              width={320}
              height={320}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-bold tracking-wider">{destinations[0].name}</h3>
            </div>
          </Link>

          <Link href={`/destination/${destinations[1].slug}`} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <Image
              src={destinations[1].image}
              alt={destinations[1].name}
              width={320}
              height={320}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-bold tracking-wider">{destinations[1].name}</h3>
            </div>
          </Link>
          <Link href={`/destination/${destinations[1].slug}`} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <Image
              src={destinations[1].image}
              alt={destinations[1].name}
              width={320}
              height={320}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-bold tracking-wider">{destinations[1].name}</h3>
            </div>
          </Link>

          {/* Middle Row - Full width image */}
          <Link href={`/destination/${destinations[2].slug}`} className="md:col-span-2 lg:col-span-3 relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <Image
              src={destinations[2].image}
              alt={destinations[2].name}
              width={320}
              height={320}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-3xl font-bold tracking-wider">{destinations[2].name}</h3>
            </div>
          </Link>

          {/* Bottom Row - Two images */}
          <Link href={`/destination/${destinations[3].slug}`} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <Image
              src={destinations[3].image}
              alt={destinations[3].name}
              width={320}
              height={320}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-bold tracking-wider">{destinations[3].name}</h3>
            </div>
          </Link>

          <Link href={`/destination/${destinations[4].slug}`} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <Image
              src={destinations[4].image}
              alt={destinations[4].name}
              width={320}
              height={320}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-bold tracking-wider">{destinations[4].name}</h3>
            </div>
          </Link>
          <Link href={`/destination/${destinations[4].slug}`} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
            <Image
              src={destinations[4].image}
              alt={destinations[4].name}
              width={320}
              height={320}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-bold tracking-wider">{destinations[4].name}</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
