"use client"

import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';
import { weddingConfig } from '@/config/wedding-config';
import Link from 'next/link';

const GoogleCalendarButton = () => {
  const createGoogleCalendarLink = () => {
    const { date, time, venue, address, brideAndGroom } = weddingConfig;
    
    const [year, month, day] = date.split('-').map(Number);
    const [hours, minutes] = time.split(':').map(Number);
    
    const startDate = new Date(year, month - 1, day, hours, minutes);
    const endDate = new Date(startDate.getTime() + 6 * 60 * 60 * 1000);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error('Invalid date or time in wedding config');
      return '#';
    }

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `Boda de ${brideAndGroom}`,
      dates: `${startDate.toISOString().replace(/-|:|\.\d+/g, '')}/${endDate.toISOString().replace(/-|:|\.\d+/g, '')}`,
      details: `Te invitamos a celebrar nuestra boda. ¡No faltes!`,
      location: `${venue}, ${address}`,
    });

    return `https://www.google.com/calendar/render?${params.toString()}`;
  };

  return (
    <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
      <Link
        href={createGoogleCalendarLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <CalendarPlus className="w-5 h-5" />
        <span>Agregar a Google Calendar</span>
      </Link>
    </Button>
  );
};

export default GoogleCalendarButton;