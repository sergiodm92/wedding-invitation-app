"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      console.warn('No images provided to ImageSlider');
    }
  }, [images]);

  if (images.length === 0) {
    return <div className="w-full h-96 bg-gray-200 flex items-center justify-center">No images available</div>;
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-96">
      <div className="absolute top-1/2 left-4 z-10">
        <button onClick={goToPrevious} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10">
        <button onClick={goToNext} className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
          <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
      </div>
      <Image
        src={images[currentIndex]}
        alt={`Venue image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};
