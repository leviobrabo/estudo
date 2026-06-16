import { corClasse, corDe } from '../data/seed.js'
import { desempenho, limiarDe, pct } from '../lib/calc.js'
import { Chip } from './MultiSelect.jsx'
import Toggle from './Toggle.jsx'

// View "Revisão → Pontos fracos": tópicos abaixo do alvo, pior primeiro.
export default function PontosFracos({ lista }) {
  return (
    <Toggle titulo="🔁 Revisão — Pontos fracos" badge={lista.length}>
      {lista.length === 0 ? (
        <p className="py-2 text-sm text-gray-400">
          Nenhum ponto fraco. Tudo acima do alvo (ou ainda sem questões respondidas). 🎉
        </p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {lista.map((a) => {
            const d = desempenho(a)
            const alvo = limiarDe(a)
            return (
              <li key={a.id} className="flex items-center gap-3 py-2">
                <span className="inline-block w-12 rounded bg-red-100 py-0.5 text-center text-xs font-semibold text-red-700">
                  {pct(d)}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-gray-800">{a.topico || '(sem título)'}</div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-1">
                    {(a.materia || []).map((m) => (
                      <Chip key={m} valor={m} />
                    ))}
                    {a.atividade && <span className="text-xs text-gray-400">· {a.atividade}</span>}
                  </div>
                </div>
                <span className="whitespace-nowrap text-xs text-gray-400">alvo {pct(alvo)}</span>
                <Barra d={d} cor={corDe[a.materia?.[0]] || 'red'} />
              </li>
            )
          })}
        </ul>
      )}
    </Toggle>
  )
}

function Barra({ d, cor }) {
  const c = corClasse[cor] || corClasse.default
  return (
    <div className="hidden h-2 w-24 overflow-hidden rounded-full bg-gray-100 sm:block">
      <div className={`h-full ${c.bar}`} style={{ width: `${Math.round((d || 0) * 100)}%` }} />
    </div>
  )
}
