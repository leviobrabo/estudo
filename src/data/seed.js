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

// Atividades de exemplo (acertos/questões variados p/ disparar pontos fracos e desempenho).
export const atividadesExemplo = [
  {
    id: nid(),
    topico: 'Concordância verbal',
    atividade: 'Teoria + 20 questões',
    materia: ['Português'],
    dia: ['Segunda'],
    semana: ['1'],
    feito: true,
    revisado: false,
    acertos: 12,
    questoes: 20,
    texto: 'Revisar regência depois.',
  },
  {
    id: nid(),
    topico: 'Raciocínio lógico — proposições',
    atividade: 'Videoaula + exercícios',
    materia: ['RLM'],
    dia: ['Terça'],
    semana: ['1'],
    feito: true,
    revisado: false,
    acertos: 18,
    questoes: 25,
    texto: '',
  },
  {
    id: nid(),
    topico: 'Princípios constitucionais',
    atividade: 'Leitura da lei seca',
    materia: ['Constitucional'],
    dia: ['Quarta'],
    semana: ['1'],
    feito: true,
    revisado: true,
    acertos: 17,
    questoes: 20,
    texto: 'Foco em art. 37.',
  },
  {
    id: nid(),
    topico: 'Atos administrativos',
    atividade: 'Resumo + 15 questões',
    materia: ['Administrativo'],
    dia: ['Quinta'],
    semana: ['2'],
    feito: true,
    revisado: false,
    acertos: 9,
    questoes: 15,
    texto: 'Difícil: anulação x revogação.',
  },
  {
    id: nid(),
    topico: 'Auditoria — normas NBC TA',
    atividade: 'Mapa mental',
    materia: ['Auditoria Geral'],
    dia: ['Sexta'],
    semana: ['2'],
    feito: true,
    revisado: false,
    acertos: 14,
    questoes: 20,
    texto: '',
  },
  {
    id: nid(),
    topico: 'Tributos — espécies',
    atividade: 'Aula + questões CESPE',
    materia: ['Direito Tributário'],
    dia: ['Sábado'],
    semana: ['2'],
    feito: false,
    revisado: false,
    acertos: null,
    questoes: null,
    texto: 'Ainda não comecei.',
  },
]
