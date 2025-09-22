'use client'

import React from 'react'
import Image from 'next/image'
import { CoverPage as CoverPageType } from '../../sanity/lib/OurExpertise'
import { urlForImage } from '../../sanity/lib/image'
import { ErrorFallback } from './ErrorFallback'

interface CoverPageProps {
  coverPageData?: CoverPageType | null
  fallbackTitle?: string
  fallbackDescription?: string
  fallbackImage?: string
}

export default function CoverPage({ 
  coverPageData, 
  fallbackTitle = "Experience",
  fallbackDescription = "Discover amazing experiences with us",
  fallbackImage 
}: CoverPageProps) {
  if (!coverPageData && !fallbackTitle) {
    return (
      <ErrorFallback 
        message="Cover page content unavailable"
        className="min-h-[400px]"
      />
    )
  }

  const title = coverPageData?.title || fallbackTitle
  const description = coverPageData?.description || fallbackDescription
  const imageUrl = coverPageData?.image ? urlForImage(coverPageData.image)?.url() : fallbackImage

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      )}
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-canela-trial">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-dm-sans max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
