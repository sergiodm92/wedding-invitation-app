"use client"

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const photos = [
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728318876/WhatsApp_Image_2024-08-29_at_9.10.56_PM_2_t5xcj9.jpg", width: 2070, height: 1380 },
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728319321/WhatsApp_Image_2024-08-29_at_9.11.14_PM_ukosde.jpg", width: 2070, height: 1380 },
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728318881/WhatsApp_Image_2024-08-29_at_9.10.57_PM_3_vw1vwb.jpg", width: 2069, height: 1379 },
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728319463/WhatsApp_Image_2024-08-29_at_9.11.15_PM_vf3lmu.jpg", width: 2070, height: 1380 },
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728320235/WhatsApp_Image_2024-09-03_at_11.03.26_PM_uqak2p.jpg", width: 2070, height: 1380 },
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728319235/WhatsApp_Image_2024-08-29_at_9.11.11_PM_x1ipkw.jpg", width: 2070, height: 1380 },
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728318877/WhatsApp_Image_2024-08-29_at_9.10.57_PM_2_xxoffq.jpg", width: 2071, height: 1381 },
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728318884/WhatsApp_Image_2024-08-29_at_9.10.56_PM_npdd47.jpg", width: 2070, height: 1380 },
  { src: "https://res.cloudinary.com/dhx8hti8b/image/upload/v1728318876/WhatsApp_Image_2024-08-29_at_9.10.57_PM_tlir6u.jpg", width: 1974, height: 1316 },
];

const MasonryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const openModal = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setCurrentIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex! - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex! + 1));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      goToNext();
    }

    if (touchStart - touchEnd < -150) {
      goToPrevious();
    }
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    } else if (event.key === 'Escape') {
      closeModal();
    }
  }, [goToPrevious, goToNext, closeModal]);

  React.useEffect(() => {
    if (currentIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleKeyDown]);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-script text-center mb-16 text-pink-600 dark:text-pink-300 text-shadow-sm">Un Poco de Nosotros</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <Image
                src={photo.src}
                alt={`Gallery image ${index + 1}`}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto cursor-pointer rounded-lg hover:opacity-80 transition-opacity"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl max-w-4xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
              onClick={closeModal}
            >
              <X size={24} />
            </Button>
            <div 
              className="relative w-full h-[calc(90vh-2rem)] flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={goToPrevious}
              >
                <ChevronLeft size={36} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={goToNext}
              >
                <ChevronRight size={36} />
              </Button>
              <Image
                src={photos[currentIndex].src}
                alt={`Gallery image ${currentIndex + 1}`}
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MasonryGallery;