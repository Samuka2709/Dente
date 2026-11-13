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
    { unsplash: '1629909613654-28e377c37b09', width: 1400, height: 1000, alt: 'Sala de atendimento clara com cadeira odontológica', provisional: true },
    // PROVISÓRIA
    { unsplash: '1629909615184-74f495363b67', width: 1000, height: 1000, alt: 'Consultório amplo com cadeira e equipamentos', provisional: true },
    // PROVISÓRIA
    { unsplash: '1598256989800-fe5f95da9787', width: 1000, height: 1000, alt: 'Sala de atendimento com cadeira odontológica', provisional: true },
    // PROVISÓRIA
    { unsplash: '1606811841689-23dfddce3e95', width: 1000, height: 1000, alt: 'Dentista explicando um exame para a paciente', provisional: true },
    // PROVISÓRIA
    { unsplash: '1593022356769-11f762e25ed9', width: 1000, height: 1000, alt: 'Modelo de dentes com implante', provisional: true },
  ],
  /** Capa da área do vídeo enquanto não há vídeo — PROVISÓRIA */
  videoPoster: { unsplash: '1588776814546-daab30f310ce', width: 900, height: 1600, alt: 'Dentista atendendo paciente', provisional: true } as ImageSpec,
  /** Fotos da equipe: a chave é o valor de `photo` em clinic.team */
  team: {
    // PROVISÓRIAS — profissionais de exemplo
    p1: { unsplash: '1606265752439-1f18756aa5fc', width: 1000, height: 1250, alt: 'Profissional de exemplo', provisional: true },
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
