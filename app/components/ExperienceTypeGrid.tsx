import Link from 'next/link'
import Image from 'next/image'

interface ExperienceImage {
  asset: {
    _id: string
    url: string
    metadata: {
      dimensions: {
        width: number
        height: number
      }
    }
  }
  alt?: string
}

interface Experience {
  _id: string
  name: string
  slug: {
    current: string
  }
  image: ExperienceImage
  description: string
}

interface ExperienceTypeGridProps {
  experiences: Experience[]
  title: string
  baseUrl: string
  showViewMore?: boolean
  viewMoreUrl?: string
}

export default function ExperienceTypeGrid({ experiences, title, baseUrl, showViewMore = false, viewMoreUrl }: ExperienceTypeGridProps) {
  // Create alternating pattern: odd rows (2 images), even rows (1 big image)
  const rows = []
  let currentIndex = 0
  
  while (currentIndex < experiences.length) {
    if (rows.length % 2 === 0) {
      // Even row (0, 2, 4...) - two images
      const rowExperiences = experiences.slice(currentIndex, currentIndex + 2)
      if (rowExperiences.length > 0) {
        rows.push({ type: 'two', experiences: rowExperiences })
        currentIndex += 2
      } else {
        break
      }
    } else {
      // Odd row (1, 3, 5...) - one big image
      const experience = experiences[currentIndex]
      if (experience) {
        rows.push({ type: 'big', experience })
        currentIndex += 1
      } else {
        break
      }
    }
  }

  return (
    <section className="bg-white section-padding">
      <div className="container-responsive">
        {/* Section Header */}
        <h1 className="text-center text-blue-100 text-3xl sm:text-4xl md:text-5xl font-medium font-canela-trial leading-tight text-balance mb-8 sm:mb-12">
          {title}
        </h1>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {row.type === 'two' ? (
                // Two images row - same layout for all screen sizes
                row?.experiences?.map((experience) => (
                  <Link
                    key={experience._id}
                    href={`${baseUrl}/${experience.slug.current}`}
                    className="destination-card mobile-only:destination-card-mobile group"
                  >
                    <Image
                      src={experience?.image?.asset?.url}
                      alt={experience.image.alt || experience.name}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
                    />
                    <div className="destination-overlay"></div>
                    <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                      <h3 className="destination-title text-sm sm:text-lg md:text-xl lg:text-2xl mb-1">
                        {experience.name}
                      </h3>
                      <div className="w-6 sm:w-8 h-0.5 destination-accent"></div>
                    </div>
                    {/* Hover overlay - hidden on mobile */}
                    <div className="hidden sm:block absolute inset-0 bg-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))
              ) : (
                // One big image row - spans both columns
                <Link
                  key={row?.experience?._id}
                  href={`${baseUrl}/${row?.experience?.slug.current}`}
                  className="col-span-2 destination-card mobile-only:destination-card-mobile group"
                >
                  <Image
                    src={row?.experience?.image?.asset?.url || ''}
                    alt={row?.experience?.name || ''}
                    width={960}
                    height={400}
                    className="w-full h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div className="destination-overlay"></div>
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                    <h3 className="destination-title text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2">
                      {row?.experience?.name}
                    </h3>
                    <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 destination-accent"></div>
                  </div>
                  {/* Hover overlay - hidden on mobile */}
                  <div className="hidden sm:block absolute inset-0 bg-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        {showViewMore && viewMoreUrl && (
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href={viewMoreUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-medium font-dm-sans rounded-lg transition-colors duration-300"
            >
              View More {title}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
