import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { weddingConfig } from '@/config/wedding-config';
import { Music, Utensils, Gift, Camera, Shirt, LucideIcon, Locate, LocateFixed, MapPinned } from 'lucide-react';

interface InfoItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, title, description, href }) => (
  <a href={href} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 w-[300px]">
    <Icon className="w-12 h-12 text-pink-500 dark:text-pink-300 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </a>
);

export const PartyLocations: React.FC = () => {
  const infoItems = [
    {
      icon: MapPinned,
      title: "Iglesia",
      description: `${weddingConfig.churchAddress}`,
      href: `https://maps.app.goo.gl/Mof2njoQ2s2wwG6bA?g_st=iw`
    },
    {
      icon: MapPinned,
      title: "Civil/Fiesta",
      description: `${weddingConfig.civilAdress}`,
      href: `https://maps.app.goo.gl/LGsBp78rZkLqEQVB6?g_st=iw`
    },
  ];

  return (
    <section className="py-24 px-4 bg-bg1">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-script text-center mb-16 text-pink-600 dark:text-pink-300 text-shadow-sm">Ubicaciones</h2>
        <div className="flex flex-wrap items-center gap-8 md:flex justify-center md:items-center cursor-pointer">
          {infoItems.map((item, index) => (
            <InfoItem key={index} icon={item.icon} title={item.title} description={item.description} href={item.href} />
          ))}
        </div>
        {/* <Card className="mt-16 bg-white dark:bg-gray-800 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-3xl font-script text-center mb-6 text-pink-600 dark:text-pink-300">Información Adicional</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              La recepción comenzará a las {weddingConfig.time} en {weddingConfig.venue}
            </p>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};
