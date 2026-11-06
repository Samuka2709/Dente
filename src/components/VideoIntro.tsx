import { Play } from 'lucide-react';
import { clinic } from '../config/clinic';
import { Ph } from './Ph';

/**
 * Vídeo de apresentação em formato vertical (9:16).
 * Sem vídeo configurado, mostra a área reservada. Com vídeo: player nativo,
 * sem autoplay e sem baixar nada até a pessoa apertar play (preload="none").
 */
export function VideoIntro() {
  const v = clinic.video;
  return (
    <section id="video" aria-labelledby="video-title" className="on-dark bg-green py-20 text-bg md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5 lg:col-start-2">
          <p className="eyebrow" data-reveal>
            Vídeo
          </p>
          <h2 id="video-title" className="h2 mt-4 text-bg" data-reveal>
            <Ph>{v.title}</Ph>
          </h2>
          <p className="mt-5 max-w-[40ch] text-sand" data-reveal>
            <Ph>{v.text}</Ph>
          </p>
        </div>

        <div className="lg:col-span-4 lg:col-start-8" data-reveal>
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[16rem] sm:max-w-[20rem] lg:max-w-[22rem] overflow-hidden rounded-[18px] bg-green-deep shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)] ring-1 ring-bg/15">
            {v.src ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={v.src}
                poster={v.poster ?? undefined}
                controls
                playsInline
                preload="none"
                aria-label={v.title}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-bg/30 text-bg">
                  <Play aria-hidden size={26} strokeWidth={1.75} className="translate-x-0.5" />
                </span>
                <span className="ph text-[0.9rem] text-bg">[VÍDEO DE APRESENTAÇÃO]</span>
                <span className="max-w-[24ch] text-sm text-sand">Espaço reservado para o vídeo do Dr. Leonardo.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
