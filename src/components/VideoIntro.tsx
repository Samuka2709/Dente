import { Play } from 'lucide-react';
import { clinic } from '../config/clinic';
import { Ph } from './Ph';
import { Img } from './Img';
import { images } from '../config/images';

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
              <>
                <Img
                  image={images.videoPoster}
                  widths={[360, 540, 720]}
                  sizes="22rem"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-18 w-18 items-center justify-center rounded-full bg-bg/90 text-green shadow-lg">
                    <Play aria-hidden size={28} strokeWidth={0} fill="currentColor" className="translate-x-0.5" />
                  </span>
                </div>
                <p className="absolute inset-x-0 bottom-0 p-6 text-sm text-bg/90">Vídeo de apresentação · em breve</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
