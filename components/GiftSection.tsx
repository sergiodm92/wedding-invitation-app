"use client"

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, CopyIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const GiftSection = () => {
  const [showDetails, setShowDetails] = useState(false);
  const cbu = "0000000000000000000000";
  const alias = "BODA.ANA.JUAN";

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${type} copiado al portapapeles`);
    });
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-script text-center mb-12 text-pink-600 dark:text-pink-300 text-shadow-sm">
          Regalo de Bodas
        </h2>
        <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white dark:bg-gray-800">
          <CardContent className="p-8">
            <div className="flex flex-col items-center mb-8">
              <Gift className="w-20 h-20 text-pink-500 dark:text-pink-300 mb-4" />
              <p className="text-xl text-center text-gray-700 dark:text-gray-300 italic">
                &ldquo;Tu presencia es nuestro mejor regalo, pero si insistes...&rdquo;
              </p>
            </div>
            <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
              Si deseas contribuir a nuestro nuevo comienzo juntos, apreciamos cualquier aporte que quieras hacer.
              Hemos creado un fondo para nuestra luna de miel y nuestro futuro hogar.
            </p>
            <div className="flex justify-center mb-6">
              <Button 
                onClick={toggleDetails}
                className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white"
              >
                <span>{showDetails ? 'Ocultar detalles' : 'Ver detalles de la cuenta'}</span>
                {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 mt-6 overflow-hidden"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col sm:flex-row justify-between items-center p-4 bg-pink-50 dark:bg-gray-700 rounded-lg"
                  >
                    <span className="font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">CBU:</span>
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-600 dark:text-gray-400">{cbu}</span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => copyToClipboard(cbu, 'CBU')}
                      >
                        <CopyIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-between items-center p-4 bg-pink-50 dark:bg-gray-700 rounded-lg"
                  >
                    <span className="font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-0">Alias:</span>
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-600 dark:text-gray-400">{alias}</span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => copyToClipboard(alias, 'Alias')}
                      >
                        <CopyIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
              ¡Gracias por ser parte de nuestra historia y ayudarnos a crear recuerdos inolvidables!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GiftSection;