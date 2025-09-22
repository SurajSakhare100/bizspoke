"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSlideshowProps {
  images: {
    asset?: {
      url?: string;
    } | null;
    alt?: string;
  }[];
  imageName: string;
  autoPlayInterval?: number;
}

export default function ImageSlideshow({ 
  images, 
  imageName, 
  autoPlayInterval = 2000 
}: ImageSlideshowProps) {
  // Filter out images with invalid assets
  const validImages = images.filter(img => img.asset?.url);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (validImages.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % validImages.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [validImages.length, autoPlayInterval]);

  if (validImages.length === 0) {
    return (
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-2xl mb-2">📸</div>
          <p className="text-sm">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Main Slideshow Container */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl ">
        <Image
          src={validImages[currentIndex].asset!.url!}
          alt={validImages[currentIndex].alt || `${imageName} - Image ${currentIndex + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority={currentIndex === 0}
        />
      </div>

      {/* Image indicators with manual navigation */}
      {validImages.length > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {validImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-100 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
