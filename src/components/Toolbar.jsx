import { DIA_NOMES, MATERIA_NOMES, SEMANAS } from '../data/seed.js'

// Botão "Nova atividade" + filtros (Semana / Dia / Matéria / busca) + ações (export/import/reset).
export default function Toolbar({ filtros, setFiltros, onNova, onExport, onImport, onReset }) {
  const set = (campo) => (e) => setFiltros((f) => ({ ...f, [campo]: e.target.value }))

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <button
        onClick={onNova}
        className="rounded-md bg-gray-800 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-900 dark:bg-blue-600 dark:hover:bg-blue-500"
      >
        + Nova atividade
      </button>

      <input
        value={filtros.busca}
        onChange={set('busca')}
        placeholder="Buscar tópico/atividade…"
        className="w-48 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm outline-none focus:border-gray-400 dark:border-white/10 dark:bg-[#252525] dark:text-gray-100 dark:placeholder-gray-500"
      />

      <Select valor={filtros.materia} onChange={set('materia')} todos="Todas as matérias" opcoes={MATERIA_NOMES} />
      <Select valor={filtros.dia} onChange={set('dia')} todos="Todos os dias" opcoes={DIA_NOMES} />
      <Select
        valor={filtros.semana}
        onChange={set('semana')}
        todos="Todas as semanas"
        opcoes={SEMANAS}
        rotulo={(s) => `Semana ${s}`}
      />

      <label className="flex cursor-pointer items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm dark:border-white/10 dark:bg-[#252525] dark:text-gray-200">
        <input
          type="checkbox"
          checked={filtros.pendentes}
          onChange={(e) => setFiltros((f) => ({ ...f, pendentes: e.target.checked }))}
        />
        Só pendentes
      </label>

      <div className="ml-auto flex items-center gap-1.5">
        <button onClick={onExport} className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm hover:bg-gray-50 dark:border-white/10 dark:bg-[#252525] dark:text-gray-200 dark:hover:bg-white/10" title="Exportar backup JSON">
          Exportar
        </button>
        <label className="cursor-pointer rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm hover:bg-gray-50 dark:border-white/10 dark:bg-[#252525] dark:text-gray-200 dark:hover:bg-white/10" title="Importar backup JSON">
          Importar
          <input type="file" accept="application/json" className="hidden" onChange={onImport} />
        </label>
        <button onClick={onReset} className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm text-red-600 hover:bg-red-50 dark:border-white/10 dark:bg-[#252525] dark:text-red-400 dark:hover:bg-red-500/10" title="Resetar para os dados de exemplo">
          Resetar
        </button>
      </div>
    </div>
  )
}

function Select({ valor, onChange, todos, opcoes, rotulo }) {
  return (
    <select
      value={valor}
      onChange={onChange}
      className="rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm outline-none focus:border-gray-400 dark:border-white/10 dark:bg-[#252525] dark:text-gray-200"
    >
      <option value="">{todos}</option>
      {opcoes.map((o) => (
        <option key={o} value={o}>
          {rotulo ? rotulo(o) : o}
        </option>
      ))}
    </select>
  )
}
