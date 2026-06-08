import { Testimonial, FAQItem, PartCategory, VehicleModel } from './types';

export const CORE_BRANDS = ['Hyundai', 'Kia'] as const;

export const VEHICLE_MODELS: VehicleModel[] = [
  // Hyundai Models
  { brand: 'Hyundai', name: 'HB20 / HB20S', years: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'] },
  { brand: 'Hyundai', name: 'Creta', years: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'] },
  { brand: 'Hyundai', name: 'Tucson', years: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'] },
  { brand: 'Hyundai', name: 'ix35', years: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'] },
  { brand: 'Hyundai', name: 'Santa Fe', years: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'] },
  { brand: 'Hyundai', name: 'i30', years: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'] },
  { brand: 'Hyundai', name: 'Azera', years: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'] },
  { brand: 'Hyundai', name: 'Elantra', years: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'] },
  { brand: 'Hyundai', name: 'Veloster', years: ['2011', '2012', '2013', '2014'] },
  { brand: 'Hyundai', name: 'HR (Camionete)', years: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'] },
  
  // Kia Models
  { brand: 'Kia', name: 'Sportage', years: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'] },
  { brand: 'Kia', name: 'Cerato', years: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'] },
  { brand: 'Kia', name: 'Picanto', years: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'] },
  { brand: 'Kia', name: 'Sorento', years: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'] },
  { brand: 'Kia', name: 'Soul', years: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'] },
  { brand: 'Kia', name: 'Bongo K2500', years: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'] },
  { brand: 'Kia', name: 'Carnival', years: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'] },
  { brand: 'Kia', name: 'Optima', years: ['2012', '2013', '2014', '2015', '2016'] }
];

export const PART_CATEGORIES: PartCategory[] = [
  {
    id: 'motor-transmissao',
    name: 'Motor & Transmissão',
    description: 'Motores completos e parciais Hyundai e Kia, cabeçotes, blocos, caixas de câmbio manual e automático, virabrequins e componentes internos.',
    iconName: 'Cpu',
    popularItems: ['Motores Parciais', 'Cabeçote', 'Câmbio Automático', 'Peças Internas do Motor', 'Cárter de Óleo', 'Comando de Válvulas', 'Virabrequim e outros'],
    imageName: '/motor.jpg',
    verifiedHighlights: [
      'Garantia total de 90 dias',
      'Empresa credenciada pelo Detran MG',
      'Procedência 100% garantida'
    ]
  },
  {
    id: 'suspensao-direcao',
    name: 'Suspensão & Direção',
    description: 'Amortecedores, bandejas (balanças), caixas de direção, semi-eixos, mangas de eixo, agregados e colunas de direção.',
    iconName: 'Disc',
    popularItems: ['Caixa de Direção', 'Agregado de Suspensão', 'Amortecedor Dianteiro/Traseiro', 'Bandeja de Suspensão', 'Semi-eixo Completo', 'Coluna de Direção'],
    imageName: '/suspensao.jpg',
    verifiedHighlights: [
      'Garantia total de 90 dias',
      'Empresa credenciada pelo Detran MG',
      'Procedência 100% garantida'
    ]
  },
  {
    id: 'lataria-acabamentos',
    name: 'Lataria & Acabamentos',
    description: 'Portas, capôs, para-lamas, tampas de porta-malas, para-choques, painéis frontais, grades, retrovisores e acabamento de painel.',
    iconName: 'Wrench',
    popularItems: ['Capô', 'Portas (Dianteira/Traseira)', 'Para-choque', 'Retrovisores', 'Tampa Traseira', 'Grade Frontal'],
    imageName: '/creta-lataria.jpg',
    verifiedHighlights: [
      'Garantia total de 90 dias',
      'Compatibilidade técnica garantida',
      'Procedência 100% Baixada pelo Detran'
    ]
  },
  {
    id: 'iluminacao-farois',
    name: 'Iluminação & Faróis',
    description: 'Faróis principais, faróis de milha/neblina, chaves de seta e lanternas traseiras convencionais ou em LED.',
    iconName: 'Zap',
    popularItems: ['Farol Principal', 'Farol de Milha', 'Lanterna Traseira (Canto/Tampa)', 'Chaves de Seta', 'Lanterna Traseira LED'],
    imageName: '/sportage-farois.png',
    verifiedHighlights: [
      'Garantia total de 90 dias',
      'Componentes 100% originais',
      'Testado eletronicamente e selado'
    ]
  },
  {
    id: 'injecao-eletrica',
    name: 'Injeção & Elétrica',
    description: 'Módulos de injeção (ECU/PCM), bicos injetores, alternadores, motores de partida, flautas e sensores de alta precisão.',
    iconName: 'Activity',
    popularItems: ['Módulo de Injeção Eletrônica', 'Alternador', 'Motor de Partida (Arranque)', 'Flautas', 'Bicos Injetores', 'Sensor MAF / Sonda Lambda'],
    imageName: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600',
    verifiedHighlights: [
      'Módulos testados eletronicamente',
      'Garantia de funcionamento de 90 dias',
      'Sensores e bicos limpos e testados',
      'Componentes 100% originais e selados'
    ]
  },
  {
    id: 'freios-seguranca',
    name: 'Freios & Segurança',
    description: 'Módulos ABS, pinças de freio, cilindros mestre, kit painel completo com tabelier e componentes de segurança.',
    iconName: 'ShieldAlert',
    popularItems: [],
    imageName: '/freio.jpg',
    verifiedHighlights: [
      'Kit painel completo com tabelier inspecionado',
      'Módulo ABS testado sem erros',
      'Kit painel completo com tabelier 100% íntegro',
      'Procedência certificada com baixa'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'China china',
    role: '3 avaliações',
    avatar: '',
    rating: 5,
    text: 'Atendimento nota mil de todos os funcionários, destaco o Bruno, o Marcos e um outro rapaz de barbicha. Mas tudo ótimo mesmo. Preço bom, produto de primeira e original dentre outras o cafézinho novinho e de boa qualidade. Essa eu super indico. Virei cliente.',
    location: 'Belo Horizonte - MG',
    verified: true,
    timeAgo: '4 meses atrás',
    ownerReply: 'Muito obrigado por sua avaliação e obrigado por confiar em nossas soluções para trazer os melhores benefícios para o seu Hyundai.'
  },
  {
    id: '2',
    name: 'lavinia nascimento',
    role: '1 avaliação',
    avatar: '',
    rating: 5,
    text: 'Tive uma experiência ótima com o lugar! Atendimento excelente — eu precisava urgente de algumas peças e fui super bem atendida. Mesmo não sendo de BH, fiz todo o atendimento à distância e tiraram todas as minhas dúvidas, me enviando áudios …Mais',
    location: 'Atendimento à distância',
    verified: true,
    timeAgo: '6 meses atrás',
    ownerReply: 'Prezada Lavínia, muito obrigado por sua avaliação e obrigado por confiar em nossas soluções para trazer os melhores benefícios para o seu Hyundai.'
  },
  {
    id: '3',
    name: 'Abner Novais',
    role: '2 avaliações',
    avatar: '',
    rating: 5,
    text: 'A melhor experiência que eu já tive na minha vida atendente Marcos melhor atendente que me atendeu .voltaria novamente ,foi muito atencioso e tirou todas as minhas dúvidas .super indico a loja e principalmente Sr Marcos como atendente . Melhor experiência que tive chou de bola ..obrigado pela sua atenção e dedicação ao cliente',
    location: 'Belo Horizonte - MG',
    verified: true,
    timeAgo: '7 meses atrás',
    ownerReply: 'Prezado Abner muito obrigado por sua avaliação e obrigado por confiar em nossas soluções para trazer os melhores benefícios para o seu Hyundai.'
  },
  {
    id: '4',
    name: 'Jussara Amorim',
    role: '1 avaliação',
    avatar: '',
    rating: 5,
    text: 'Lugar excelente,super indico. Já comprei lá várias vezes,são super atenciosos!',
    location: 'Belo Horizonte - MG',
    verified: true,
    timeAgo: '4 meses atrás'
  },
  {
    id: '5',
    name: 'Rodrigo',
    role: '1 avaliação',
    avatar: '',
    rating: 5,
    text: 'Super indico,vendedor Artur uma pessoa educada e paciente .Comprei duas lanternas da Ix35 em perfeito estado e ótimo preço.Recomendo e já salvei o contato !',
    location: 'Belo Horizonte - MG',
    verified: true,
    timeAgo: '9 meses atrás',
    ownerReply: 'Prezado Rodrigo muito obrigado por sua avaliação e obrigado por confiar em nossas soluções para trazer os melhores benefícios para o seu Hyundai.'
  },
  {
    id: '6',
    name: 'João Gabriel',
    role: '3 avaliações',
    avatar: '',
    rating: 5,
    text: 'Só Hyundai, Fui super atendimento pelo Marcos Túlio, excelente profissional. Explicou direitinho as peças que eu estava procurando. Recomendo nota 10.',
    location: 'Belo Horizonte - MG',
    verified: true,
    timeAgo: '7 meses atrás',
    ownerReply: 'Prezado João muito obrigado por sua avaliação e obrigado por confiar em nossas soluções para trazer os melhores benefícios para o seu Hyundai.'
  },
  {
    id: '7',
    name: 'Gustavo A G Dias',
    role: 'Local Guide · 32 avaliações',
    avatar: '',
    rating: 5,
    text: 'Nota 10. Ótimo atendimento por parte do Sr. Tulio.',
    location: 'Belo Horizonte - MG',
    verified: true,
    timeAgo: '7 meses atrás',
    ownerReply: 'Prezado Gustavo muito obrigado por sua avaliação e obrigado por confiar em nossas soluções para trazer os melhores benefícios para o seu Hyundai.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'De onde vêm as peças usadas comercializadas por vocês?',
    answer: 'Nossas peças seminovas e usadas provêm exclusivamente de veículos adquiridos legalmente em leilões de seguradoras, baixados oficialmente junto ao DETRAN. Somos uma empresa credenciada e focada na economia circular automotiva legal (Desmonte Legalizado), garantindo a procedência 100% lícita com a rastreabilidade integral da peça.'
  },
  {
    id: '2',
    question: 'Como vocês garantem que a peça vai servir perfeitamente no meu carro?',
    answer: 'Antes de concretizar qualquer venda, nossa equipe técnica confirma todos os dados exatos do seu Hyundai ou Kia. Nós validamos a compatibilidade da peça para garantir que o Part Number (número de peça) seja 100% compatível com a motorização, ano e versão do seu veículo, evitando devoluções e dores de cabeça.'
  },
  {
    id: '3',
    question: 'As peças usadas vêm limpas, testadas e têm garantia?',
    answer: 'Sim, totalmente! Todas as autopeças desmontadas passam por um rigoroso processo de triagem: teste mecânico/elétrico de funcionamento, higienização profissional e embalagem segura. Por lei e pelo nosso padrão de qualidade, oferecemos 90 dias (3 meses) de garantia total em qualquer peça (nova ou usada).'
  },
  {
    id: '4',
    question: 'Como posso fazer o orçamento e finalizar a compra?',
    answer: 'O orçamento é feito de forma rápida diretamente pelo nosso WhatsApp. Após a confirmação de compatibilidade da peça e do cálculo do frete com nosso consultor, a finalização da compra e o pagamento podem ser realizados com total segurança via Pix, transferência bancária ou cartões de crédito.'
  },
  {
    id: '5',
    question: 'Vocês enviam para outros estados? Qual é o prazo?',
    answer: 'Sim, realizamos envios diariamente para todo o Brasil através de transportadoras parceiras (para motores, câmbios e lataria) e Correios (para itens leves), sendo o custo e a responsabilidade do frete por conta do cliente. No WhatsApp, nossa equipe ajuda você a encontrar a melhor tarifa e prazo para sua região, cuidando de todo o despacho e fornecendo seguro de carga.'
  },
  {
    id: '6',
    question: 'É possível retirar as peças em mãos?',
    answer: 'Sim! Se você estiver na mesma região do nosso centro de distribuição, pode agendar a retirada no balcão diretamente com o vendedor após a reserva da peça. Agilizamos o processo para você ou seu mecânico de confiança retirarem no mesmo dia.'
  }
];

export const AUTHORITY_STATS = [
  { label: 'Peças em Estoque', value: '15.000+' },
  { label: 'Clientes Atendidos', value: '10.000+' },
  { label: 'Anos de Especialização', value: '7' },
  { label: 'Marcas Exclusivas', value: 'Hyundai & Kia' }
];

export const WHATSAPP_PHONE = '553133095890';
