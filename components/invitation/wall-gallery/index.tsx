"use client"

import React, { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Slider from 'react-slick';
import { weddingConfig } from '@/config/wedding-config';
import useIsMobile from '@/hooks/useIsMobile';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

const photos = weddingConfig.photosOurs;

export const MasonryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const constraintsRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const isMobile = useIsMobile();

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      goToPrevious();
    } else if (info.offset.x < -100) {
      goToNext();
    }
  };

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    arrows: false,
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
        <h2 className="text-5xl font-script text-center mb-16 text-textPrimary text-shadow-sm">Un Poco de Nosotros</h2>
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
                  objectFit='cover'
                  objectPosition={`${isMobile ? photo.move : ""} center`}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              ref={constraintsRef}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white z-10"
                onClick={closeModal}
              >
                <X size={24} />
              </Button>
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={photos[currentIndex].src}
                  alt={`Gallery image ${currentIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
