import Link from 'next/link';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { weddingConfig } from '@/config/wedding-config';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-300 to-red-100 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-script text-textPrimary mb-4">
              {weddingConfig.brideAndGroom}
            </h3>
            <p className="mb-2 text-lg">21/12/2024</p>
            <p className="text-lg">{weddingConfig.venue}</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-textPrimary">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              {['Inicio', 'Detalles', 'RSVP'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block py-1 text-lg hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4 text-textPrimary">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-6">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-pink-500 dark:hover:text-pink-300 transition-colors">
                  <Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-pink-300 dark:border-gray-700 text-center">
          <p className="flex items-center justify-center text-lg">
            Hecho con <Heart className="w-5 h-5 mx-2 text-red-500 animate-pulse" /> por {weddingConfig.brideAndGroom}
          </p>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;