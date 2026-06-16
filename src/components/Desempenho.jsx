import { corClasse, corDe } from '../data/seed.js'
import { pct } from '../lib/calc.js'
import { Chip } from './MultiSelect.jsx'
import Toggle from './Toggle.jsx'

// "Desempenho acumulado": agregado por matéria (soma acertos/total + percentual).
export default function Desempenho({ linhas }) {
  return (
    <Toggle titulo="📊 Desempenho acumulado" badge={linhas.length}>
      {linhas.length === 0 ? (
        <p className="py-2 text-sm text-gray-400">Sem questões respondidas ainda.</p>
      ) : (
        <div className="space-y-2.5">
          {linhas.map((r) => {
            const c = corClasse[corDe[r.materia] || 'default'] || corClasse.default
            return (
              <div key={r.materia} className="flex items-center gap-3">
                <div className="w-44 shrink-0">
                  <Chip valor={r.materia} />
                </div>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className={`h-full ${c.bar}`} style={{ width: `${Math.round((r.percentual || 0) * 100)}%` }} />
                </div>
                <span className="w-12 text-right text-sm font-semibold text-gray-700">{pct(r.percentual)}</span>
                <span className="w-20 text-right text-xs text-gray-400">
                  {r.acertos}/{r.total}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </Toggle>
  )
}
