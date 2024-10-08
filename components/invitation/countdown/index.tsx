"use client"
import { weddingConfig } from '@/config/wedding-config';
import CountdownTimer from './CountdownTimer'


export function CountdownSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-bg1">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-script text-center mb-8 sm:mb-12 text-pink-600 dark:text-pink-300 text-shadow-sm">Cuenta Regresiva</h2>
        <CountdownTimer targetDate={weddingConfig.date} />
      </div>
    </section>
  );
}