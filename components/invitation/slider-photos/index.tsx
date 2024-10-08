import React from 'react';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding-config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function OurSection() {
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
    <section className="py-24 px-4 bg-gradient-to-b from-white to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-script text-center mb-16 text-pink-600 dark:text-pink-300 text-shadow-sm">Nuestra Historia</h2>
        <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-2xl">
          <Slider {...settings}>
            {weddingConfig.couplePhotos.map((photo, index) => (
              <div key={index} className="relative w-full h-[600px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-white text-xl font-semibold text-center">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Nuestra historia comenzó hace 5 años, cuando nos conocimos en la universidad. Desde entonces, hemos compartido risas, aventuras y sueños juntos. Hoy, estamos emocionados de dar el siguiente paso en nuestra relación y compartir este momento especial con nuestros seres queridos.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 italic">
            &ldquo;El amor no se trata de mirarse el uno al otro, sino de mirar juntos en la misma dirección.&rdquo; - Antoine de Saint-Exupéry
          </p>
        </div>
      </div>
    </section>
  );
}