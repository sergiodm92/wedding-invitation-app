import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { weddingConfig } from '@/config/wedding-config';
import { Music, Utensils, Gift, Camera, Shirt, LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
    <Icon className="w-12 h-12 text-pink-500 dark:text-pink-300 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const PartyInfoSection: React.FC = () => {
  const infoItems = [
    {
      icon: Music,
      title: "Música y Baile",
      description: "Disfruta de una noche llena de ritmo y diversión con nuestra selección musical."
    },
    {
      icon: Utensils,
      title: "Gastronomía",
      description: "Deliciosos platillos y bebidas para deleitar tu paladar durante la celebración."
    },
    {
      icon: Gift,
      title: "Mesa de Regalos",
      description: "Si deseas obsequiarnos algo, consulta nuestra lista de regalos sugeridos."
    },
    {
      icon: Camera,
      title: "Fotomatón",
      description: "Captura momentos divertidos en nuestro fotomatón y llévate un recuerdo especial."
    },
    {
      icon: Shirt,
      title: "Dress Code",
      description: weddingConfig.dressCode
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-script text-center mb-16 text-pink-600 dark:text-pink-300 text-shadow-sm">Detalles de la Fiesta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoItems.map((item, index) => (
            <InfoItem key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
        <Card className="mt-16 bg-white dark:bg-gray-800 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-3xl font-script text-center mb-6 text-pink-600 dark:text-pink-300">Información Adicional</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              La recepción comenzará a las {weddingConfig.time} en {weddingConfig.venue}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartyInfoSection;