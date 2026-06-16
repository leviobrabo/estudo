import { useEffect, useState } from 'react'

// Cabeçalho: título 🎈 + relógio ao vivo (substitui o widget indify do Notion) + toggle de tema.
export default function Header({ tema, setTema }) {
  const [agora, setAgora] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setAgora(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const data = agora.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  const escuro = tema === 'dark'

  return (
    <header className="relative mb-6 flex flex-col items-center text-center">
      <button
        onClick={() => setTema(escuro ? 'light' : 'dark')}
        className="absolute right-0 top-0 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-lg shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-[#252525] dark:hover:bg-white/10"
        title={escuro ? 'Modo claro' : 'Modo escuro'}
      >
        {escuro ? '☀️' : '🌙'}
      </button>

      <div className="mb-3 rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm dark:border-white/10 dark:bg-[#252525]">
        <div className="font-mono text-3xl font-semibold tracking-tight text-gray-800 tabular-nums dark:text-gray-100">
          {hora}
        </div>
        <div className="mt-0.5 text-xs capitalize text-gray-400 dark:text-gray-500">{data}</div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">🎈 Template Minimalista</h1>
      <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">Planner de estudos para concurso</p>
    </header>
  )
}
