import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Image from 'next/image'

interface DestinationPageProps {
  params: {
    slug: string
  }
}

const destinations = {
  maldives: {
    name: "Maldives",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "At Bizspoke, we deliver 360° event solutions, elevated to the highest levels of exclusivity & excellence.",
    subDescription: "Our clients trust us with end-to-end management of their annual experiential calendars."
  },
  goa: {
    name: "Goa",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "At Bizspoke, we deliver 360° event solutions, elevated to the highest levels of exclusivity & excellence.",
    subDescription: "Our clients trust us with end-to-end management of their annual experiential calendars."
  },
  dublin: {
    name: "Dublin",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "At Bizspoke, we deliver 360° event solutions, elevated to the highest levels of exclusivity & excellence.",
    subDescription: "Our clients trust us with end-to-end management of their annual experiential calendars."
  },
  marrakesh: {
    name: "Marrakesh",
    images: [
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "At Bizspoke, we deliver 360° event solutions, elevated to the highest levels of exclusivity & excellence.",
    subDescription: "Our clients trust us with end-to-end management of their annual experiential calendars."
  },
  istanbul: {
    name: "Istanbul",
    images: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "At Bizspoke, we deliver 360° event solutions, elevated to the highest levels of exclusivity & excellence.",
    subDescription: "Our clients trust us with end-to-end management of their annual experiential calendars."
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = destinations[params.slug as keyof typeof destinations]
  
  if (!destination) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-gray-600">The destination you're looking for doesn't exist.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      
      {/* Destination Header */}
      <section className=" py-20">
        <div className=" mx-auto md:px-24">
          <h1 className="text-center justify-start text-[var(--color-blue-100)] text-7xl font-medium font-['Canela_Trial'] leading-[98px]">{destination.name} </h1>
          
          {/* Two Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <Image
                width={320}
                height={320}
                src={destination.images[0]}
                alt={`${destination.name} - Image 1`}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <Image
                width={320}
                height={320}
                src={destination.images[1]}
                alt={`${destination.name} - Image 2`}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Description Text */}
          <div className=" mx-auto text-left">
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

