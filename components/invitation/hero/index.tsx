import Image from 'next/image';
import { weddingConfig } from '@/config/wedding-config';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Image
        src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Fondo de boda"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="z-10 max-w-4xl px-4">
        <h1 className="text-6xl font-script mb-4 text-shadow-lg">{weddingConfig.brideAndGroom}</h1>
        <p className="text-2xl mb-8 text-shadow-md">Te invitan a celebrar su boda</p>
        <div className="relative bg-black bg-opacity-50 rounded-lg p-6">
          <div className="absolute -left-2 -top-2 w-8 h-8 border-l-2 border-t-2 border-white opacity-70"></div>
          <div className="absolute -right-2 -bottom-2 w-8 h-8 border-r-2 border-b-2 border-white opacity-70"></div>
          <p className="text-xl italic font-light">
            &ldquo;Todos somos mortales, hasta el primer beso y la segunda copa de vino&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}