import dynamic from 'next/dynamic';
import { weddingConfig } from '@/config/wedding-config';

const DynamicCountdownTimer = dynamic(() => import('@/components/CountdownTimer'), { ssr: false });

export default function CountdownSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-script text-center mb-8 sm:mb-12 text-pink-600 dark:text-pink-300 text-shadow-sm">Cuenta Regresiva</h2>
        <DynamicCountdownTimer targetDate={weddingConfig.date} />
      </div>
    </section>
  );
}