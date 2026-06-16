import { useState } from 'react'

// Bloco recolhível (equivale ao toggle do Notion).
export default function Toggle({ titulo, badge, children, aberto: inicial = false }) {
  const [aberto, setAberto] = useState(inicial)
  return (
    <section className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm">
      <button
        onClick={() => setAberto((a) => !a)}
        className="flex w-full items-center gap-2 px-4 py-3 text-left"
      >
        <span className={`text-gray-400 transition-transform ${aberto ? 'rotate-90' : ''}`}>▶</span>
        <span className="font-semibold text-gray-800">{titulo}</span>
        {badge != null && (
          <span className="ml-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">{badge}</span>
        )}
      </button>
      {aberto && <div className="border-t border-gray-100 px-4 py-3">{children}</div>}
    </section>
  )
}
