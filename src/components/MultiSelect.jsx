import { useEffect, useRef, useState } from 'react'
import { corClasse, corDe } from '../data/seed.js'

// Multi-select com chips coloridos (Matéria, Dia, Semana). Dropdown simples.
export default function MultiSelect({ valor = [], opcoes, onChange, placeholder = '—', compact = false }) {
  const [aberto, setAberto] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function fora(e) {
      if (ref.current && !ref.current.contains(e.target)) setAberto(false)
    }
    document.addEventListener('mousedown', fora)
    return () => document.removeEventListener('mousedown', fora)
  }, [])

  const toggle = (op) => {
    if (valor.includes(op)) onChange(valor.filter((v) => v !== op))
    else onChange([...valor, op])
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setAberto((a) => !a)}
        className="flex min-h-[28px] w-full flex-wrap items-center gap-1 rounded px-1.5 py-1 text-left hover:bg-gray-100 dark:hover:bg-white/10"
      >
        {valor.length === 0 && <span className="text-gray-300 dark:text-gray-600">{placeholder}</span>}
        {valor.map((v) => (
          <Chip key={v} valor={v} />
        ))}
      </button>
      {aberto && (
        <div className="absolute z-30 mt-1 max-h-64 w-56 overflow-auto rounded-lg border border-gray-200 bg-white p-1 shadow-lg dark:border-white/10 dark:bg-[#2d2d2d]">
          {opcoes.map((op) => {
            const sel = valor.includes(op)
            return (
              <button
                key={op}
                type="button"
                onClick={() => toggle(op)}
                className={`flex w-full items-center justify-between gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-white/10 ${
                  sel ? 'font-medium' : ''
                }`}
              >
                <Chip valor={op} />
                {sel && <span className="text-gray-400">✓</span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function Chip({ valor }) {
  const c = corClasse[corDe[valor] || 'default'] || corClasse.default
  return (
    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium ${c.bg} ${c.text}`}>
      {valor}
    </span>
  )
}
