import { clinic } from '../config/clinic';
import { Ph } from './Ph';

/** Logo em arquivo (clinic.logo) ou nome da clínica em texto */
export function Logo({ light = false }: { light?: boolean }) {
  if (clinic.logo) {
    return <img src={clinic.logo} alt={clinic.name} width={160} height={40} className="h-9 w-auto" />;
  }
  const initials = clinic.name
    .split(/\s+/)
    .filter((w) => /^[A-ZÀ-Ú]/.test(w) && !/^(Dr|Dra)\.?$/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden
        className={`flex h-10 w-10 items-center justify-center rounded-full border font-serif text-[1.05rem] font-medium tracking-wide ${
          light ? 'border-bg/40 text-bg' : 'border-green/40 text-green'
        }`}
      >
        {initials}
      </span>
    <span
      className={`font-serif text-[1.5rem] font-medium leading-none tracking-tight md:text-[1.75rem] ${
        light ? 'text-bg' : 'text-green'
      }`}
    >
      <Ph>{clinic.name}</Ph>
    </span>
    </span>
  );
}
