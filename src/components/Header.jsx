import { useEffect, useState } from 'react'

// Cabeçalho: título 🎈 + relógio ao vivo (substitui o widget indify do Notion).
export default function Header() {
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

  return (
    <header className="mb-6 flex flex-col items-center text-center">
      <div className="mb-3 rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm">
        <div className="font-mono text-3xl font-semibold tracking-tight text-gray-800 tabular-nums">{hora}</div>
        <div className="mt-0.5 text-xs capitalize text-gray-400">{data}</div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">🎈 Template Minimalista</h1>
      <p className="mt-1 text-sm text-gray-400">Planner de estudos para concurso</p>
    </header>
  )
}
