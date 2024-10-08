import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import LoginForm from '@/components/login/LoginForm'
import { weddingConfig } from '@/config/wedding-config';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-300 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-12">
            <h1 className="text-3xl md:text-5xl font-script mb-4 md:mb-6 text-center md:text-left text-pink-600 dark:text-pink-300">
              Bienvenidos a nuestra Boda
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 text-center md:text-left">
              Únete a nosotros en este día especial y sé parte de nuestra historia de amor.
            </p>
            <div className="space-y-6">
              <LoginForm />
              <div className="text-center md:text-left">
                <p className="mb-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
                  ¿Quieres ver la invitación sin iniciar sesión?
                </p>
                <Button asChild className="w-full md:w-auto" variant="outline">
                  <Link href="/invitation">Ver Invitación</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Pareja de novios"
              layout="fill"
              objectFit="cover"
              className="rounded-b-3xl md:rounded-r-3xl md:rounded-l-none"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white text-center z-20">
              <p className="text-2xl md:text-3xl font-script mb-2">{weddingConfig.brideAndGroom}</p>
              <p className="text-base md:text-lg">{weddingConfig.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
