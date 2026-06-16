import TableRow from './TableRow.jsx'

const COLS = [
  'Tópico',
  'Atividade',
  'Matéria',
  'Dia da semana',
  'Semana',
  'Feito',
  'Revisado',
  'Acertos',
  'Questões',
  'Desempenho',
  'Texto',
  '',
]

// Tabela principal "Planejamento".
export default function PlanejamentoTable({ atividades, onChange, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w-[1100px] border-collapse">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-left text-[11px] uppercase tracking-wide text-gray-500">
            {COLS.map((c, i) => (
              <th key={i} className="px-2 py-2 font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {atividades.length === 0 && (
            <tr>
              <td colSpan={COLS.length} className="px-4 py-10 text-center text-sm text-gray-400">
                Nenhuma atividade. Clique em <strong>+ Nova atividade</strong> para começar.
              </td>
            </tr>
          )}
          {atividades.map((a) => (
            <TableRow key={a.id} a={a} onChange={onChange} onDelete={() => onDelete(a.id)} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
