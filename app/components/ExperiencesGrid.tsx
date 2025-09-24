import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { luxuryRetreatsQueries, eventsOffsitesQueries, miceQueries, celebrationsQueries } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

interface Experience {
  _id: string
  name: string
  slug: { current: string }
  image?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  description: string
}

interface ExperienceSection {
  title: string
  experiences: Experience[]
  type: 'retreats' | 'events' | 'mice' | 'celebrations'
}

async function getExperiences(): Promise<ExperienceSection[]> {
  try {
    const [retreats, events, mice, celebrations] = await Promise.all([
      client.fetch(luxuryRetreatsQueries.forGrid),
      client.fetch(eventsOffsitesQueries.forGrid),
      client.fetch(miceQueries.forGrid),
      client.fetch(celebrationsQueries.forGrid)
    ])

    return [
      {
        title: 'Luxury Retreats',
        experiences: retreats,
        type: 'retreats'
      },
      {
        title: 'Events and Off-sites',
        experiences: events,
        type: 'events'
      },
      {
        title: 'MICE',
        experiences: mice,
        type: 'mice'
      },
      {
        title: 'Celebrations',
        experiences: celebrations,
        type: 'celebrations'
      }
    ]
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return []
  }
}

function ExperienceCard({ experience, type }: { experience: Experience; type: string }) {
  const imageUrl = experience.image?.asset?.url ? urlFor(experience.image.asset.url).width(400).height(300).url() : '/images/placeholder.jpg'
  
  return (
    <div className="group cursor-pointer">
      <Link href={`/experiences/${type}/${experience.slug.current}`}>
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <div className="aspect-[4/3] relative">
            <Image
              src={imageUrl}
              alt={experience.image?.alt || experience.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-medium font-canela text-blue-100 group-hover:text-yellow-600 transition-colors">
            {experience.name}
          </h3>
          <p className="text-sm text-blue-100/80 font-dm-sans line-clamp-2">
            {experience.description}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default async function ExperiencesGrid() {
  const experienceSections = await getExperiences()

  if (experienceSections.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-canela text-blue-100 mb-4">No experiences available</h2>
          <p className="text-blue-100/80 font-dm-sans">Please check back later for our curated experiences.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-canela text-blue-100">
          Our Experiences
        </h1>
        <p className="text-lg md:text-xl text-blue-100/80 font-dm-sans max-w-3xl mx-auto">
          Discover our curated collection of luxury retreats and exceptional experiences designed to inspire and transform.
        </p>
      </div>

      {/* Experience Sections */}
      {experienceSections.map((section) => (
        section.experiences.length > 0 && (
          <div key={section.type} className="space-y-8">
            {/* Section Header */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-canela text-blue-100">
                {section.title}
              </h2>
              <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full" />
            </div>

            {/* Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {section.experiences.map((experience) => (
                <ExperienceCard
                  key={experience._id}
                  experience={experience}
                  type={section.type}
                />
              ))}
            </div>

            {/* View All Link */}
            {section.experiences.length > 0 && (
              <div className="text-center">
                <Link
                  href={`/experiences/${section.type}`}
                  className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-500 font-medium font-dm-sans transition-colors"
                >
                  View All {section.title}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        )
      ))}
    </div>
  )
}
