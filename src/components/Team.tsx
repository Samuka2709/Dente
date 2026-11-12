import { MessageCircle, UserRound } from 'lucide-react';
import { whatsappUrl } from '../lib/clinic-utils';
import { clinic } from '../config/clinic';
import { images } from '../config/images';
import { Img } from './Img';
import { Ph } from './Ph';

function Solo() {
  const p = clinic.team[0];
  const photo = p.photo ? images.team[p.photo] : undefined;
  return (
    <section id="equipe" aria-labelledby="team-title" className="bg-sand-soft py-20 md:py-28">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div data-mask className="overflow-hidden rounded-[14px] bg-sand">
            {photo ? (
              <Img
                image={photo}
                widths={[480, 640, 900, 1200]}
                sizes="(min-width: 1024px) 38vw, calc(100vw - 2.5rem)"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center text-green/70">
                <UserRound aria-hidden size={56} strokeWidth={1.75} />
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow" data-reveal>
            {clinic.content.teamTitle}
          </p>
          <h2 id="team-title" className="h2 mt-4" data-reveal>
            <Ph>{p.name}</Ph>
          </h2>
          <p className="mt-3 font-semibold text-green" data-reveal>
            <Ph>{p.specialty}</Ph> · <Ph>{p.cro}</Ph>
          </p>
          <p className="mt-6 text-[1.05rem] text-ink/90" data-reveal>
            <Ph>{p.bio}</Ph>
          </p>
          <ul className="mt-8 grid gap-4 border-t border-taupe/50 pt-6 sm:grid-cols-3" data-reveal>
            {['Avaliação sem pressa', 'Cada etapa explicada', 'Acompanhamento após o tratamento'].map((t) => (
              <li key={t} className="text-[0.95rem] text-ink/90">
                <span className="mb-2 block h-px w-6 bg-green" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10" data-reveal>
            <a href={whatsappUrl()} target="_blank" rel="noopener" className="btn btn-primary">
              <MessageCircle aria-hidden size={19} />
              Agendar uma avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  if (clinic.team.length === 1) return <Solo />;
  return (
    <section id="equipe" aria-labelledby="team-title" className="bg-sand-soft py-20 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow" data-reveal>
            Equipe
          </p>
          <h2 id="team-title" className="h2 mt-4" data-reveal>
            {clinic.content.teamTitle}
          </h2>
        </div>

        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {clinic.team.map((p, i) => {
            const photo = p.photo ? images.team[p.photo] : undefined;
            return (
              <li key={i} data-card>
                <div className="overflow-hidden rounded-[14px] bg-sand">
                  {photo ? (
                    <Img
                      image={photo}
                      widths={[400, 640, 900]}
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                      className="aspect-[4/5] h-auto w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 text-green/70">
                      <UserRound aria-hidden size={48} strokeWidth={1.75} />
                      <span className="ph text-sm text-ink">[FOTO DO PROFISSIONAL]</span>
                    </div>
                  )}
                </div>
                <h3 className="mt-6 text-[1.9rem]">
                  <Ph>{p.name}</Ph>
                </h3>
                <p className="mt-1 text-[0.95rem] font-semibold text-green">
                  <Ph>{p.specialty}</Ph> · <Ph>{p.cro}</Ph>
                </p>
                <p className="mt-3 text-[1rem] text-muted">
                  <Ph>{p.bio}</Ph>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
