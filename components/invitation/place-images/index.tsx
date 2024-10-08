"use client"
import { weddingConfig } from '@/config/wedding-config';
import { ImageSlider } from './ImageSlider';

export function VenueImagesSection() {
  const venueImages = weddingConfig.venueImages || [];
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-script text-center mb-12 text-pink-600 dark:text-pink-300 text-shadow-sm">Nuestro Lugar</h2>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <ImageSlider images={venueImages} />
        </div>
      </div>
    </section>
  );
}