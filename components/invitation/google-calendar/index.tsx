"use client"
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';
import GoogleCalendarButton from './GoogleCalendarButton';


export function GoogleCalendarSection() {
  return (
    <section className="py-24 px-4 bg-bg2">
      <div className="max-w-5xl mx-auto">
        <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white dark:bg-gray-800">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-script text-center md:text-left mb-6 text-textPrimary">Agenda Nuestra Boda</h2>
                <p className="text-center md:text-left mb-8 text-gray-600 dark:text-gray-300">
                  No te pierdas nuestro día especial. Agrega la fecha a tu calendario de Google con un solo clic.
                </p>
                <div className="flex justify-center md:justify-start">
                  <GoogleCalendarButton />
                </div>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Pareja en la playa"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <CalendarIcon className="absolute bottom-4 right-4 w-12 h-12 text-white opacity-75" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}