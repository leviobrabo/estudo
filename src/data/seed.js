// Dados-base do template Notion "🎈 Template Minimalista"
// Matérias, cores, dias, semanas, limiares de desempenho e atividades de exemplo.

// Mapa cor Notion -> classes Tailwind (texto/fundo/borda) p/ chips e barras.
export const corClasse = {
  default: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300', bar: 'bg-gray-400' },
  gray: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300', bar: 'bg-gray-400' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', bar: 'bg-blue-500' },
  green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', bar: 'bg-green-500' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300', bar: 'bg-yellow-500' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-300', bar: 'bg-pink-500' },
  red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', bar: 'bg-red-500' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300', bar: 'bg-orange-500' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300', bar: 'bg-purple-500' },
  brown: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300', bar: 'bg-amber-600' },
}

// Matérias do template (com a cor original do Notion).
export const MATERIAS = [
  { nome: 'Português', cor: 'brown' },
  { nome: 'RLM', cor: 'purple' },
  { nome: 'Matemática Financeira', cor: 'default' },
  { nome: 'Contabilidade', cor: 'blue' },
  { nome: 'Constitucional', cor: 'pink' },
  { nome: 'Administrativo', cor: 'orange' },
  { nome: 'Auditoria Geral', cor: 'red' },
  { nome: 'Auditoria Governamental', cor: 'green' },
  { nome: 'Direito Tributário', cor: 'gray' },
  { nome: 'Tecnologia da Informação', cor: 'pink' },
  { nome: 'Contabilidade Pública', cor: 'default' },
  { nome: 'AFO', cor: 'brown' },
  { nome: 'Controle Externo', cor: 'red' },
  { nome: 'Estatística', cor: 'blue' },
  { nome: 'Civil', cor: 'purple' },
  { nome: 'Empresarial', cor: 'blue' },
  { nome: 'Penal', cor: 'blue' },
  { nome: 'Administração Geral', cor: 'pink' },
  { nome: 'Administração Pública', cor: 'green' },
  { nome: 'Contabilidade de Custos', cor: 'orange' },
  { nome: 'Economia', cor: 'blue' },
  { nome: 'Legislação Tributária', cor: 'yellow' },
  { nome: 'Legislação Específica', cor: 'pink' },
  { nome: 'Direito Previdenciário', cor: 'yellow' },
  { nome: 'Inglês', cor: 'default' },
  { nome: 'ÉTICA', cor: 'purple' },
  { nome: 'PROCESSO CIVIL', cor: 'default' },
  { nome: 'Reforma Tributária', cor: 'orange' },
]

export const MATERIA_NOMES = MATERIAS.map((m) => m.nome)

export const DIAS = [
  { nome: 'Segunda', cor: 'blue' },
  { nome: 'Terça', cor: 'gray' },
  { nome: 'Quarta', cor: 'yellow' },
  { nome: 'Quinta', cor: 'pink' },
  { nome: 'Sexta', cor: 'green' },
  { nome: 'Sábado', cor: 'red' },
  { nome: 'Domingo', cor: 'orange' },
]
export const DIA_NOMES = DIAS.map((d) => d.nome)

export const SEMANAS = Array.from({ length: 10 }, (_, i) => String(i + 1))
const SEMANA_CORES = ['green', 'pink', 'brown', 'gray', 'purple', 'red', 'orange', 'yellow', 'default', 'blue']

// mapa de cores por valor (matéria/dia/semana) p/ reuso nos chips
export const corDe = {}
MATERIAS.forEach((m) => (corDe[m.nome] = m.cor))
DIAS.forEach((d) => (corDe[d.nome] = d.cor))
SEMANAS.forEach((s, i) => (corDe[s] = SEMANA_CORES[i]))

// Limiar de desempenho por matéria (alvo). Abaixo disso = ponto fraco.
// Extraído da view "Pontos fracos" do Notion. Default 0.7.
export const LIMIAR_PADRAO = 0.7
export const LIMIARES = {
  Português: 0.7,
  RLM: 0.75,
  'Matemática Financeira': 0.75,
  'Direito Tributário': 0.75,
  'Auditoria Geral': 0.8,
  Constitucional: 0.75,
  Administrativo: 0.75,
  'Contabilidade de Custos': 0.75,
  Civil: 0.6,
  Empresarial: 0.6,
  Penal: 0.6,
  Estatística: 0.6,
  AFO: 0.6,
  'Tecnologia da Informação': 0.6,
  'Reforma Tributária': 0.6,
  'Legislação Tributária': 0.75,
  Economia: 0.6,
}

let _id = 0
const nid = () => `seed-${++_id}`

// Mapa dos rótulos do plano Sefaz-BA → matérias do template (p/ chip colorido).
const MAP_MATERIA = {
  Estatística: 'Estatística',
  Contabilidade: 'Contabilidade',
  Português: 'Português',
  TI: 'Tecnologia da Informação',
  Tributário: 'Direito Tributário',
  Constitucional: 'Constitucional',
  Economia: 'Economia',
  RLM: 'RLM',
  Auditoria: 'Auditoria Geral',
  'Mat. Financeira': 'Matemática Financeira',
  Civil: 'Civil',
  Administrativo: 'Administrativo',
  Adm: 'Administrativo',
  Penal: 'Penal',
  Empresarial: 'Empresarial',
  Custos: 'Contabilidade de Custos',
  AFO: 'AFO',
  Reforma: 'Reforma Tributária',
}

// Calendário S1–S10 (seção 8 do Plano de domínio Sefaz-BA).
// Cada item: [matéria(s) separadas por +, tópico]. Matéria '' = avaliação/genérico.
const PLANO = [
  { s: 1, carga: '18–20h',
    P: [['Estatística', 'Amostragem'], ['Contabilidade', 'Ativo'], ['Português', 'Concordância']],
    M: [['TI', 'Regressão — abrir'], ['Tributário', 'LC24 — abrir']],
    R: [['Constitucional', 'Controle — abrir']],
    A: [['', 'Diagnóstico curto (sem simulado)']] },
  { s: 2, carga: '22–24h',
    P: [['TI', 'Regressão → consolidar; Dimensional'], ['Tributário', 'LC24 → consol; Kandir'], ['Estatística', 'Distribuições']],
    M: [['Contabilidade', 'Ativo → validar'], ['Português', 'Reescrita']],
    R: [['Economia', 'Micro — começar']],
    A: [['', 'Diagnóstico curto']] },
  { s: 3, carga: '26h',
    P: [['Contabilidade', 'Demonstrações'], ['Constitucional', 'Controle → consol'], ['TI', 'Segurança I; NoSQL']],
    M: [['Estatística', 'Amostragem → validar'], ['Tributário', 'Legislação / Obrigação']],
    R: [['RLM', 'Sequências']],
    A: [['', 'Mini-simulado 20–30']] },
  { s: 4, carga: '28h',
    P: [['Estatística', 'Testes → consol'], ['Tributário', 'Impostos'], ['Português', 'Interpretação (volume)']],
    M: [['TI', 'PMBOK'], ['Auditoria', 'EFD']],
    R: [['Economia', 'Mercados']],
    A: [['', 'Mini-simulado misto']] },
  { s: 5, carga: '28h',
    P: [['RLM', 'Aritmética / Argumentação'], ['Contabilidade', 'Regimes B / CPCs'], ['TI', 'Cluster / Redes']],
    M: [['Constitucional', 'Jurisprudência'], ['Mat. Financeira', 'Amortização']],
    R: [['Civil', 'LINDB + Negócios Jurídicos']],
    A: [['', 'Mini-simulado misto']] },
  { s: 6, carga: '28h',
    P: [['TI', 'SGBDs / SQL (volume)'], ['Estatística', 'IC / Probabilidade → validar'], ['Tributário', 'Validar fechados']],
    M: [['Português', 'Pontuação'], ['Administrativo', 'Jurisprudência']],
    R: [['Economia', 'Macro']],
    A: [['', 'Mini-simulado misto']] },
  { s: 7, carga: '28h',
    P: [['RLM', 'Equações / Funções'], ['Contabilidade', 'Validar'], ['TI', 'Python / ML (restante)']],
    M: [['Auditoria', 'Manutenção'], ['Penal', 'Crimes contra a ordem tributária']],
    R: [['Mat. Financeira', 'Descontos']],
    A: [['', 'Primeiras validações + mini-sim por matéria']] },
  { s: 8, carga: '28h',
    P: [['', '3ª rodada — só dos abaixo da meta (varia)']],
    M: [['Adm+Custos', '2 fortes em manutenção']],
    R: [['Civil', 'Posse / Obrigações']],
    A: [['', 'Revisão do Anki acumulado + simulado misto 50–80']] },
  { s: 9, carga: '28h',
    P: [['', 'Reforço cirúrgico nos críticos restantes']],
    M: [['Empresarial', 'Sociedade Limitada'], ['Português', 'Manutenção']],
    R: [['Economia', 'Finanças Públicas']],
    A: [['', 'Simulado maior cronometrado + análise de tempo + top-5 perdas']] },
  { s: 10, carga: '28h',
    P: [['', 'Correção dos 5 maiores pontos de perda']],
    M: [['', '2 manutenções pendentes']],
    R: [],
    A: [['', 'Novo simulado + comparar com S9 + definir ciclo seguinte']] },
]

const TIPOS = { P: 'Principal', M: 'Manutenção', R: 'Rotação', A: 'Avaliação' }

function linha(semana, carga, tipo, [materiaRaw, topico]) {
  const materia = materiaRaw
    ? materiaRaw.split('+').map((m) => MAP_MATERIA[m] || m)
    : []
  return {
    id: nid(),
    topico,
    atividade: tipo,
    materia,
    dia: [],
    semana: semana ? [String(semana)] : [],
    feito: false,
    revisado: false,
    acertos: null,
    questoes: null,
    texto: `Carga ${carga}`,
  }
}

// Atividades = calendário S1–S10 do plano.
const atividadesPlano = PLANO.flatMap((sem) =>
  ['P', 'M', 'R', 'A'].flatMap((k) => (sem[k] || []).map((item) => linha(sem.s, sem.carga, TIPOS[k], item))),
)

// AFO e Reforma (DT II): rodam em paralelo nos slots de teoria (~70 questões no ciclo).
const atividadesParalelas = [
  linha('', '28h', 'Teoria + 10–15 questões/unidade', ['AFO', 'AFO — teoria + questões (interleave)']),
  linha('', '28h', 'Teoria + 10–15 questões/unidade', ['Reforma', 'Reforma Tributária — teoria + questões']),
]

export const atividadesExemplo = [...atividadesPlano, ...atividadesParalelas]
