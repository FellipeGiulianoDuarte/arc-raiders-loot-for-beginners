// ============================================
// ARC RAIDERS LOOT GUIDE — Complete Application
// v3.4 data from u/pRoDeeD cheat sheet + wiki
// ============================================

const WIKI = 'https://arcraiders.wiki/w/images';
let currentSection = 'loot';

// ── CATEGORIES ─────────────────────────────
const CATEGORIES = {
  'always-keep':  { label: 'Sempre Guardar',        color: '#4ade80', badgeClass: 'badge-keep' },
  'strategic':    { label: 'Guardar com Estratégia', color: '#fbbf24', badgeClass: 'badge-strategic' },
  'high-value':   { label: 'Alto Valor — Extrair',  color: '#a78bfa', badgeClass: 'badge-highvalue' },
  'recycle':      { label: 'Reciclar na Base',       color: '#2dd4bf', badgeClass: 'badge-recycle' },
};

// ── MAIN LOOT ITEMS (15 items with full details) ──
const ITEMS = [
  // ALWAYS KEEP
  {
    id: 'metal-parts', name: 'Peças de Metal', nameEn: 'Metal Parts',
    category: 'always-keep', rarity: 'common', type: 'Material Básico',
    weight: 0.1, sellValue: 75,
    image: `${WIKI}/8/89/Metal_Parts.png`, emoji: '🔩',
    badge: 'guardar sempre',
    quickTip: 'Principal custo de munição — nunca pare de acumular',
    description: 'Um dos cinco materiais básicos de crafting. Usado em uma enorme variedade de itens — munição, armas, mods e upgrades de oficina. Você vai consumir centenas desses.',
    sources: [
      { icon: '🔍', name: 'Caixas de Metal', detail: 'todas as zonas' },
      { icon: '🔍', name: 'Capôs de Carro', detail: 'áreas industriais' },
      { icon: '🔍', name: 'Racks de Servidor', detail: 'zonas elétricas' },
      { icon: '🏪', name: 'Celeste (vendedora)', detail: 'Speranza' },
      { icon: '♻️', name: 'Reciclagem de vários itens', detail: '60+ itens' },
    ],
    usedFor: [
      'Munição — Leve, Média, Pesada, Shotgun (principal gasto!)',
      'Armas — séries Ferro, Hairpin, Kettle, Rattler, Stitcher',
      'Mods — Compensador I, Freio de Boca I, Choke I',
      'Componentes Mecânicos (7× Metal Parts + 3× Rubber Parts)',
      'Expedição Fase 1 — 150× necessários',
    ],
    recycleInfo: 'Material básico — não pode ser reciclado em nada menor',
    tips: [
      'Material mais consumido do jogo — jamais descarte',
      'Craft de munição consome MUITO — mantenha estoque alto',
      'Upgradar o Sucatinha (Scrappy) ajuda a conseguir mais',
      'Necessário em TODAS as fases de Expedição (150× cada)',
    ],
  },
  {
    id: 'steel-spring', name: 'Mola de Aço', nameEn: 'Steel Spring',
    category: 'always-keep', rarity: 'uncommon', type: 'Material Topside',
    weight: 0.2, sellValue: 300,
    image: `${WIKI}/d/db/Steel_Spring.png`, emoji: '🌀',
    badge: 'guardar sempre',
    quickTip: 'Usada em quase todas as receitas de mods de arma',
    description: 'Item incomum essencial para weapon mods. Não pode ser craftada — só obtida por loot, reciclagem ou Celeste. Necessária para Expedição Fase 1.',
    sources: [
      { icon: '🔍', name: 'Caixas de Metal', detail: 'todas as zonas' },
      { icon: '🏪', name: 'Celeste', detail: '6 sementes · limite 10/dia' },
      { icon: '♻️', name: 'Reciclagem de itens', detail: '' },
    ],
    usedFor: [
      'Carregadores Estendidos — Leve, Médio, Shotgun (todos os tiers)',
      'Comp. Mecânicos Avançados (2× Mola + 2× Comp. Mecânicos)',
      'Granada Shrapnel (1× Explosivo Bruto + 2× Mola)',
      'Torrente I (6× Mola + outros)',
      'Expedição Fase 1 — 15× necessárias',
    ],
    recycleInfo: 'Recicla: 2× Metal Parts · Salva: 1× Metal Parts · RVI: -25%',
    tips: [
      'NÃO PODE SER CRAFTADA — só loot ou Celeste',
      'Comprar da Celeste por 6 sementes é ótimo custo-benefício',
      'Essencial para TODOS os carregadores estendidos',
      'Guarde 15 para Expedição Fase 1',
    ],
  },
  {
    id: 'magnet', name: 'Ímã', nameEn: 'Magnet',
    category: 'always-keep', rarity: 'uncommon', type: 'Material Topside',
    weight: 0.2, sellValue: 200,
    image: `${WIKI}/8/8c/Magnet.png`, emoji: '🧲',
    badge: 'guardar sempre',
    quickTip: 'Fundamental para as melhores mochilas azuis do jogo',
    description: 'Componente incomum para mochilas, granadas e armas de tier médio-alto. Não pode ser craftado.',
    sources: [
      { icon: '🔍', name: 'Scavenging em caixas', detail: 'várias zonas' },
      { icon: '🏪', name: 'Celeste', detail: '6 sementes · limite 10/dia' },
      { icon: '🌀', name: 'Exodus', detail: 'evento especial' },
    ],
    usedFor: [
      'Mochilas Mk. 2 — Combat, Looting, Tactical (3× Ímã + 2× Comp. Elétricos)',
      'Canto I (5× Ímã + 2× Adv. Mec. + 3× Medium Parts)',
      'Venator I (5× Ímã + 2× Adv. Mec. + 3× Medium Parts)',
      'Granada Snap Blast (1× Ímã + 2× Explosivo Bruto)',
    ],
    recycleInfo: 'Recicla: 2× Metal Parts · Salva: 1× Metal Parts',
    tips: [
      'PRIORIDADE para mochilas azuis Mk. 2 — maior capacidade',
      'Compre da Celeste diariamente por 6 sementes',
      'NÃO PODE SER CRAFTADO',
    ],
  },
  {
    id: 'duct-tape', name: 'Fita Adesiva', nameEn: 'Duct Tape',
    category: 'always-keep', rarity: 'uncommon', type: 'Material Topside',
    weight: 0.25, sellValue: 300,
    image: `${WIKI}/4/4e/Duct_Tape.png`, emoji: '📦',
    badge: 'guardar sempre',
    quickTip: 'Essencial para grips e coronhas de arma',
    description: 'Material incomum para grips e stocks de arma. Não pode ser craftado. Achado em áreas residenciais e comerciais.',
    sources: [
      { icon: '🔍', name: 'Áreas residenciais/comerciais', detail: 'caixas e prateleiras' },
      { icon: '🏪', name: 'Celeste', detail: '6 sementes · limite 10/dia' },
      { icon: '♻️', name: 'Reciclagem de itens', detail: '' },
    ],
    usedFor: [
      'Grips — Angled I/II/III, Vertical I/II/III',
      'Coronhas — Stable I/II/III, Lightweight, Padded',
    ],
    recycleInfo: 'Recicla: 3× Fabric · Salva: 1× Fabric',
    tips: [
      'NÃO PODE SER CRAFTADA — só loot ou Celeste',
      'Essencial para TODOS os grips e stocks',
      'Não descarte mesmo com inventário cheio',
    ],
  },
  {
    id: 'wires', name: 'Fios', nameEn: 'Wires',
    category: 'always-keep', rarity: 'uncommon', type: 'Material Topside',
    weight: 0.15, sellValue: 200,
    image: `${WIKI}/3/39/Wires.png`, emoji: '〰️',
    badge: 'guardar sempre',
    quickTip: 'Crucial para weapon mods e armadilhas',
    description: 'Item incomum para mods de arma, armadilhas e componentes elétricos avançados. Achado em equipamentos eletrônicos.',
    sources: [
      { icon: '🔍', name: 'Racks de Servidor', detail: 'zonas elétricas' },
      { icon: '🔍', name: 'Caixas de Distribuição, Geradores', detail: 'zonas industriais' },
      { icon: '🏪', name: 'Celeste', detail: '4 sementes · limite 10/dia' },
    ],
    usedFor: [
      'Comp. Elétricos Avançados (3× Fios + 2× Comp. Elétricos)',
      'Compensadores, Freios de Boca, Silenciadores (I-III)',
      'Armadilhas de Granada (Blaze, Gás, Isca, Fumaça)',
      'Expedição Fase 2 — 25-30× necessários',
      'Quests: After Rain Comes (5×), Eyes On The Prize (3×)',
    ],
    recycleInfo: 'Recicla: 2× Rubber Parts · Salva: 1× Rubber Parts · RVI: -50%',
    tips: [
      'Necessário para Expedição estágio 2 (25-30×)',
      'Necessário para 11× em quests',
      'Preço na Celeste é baixo (4 sementes) — compre diariamente',
    ],
  },
  {
    id: 'simple-gun-parts', name: 'Peças de Arma Simples', nameEn: 'Simple Gun Parts',
    category: 'always-keep', rarity: 'uncommon', type: 'Material Topside',
    weight: 0.3, sellValue: 330,
    image: `${WIKI}/d/da/Simple_Gun_Parts.png`, emoji: '🔧',
    badge: 'guardar sempre',
    quickTip: 'Dropam de inimigos — não dá pra craftar!',
    description: 'Peças para craft e reparo de armas. EXCLUSIVAMENTE de inimigos ARC ou Celeste. Podem ser refinadas em Peças Médias ou Pesadas.',
    sources: [
      { icon: '👾', name: 'Vespas (Wasps)', detail: 'inimigo comum' },
      { icon: '👾', name: 'Marimbondos (Hornets)', detail: 'inimigo médio' },
      { icon: '👾', name: 'Torretas, Sentinelas, Shredders', detail: '' },
      { icon: '🏪', name: 'Celeste', detail: '7 sementes · limite 5/dia' },
    ],
    usedFor: [
      '20+ armas — Anvil, Arpeggio, Burletta, Ferro, Kettle...',
      'Refinar → 4× Simples = 1× Média (Refinador 2 + blueprint)',
      'Refinar → 4× Simples = 1× Pesada (Refinador 2 + blueprint)',
    ],
    recycleInfo: 'Recicla: 2× Metal Parts · Salva: 1× Metal Parts',
    tips: [
      'NÃO PODE SER CRAFTADA — priorize matar inimigos ARC',
      'NUNCA venda — sempre útil para craft ou refinamento',
      'Refinar em Peças Médias/Pesadas é o melhor uso mid-game',
    ],
  },
  // STRATEGIC
  {
    id: 'assorted-seeds', name: 'Sementes Sortidas', nameEn: 'Assorted Seeds',
    category: 'strategic', rarity: 'common', type: 'Recurso / Moeda',
    weight: 0.05, sellValue: 100,
    image: `${WIKI}/5/51/Assorted_Seeds.png`, emoji: '🌱',
    badge: 'trocar sabiamente',
    quickTip: 'Moeda valiosa — troque por peças de arma, não gaste em verdes',
    description: 'Moeda principal para a Celeste em Speranza. 1 semente = 100 moedas. Empilháveis e valiosas — não gaste em itens comuns!',
    sources: [
      { icon: '🌿', name: 'Zonas de natureza', detail: 'chão e arbustos' },
      { icon: '🌿', name: 'Domo Hidropônico', detail: 'ALTÍSSIMA densidade' },
      { icon: '🌿', name: 'Áreas de pântano', detail: 'perto dos domos' },
      { icon: '♻️', name: 'Reciclagem de orgânicos', detail: 'frutas, musgo, etc.' },
    ],
    usedFor: [
      'Celeste: Peças Médias/Pesadas (15 sem. · 3/dia)',
      'Celeste: Complex Gun Parts (60 sem. · 1/dia)',
      'Celeste: Mola, Ímã, Fita (6 sem. · 10/dia)',
      'Celeste: Simple Gun Parts (7 sem. · 5/dia)',
      'Celeste: Exodus Modules (55 sem. · 1/dia)',
    ],
    recycleInfo: 'Não reciclável — use como moeda',
    tips: [
      'MELHOR USO: comprar Peças Médias e Pesadas (15 cada)',
      'NÃO gaste em itens verdes — fáceis de achar no mapa',
      'Farm no Domo Hidropônico rende ~150 em 5 min',
    ],
  },
  {
    id: 'electrical-components', name: 'Componentes Elétricos', nameEn: 'Electrical Components',
    category: 'strategic', rarity: 'uncommon', type: 'Material Refinado',
    weight: 0.5, sellValue: 640,
    image: `${WIKI}/0/06/Electrical_Components.png`, emoji: '⚡',
    badge: 'guardar',
    quickTip: 'Achados em caixas elétricas e caminhões específicos',
    description: 'Material refinado para itens elétricos avançados. Craftável no Refinador ou em zonas elétricas. Necessário para upgrades de Gear Bench e Utility Station.',
    sources: [
      { icon: '🔍', name: 'Zonas elétricas', detail: 'caixas especiais' },
      { icon: '⚙️', name: 'Refinador 1', detail: '8× Plastic + 4× Rubber' },
      { icon: '♻️', name: 'Reciclagem', detail: '' },
    ],
    usedFor: [
      'Mochilas Mk. 2 — Combat, Looting, Tactical (2× cada)',
      'Comp. Elétricos Avançados (3× Fios + 2× Comp.)',
      'Gear Bench nível 2 (5×) + Utility Station nível 2 (5×)',
      'Expedição Fase 2 — 20-30× necessários',
    ],
    recycleInfo: 'Recicla: 3× Plastic + 3× Rubber · RVI: -48%',
    tips: [
      'Pode ser craftado no Refinador 1 — conveniente!',
      'Guarde 5× para Gear Bench + 5× para Utility Station',
      'Guarde 20-30× para Expedição Fase 2',
    ],
  },
  {
    id: 'mechanical-components', name: 'Componentes Mecânicos', nameEn: 'Mechanical Components',
    category: 'strategic', rarity: 'uncommon', type: 'Material Refinado',
    weight: 0.4, sellValue: 640,
    image: `${WIKI}/9/94/Mechanical_Components.png`, emoji: '⚙️',
    badge: 'guardar',
    quickTip: 'Usados em 40+ receitas — mantenha estoque saudável',
    description: 'Material refinado versátil para armas e upgrades. Necessário para Gunsmith nível 2.',
    sources: [
      { icon: '👾', name: 'Bastion, Bombardier, Leaper, Shredder', detail: 'inimigos ARC' },
      { icon: '⚙️', name: 'Refinador 1', detail: '7× Metal + 3× Rubber Parts' },
    ],
    usedFor: [
      '40+ receitas de armas e upgrades',
      'Comp. Mecânicos Avançados (2× Mola + 2× Comp.)',
      'Gunsmith nível 2 (5× necessários)',
      'Grips, carregadores, silenciadores avançados',
    ],
    recycleInfo: 'Recicla: 2× Rubber + 3× Metal Parts · RVI: -43%',
    tips: [
      'Guarde 5× para Gunsmith nível 2',
      'Pode ser craftado no Refinador 1',
      'Um dos materiais mais versáteis do jogo',
    ],
  },
  {
    id: 'medical-supplies', name: 'Suprimentos Médicos', nameEn: 'Bandages & Medical',
    category: 'strategic', rarity: 'common', type: 'Consumível / Crafting',
    weight: 0.2, sellValue: 150,
    image: `${WIKI}/c/cc/Medical_Supplies.png`, emoji: '🏥',
    badge: 'usar / guardar',
    quickTip: 'Garantidos em hospitais, represa e cidade soterrada',
    description: 'Bandagens e cura são essenciais. Medical Station deve ser PRIMEIRA prioridade de upgrade — uma bandagem extra pode salvar seu loot.',
    sources: [
      { icon: '🏥', name: 'Hospitais', detail: 'spawn garantido' },
      { icon: '🏥', name: 'Represa (Dam)', detail: 'spawn garantido' },
      { icon: '🏥', name: 'Cidade Soterrada', detail: 'melhor fonte!' },
      { icon: '⚙️', name: 'Medical Lab', detail: 'Fabric + Chemicals' },
    ],
    usedFor: [
      'Cura durante raids',
      'Herbal Bandage (Medical Lab 2)',
      'Sterilized Bandage (Medical Lab 3)',
    ],
    recycleInfo: 'Não recicle — use para sobreviver',
    tips: [
      'Medical Station = PRIMEIRO upgrade na base',
      'Crafting em raid custa 2× mais materiais!',
      'Sempre entre em raid com bandagens',
    ],
  },
  // HIGH VALUE
  {
    id: 'arc-circuitry', name: 'Circuito ARC', nameEn: 'ARC Circuitry',
    category: 'high-value', rarity: 'rare', type: 'Material Topside',
    weight: 0.3, sellValue: 1000,
    image: `${WIKI}/d/dc/ARC_Circuitry.png`, emoji: '🔮',
    badge: 'extrair agora',
    quickTip: 'Melhor loot — pega de sondas recém-pousadas no mapa',
    description: 'Material raro de máquinas ARC e Sondas. Essencial para Refinador nível 3 (10× necessários!) e crafts avançados.',
    sources: [
      { icon: '🛸', name: 'Sondas ARC (Probes)', detail: '100% chance!' },
      { icon: '👾', name: 'Baron Husk, Bastion, Courier', detail: '' },
      { icon: '👾', name: 'Matriarch, Queen, Rocketeer', detail: 'bosses' },
      { icon: '⚙️', name: 'Refinador 2', detail: '8× ARC Alloy' },
    ],
    usedFor: [
      'Refinador nível 3 (10× ARC Circuitry + 6× Bombardier Cell)',
      'Escudo Médio (4× Battery + 1×)',
      'Deadline (arma), Power Rod',
    ],
    recycleInfo: 'Recicla: 2× ARC Alloy · Salva: 1× ARC Alloy · RVI: -25%',
    tips: [
      'SONDAS = melhor fonte — 100% garantido!',
      'Spaceport → Rocket Assembly: sondas em 5 min',
      'Tempestade: 2-3 no teto do Testing Annex (Dam)',
      'Guarde 10× para Refinador nível 3!',
    ],
  },
  {
    id: 'advanced-arc-powercell', name: 'Célula de Energia Avançada', nameEn: 'Advanced ARC Powercell',
    category: 'high-value', rarity: 'rare', type: 'Material Topside',
    weight: 0.5, sellValue: 640,
    image: `${WIKI}/3/31/Advanced_ARC_Powercell.png`, emoji: '🔋',
    badge: 'extrair agora',
    quickTip: 'Craft Energy Clips — item mais lucrativo para vender',
    description: 'Recurso raro de inimigos ARC grandes. Energy Clips craftados com isso são o item mais lucrativo do jogo.',
    sources: [
      { icon: '👾', name: 'Comet, Bastion, Bombardier', detail: '' },
      { icon: '👾', name: 'Leaper, Queen, Rocketeer', detail: '' },
      { icon: '👾', name: 'Sentinel, Surveyor, Matriarch', detail: 'bosses' },
    ],
    usedFor: [
      'Energy Clips (1× + 2× Battery = 5× clips) — MUITO $$$',
      'Surge Shield Recharger',
      'Restauração direta de escudo (emergência)',
    ],
    recycleInfo: 'Recicla: 2× ARC Powercells · Salva: 1×',
    tips: [
      'Energy Clips = item MAIS lucrativo para vender',
      'Não use em escudos — craft Energy Clips vale mais',
      'Extraia IMEDIATAMENTE — prioridade máxima',
    ],
  },
  {
    id: 'medium-gun-parts', name: 'Peças de Arma Média', nameEn: 'Medium Gun Parts',
    category: 'high-value', rarity: 'rare', type: 'Material Topside',
    weight: 0.4, sellValue: 700,
    image: `${WIKI}/9/9a/Medium_Gun_Parts.png`, emoji: '🔫',
    badge: 'priorizar',
    quickTip: 'Troque sementes por essas — difíceis de obter',
    description: 'Peças raras para rifles. Celeste ou refinamento de Simple Gun Parts são as fontes mais confiáveis.',
    sources: [
      { icon: '👾', name: 'Bastion, Sentinel', detail: 'raro' },
      { icon: '🏪', name: 'Celeste', detail: '15 sementes · 3/dia' },
      { icon: '⚙️', name: 'Refinador 2', detail: '4× Simple + blueprint' },
    ],
    usedFor: [
      'Armas — Arpeggio, Osprey, Renegade, Tempest, Torrente, Venator',
      'Canto I, Venator I (3× cada)',
    ],
    recycleInfo: 'Recicla: 2× Simple Gun Parts · Salva: 1×',
    tips: [
      'SEMENTES são o melhor caminho — 15 na Celeste',
      'Blueprint: Security Checkpoint (Stella Montis)',
      'Precisa Refinador nível 2 para craftar',
    ],
  },
  {
    id: 'heavy-gun-parts', name: 'Peças de Arma Pesada', nameEn: 'Heavy Gun Parts',
    category: 'high-value', rarity: 'rare', type: 'Material Topside',
    weight: 0.4, sellValue: 700,
    image: `${WIKI}/3/33/Heavy_Gun_Parts.png`, emoji: '💣',
    badge: 'priorizar',
    quickTip: 'Raríssimas — troque sementes ou priorize ao encontrar',
    description: 'Peças raras para armas pesadas. Essenciais para as melhores armas e Complex Gun Parts (endgame).',
    sources: [
      { icon: '👾', name: 'Bombardier, Rocketeer', detail: 'raro' },
      { icon: '🏪', name: 'Celeste', detail: '15 sementes · 3/dia' },
      { icon: '⚙️', name: 'Refinador 2', detail: '4× Simple + blueprint' },
    ],
    usedFor: [
      'Anvil, Bettina, Hullcracker, Il Toro, Vulcano',
      'Complex Gun Parts (endgame)',
    ],
    recycleInfo: 'Recicla: 2× Simple Gun Parts · Salva: 1×',
    tips: [
      'MUITO raras em drops — Celeste é mais confiável',
      'Mesma receita de refinamento que Medium',
      'NUNCA venda',
    ],
  },
  {
    id: 'advanced-mechanical-components', name: 'Comp. Mecânicos Avançados', nameEn: 'Advanced Mechanical Components',
    category: 'high-value', rarity: 'rare', type: 'Material Refinado',
    weight: 0.5, sellValue: 1750,
    image: `${WIKI}/2/25/Advanced_Mechanical_Components.png`, emoji: '⚙️',
    badge: 'priorizar',
    quickTip: 'Armas azuis SÓ dão esses se recicladas NA BASE',
    description: 'Material refinado raro para armas de tier alto. Armas azuis SÓ dão esses na base. Necessário para Gunsmith nível 3 (5×).',
    sources: [
      { icon: '👾', name: 'Matriarch, Queen', detail: 'bosses' },
      { icon: '⚙️', name: 'Refinador 2', detail: '2× Mola + 2× Comp. Mecânicos' },
      { icon: '♻️', name: 'Reciclar armas azuis NA BASE', detail: 'NÃO em raid!' },
    ],
    usedFor: [
      'Gunsmith nível 3 (5× necessários)',
      'Armas tier alto — Bettina, Bobcat, Osprey, Renegade, Tempest, Torrente',
    ],
    recycleInfo: 'Recicla: 1× Mola + 1× Comp. Mecânicos · RVI: -46%',
    tips: [
      'NUNCA recicle armas azuis em raid — 50% menos!',
      'Guarde 5× para Gunsmith nível 3',
      'Craftável no Refinador 2',
    ],
  },
];

// ── RECYCLING ADVICE ───────────────────────
const RECYCLE_ADVICE = [
  { icon: '🛡️', title: 'Escudos Muito Danificados', text: 'Recicle na base e reconstrua — mais barato que reparar. Escudos médios muito danificados custam menos sendo reciclados + reconstruídos.' },
  { icon: '🔫', title: 'Armas Azuis Duplicadas', text: 'Recicle NA BASE para Comp. Mecânicos Avançados. Salvaging em raid rende 50% menos. Armas azuis são a melhor fonte de Comp. Mec. Avançados.' },
  { icon: '📦', title: 'Materiais Básicos em Excesso', text: 'Refine no Refinador para liberar slots e gerar itens de tier superior. Metal Parts, Rubber e Plastic Parts viram componentes mais valiosos.' },
];

// ── GOLDEN RULES ───────────────────────────
const GOLDEN_RULES = [
  { tag: 'warn', tagText: 'nunca', text: 'Recicle itens durante o raid — você recebe <strong>50% menos materiais</strong>. Espere chegar na base.' },
  { tag: 'warn', tagText: 'sempre', text: 'Repare suas armas <strong>antes</strong> de fazer upgrade de nível — a ordem importa.' },
  { tag: 'info', tagText: 'dica', text: 'Não guarde materiais raros sem ter a receita. <strong>Venda e expanda o baú.</strong>' },
  { tag: 'info', tagText: 'dica', text: 'Itens verdes são fáceis de achar — <strong>não gaste sementes neles.</strong>' },
  { tag: 'ok', tagText: 'ativar', text: 'Use <strong>Track Resources</strong> no workshop — evita reciclar algo importante.' },
  { tag: 'ok', tagText: 'refinar', text: 'Materiais básicos sobrando? <strong>Refine no Refinador</strong> — libera slots e gera tier superior.' },
  { tag: 'info', tagText: 'math', text: 'Escudos danificados: <strong>reciclar + reconstruir</strong> custa menos que reparar.' },
];

// ── WORKSHOP UPGRADES (from cheat sheet v3.4) ──
const WORKSHOP = [
  {
    name: 'Gunsmith', icon: '🔧', color: '#f5a623',
    levels: [
      { level: 2, items: [
        { name: 'Mechanical Components', qty: 5, sell: 640, rvi: -43 },
        { name: 'Rusted Tools', qty: 3, sell: 1000, rvi: -10 },
        { name: 'Wasp Driver', qty: 8, sell: 640, rvi: 63 },
        { name: 'Rusted Gear', qty: 3, sell: 2000, rvi: -21 },
      ]},
      { level: 3, items: [
        { name: 'Adv. Mechanical Comp.', qty: 5, sell: 1750, rvi: -46 },
        { name: 'Sentinel Firing Core', qty: 4, sell: 3000, rvi: -25 },
      ]},
    ],
  },
  {
    name: 'Explosives', icon: '💥', color: '#f87171',
    levels: [
      { level: 2, items: [
        { name: 'Pop Trigger', qty: 5, sell: 640, rvi: -27 },
        { name: 'Crude Explosives', qty: 5, sell: 270, rvi: -44 },
        { name: 'Synthesized Fuel', qty: 3, sell: 700, rvi: -50 },
        { name: 'Laboratory Reagents', qty: 3, sell: 2000, rvi: -20 },
      ]},
      { level: 3, items: [
        { name: 'Explosive Compound', qty: 5, sell: 1000, rvi: -46 },
        { name: 'Rocketeer Driver', qty: 3, sell: 3000, rvi: -22 },
      ]},
    ],
  },
  {
    name: 'Gear Bench', icon: '🛡️', color: '#60a5fa',
    levels: [
      { level: 2, items: [
        { name: 'Electrical Components', qty: 5, sell: 640, rvi: -48 },
        { name: 'Power Cable', qty: 3, sell: 1000, rvi: -20 },
        { name: 'Hornet Driver', qty: 5, sell: 1000, rvi: -16 },
        { name: 'Industrial Battery', qty: 3, sell: 1000, rvi: -16 },
      ]},
      { level: 3, items: [
        { name: 'Adv. Electrical Comp.', qty: 5, sell: 1750, rvi: -52 },
        { name: 'Bastion Cell', qty: 6, sell: 3000, rvi: -22 },
      ]},
    ],
  },
  {
    name: 'Refiner', icon: '⚗️', color: '#a78bfa',
    levels: [
      { level: 2, items: [
        { name: 'Fireball Burner', qty: 5, sell: 640, rvi: -27 },
        { name: 'ARC Motion Core', qty: 3, sell: 1000, rvi: -60 },
        { name: 'Toaster', qty: 3, sell: 1000, rvi: -10 },
        { name: 'Motor', qty: 3, sell: 2000, rvi: -28 },
      ]},
      { level: 3, items: [
        { name: 'ARC Circuitry', qty: 10, sell: 1000, rvi: -25 },
        { name: 'Bombardier Cell', qty: 6, sell: 3000, rvi: -22 },
      ]},
    ],
  },
  {
    name: 'Medical Lab', icon: '🏥', color: '#4ade80',
    levels: [
      { level: 2, items: [
        { name: 'Tick Pod', qty: 8, sell: 640, rvi: -22 },
        { name: 'Durable Cloth', qty: 5, sell: 640, rvi: -53 },
        { name: 'Cracked Bioscanner', qty: 2, sell: 1000, rvi: -10 },
        { name: 'Rusted Medical Kit', qty: 3, sell: 2000, rvi: 0 },
      ]},
      { level: 3, items: [
        { name: 'Antiseptic', qty: 8, sell: 1000, rvi: -50 },
        { name: 'Surveyor Vault', qty: 5, sell: 2000, rvi: -18 },
      ]},
    ],
  },
  {
    name: 'Utility', icon: '🔌', color: '#2dd4bf',
    levels: [
      { level: 2, items: [
        { name: 'Snitch Scanner', qty: 6, sell: 1000, rvi: -10 },
        { name: 'Electrical Components', qty: 5, sell: 640, rvi: -48 },
        { name: 'Damaged Heat Sink', qty: 2, sell: 1000, rvi: -15 },
        { name: 'Fried Motherboard', qty: 3, sell: 2000, rvi: -21 },
      ]},
      { level: 3, items: [
        { name: 'Adv. Electrical Comp.', qty: 5, sell: 1750, rvi: -52 },
        { name: 'Leaper Pulse Unit', qty: 4, sell: 3000, rvi: -22 },
      ]},
    ],
  },
  {
    name: 'Scrappy', icon: '🐕', color: '#fbbf24',
    levels: [
      { level: 2, items: [{ name: 'Dog Collar', qty: 1, sell: 640, rvi: -26 }] },
      { level: 3, items: [
        { name: 'Lemon', qty: 3, sell: 640, rvi: -25 },
        { name: 'Apricot', qty: 3, sell: 640, rvi: -53 },
      ]},
      { level: 4, items: [
        { name: 'Prickly Pear', qty: 6, sell: 640, rvi: -53 },
        { name: 'Olives', qty: 6, sell: 640, rvi: -83 },
        { name: 'Cat Bed', qty: 1, sell: 1000, rvi: -25 },
      ]},
      { level: 5, items: [
        { name: 'Mushroom', qty: 12, sell: 1000, rvi: -25 },
        { name: 'Apricot', qty: 12, sell: 640, rvi: -53 },
        { name: 'Very Comfortable Pillow', qty: 3, sell: 2000, rvi: -25 },
      ]},
    ],
  },
];

// ── EXPEDITION PROJECT 1 (most relevant for beginners) ──
const EXPEDITIONS = [
  {
    name: 'Expedição 1', phases: [
      { phase: 1, name: 'Foundation', items: [
        { name: 'Metal Parts', qty: 150, sell: 75 },
        { name: 'Rubber Parts', qty: 200, sell: 50 },
        { name: 'ARC Alloy', qty: 80, sell: 200 },
        { name: 'Steel Spring', qty: 15, sell: 300 },
      ]},
      { phase: 2, name: 'Core Systems', items: [
        { name: 'Durable Cloth', qty: 35, sell: 640 },
        { name: 'Wires', qty: 30, sell: 200 },
        { name: 'Electrical Components', qty: 30, sell: 640 },
        { name: 'Cooling Fan', qty: 5, sell: 2000 },
      ]},
      { phase: 3, name: 'Framework', items: [
        { name: 'Light Bulb', qty: 5, sell: 2000 },
        { name: 'Battery', qty: 30, sell: 250 },
        { name: 'Sensors', qty: 20, sell: 500 },
        { name: 'Exodus Modules', qty: 1, sell: 2750 },
      ]},
      { phase: 4, name: 'Outfitting', items: [
        { name: 'Humidifier', qty: 5, sell: 1000 },
        { name: 'Adv. Electrical Comp.', qty: 5, sell: 1750 },
        { name: 'Magnetic Accelerator', qty: 3, sell: 5500 },
        { name: 'Leaper Pulse Unit', qty: 3, sell: 3000 },
      ]},
      { phase: 5, name: 'Load Stage', items: [
        { name: 'Combat Items', qty: '200k ¢', sell: null },
        { name: 'Survival Items', qty: '100k ¢', sell: null },
        { name: 'Provisions', qty: '150k ¢', sell: null },
        { name: 'Materials', qty: '300k ¢', sell: null },
      ]},
    ],
  },
];

// ── QUEST ITEMS TO KEEP ────────────────────
const QUEST_ITEMS = [
  { name: 'Magnetron', qty: 1, sell: 6000, rvi: -5 },
  { name: 'Power Rod', qty: 1, sell: 5000, rvi: -45 },
  { name: 'Rocketeer Driver', qty: 2, sell: 3000, rvi: -22 },
  { name: 'Leaper Pulse Unit', qty: 1, sell: 3000, rvi: -22 },
  { name: 'Hornet Driver', qty: 2, sell: 1000, rvi: -16 },
  { name: 'Surveyor Vault', qty: 1, sell: 2000, rvi: -18 },
  { name: 'Wasp Driver', qty: 4, sell: 640, rvi: 63 },
  { name: 'Antiseptic', qty: 2, sell: 1000, rvi: -50 },
  { name: 'Water Pump', qty: 1, sell: 1000, rvi: -18 },
  { name: 'Flow Controller', qty: 1, sell: 3000, rvi: -8 },
  { name: 'Syringe', qty: 1, sell: 500, rvi: -44 },
  { name: 'Snitch Scanner', qty: 2, sell: 1000, rvi: -8 },
  { name: 'Fertilizer', qty: 1, sell: 1000, rvi: -80 },
  { name: 'Durable Cloth', qty: 3, sell: 640, rvi: -53 },
  { name: 'Great Mullein', qty: 3, sell: 300, rvi: -33 },
  { name: 'Battery', qty: 3, sell: 250, rvi: -40 },
  { name: 'ARC Alloy', qty: 3, sell: 200, rvi: -25 },
  { name: 'Wires', qty: 11, sell: 200, rvi: -60 },
  { name: 'Fireball Burner', qty: 1, sell: 640, rvi: -27 },
  { name: 'Burletta', qty: 1, sell: 2000, rvi: -46 },
];


// ============================================
// RENDERING — Section Router
// ============================================

function renderApp() {
  const main = document.getElementById('main-content');
  const filterBar = document.getElementById('filter-bar');

  // Show/hide filter bar (only for loot section)
  filterBar.classList.toggle('hidden', currentSection !== 'loot');

  switch (currentSection) {
    case 'loot': renderLootSection(main); break;
    case 'workshop': renderWorkshopSection(main); break;
    case 'expedition': renderExpeditionSection(main); break;
    case 'quests': renderQuestSection(main); break;
    case 'rules': renderRulesSection(main); break;
  }

  initRevealObserver();
  if (currentSection === 'loot') initCardClicks();
}


// ── LOOT SECTION ───────────────────────────
function renderLootSection(container) {
  const legend = `
    <div class="legend">
      ${Object.entries(CATEGORIES).map(([, c]) => `
        <div class="legend-item"><div class="legend-dot" style="color:${c.color};background:${c.color}"></div>${c.label}</div>
      `).join('')}
    </div>`;

  let sections = '';
  for (const [catId, cat] of Object.entries(CATEGORIES)) {
    const catItems = ITEMS.filter(i => i.category === catId);
    if (catItems.length) {
      sections += `
        <div class="category-section" data-category="${catId}">
          <div class="section-header">
            <div class="section-accent" style="background:${cat.color}"></div>
            <span class="section-title">${cat.label}</span>
            <span class="section-count">${catItems.length} itens</span>
          </div>
          <div class="item-grid">${catItems.map(renderItemCard).join('')}</div>
        </div>`;
    }
  }

  // Recycle advice
  sections += `
    <div class="category-section" data-category="recycle">
      <div class="section-header">
        <div class="section-accent" style="background:${CATEGORIES.recycle.color}"></div>
        <span class="section-title">${CATEGORIES.recycle.label}</span>
        <span class="section-count">3 dicas</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${RECYCLE_ADVICE.map(a => `
          <div class="advice-card" data-reveal>
            <div class="advice-icon">${a.icon}</div>
            <div class="advice-content">
              <div class="advice-title">${a.title}</div>
              <div class="advice-text">${a.text}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;

  container.innerHTML = legend + sections;
}

function renderItemCard(item) {
  const cat = CATEGORIES[item.category];
  return `
    <div class="item-card" data-id="${item.id}" data-category="${item.category}" data-reveal>
      <div class="rarity-strip" style="background:${cat.color}"></div>
      <div class="item-img-wrap">
        <img class="item-img" src="${item.image}" alt="${item.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="item-img-fallback" style="display:none;">${item.emoji}</div>
      </div>
      <div class="item-name">${item.name}</div>
      <div class="item-tip">${item.quickTip}</div>
      <span class="badge ${cat.badgeClass}">${item.badge}</span>
      <span class="click-hint">detalhes →</span>
    </div>`;
}


// ── WORKSHOP SECTION ───────────────────────
function renderWorkshopSection(container) {
  const intro = `
    <div class="section-intro" data-reveal>
      <div class="section-header" style="margin-top:0">
        <div class="section-accent" style="background:#f5a623"></div>
        <span class="section-title">Upgrades do Workshop</span>
        <span class="section-count">${WORKSHOP.length} estações</span>
      </div>
      <p class="intro-text">Itens necessários para upar cada estação. <strong>Não venda nem recicle</strong> esses itens — guarde no baú até ter tudo para o upgrade.<br>
      <span class="rvi-legend"><span class="rvi rvi-pos">+%</span> = vale reciclar &nbsp; <span class="rvi rvi-neg">-%</span> = melhor vender se sobrar</span></p>
    </div>`;

  let stations = '';
  for (const station of WORKSHOP) {
    stations += `
      <div class="ws-station" data-reveal>
        <div class="ws-station-header">
          <span class="ws-icon">${station.icon}</span>
          <span class="ws-name">${station.name}</span>
        </div>
        <div class="ws-levels">
          ${station.levels.map(lvl => `
            <div class="ws-level">
              <div class="ws-level-tag" style="border-color:${station.color}40;color:${station.color}">Nível ${lvl.level}</div>
              <div class="ws-items">
                ${lvl.items.map(it => `
                  <div class="ws-item">
                    <div class="ws-item-name">${it.name}</div>
                    <div class="ws-item-meta">
                      <span class="ws-qty">×${it.qty}</span>
                      <span class="ws-sell">${it.sell}¢</span>
                      <span class="rvi ${it.rvi >= 0 ? 'rvi-pos' : 'rvi-neg'}">${it.rvi > 0 ? '+' : ''}${it.rvi}%</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  container.innerHTML = intro + '<div class="ws-grid">' + stations + '</div>';
}


// ── EXPEDITION SECTION ─────────────────────
function renderExpeditionSection(container) {
  const intro = `
    <div class="section-intro" data-reveal>
      <div class="section-header" style="margin-top:0">
        <div class="section-accent" style="background:#60a5fa"></div>
        <span class="section-title">Projeto Expedição</span>
        <span class="section-count">5 fases</span>
      </div>
      <p class="intro-text">Materiais necessários para completar o Projeto Expedição 1. Cada fase deve ser completada em ordem. <strong>Comece a juntar desde cedo.</strong></p>
    </div>`;

  const exp = EXPEDITIONS[0];
  let phases = '';
  for (const phase of exp.phases) {
    phases += `
      <div class="exp-phase" data-reveal>
        <div class="exp-phase-header">
          <span class="exp-phase-num">Fase ${phase.phase}</span>
          <span class="exp-phase-name">${phase.name}</span>
        </div>
        <div class="exp-items">
          ${phase.items.map(it => `
            <div class="exp-item">
              <div class="exp-item-name">${it.name}</div>
              <div class="exp-item-meta">
                <span class="ws-qty">×${it.qty}</span>
                ${it.sell !== null ? `<span class="ws-sell">${it.sell}¢</span>` : '<span class="ws-sell tag tag-info">valor total</span>'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  container.innerHTML = intro + '<div class="exp-timeline">' + phases + '</div>';
}


// ── QUEST SECTION ──────────────────────────
function renderQuestSection(container) {
  const intro = `
    <div class="section-intro" data-reveal>
      <div class="section-header" style="margin-top:0">
        <div class="section-accent" style="background:#fbbf24"></div>
        <span class="section-title">Itens para Quests</span>
        <span class="section-count">${QUEST_ITEMS.length} itens</span>
      </div>
      <p class="intro-text">Não venda esses itens — são necessários para entregar em quests. Guarde no baú.<br>
      <span class="rvi-legend"><span class="rvi rvi-pos">+%</span> = vale reciclar &nbsp; <span class="rvi rvi-neg">-%</span> = melhor vender se sobrar</span></p>
    </div>`;

  const grid = `
    <div class="quest-grid">
      ${QUEST_ITEMS.map(it => `
        <div class="quest-item" data-reveal>
          <div class="quest-item-name">${it.name}</div>
          <div class="quest-item-meta">
            <span class="ws-qty">×${it.qty}</span>
            <span class="ws-sell">${it.sell}¢</span>
            <span class="rvi ${it.rvi >= 0 ? 'rvi-pos' : 'rvi-neg'}">${it.rvi > 0 ? '+' : ''}${it.rvi}%</span>
          </div>
        </div>
      `).join('')}
    </div>`;

  container.innerHTML = intro + grid;
}


// ── RULES SECTION ──────────────────────────
function renderRulesSection(container) {
  container.innerHTML = `
    <section class="rules-section" style="margin-top:24px">
      <div class="rules-header">
        <span class="rules-header-icon">⚡</span>
        <span class="rules-header-text">Regras de Ouro</span>
      </div>
      <div class="rules-container">
        ${GOLDEN_RULES.map((rule, i) => `
          <div class="rule-item" data-reveal>
            <div class="rule-num">${String(i + 1).padStart(2, '0')}</div>
            <div class="rule-text">
              <span class="tag tag-${rule.tag}">${rule.tagText}</span>
              ${rule.text}
            </div>
          </div>
        `).join('')}
      </div>
    </section>`;
}


// ── DETAIL PANEL ───────────────────────────
function renderDetailPanel(item) {
  const cat = CATEGORIES[item.category];
  const panel = document.getElementById('detail-panel');
  panel.innerHTML = `
    <div class="detail-close">
      <button class="detail-close-btn" onclick="closeDetail()" aria-label="Fechar">✕</button>
    </div>
    <div class="detail-header">
      <div class="detail-img-wrap" style="border-color:${cat.color}22">
        <img class="detail-img" src="${item.image}" alt="${item.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="detail-img-fallback" style="display:none;font-size:42px;">${item.emoji}</div>
      </div>
      <div class="detail-title-group">
        <div class="detail-name">${item.name}</div>
        <div class="detail-name-en">${item.nameEn}</div>
        <div class="detail-meta">
          <span class="badge ${cat.badgeClass}">${item.badge}</span>
          <span class="detail-rarity ${item.rarity}">${item.rarity}</span>
        </div>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-section">
        <div class="detail-section-label">Resumo</div>
        <div class="detail-description">${item.description}</div>
      </div>
      <div class="detail-section">
        <div class="detail-section-label">Onde Encontrar</div>
        <ul class="source-list">
          ${item.sources.map(s => `
            <li class="source-item">
              <span class="source-icon">${s.icon}</span>
              <span>${s.name}</span>
              ${s.detail ? `<span class="source-detail">${s.detail}</span>` : ''}
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="detail-section">
        <div class="detail-section-label">Usado Para</div>
        <ul class="use-list">
          ${item.usedFor.map(u => `<li class="use-item">${u}</li>`).join('')}
        </ul>
      </div>
      <div class="detail-section">
        <div class="detail-section-label">Dados</div>
        <div class="stats-grid">
          <div class="stat-box">
            <div class="stat-label">Peso</div>
            <div class="stat-value">${item.weight}</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">Venda</div>
            <div class="stat-value">${item.sellValue} ¢</div>
          </div>
          <div class="stat-box" style="grid-column:1/-1">
            <div class="stat-label">Reciclagem</div>
            <div class="stat-value" style="font-size:12px;font-weight:400">${item.recycleInfo}</div>
          </div>
        </div>
      </div>
      <div class="detail-section">
        <div class="detail-section-label">Dicas</div>
        <ul class="tip-list">
          ${item.tips.map(t => `
            <li class="tip-item"><span class="tip-icon">▸</span><span>${t}</span></li>
          `).join('')}
        </ul>
      </div>
    </div>`;
  panel.scrollTop = 0;
}


// ============================================
// INTERACTIONS
// ============================================

function openDetail(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  if (!item) return;
  renderDetailPanel(item);
  requestAnimationFrame(() => {
    document.getElementById('detail-panel').classList.add('open');
    document.getElementById('detail-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}

function closeDetail() {
  document.getElementById('detail-panel').classList.remove('open');
  document.getElementById('detail-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initCardClicks() {
  document.querySelectorAll('.item-card[data-id]').forEach(card => {
    card.addEventListener('click', () => openDetail(card.dataset.id));
  });
}

function filterItems(category) {
  document.querySelectorAll('.category-section').forEach(s => {
    s.classList.toggle('hidden', category !== 'all' && s.dataset.category !== category);
  });
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
}

function switchSection(section) {
  currentSection = section;
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === section);
  });
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ============================================
// ANIMATIONS
// ============================================

function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = Array.from(el.parentElement.querySelectorAll('[data-reveal]'));
        const delay = Math.min(siblings.indexOf(el) * 60, 400);
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

function initStickyNav() {
  const nav = document.getElementById('section-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 100);
  }, { passive: true });
}


// ============================================
// INIT
// ============================================

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

document.addEventListener('DOMContentLoaded', () => {
  renderApp();

  // Section nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchSection(btn.dataset.section));
  });

  // Loot filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterItems(btn.dataset.filter));
  });

  // Detail overlay close
  document.getElementById('detail-overlay').addEventListener('click', closeDetail);

  initScrollProgress();
  initStickyNav();
});
