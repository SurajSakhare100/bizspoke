'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HeroSection as HeroSectionType } from '../../sanity/lib/heroSection'
import { urlForImage } from '../../sanity/lib/image'
import HeroImage from '@/public/images/hero.png'

interface HeroSectionProps {
  heroData?: HeroSectionType | null
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Choose appropriate image array based on viewport
  const getImages = () => {
    if (isMobile && heroData?.mobileImages && heroData.mobileImages.length > 0) {
      return heroData.mobileImages
    } else if (heroData?.desktopImages && heroData.desktopImages.length > 0) {
      return heroData.desktopImages
    }
    return [{ image: null, alt: "Hero image" }]
  }

  const images = getImages()
  const fallbackImage = HeroImage

  // Auto-rotate images every 3 seconds if multiple images
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 500) // Half of transition duration
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  // Reset image index when switching between mobile/desktop
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [isMobile])

  const getCurrentImage = () => {
    const currentImage = images[currentImageIndex]
    if (currentImage?.image) {
      const imageUrl = urlForImage(currentImage.image)?.url()
      return imageUrl ? { src: imageUrl, alt: currentImage.alt || "Hero image" } : null
    }
    return null
  }

  const currentImageData = getCurrentImage()

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {currentImageData ? (
          <Image
            src={currentImageData.src}
            alt={currentImageData.alt}
            fill
            className={`object-cover object-left sm:object-center transition-opacity duration-1000 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            priority
            sizes="100vw"
          />
        ) : (
          <Image
            src={fallbackImage}
            alt="London skyline with Big Ben and Houses of Parliament at sunrise"
            fill
            className={`object-cover object-left sm:object-center transition-opacity duration-1000 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            priority
            sizes="100vw"
          />
        )}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center" />

      {/* Main Title */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-[#163C53] absolute top-40 md:top-52  text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-bold font-canela-trial text-center drop-shadow-lg">
          Bizspoke
        </h1>
      </div>

      {/* Image indicators if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentImageIndex(index)
                  setIsTransitioning(false)
                }, 500)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
