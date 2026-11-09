import { ArrowRight, MessageCircle } from 'lucide-react';
import { clinic } from '../config/clinic';
import { images } from '../config/images';
import { whatsappUrl } from '../lib/clinic-utils';
import { Img } from './Img';
import { Ph } from './Ph';

/**
 * Destaques com seção própria (Lentes, Implantes), seguindo os destaques do Instagram.
 * Foto e texto alternam de lado; no celular, a foto vem primeiro.
 */
export function Highlights() {
  return (
    <>
      {clinic.highlights.map((h, i) => {
        const image = images.highlights[h.image as keyof typeof images.highlights];
        const flip = i % 2 === 1;
        return (
          <section
            key={h.id}
            id={h.id}
            aria-labelledby={`${h.id}-title`}
            className={`py-20 md:py-28 ${flip ? 'bg-sand-soft' : ''}`}
          >
            <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
              <div className={`lg:col-span-6 ${flip ? 'lg:order-2 lg:col-start-7' : ''}`}>
                <div data-mask className="overflow-hidden rounded-[14px]">
                  <Img
                    image={image}
                    widths={[480, 640, 800, 1000, 1300]}
                    sizes="(min-width: 1024px) 46vw, calc(100vw - 2.5rem)"
                    data-parallax
                    className="aspect-[5/4] h-auto w-full scale-[1.1] object-cover"
                  />
                </div>
              </div>
              <div className={`lg:col-span-5 ${flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8'}`}>
                <p className="eyebrow" data-reveal>
                  {h.eyebrow}
                </p>
                <h2 id={`${h.id}-title`} className="h2 mt-4" data-reveal>
                  <Ph>{h.title}</Ph>
                </h2>
                <div className="mt-6 space-y-4 text-ink/90">
                  {h.text.map((t, j) => (
                    <p key={j} data-reveal>
                      <Ph>{t}</Ph>
                    </p>
                  ))}
                </div>
                {h.steps && (
                  <ol className="mt-8 grid gap-3 border-t border-taupe/50 pt-6" data-reveal aria-label="Como funciona">
                    {h.steps.map((step, j) => (
                      <li key={j} className="flex items-baseline gap-4">
                        <span className="font-serif text-[1.35rem] leading-none text-green-deep [font-variant-numeric:lining-nums_tabular-nums]" aria-hidden>
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span className="text-ink/90">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
                  <a
                    href={whatsappUrl(`${clinic.whatsappGreeting} Tenho interesse em ${h.interest} e gostaria de agendar uma avaliação.`)}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-primary"
                  >
                    <MessageCircle aria-hidden size={19} />
                    Agende sua avaliação
                  </a>
                  <a href="#duvidas" className="btn btn-ghost">
                    Tirar dúvidas
                    <ArrowRight aria-hidden size={17} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
