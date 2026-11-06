/**
 * DADOS DA CLÍNICA — fonte única de verdade.
 *
 * Trocar de clínica = editar só este arquivo (e as fotos em `images.ts`).
 * Nenhum componente tem nome, telefone, endereço ou texto da clínica escrito direto.
 *
 * Cliente: Dr. Leonardo Netto — Ilhéus, BA. Dados informados pelo cliente/Instagram/Google.
 * Pendências: campos entre colchetes, fotos reais e o WhatsApp oficial (veja `whatsapp`).
 *
 * Tudo o que está entre colchetes, como `[TELEFONE]`, é um MARCADOR PENDENTE:
 * aparece destacado no site até ser substituído pelo dado real.
 * Nunca preencha com dados inventados (profissionais, CRO, depoimentos, notas,
 * número de pacientes, anos de experiência, convênios ou resultados).
 */

export type IconName =
  | 'clock'
  | 'map-pin'
  | 'shield-check'
  | 'heart-handshake'
  | 'calendar-check'
  | 'accessibility'
  | 'car'
  | 'scan'
  | 'baby'
  | 'sparkles'
  | 'stethoscope'
  | 'smile';

export type Treatment = {
  id: string;
  name: string;
  /** Usada para agrupar quando houver mais de 6 tratamentos (ex.: Prevenção, Estética, Reabilitação, Ortodontia) */
  category: string;
  /** 1 a 2 frases no card */
  summary: string;
  /** Parágrafos do painel "Saiba mais" */
  details: string[];
};

export type Professional = {
  name: string;
  cro: string;
  specialty: string;
  bio: string;
  /** Chave em `images.team` ou null para mostrar o espaço da foto pendente */
  photo: string | null;
};

export type Testimonial = {
  text: string;
  author: string;
  /** Ex.: "Google", "Instagram" — obrigatório */
  source: string;
};

export type OpeningHours = {
  /** Texto exibido, ex.: "Segunda a sexta" */
  label: string;
  /** Texto exibido, ex.: "8h às 18h" */
  time: string;
  /** Para o Google (JSON-LD). Dias em inglês: Monday, Tuesday... Deixe [] enquanto pendente. */
  days: string[];
  /** "08:00" — formato 24h, para o JSON-LD */
  opens: string;
  closes: string;
};

export const clinic = {
  /** true = mostra o aviso "Modelo de demonstração" no rodapé. Troque para false ao publicar. */
  demo: true,

  name: 'Dr. Leonardo Netto',
  specialty: 'Odontologia',
  city: 'Ilhéus',
  neighborhood: 'Centro',
  state: 'BA',

  responsible: {
    name: 'Dr. Leonardo Netto',
    cro: 'CRO-BA [NÚMERO]',
  },

  /**
   * TESTE: por enquanto os botões usam o número do Samuel.
   * Para publicar, troque por: phone '(73) 99996-2912' e whatsapp '5573999962912' (WhatsApp do consultório).
   */
  phone: '(73) 99825-8544',
  whatsapp: '5573998258544',
  whatsappMessage: 'Olá, vim pelo site e gostaria de agendar uma avaliação.',

  address: {
    street: 'Praça Rui Barbosa, 185', // Google Maps diz 185; o Instagram diz 184 — confirmar
    complement: '1º andar',
    neighborhood: 'Centro',
    city: 'Ilhéus',
    state: 'BA',
    zip: '45653-340',
  },
  /** Link do perfil no Google Maps (informado pelo cliente) */
  mapsUrl: 'https://maps.app.goo.gl/qttGs9PhnpCaHEFD6',
  /** Coordenadas do perfil no Google Maps — usadas no mapa incorporado */
  geo: { lat: -14.7963921, lng: -39.0325573 },

  hours: [
    {
      label: 'Segunda a sexta',
      time: '8h às 18h',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    { label: 'Sábado', time: '8h às 12h', days: ['Saturday'], opens: '08:00', closes: '12:00' },
  ] as OpeningHours[],

  social: [{ label: 'Instagram', handle: '@dr_leonardonetto', url: 'https://www.instagram.com/dr_leonardonetto/' }],

  insurance: '[CONVÊNIOS ACEITOS OU "PARTICULAR"]',

  logo: null as string | null,
  audience: 'Adultos de Ilhéus e região',
  tone: 'acolhedor e sofisticado',
  siteUrl: 'https://leonardonetto-odonto.vercel.app',
  privacyEmail: '[E-MAIL PARA PRIVACIDADE]',

  /** Menu: segue os destaques do Instagram do consultório */
  nav: [
    { href: '#sobre', label: 'Sobre' },
    { href: '#tratamentos', label: 'Tratamentos' },
    { href: '#lentes', label: 'Lentes' },
    { href: '#implantes', label: 'Implantes' },
    { href: '#consultorio', label: 'Consultório' },
    { href: '#duvidas', label: 'Dúvidas' },
    { href: '#como-chegar', label: 'Como chegar' },
  ],

  /* Serviços divulgados pelo consultório (Instagram e perfil do Google) */
  treatments: [
    {
      id: 'implante-protese',
      name: 'Implante e prótese',
      category: 'Reabilitação',
      summary: 'Reposição de dentes perdidos com implantes e próteses, planejada a partir de exames.',
      details: [
        'O implante substitui a raiz do dente perdido; a prótese devolve a parte visível e a mastigação.',
        'O planejamento e o tempo de tratamento dependem de cada caso e são explicados na avaliação.',
      ],
    },
    {
      id: 'canal',
      name: 'Tratamento de canal',
      category: 'Endodontia',
      summary: 'Tratamento endodôntico para aliviar a dor e preservar o dente natural.',
      details: [
        'Indicado quando a polpa do dente está inflamada ou infectada.',
        'Feito com anestesia local. Em caso de dor, fale com o consultório pelo WhatsApp.',
      ],
    },
    {
      id: 'clareamento',
      name: 'Clareamento dental',
      category: 'Estética',
      summary: 'Clareamento dos dentes com acompanhamento profissional, após avaliação.',
      details: [
        'Antes de clarear, o dentista verifica se há cáries, restaurações ou sensibilidade que precisem de cuidado.',
        'O resultado varia de pessoa para pessoa.',
      ],
    },
    {
      id: 'lentes-de-contato',
      name: 'Lentes de contato dental',
      category: 'Estética',
      summary: 'Lâminas finas que ajustam cor, forma e tamanho dos dentes.',
      details: [
        'O planejamento começa pela avaliação e pelo estudo do sorriso.',
        'Nem todo caso é indicado para lentes: isso é definido na consulta.',
      ],
    },
    {
      id: 'resinas',
      name: 'Restaurações em resina',
      category: 'Dentística',
      summary: 'Restaurações e ajustes estéticos com resina da cor do dente.',
      details: ['Usadas para tratar cáries, fechar pequenos espaços e corrigir fraturas.'],
    },
  ] as Treatment[],

  /* Destaques com seção própria (destaques do Instagram) */
  highlights: [
    {
      id: 'lentes',
      eyebrow: 'Lentes de contato dental',
      title: 'Lentes planejadas para o seu sorriso',
      text: [
        'As lentes de contato dental são lâminas finas, coladas sobre a frente dos dentes, que ajustam cor, forma e proporção.',
        'Tudo começa pela avaliação: o Dr. Leonardo examina os dentes e a gengiva e explica se as lentes são indicadas no seu caso.',
      ],
      image: 'lentes',
      interest: 'lentes de contato dental',
    },
    {
      id: 'implantes',
      eyebrow: 'Implante e prótese',
      title: 'Voltar a mastigar e sorrir com segurança',
      text: [
        'O implante substitui a raiz do dente perdido e recebe a prótese, que devolve a parte visível e a mastigação.',
        'O planejamento é feito a partir de exames de imagem, e cada etapa é explicada antes de começar.',
      ],
      image: 'implantes',
      interest: 'implante e prótese',
    },
  ],

  differentials: [
    {
      icon: 'sparkles',
      title: 'Estética e reabilitação',
      text: 'Do tratamento de canal às lentes de contato, no mesmo consultório.',
    },
    {
      icon: 'heart-handshake',
      title: 'Agende pelo WhatsApp',
      text: 'Fale direto com o consultório para marcar seu horário.',
    },
    {
      icon: 'map-pin',
      title: 'Em Ilhéus',
      text: 'Consultório com localização no Google Maps para facilitar a chegada.',
    },
  ] as { icon: IconName; title: string; text: string }[],

  team: [
    {
      name: 'Dr. Leonardo Netto',
      cro: 'CRO-BA [NÚMERO]',
      specialty: 'Cirurgião-dentista',
      bio: 'Implantes e próteses, tratamento de canal, clareamento e lentes de contato dental.',
      photo: null,
    },
  ] as Professional[],

  /**
   * Vídeo de apresentação (formato vertical, como os Reels do Instagram).
   * src null = mostra só a área reservada. Com autorização do Dr. Leonardo, salve o
   * arquivo em public/video/ (MP4) e preencha src e poster, ex.: '/video/apresentacao.mp4'.
   */
  video: {
    src: null as string | null,
    poster: null as string | null,
    title: 'Conheça o Dr. Leonardo',
    text: 'Um pouco sobre o consultório e a forma de atender, contado pelo próprio Dr. Leonardo.',
  },

  /**
   * Avaliações do perfil no Google (transcritas dos prints, sem emojis; nome abreviado).
   * Publicar só com autorização do Dr. Leonardo.
   */
  googleRating: { score: '5,0', count: 23, url: 'https://maps.app.goo.gl/qttGs9PhnpCaHEFD6' },
  testimonials: [
    {
      author: 'Will T.',
      source: 'Google',
      text: 'Excelente profissional! Atendimento de qualidade, muito atencioso e transmite confiança em cada detalhe. Ambiente organizado e serviço impecável. Recomendo demais o trabalho do Dr. Leonardo Neto!',
    },
    {
      author: 'Leticia L.',
      source: 'Google',
      text: 'Precisei fazer canal e o Dr. Leonardo foi incrível. Profissional super humano, me deixou tranquilo do início ao fim. Não senti dor nenhuma. O consultório é moderno, tecnológico e o serviço é de ótima qualidade. Super recomendo!!!!',
    },
    {
      author: 'Amanda C.',
      source: 'Google',
      text: 'Dr. Leonardo é excelente. Atendimento de qualidade, profissional atencioso e serviço impecável. Superou minhas expectativas!',
    },
    {
      author: 'Luizinho',
      source: 'Google',
      text: 'Meu pai fez a prótese com o Dr. Leonardo. Ele tinha receio do procedimento, mas o Dr. foi extremamente atencioso e cuidadoso com ele. Não poderia ter escolhido profissional melhor.',
    },
    {
      author: 'Camila K.',
      source: 'Google',
      text: 'Fiz um implante unitário com o Dr. Leonardo e foi tudo impecável. Ambiente moderno, tecnológico e muito confortável. Atendimento de qualidade do início ao fim. Profissional excelente, recomendo de olhos fechados.',
    },
    {
      author: 'Chrys C.',
      source: 'Google',
      text: 'Excelente profissional, trabalho impecável e atendimento top. Super recomendo de olhos fechados.',
    },
    {
      author: 'Jhenefhen O.',
      source: 'Google',
      text: 'Ótimo profissional Dr Leonardo, me deixou super confiante e com um sorriso lindo. Indico demais!',
    },
    {
      author: 'Diogo B.',
      source: 'Google',
      text: 'Melhor consultório odontológico da região! Mesmo morando em Itabuna, só vou nele pelo profissionalismo, qualidade e dedicação.',
    },
    {
      author: 'Daniel M.',
      source: 'Google',
      text: 'Excelente profissional, fiquei muito feliz com o resultado do atendimento!! Super recomendo!!!!!',
    },
    {
      author: 'Bruno L.',
      source: 'Google',
      text: 'Excelente profissional!! Atencioso e muito dedicado!! Super recomendo!!',
    },
    { author: 'Ingred N.', source: 'Google', text: 'Atendimento excelente! Melhor profissional.' },
    { author: 'Thierry V.', source: 'Google', text: 'Excelente profissional, gostei muito do atendimento.' },
    {
      author: 'Tatiana V.',
      source: 'Google',
      text: 'Excelente atendimento, profissional da mais alta qualidade. Recomendo demais!',
    },
    { author: 'Karol T.', source: 'Google', text: 'Atendimento maravilhoso, doutor super atencioso!!' },
    { author: 'Carlas A.', source: 'Google', text: 'Uma ótima experiência, doutor Leonardo é excelente profissional.' },
    { author: 'Marli M.', source: 'Google', text: 'Atendimento de qualidade, excelente profissional!' },
    {
      author: 'Rafael L.',
      source: 'Google',
      text: 'Excelente profissional! Atendimento, tecnologia e profissionalismo!!!!!',
    },
    {
      author: 'Achilles A.',
      source: 'Google',
      text: 'Super indico, atendimento humanizado e me senti muito confortável com o atendimento de Dr. Leonardo.',
    },
    { author: 'Adriane S.', source: 'Google', text: 'O melhor da região! Atendimento sem igual.' },
    { author: 'Carolina N.', source: 'Google', text: 'Profissional maravilhoso!!!!' },
    { author: 'Marcel C.', source: 'Google', text: 'Excelente profissional!' },
    // Avaliações só com estrelas, sem comentário
    { author: 'Nilla C.', source: 'Google', text: '' },
    { author: 'Rafael R.', source: 'Google', text: '' },
  ] as Testimonial[],

  hasBeforeAfter: false,
  beforeAfter: [] as { treatment: string; before: string; after: string }[],

  content: {
    heroEyebrow: 'Dentista em Ilhéus · BA',
    heroTitle: 'Implantes, lentes e canal em Ilhéus',
    heroSubtitle: 'Consultório do Dr. Leonardo Netto, cirurgião-dentista.',

    aboutEyebrow: 'Sobre o Dr. Leonardo',
    aboutTitle: 'Atendimento próximo, do diagnóstico ao resultado',
    aboutParagraphs: [
      'O Dr. Leonardo Netto é cirurgião-dentista em Ilhéus, na Bahia. No consultório, atende implantes e próteses, tratamento de canal, clareamento, restaurações em resina e lentes de contato dental.',
      'Tudo começa pela avaliação: é o momento de examinar, conversar sobre o que incomoda e entender as opções de tratamento.',
      '[FORMAÇÃO E TRAJETÓRIA DO DR. LEONARDO — A CONFIRMAR COM ELE]',
    ],

    treatmentsTitle: 'Tratamentos',
    treatmentsIntro: 'O que o consultório oferece. Toque em um tratamento para ver os detalhes.',
    differentialsTitle: 'Atendimento que se recomenda',
    teamTitle: 'Quem vai atender você',
    galleryTitle: 'O consultório',

    faqTitle: 'Dúvidas frequentes',
    faq: [
      {
        q: 'Vocês atendem convênio?',
        a: '[RESPOSTA A CONFIRMAR PELO CONSULTÓRIO: convênios aceitos ou "atendimento particular".]',
      },
      {
        q: 'Quais são as formas de pagamento?',
        a: '[RESPOSTA A CONFIRMAR PELO CONSULTÓRIO: formas e condições de pagamento.]',
      },
      {
        q: 'Estou com dor. Vocês atendem urgência?',
        a: 'Fale com o consultório pelo WhatsApp e explique o que está sentindo. [CONFIRMAR COMO FUNCIONAM OS ENCAIXES.]',
      },
      {
        q: 'Quem é candidato a lentes de contato dental?',
        a: 'Depende da saúde dos dentes e da gengiva e do resultado que você procura. A indicação é feita na avaliação.',
      },
      {
        q: 'Como faço para agendar?',
        a: 'Pelo WhatsApp ou pelo formulário no fim desta página. O consultório responde para confirmar dia e horário.',
      },
    ],

    contactEyebrow: 'Agende',
    contactTitle: 'Agende sua avaliação',
    contactIntro: 'Fale com o consultório pelo WhatsApp ou deixe seus dados que entramos em contato.',
    formTimes: ['Manhã', 'Tarde', 'Qualquer horário'],
    formReasons: [
      'Avaliação',
      'Dor ou incômodo',
      'Implante e prótese',
      'Tratamento de canal',
      'Clareamento',
      'Lentes de contato dental',
      'Restaurações em resina',
      'Outro assunto',
    ],
  },
};

export type Clinic = typeof clinic;
