"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageSlideshowProps {
  images: {
    asset: {
      url: string;
    };
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(-1); // -1 = backward (reverse)

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (direction === 1 && prev === images.length - 1) {
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
  }, [direction, images.length, autoPlayInterval]);

  if (images.length === 0) return null;

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
              src={images[currentIndex].asset.url}
              alt={images[currentIndex].alt || `${imageName} - Image ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Simple Progress Indicators - Non-interactive */}
      {images.length > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, index) => (
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
