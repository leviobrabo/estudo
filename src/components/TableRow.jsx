import { DIA_NOMES, MATERIA_NOMES, SEMANAS } from '../data/seed.js'
import { corDesempenho, desempenho, isPontoFraco, pct } from '../lib/calc.js'
import MultiSelect from './MultiSelect.jsx'

// Linha editável da tabela Planejamento.
export default function TableRow({ a, onChange, onDelete }) {
  const set = (campo, valor) => onChange({ ...a, [campo]: valor })
  const d = desempenho(a)
  const cd = corDesempenho(d)
  const fraco = isPontoFraco(a)

  const num = (campo) => (e) => {
    const v = e.target.value
    set(campo, v === '' ? null : Number(v))
  }

  return (
    <tr className={`border-b border-gray-100 align-top ${a.feito ? 'bg-gray-50/60' : ''}`}>
      {/* Tópico */}
      <td className="px-1 py-1">
        <textarea
          rows={1}
          value={a.topico}
          onChange={(e) => set('topico', e.target.value)}
          placeholder="Tópico…"
          className={`w-full resize-none rounded px-1.5 py-1 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 ${
            a.feito ? 'text-gray-400 line-through' : 'font-medium text-gray-800'
          }`}
        />
        {fraco && <span className="ml-1 text-[10px] font-semibold uppercase text-red-500">ponto fraco</span>}
      </td>

      {/* Atividade */}
      <td className="px-1 py-1">
        <input
          value={a.atividade}
          onChange={(e) => set('atividade', e.target.value)}
          placeholder="—"
          className="w-full rounded px-1.5 py-1 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100"
        />
      </td>

      {/* Matéria */}
      <td className="px-1 py-1">
        <MultiSelect valor={a.materia} opcoes={MATERIA_NOMES} onChange={(v) => set('materia', v)} />
      </td>

      {/* Dia da semana */}
      <td className="px-1 py-1">
        <MultiSelect valor={a.dia} opcoes={DIA_NOMES} onChange={(v) => set('dia', v)} />
      </td>

      {/* Semana */}
      <td className="px-1 py-1">
        <MultiSelect valor={a.semana} opcoes={SEMANAS} onChange={(v) => set('semana', v)} />
      </td>

      {/* Feito */}
      <td className="px-1 py-1 text-center">
        <input type="checkbox" checked={a.feito} onChange={(e) => set('feito', e.target.checked)} className="h-4 w-4 cursor-pointer" />
      </td>

      {/* Revisado */}
      <td className="px-1 py-1 text-center">
        <input type="checkbox" checked={a.revisado} onChange={(e) => set('revisado', e.target.checked)} className="h-4 w-4 cursor-pointer" />
      </td>

      {/* Acertos */}
      <td className="px-1 py-1">
        <input
          type="number"
          min={0}
          value={a.acertos ?? ''}
          onChange={num('acertos')}
          placeholder="0"
          className="w-14 rounded px-1.5 py-1 text-center text-sm outline-none hover:bg-gray-100 focus:bg-gray-100"
        />
      </td>

      {/* Questões */}
      <td className="px-1 py-1">
        <input
          type="number"
          min={0}
          value={a.questoes ?? ''}
          onChange={num('questoes')}
          placeholder="0"
          className="w-14 rounded px-1.5 py-1 text-center text-sm outline-none hover:bg-gray-100 focus:bg-gray-100"
        />
      </td>

      {/* Desempenho (calculado) */}
      <td className="px-1 py-1 text-center">
        <span className={`inline-block rounded px-2 py-0.5 text-xs font-semibold ${cd.bg} ${cd.text}`}>{pct(d)}</span>
      </td>

      {/* Texto / nota */}
      <td className="px-1 py-1">
        <textarea
          rows={1}
          value={a.texto}
          onChange={(e) => set('texto', e.target.value)}
          placeholder="—"
          className="w-full resize-none rounded px-1.5 py-1 text-sm text-gray-600 outline-none hover:bg-gray-100 focus:bg-gray-100"
        />
      </td>

      {/* Excluir */}
      <td className="px-1 py-1 text-center">
        <button onClick={onDelete} className="rounded px-1.5 text-gray-300 hover:bg-red-50 hover:text-red-500" title="Excluir">
          ✕
        </button>
      </td>
    </tr>
  )
}
