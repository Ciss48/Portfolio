import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Certifications />
      <Awards />
      <Projects />
    </main>
  );
}

