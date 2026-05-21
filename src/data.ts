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
    description: 'Motores completos, cabeçotes, blocos, caixas de câmbio manual e automático, virabrequins, coletores e bielas.',
    iconName: 'Cpu',
    popularItems: ['Motor Parcial', 'Cabeçote Completo', 'Câmbio Automático', 'Bloco do Motor', 'Cárter de Óleo', 'Comando de Válvulas'],
    imageName: '/motor.jpg'
  },
  {
    id: 'suspensao-direcao',
    name: 'Suspensão & Direção',
    description: 'Amortecedores, bandejas (balanças), caixas de direção hidráulica e elétrica, semi-eixos, mangas de eixo, agregados.',
    iconName: 'Disc',
    popularItems: ['Amortecedor Dianteiro/Traseiro', 'Bandeja de Suspensão', 'Caixa de Direção Elétrica', 'Semi-eixo Completo', 'Agregado de Suspensão', 'Coluna de Direção'],
    imageName: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'lataria-acabamentos',
    name: 'Lataria & Acabamentos',
    description: 'Portas, capôs, para-lamas, tampas de porta-malas, para-choques, painéis frontais, grades, retrovisores e acabamento de painel.',
    iconName: 'Wrench',
    popularItems: ['Capô Dianteiro', 'Porta Mecânica (Dianteira/Traseira)', 'Para-choque Dianteiro', 'Retrovisor Elétrico', 'Tampa Traseira', 'Grade Frontal'],
    imageName: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'iluminacao-farois',
    name: 'Iluminação & Faróis',
    description: 'Faróis máscara negra ou cromados, faróis de milha/neblina, lanternas traseiras em LED ou convencionais.',
    iconName: 'Zap',
    popularItems: ['Farol Principal (Xenon/LED)', 'Farol de Milha', 'Lanterna Traseira (Canto/Tampa)', 'Lanterna Traseira LED', 'Repetidor de Seta'],
    imageName: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'injecao-eletrica',
    name: 'Injeção & Elétrica',
    description: 'Módulos de injeção (ECU/PCM), bicos injetores, alternadores, motores de partida, compressores de ar-condicionado, sensores.',
    iconName: 'Activity',
    popularItems: ['Módulo de Injeção Eletrônica', 'Alternador', 'Motor de Partida (Arranque)', 'Compressor de Ar Condicionado', 'Flauta com Bicos Injetores', 'Sensor Máf/Sonda Lambda'],
    imageName: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'freios-seguranca',
    name: 'Freios & Segurança',
    description: 'Módulos ABS, pinças de freio, cilindros mestre, kits de Airbag completos (bolsas, sensores, painel, cintos).',
    iconName: 'ShieldAlert',
    popularItems: ['Kit Airbag Completo', 'Módulo ABS', 'Pinça de Freio Dianteira', 'Cilindro Mestre', 'Bolsa de Airbag do Volante', 'Hidrovácuo'],
    imageName: '/freio.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Roberto Fernandes',
    role: 'Proprietário da RF Motores e Câmbios',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80',
    rating: 5,
    text: 'Cotei um motor de HB20 1.6 de alumínio que estava muito difícil de achar em bom estado. A Coreauto me mandou vídeo dele antes no teste, com compressão medida, nota fiscal de baixa no Detran e fotos detalhadas. Chegou na oficina limpo e montou perfeito. Recomendo de olhos fechados!',
    location: 'São Paulo - SP',
    verified: true,
  },
  {
    id: '2',
    name: 'Carlos Magalhães (Soró Motores)',
    role: 'Mecânico Chefe e Proprietário',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80',
    rating: 5,
    text: 'Atendimento imbatível. A maior preocupação que tenho comprando peça Kia é vim errada pelo ano. Eles pedem o número do chassi no WhatsApp, cruzam com o catálogo original e mandam a exata. Economia de tempo absurda e garantia real. Meu cliente pagou 1/3 do preço da concessionária na caixa de transmissão.',
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
    answer: 'Nossas peças seminovas e usadas provêm exclusivamente de veículos adquiridos legamente em leilões de seguradoras, baixados oficialmente junto ao DETRAN. Somos uma empresa credenciada e focada na economia circular automotiva legal (Desmonte Legalizado), emitindo Nota Fiscal com a rastreabilidade integral da peça.'
  },
  {
    id: '2',
    question: 'Como vocês garantem que a peça vai servir perfeitamente no meu carro?',
    answer: 'Antes de concretizar qualquer venda, nossa equipe técnica solicita o número do CHASSI do seu Hyundai ou Kia. Nós consultamos diretamente o catálogo oficial da montadora para garantir que o número de peça (Part Number) seja 100% compatível com a motorização, ano e versão do seu veículo, evitando devoluções e dores de cabeça.'
  },
  {
    id: '3',
    question: 'As peças usadas vêm limpas, testadas e têm garantia?',
    answer: 'Sim, totalmente! Todas as autopeças desmontadas passam por um rigoroso processo de triagem: teste mecânico/elétrico de funcionamento, higienização profissional e embalagem segura. Por lei e pelo nosso padrão de qualidade, oferecemos 90 dias (3 meses) de garantia total em qualquer peça (nova ou usada).'
  },
  {
    id: '4',
    question: 'Como posso fazer o orçamento e finalizar a compra?',
    answer: 'Nossa landing page foca no atendimento imediato e direto. Você preenche nosso formulário rápido acima ou clica nos botões de WhatsApp espalhados pelo site. Você falará imediatamente com um especialista de balcão que enviará fotos reais do nosso estoque, vídeos da peça funcionando (se motor), passará a cotação de frete, e finalizará via Pix ou cartão com link seguro.'
  },
  {
    id: '5',
    question: 'Vocês enviam para outros estados? Qual é o prazo?',
    answer: 'Enviamos diariamente para todo o Brasil através de transportadoras parceiras homologadas (para itens pesados como motores, câmbios e portas) e Correios (Sedex para peças leves). No WhatsApp calculamos a melhor tarifa e o prazo estimado para sua região, fornecendo rastreamento passo-a-passo com seguro de carga completo.'
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
  { label: 'Anos de Especialização', value: '12' },
  { label: 'Marcas Exclusivas', value: 'Hyundai & Kia' }
];

export const WHATSAPP_PHONE = '5511999999999'; // Placeholder que será formatado dinamicamente para o whatsapp oficial da empresa
