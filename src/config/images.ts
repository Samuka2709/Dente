/**
 * IMAGENS — todas num lugar só.
 *
 * PROVISÓRIAS: as fotos com `provisional: true` são do Unsplash (licença livre) e
 * NÃO são da clínica. Troque pelas fotos reais antes de publicar.
 *
 * Para usar uma foto própria: coloque o arquivo em `public/fotos/` (WebP ou AVIF)
 * e troque `unsplash` por `src: '/fotos/nome.webp'`, mantendo `width`, `height` e `alt`.
 */

export type ImageSpec = {
  /** ID de foto do Unsplash (provisória) */
  unsplash?: string;
  /** Caminho de arquivo próprio em /public */
  src?: string;
  /** Proporção original do recorte que será exibido */
  width: number;
  height: number;
  alt: string;
  provisional: boolean;
};

export const images = {
  // PROVISÓRIA — consultório com parede de pedra e luz natural, paciente em atendimento
  hero: {
    unsplash: '1609207825181-52d3214556dd',
    width: 1200,
    height: 1100,
    alt: 'Consultório odontológico com parede de pedra, luz natural e paciente em atendimento',
    provisional: true,
  },
  // PROVISÓRIA — trocar por uma foto do profissional no consultório
  about: {
    unsplash: '1519710164239-da123dc03ef4',
    width: 1000,
    height: 1250,
    alt: 'Ambiente claro com mesa, cadeira e plantas',
    provisional: true,
  },
  /** Fotos das seções de destaque (Lentes, Implantes) — PROVISÓRIAS */
  highlights: {
    lentes: {
      unsplash: '1667133295315-820bb6481730',
      width: 1300,
      height: 1040,
      alt: 'Paciente sorrindo durante o atendimento odontológico',
      provisional: true,
    },
    implantes: {
      unsplash: '1600170311833-c2cf5280ce49',
      width: 1300,
      height: 1040,
      alt: 'Exame de imagem da arcada dentária em um tablet',
      provisional: true,
    },
  },
  gallery: [
    // PROVISÓRIA
    {
      unsplash: '1616391182219-e080b4d1043a',
      width: 1400,
      height: 1000,
      alt: 'Consultório com cadeira odontológica e bancada',
      provisional: true,
    },
    // PROVISÓRIA
    {
      unsplash: '1607613009820-a29f7bb81c04',
      width: 900,
      height: 1000,
      alt: 'Escovas de dente de bambu em um copo de vidro',
      provisional: true,
    },
    // PROVISÓRIA
    {
      unsplash: '1606265752439-1f18756aa5fc',
      width: 1000,
      height: 900,
      alt: 'Dentista com espelho e sonda odontológica',
      provisional: true,
    },
    // PROVISÓRIA
    {
      unsplash: '1588776814546-daab30f310ce',
      width: 900,
      height: 1100,
      alt: 'Dentista atendendo paciente na cadeira',
      provisional: true,
    },
    // PROVISÓRIA
    {
      unsplash: '1666214280557-f1b5022eb634',
      width: 1200,
      height: 850,
      alt: 'Dentistas analisando um exame na tela do computador',
      provisional: true,
    },
  ],
  /** Fotos da equipe: a chave é o valor de `photo` em clinic.team */
  team: {
    // PROVISÓRIAS — profissionais de exemplo
    p1: { unsplash: '1594824476967-48c8b964273f', width: 1000, height: 1250, alt: 'Profissional de exemplo', provisional: true },
    p2: { unsplash: '1612349317150-e413f6a5b16d', width: 1000, height: 1250, alt: 'Profissional de exemplo', provisional: true },
    p3: { unsplash: '1622253692010-333f2da6031d', width: 1000, height: 1250, alt: 'Profissional de exemplo', provisional: true },
  } as Record<string, ImageSpec>,
  /** Antes e depois: a chave é o valor de `before`/`after` em clinic.beforeAfter */
  beforeAfter: {} as Record<string, ImageSpec>,
  /** Imagem de compartilhamento (WhatsApp, redes). 1200x630. */
  og: {
    unsplash: '1609207825181-52d3214556dd',
    width: 1200,
    height: 630,
    alt: '',
    provisional: true,
  },
} satisfies Record<string, unknown>;
