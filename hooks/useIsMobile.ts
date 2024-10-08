import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Puedes ajustar el ancho de acuerdo a tus necesidades
    };

    // Inicialmente verificar el tamaño de la pantalla
    handleResize();

    // Agregar el evento listener para cambios de tamaño
    window.addEventListener('resize', handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;