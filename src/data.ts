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
    imageName: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600',
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
    description: 'Módulos ABS, pinças de freio, cilindros mestre, kits de Airbag completos, bolsas de airbag e componentes de segurança.',
    iconName: 'ShieldAlert',
    popularItems: [],
    imageName: '/freio.jpg',
    verifiedHighlights: [
      'Kit Airbag inspecionado e lacrado',
      'Módulo ABS testado sem erros',
      'Bolsas de airbag 100% íntegras',
      'Procedência certificada com baixa'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Roberto Fernandes',
    role: 'Proprietário da RF Motores e Câmbios',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80',
    rating: 5,
    text: 'Cotei um motor de HB20 1.6 de alumínio que estava muito difícil de achar em bom estado. A Coreauto me mandou vídeo dele antes no teste, com compressão medida, comprovante oficial de baixa no Detran e fotos detalhadas. Chegou na oficina limpo e montou perfeito. Recomendo de olhos fechados!',
    location: 'São Paulo - SP',
    verified: true,
  },
  {
    id: '2',
    name: 'Carlos Magalhães (Soró Motores)',
    role: 'Mecânico Chefe e Proprietário',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80',
    rating: 5,
    text: 'Atendimento imbatível. A maior preocupação que tenho comprando peça Kia é vir errada pelo ano. Eles cruzam as especificações técnicas diretamente com a peça original no WhatsApp e mandam a exata. Economia de tempo absurda e garantia real. Meu cliente pagou 1/3 do preço da concessionária na caixa de transmissão.',
    location: 'Belo Horizonte - MG',
    verified: true,
  },
  {
    id: '3',
    name: 'Juliana Mendes',
    role: 'Proprietária de um Creta 2.0',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80',
    rating: 5,
    text: 'Bateram na lateral do meu Creta e quebrou o retrovisor retrátil elétrico, que custava uma fortuna novo. Comprei o retrovisor usado original na Coreauto por indicação do meu funileiro. Veio com a fiação original intacta e na cor certinha do meu carro. Atendimento pelo Whats muito cortês e entrega no dia seguinte.',
    location: 'Campinas - SP',
    verified: true,
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
