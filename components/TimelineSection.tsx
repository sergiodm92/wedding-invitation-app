import React from 'react';
import { Clock, Church, GlassWater, Music, Scroll } from 'lucide-react';
import { weddingConfig } from '@/config/wedding-config';
const { churchTime, civilTime } = weddingConfig;

const timelineSteps = [
  { icon: Church, title: 'Ceremonia Religiosa', time: churchTime, description: 'Iglesia los Paños' },
  { icon: Scroll, title: 'Ceremonia Civil', time: civilTime, description: 'Finca las Marías' },
  { icon: GlassWater, title: 'Recepción', time: '17:30', description: 'Finca las Marías' },
  { icon: Music, title: 'Fiesta y Baile', time: '20:00', description: 'Finca las Marías' },
  { icon: Clock, title: 'Fin del Evento', time: '04:00', description: 'Finca las Marías' },
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-script text-center mb-16 text-pink-600 dark:text-pink-300 text-shadow-sm">Cronología del Evento</h2>
        <div className="relative">
          {/* Línea vertical (oculta en móviles) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-300 dark:bg-pink-700 hidden md:block"></div>

          {timelineSteps.map((step, index) => (
            <div key={index} className={`mb-8 md:mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-4 md:mb-0`}>
                <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-300 mb-2">{step.title}</h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">{step.time}</p>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
              <div className="flex md:justify-center items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-auto">
                <div className="w-16 h-16 bg-pink-500 dark:bg-pink-700 rounded-full flex items-center justify-center shadow-lg mr-4 md:mr-0">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow border-t-2 border-pink-300 dark:border-pink-700 md:hidden"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;