"use client"
import { useState, useEffect } from 'react';
import MainLayout from '@layouts/MainLayout';
import {
  HeroSection,
  CountdownSection,
  GoogleCalendarSection,
  MasonryGallery,
  TimelineSection,
  PartyLocations,
  GiftSection,
  ConfirmSection,
  DressCode
} from '@/components/invitation';
import ThemeToggle from '@/components/common/theme-button/ThemeToggle';



export default function Invitation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="min-h-screen flex flex-col  dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <MainLayout>
        <ThemeToggle />
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
            <PartyLocations />
          </section>
          <section id="dressCode">
            <DressCode />
          </section>
          <section id="gifts">
            <GiftSection />
          </section>
            <section id="confirm">
              <ConfirmSection />
            </section>
          
        </main>
      </MainLayout>
    </div>
  );
}