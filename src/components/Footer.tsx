import { clinic } from '../config/clinic';
import { fullAddress, isPending, mapsUrl, navItems, phoneUrl, whatsappUrl } from '../lib/clinic-utils';
import { Clock, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { GoogleRatingBadge } from './ReviewsMarquee';
import { Ph } from './Ph';

export function Footer({ home = true }: { home?: boolean }) {
  const prefix = home ? '' : '/';
  const tel = phoneUrl();
  const telHref = tel.startsWith('#') ? `${prefix}${tel}` : tel;
  return (
    <footer className="on-dark overflow-hidden bg-green-deep pb-24 pt-16 text-sand md:pt-20 lg:pb-0">
      {/* A — chamada final */}
      <div className="container-x">
        <div className="flex flex-col gap-8 border-b border-bg/15 pb-14 md:pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Agende</p>
            <p className="mt-4 max-w-[16ch] font-serif text-[clamp(2.4rem,1.6rem+3vw,4rem)] leading-[1.05] text-bg">
              Vamos cuidar do seu sorriso?
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {clinic.testimonials.length > 0 && <GoogleRatingBadge />}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener"
              className="btn btn-light min-h-14 px-7 text-[1.05rem]"
            >
              <MessageCircle aria-hidden size={20} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-x mt-14 grid gap-12 md:grid-cols-12">
        {/* B — marca, horários e agendamento */}
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-4 max-w-[32ch] text-[0.95rem]">
            <Ph>{`${clinic.specialty} no ${clinic.neighborhood} de ${clinic.city}.`}</Ph>
          </p>
          <div className="mt-7 flex gap-3 text-[0.95rem]">
            <Clock aria-hidden size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-sand" />
            <dl className="grid gap-1">
              {clinic.hours.map((h, i) => (
                <div key={i} className="flex flex-wrap gap-x-2">
                  <dt className="text-bg">
                    <Ph>{h.label}</Ph>
                  </dt>
                  <dd>
                    <Ph>{h.time}</Ph>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-bg">Navegue</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-0 text-[0.95rem]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={`${prefix}${item.href}`} className="inline-flex min-h-11 items-center hover:text-bg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-bg">Contato</p>
          <ul className="mt-4 grid gap-1 text-[0.95rem]">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center hover:text-bg"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={telHref} className="inline-flex min-h-11 items-center hover:text-bg">
                <Ph>{clinic.phone}</Ph>
              </a>
            </li>
            <li>
              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center py-2 leading-snug hover:text-bg"
              >
                <span>
                  <Ph>{fullAddress()}</Ph>
                </span>
              </a>
            </li>
          </ul>
        </div>

        {clinic.social.length > 0 && (
          <div className="md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-bg">Redes</p>
            <ul className="mt-4 grid gap-1 text-[0.95rem]">
              {clinic.social.map((s) => (
                <li key={s.label}>
                  {isPending(s.url) ? (
                    <span className="inline-flex min-h-11 items-center">
                      {s.label}&nbsp;<Ph>{s.handle}</Ph>&nbsp;<Ph>{s.url}</Ph>
                    </span>
                  ) : (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex min-h-11 items-center hover:text-bg"
                    >
                      {s.label} <Ph>{s.handle}</Ph>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="container-x mt-14 flex flex-col gap-3 border-t border-bg/15 pt-8 text-[0.875rem] md:flex-row md:items-center md:justify-between">
        {clinic.demo && <p className="font-semibold text-bg">Modelo de demonstração — fotos ilustrativas.</p>}
        <p>
          Responsável técnico: <Ph>{clinic.responsible.name}</Ph> — <Ph>{clinic.responsible.cro}</Ph>
        </p>
        <p className="flex flex-wrap items-center gap-x-4">
          <a
            href="/privacidade/"
            className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-bg"
          >
            Política de privacidade
          </a>
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} <Ph>{clinic.name}</Ph>
          </span>
        </p>
      </div>

      {/* C — assinatura grande (decorativa) */}
      <div aria-hidden className="pointer-events-none mt-4 select-none md:mt-2 overflow-hidden">
        <p className="container-x translate-y-[18%] whitespace-nowrap font-serif text-[clamp(2rem,9.6vw,11rem)] leading-[0.9] text-bg/[0.07]">
          {clinic.name}
        </p>
      </div>
    </footer>
  );
}
