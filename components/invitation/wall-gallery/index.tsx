"use client"

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Slider from 'react-slick';
import { weddingConfig } from '@/config/wedding-config';

const photos = weddingConfig.photosOurs;

export const MasonryGallery = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className=" py-24 px-4 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-script text-center mb-16 text-pink-600 dark:text-pink-300 text-shadow-sm">Un Poco de Nosotros</h2>
        <div className="hidden md:block columns-1 sm:columns-2 lg:columns-3 gap-4">
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
        <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-2xl md:hidden">
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <div key={index} className="relative w-full h-[600px]">
                <Image
                  src={photo.src}
                  alt={"photo"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </Slider>
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
