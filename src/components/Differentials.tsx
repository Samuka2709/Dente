import {
  Accessibility,
  Baby,
  CalendarCheck,
  Car,
  Clock,
  HeartHandshake,
  MapPin,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import { clinic, type IconName } from '../config/clinic';
import { Ph } from './Ph';
import { GoogleRatingBadge, ReviewsMarquee } from './ReviewsMarquee';

const icons: Record<IconName, LucideIcon> = {
  clock: Clock,
  'map-pin': MapPin,
  'shield-check': ShieldCheck,
  'heart-handshake': HeartHandshake,
  'calendar-check': CalendarCheck,
  accessibility: Accessibility,
  car: Car,
  scan: ScanLine,
  baby: Baby,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  smile: Smile,
};

export function Differentials() {
  return (
    <section aria-labelledby="diff-title" className="on-dark bg-green py-20 text-bg md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow" data-reveal>
              Avaliações
            </p>
            <h2 id="diff-title" className="h2 mt-4 text-bg" data-reveal>
              {clinic.content.differentialsTitle}
            </h2>
          </div>
          {clinic.googleRating && (
            <div id="depoimentos" className="scroll-mt-28" data-reveal>
              <GoogleRatingBadge />
            </div>
          )}
        </div>
        <ul
          className={`mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 ${
            clinic.differentials.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          }`}
          data-stagger
        >
          {clinic.differentials.map((d, i) => {
            const Icon = icons[d.icon] ?? Sparkles;
            return (
              <li key={i} data-card className="border-t border-bg/20 pt-6">
                <Icon aria-hidden size={26} strokeWidth={1.75} className="text-sand" />
                <h3 className="mt-5 text-[1.85rem] text-bg">
                  <Ph>{d.title}</Ph>
                </h3>
                <p className="mt-2 text-[1rem] text-sand">
                  <Ph>{d.text}</Ph>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <ReviewsMarquee />
    </section>
  );
}
