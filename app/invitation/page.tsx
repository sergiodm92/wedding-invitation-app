"use client"

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import GoogleCalendarSection from '@/components/GoogleCalendarSection';
import VenueImagesSection from '@/components/VenueImagesSection';
import RSVPSection from '@/components/RSVPSection';
import PartyInfoSection from '@/components/PartyInfoSection';
import NosotrosSection from '@/components/NosotrosSection';
import TimelineSection from '@/components/TimelineSection';
import GiftSection from '@/components/GiftSection';
import MasonryGallery from '@/components/MasonryGallery';
import Footer from '@/components/Footer';

const DynamicThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });

export default function Invitation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <DynamicThemeToggle />
      <main className="flex-grow">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="countdown">
          <CountdownSection />
        </section>
        <section id="nosotros">
          <MasonryGallery />
        </section>
        <section id="timeline">
          <TimelineSection />
        </section>
        <GoogleCalendarSection />
        {/* <section id="venue">
          <VenueImagesSection />
        </section> */}
        <section id="partyInfo">
          <PartyInfoSection />
        </section>
        <section id="gifts">
          <GiftSection />
        </section>
        {isLoggedIn && (
          <section id="rsvp">
            <RSVPSection />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}