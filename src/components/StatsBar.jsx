import { pct } from '../lib/calc.js'

// Resumo geral: feitos, % concluído, questões, desempenho médio.
export default function StatsBar({ r }) {
  const cards = [
    { rotulo: 'Atividades', valor: r.total },
    { rotulo: 'Feitas', valor: `${r.feitos}/${r.total}` },
    { rotulo: 'Concluído', valor: pct(r.pctConcluido) },
    { rotulo: 'Revisadas', valor: r.revisados },
    { rotulo: 'Questões', valor: r.questoes },
    { rotulo: 'Desempenho médio', valor: pct(r.desempenhoMedio), destaque: true },
  ]
  return (
    <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {cards.map((c) => (
        <div key={c.rotulo} className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 shadow-sm dark:border-white/10 dark:bg-[#252525]">
          <div className="text-[11px] uppercase tracking-wide text-gray-400 dark:text-gray-500">{c.rotulo}</div>
          <div className={`mt-0.5 text-xl font-semibold ${c.destaque ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-100'}`}>
            {c.valor}
          </div>
        </div>
      ))}
    </div>
  )
}
