import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Home | Scalable Next.js App',
  description: 'Welcome to our modern, scalable Next.js application',
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}