import { ArrowUpRight, Star } from 'lucide-react';
import { clinic } from '../config/clinic';

function Stars({ size = 15 }: { size?: number }) {
  return (
    <span className="flex gap-0.5 text-sand" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} strokeWidth={0} fill="currentColor" />
      ))}
    </span>
  );
}

/** Selo com a nota do Google (dados do perfil, atualizar quando mudar) */
export function GoogleRatingBadge() {
  const r = clinic.googleRating;
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener"
      className="group inline-flex items-center gap-4 rounded-[14px] border border-bg/20 px-5 py-4 transition-colors hover:border-bg/40"
    >
      <span className="font-serif text-[3rem] leading-none text-bg">{r.score}</span>
      <span className="flex flex-col gap-1.5">
        <Stars size={16} />
        <span className="flex items-center gap-1 text-[0.9rem] text-sand">
          {r.count} avaliações no Google
          <ArrowUpRight
            aria-hidden
            size={16}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </a>
  );
}

/**
 * Letreiro de avaliações: faixa contínua que pausa no hover/foco.
 * A lista é duplicada para o loop sem emenda; a cópia fica oculta para leitores de tela.
 * Com movimento reduzido, vira uma faixa parada com rolagem manual.
 */
export function ReviewsMarquee() {
  const reviews = clinic.testimonials;
  if (!clinic.showTestimonials || reviews.length === 0) return null;

  const card = (t: (typeof reviews)[number], i: number) => (
    <li
      key={i}
      className="flex w-[19rem] shrink-0 flex-col justify-between rounded-[14px] bg-green-deep/70 p-6 ring-1 ring-bg/10 sm:w-[22rem]"
    >
      <figure className="flex h-full flex-col">
        <Stars />
        {t.text ? (
          <blockquote className="mt-4 text-[0.98rem] leading-relaxed text-bg/90">“{t.text}”</blockquote>
        ) : (
          <p className="mt-4 font-serif text-[1.6rem] leading-snug text-bg/90">Avaliou com 5 estrelas.</p>
        )}
        <figcaption className="mt-5 text-[0.88rem]">
          <span className="font-semibold text-bg">{t.author}</span>
          <span className="text-sand"> · via {t.source}</span>
        </figcaption>
      </figure>
    </li>
  );

  return (
    <div className="marquee mt-16" aria-label="Avaliações de pacientes no Google">
      <div className="marquee-track">
        <ul className="marquee-list" aria-label="Avaliações">
          {reviews.map(card)}
        </ul>
        <ul className="marquee-list" aria-hidden="true">
          {reviews.map(card)}
        </ul>
      </div>
    </div>
  );
}
