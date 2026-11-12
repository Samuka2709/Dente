/**
 * DADOS DA CLÍNICA — fonte única de verdade.
 *
 * Trocar de clínica = editar só este arquivo (e as fotos em `images.ts`).
 * Nenhum componente tem nome, telefone, endereço ou texto da clínica escrito direto.
 *
 * MODELO DE DEMONSTRAÇÃO: clínica fictícia, para apresentar a novos clientes.
 * Para um cliente real, troque todos os dados abaixo e as fotos em `images.ts`.
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

  name: 'Odonto Modelo',
  specialty: 'Odontologia',
  city: 'Sua Cidade',
  neighborhood: 'Centro',
  state: 'BA',

  responsible: {
    name: 'Dra. Nome do Profissional',
    cro: 'CRO-UF [NÚMERO]',
  },

  /** Demonstração: os botões usam o WhatsApp do Samuel. */
  phone: '(73) 99825-8544',
  whatsapp: '5573998258544',
  whatsappGreeting: 'Olá! Tudo bem?',
  whatsappMessage: 'Olá! Tudo bem? Gostaria de agendar uma avaliação.',

  address: {
    street: 'Rua Exemplo, 100',
    complement: 'Sala 1',
    neighborhood: 'Centro',
    city: 'Sua Cidade',
    state: 'UF',
    zip: '00000-000',
  },
  mapsUrl: 'https://www.google.com/maps',
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

  social: [{ label: 'Instagram', handle: '@suaclinica', url: 'https://www.instagram.com/' }],

  insurance: '[CONVÊNIOS ACEITOS OU "PARTICULAR"]',

  logo: null as string | null,
  audience: 'Adultos da cidade e região',
  tone: 'acolhedor e sofisticado',
  siteUrl: 'https://example.com',
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
        'Tudo começa pela avaliação: o dentista examina os dentes e a gengiva e explica se as lentes são indicadas no seu caso.',
      ],
      steps: ['Avaliação dos dentes e da gengiva', 'Planejamento de cor, forma e proporção', 'Preparo e cimentação das lentes'],
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
      steps: ['Avaliação clínica e exames de imagem', 'Instalação do implante', 'Prótese e acompanhamento'],
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
      title: 'Fácil de chegar',
      text: 'Consultório com localização no Google Maps para facilitar a chegada.',
    },
  ] as { icon: IconName; title: string; text: string }[],

  team: [
    {
      name: 'Dra. Nome do Profissional',
      cro: 'CRO-UF [NÚMERO]',
      specialty: 'Cirurgião-dentista',
      bio: 'Implantes e próteses, tratamento de canal, clareamento e lentes de contato dental.',
      photo: null,
    },
  ] as Professional[],

  /**
   * Vídeo de apresentação (formato vertical, como os Reels do Instagram).
   * src null = mostra só a área reservada. Salve o
   * arquivo em public/video/ (MP4) e preencha src e poster, ex.: '/video/apresentacao.mp4'.
   */
  video: {
    src: null as string | null,
    poster: null as string | null,
    title: 'Conheça o consultório',
    text: 'Um pouco sobre o consultório e a forma de atender, contado pelo próprio dentista.',
  },

  /** null = não mostra nota do Google (no modelo não há nota real). */
  googleRating: null as null | { score: string; count: number; url: string },
  /** Mostrar os depoimentos no site. Só ativar com autorização dos pacientes (LGPD/CFO). */
  showTestimonials: false,
  /** Enquanto não houver autorização, o letreiro mostra só os textos de EXEMPLO abaixo (fictícios, sinalizados no site). */
  testimonialsAreExamples: true,
  exampleTestimonials: [
    { text: 'Texto de exemplo: aqui entra a avaliação de um paciente, publicada somente com a autorização dele.', author: 'Paciente de exemplo', source: '' },
    { text: 'Texto de exemplo: o paciente conta como foi o atendimento e a explicação de cada etapa do tratamento.', author: 'Paciente de exemplo', source: '' },
    { text: 'Texto de exemplo: comentário sobre a recepção, o ambiente do consultório e a facilidade para agendar.', author: 'Paciente de exemplo', source: '' },
    { text: 'Texto de exemplo: avaliação curta, de uma ou duas frases.', author: 'Paciente de exemplo', source: '' },
    { text: 'Texto de exemplo: relato de quem fez uma consulta de avaliação e tirou as dúvidas com o dentista.', author: 'Paciente de exemplo', source: '' },
  ],

  testimonials: [] as Testimonial[],

  hasBeforeAfter: false,
  beforeAfter: [] as { treatment: string; before: string; after: string }[],

  content: {
    heroEyebrow: 'Odontologia · Sua Cidade',
    heroTitle: 'Implantes, lentes e canal perto de você',
    heroSubtitle: 'Consultório odontológico com atendimento próximo, do diagnóstico ao tratamento.',

    aboutEyebrow: 'Sobre o consultório',
    aboutTitle: 'Atendimento próximo, do diagnóstico ao resultado',
    aboutParagraphs: [
      'Aqui entra a apresentação do dentista e do consultório. No consultório, são atendidos implantes e próteses, tratamento de canal, clareamento, restaurações em resina e lentes de contato dental.',
      'Tudo começa pela avaliação: é o momento de examinar, conversar sobre o que incomoda e entender as opções de tratamento.',
      '[FORMAÇÃO E TRAJETÓRIA DO PROFISSIONAL]',
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
