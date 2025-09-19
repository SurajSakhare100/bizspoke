"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
  autoPlayInterval = 1000 
}: ImageSlideshowProps) {
  // Filter out images with invalid assets
  const validImages = images.filter(img => img.asset?.url);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(-1); // -1 = backward (reverse)

  useEffect(() => {
    if (validImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (direction === 1 && prev === validImages.length - 1) {
          setDirection(-1);
          return prev - 1;
        }
        if (direction === -1 && prev === 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [direction, validImages.length, autoPlayInterval]);

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
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <Image
              src={validImages[currentIndex].asset!.url!}
              alt={validImages[currentIndex].alt || `${imageName} - Image ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Simple Progress Indicators - Non-interactive */}
      {validImages.length > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {validImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-blue-100 w-8'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
