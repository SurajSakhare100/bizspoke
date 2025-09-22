'use client'

import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { HomepageContent } from '../../sanity/lib/homepageContent'
import { urlForImage } from '../../sanity/lib/image'
import { ErrorFallback, EmptyStateFallback } from './ErrorFallback'

interface EditableHomepageSectionProps {
  content?: HomepageContent | null
  fallbackContent?: {
    title?: string
    subtitle?: string
    description?: string
    buttonText?: string
    buttonLink?: string
  }
  className?: string
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mb-6 text-gray-900 font-canela-trial">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mb-4 text-gray-900 font-canela-trial">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mb-3 text-gray-900 font-dm-sans">{children}</h3>,
  },
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlForImage(value)?.url()
      return imageUrl ? (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || ''}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          />
        </div>
      ) : null
    }
  }
}

export default function EditableHomepageSection({ 
  content, 
  fallbackContent,
  className = ""
}: EditableHomepageSectionProps) {
  if (!content && !fallbackContent) {
    return (
      <EmptyStateFallback
        title="Section Content Unavailable"
        message="This section is being updated. Please check back soon!"
        className={className}
      />
    )
  }

  const title = content?.title || fallbackContent?.title
  const subtitle = content?.subtitle || fallbackContent?.subtitle
  const description = content?.description || fallbackContent?.description
  const buttonText = content?.buttonText || fallbackContent?.buttonText
  const buttonLink = content?.buttonLink || fallbackContent?.buttonLink
  const richContent = content?.content
  const images = content?.images

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 font-canela-trial text-gray-900">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <h3 className="text-xl sm:text-2xl text-center mb-8 font-dm-sans text-gray-700">
            {subtitle}
          </h3>
        )}

        {description && (
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto font-dm-sans text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        {richContent && richContent.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8">
            <PortableText 
              value={richContent} 
              components={portableTextComponents}
            />
          </div>
        )}

        {images && images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {images.map((image, index) => {
              const imageUrl = urlForImage(image)?.url()
              return imageUrl ? (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={imageUrl}
                    alt={`Section image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : null
            })}
          </div>
        )}

        {buttonText && buttonLink && (
          <div className="text-center">
            <a
              href={buttonLink}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
