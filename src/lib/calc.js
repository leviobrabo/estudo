// Cálculos do planner: desempenho (fórmula Notion), pontos fracos e agregado por matéria.
import { LIMIARES, LIMIAR_PADRAO, MATERIAS } from '../data/seed.js'

// Fórmula "Desempenho" do Notion: Total Acertos / Total questões. null se não há questões.
export function desempenho(a) {
  const q = Number(a.questoes)
  const ac = Number(a.acertos)
  if (!q || q <= 0) return null
  return Math.max(0, Math.min(1, ac / q))
}

// Limiar (alvo) de uma atividade = menor limiar entre suas matérias.
export function limiarDe(a) {
  if (!a.materia || a.materia.length === 0) return LIMIAR_PADRAO
  return Math.min(...a.materia.map((m) => LIMIARES[m] ?? LIMIAR_PADRAO))
}

// Regra da view "Pontos fracos": tem desempenho (≠ null e ≠ 0) E abaixo do limiar.
export function isPontoFraco(a) {
  const d = desempenho(a)
  if (d == null || d === 0) return false
  return d < limiarDe(a)
}

// Lista de pontos fracos ordenada por desempenho crescente (pior primeiro).
export function pontosFracos(atividades) {
  return atividades.filter(isPontoFraco).sort((x, y) => desempenho(x) - desempenho(y))
}

// Desempenho acumulado por matéria (espelha rollups Acertos/Total + fórmula Percentual).
export function desempenhoPorMateria(atividades) {
  const mapa = {}
  for (const a of atividades) {
    const ac = Number(a.acertos) || 0
    const q = Number(a.questoes) || 0
    if (q <= 0) continue
    for (const m of a.materia || []) {
      if (!mapa[m]) mapa[m] = { materia: m, acertos: 0, total: 0, itens: 0 }
      mapa[m].acertos += ac
      mapa[m].total += q
      mapa[m].itens += 1
    }
  }
  return MATERIAS.map((m) => mapa[m.nome]).filter(Boolean)
    .map((r) => ({ ...r, percentual: r.total > 0 ? r.acertos / r.total : null }))
    .sort((a, b) => (b.percentual ?? -1) - (a.percentual ?? -1))
}

// Resumo geral p/ a barra de estatísticas.
export function resumo(atividades) {
  const total = atividades.length
  const feitos = atividades.filter((a) => a.feito).length
  const revisados = atividades.filter((a) => a.revisado).length
  let somaAc = 0
  let somaQ = 0
  for (const a of atividades) {
    somaAc += Number(a.acertos) || 0
    somaQ += Number(a.questoes) || 0
  }
  return {
    total,
    feitos,
    revisados,
    questoes: somaQ,
    acertos: somaAc,
    pctConcluido: total > 0 ? feitos / total : 0,
    desempenhoMedio: somaQ > 0 ? somaAc / somaQ : null,
  }
}

// Cor do badge de desempenho (verde/amarelo/vermelho).
export function corDesempenho(d) {
  if (d == null) return { bg: 'bg-gray-100', text: 'text-gray-400' }
  if (d >= 0.75) return { bg: 'bg-green-100', text: 'text-green-700' }
  if (d >= 0.6) return { bg: 'bg-yellow-100', text: 'text-yellow-700' }
  return { bg: 'bg-red-100', text: 'text-red-700' }
}

export const pct = (n) => (n == null ? '—' : `${Math.round(n * 100)}%`)
