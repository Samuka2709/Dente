import { useEffect } from 'react';
import { About } from './components/About';
import { BeforeAfter } from './components/BeforeAfter';
import { Contact } from './components/Contact';
import { Differentials } from './components/Differentials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { clinic } from './config/clinic';
import { MobileCtaBar } from './components/MobileCtaBar';
import { Team } from './components/Team';
import { Treatments } from './components/Treatments';
import { VideoIntro } from './components/VideoIntro';
import { pendingMarkers, showBeforeAfter } from './lib/clinic-utils';
import { useAnimations } from './lib/useAnimations';

export default function App() {
  const scope = useAnimations();

  useEffect(() => {
    if (import.meta.env.DEV) {
      const pending = [...pendingMarkers()];
      if (pending.length) console.info(`Marcadores pendentes em src/config/clinic.ts (${pending.length}):`, pending);
    }
  }, []);

  return (
    <div ref={scope}>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <VideoIntro />
        <Treatments />
        <Highlights />
        <Differentials />
        {/* Sem antes/depois autorizado, a posição vira a galeria (e a galeria não se repete adiante) */}
        {showBeforeAfter ? <BeforeAfter /> : <Gallery />}
        {/* Com um só profissional, a seção "Sobre" já o apresenta */}
        {clinic.team.length > 0 && <Team />}
        {showBeforeAfter && <Gallery />}
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
