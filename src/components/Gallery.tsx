import { clinic } from '../config/clinic';
import { images } from '../config/images';
import { Img } from './Img';

/**
 * Uma foto grande e quatro menores alinhadas.
 * Celular: 2 colunas (a primeira ocupa a largura toda). Desktop: grande à esquerda, 2×2 à direita.
 */
const layout = [
  'col-span-2 aspect-[4/3] lg:col-span-6 lg:row-span-2 lg:aspect-auto lg:h-full',
  'aspect-[4/5] lg:col-span-3 lg:aspect-auto lg:h-[17rem]',
  'aspect-[4/5] lg:col-span-3 lg:aspect-auto lg:h-[17rem]',
  'aspect-[4/5] lg:col-span-3 lg:aspect-auto lg:h-[17rem]',
  'aspect-[4/5] lg:col-span-3 lg:aspect-auto lg:h-[17rem]',
];

export function Gallery() {
  const photos = images.gallery.slice(0, 5);
  return (
    <section id="consultorio" aria-labelledby="gallery-title" className="py-20 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow" data-reveal>
            Galeria
          </p>
          <h2 id="gallery-title" className="h2 mt-4" data-reveal>
            {clinic.content.galleryTitle}
          </h2>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-12 ">
          {photos.map((img, i) => (
            <li
              key={i}
              data-gallery-item
              className={`group overflow-hidden rounded-[14px] bg-sand ${layout[i] ?? 'aspect-[4/5]'}`}
            >
              <Img
                image={img}
                widths={[400, 700, 1000, 1400]}
                sizes={i === 0 ? '(min-width: 1024px) 48vw, 100vw' : '(min-width: 1024px) 24vw, 50vw'}
                data-parallax
                className="h-full w-full scale-[1.12] object-cover transition-[scale] duration-700 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.18]"
              />
            </li>
          ))}
        </ul>
        {images.gallery.some((g) => g.provisional) && <p className="mt-6 text-sm text-muted">Imagens ilustrativas.</p>}
      </div>
    </section>
  );
}
