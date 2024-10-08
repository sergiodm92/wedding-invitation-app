"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Cronología', href: '#timeline' },
  { name: 'Ubicaciones', href: '#partyInfo' },
  { name: 'Regalos', href: '#gifts' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-3 md:px-16 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            <ul className={`md:flex md:space-x-6 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md p-4' : 'hidden md:flex'}`}>
              {navItems.map((item) => (
                <li key={item.name} className={isMenuOpen ? 'mb-2' : ''}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`text-lg font-medium transition-colors duration-200 text-gray-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-pink-500 dark:text-pink-300 font-bold'
                        : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}