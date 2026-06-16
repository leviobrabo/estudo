import { useEffect, useMemo } from 'react'
import Desempenho from './components/Desempenho.jsx'
import Header from './components/Header.jsx'
import PlanejamentoTable from './components/PlanejamentoTable.jsx'
import PontosFracos from './components/PontosFracos.jsx'
import StatsBar from './components/StatsBar.jsx'
import Toolbar from './components/Toolbar.jsx'
import { atividadesExemplo } from './data/seed.js'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import { desempenhoPorMateria, pontosFracos, resumo } from './lib/calc.js'

const STORAGE_KEY = 'estudos-planner:atividades-v2'

function novaAtividade() {
  return {
    id: `a-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    topico: '',
    atividade: '',
    materia: [],
    dia: [],
    semana: [],
    feito: false,
    revisado: false,
    acertos: null,
    questoes: null,
    texto: '',
  }
}

export default function App() {
  const [atividades, setAtividades] = useLocalStorage(STORAGE_KEY, atividadesExemplo)
  const [filtros, setFiltros] = useLocalStorage('estudos-planner:filtros', {
    busca: '',
    materia: '',
    dia: '',
    semana: '',
    pendentes: false,
  })
  const [tema, setTema] = useLocalStorage('estudos-planner:tema', 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'dark')
  }, [tema])

  // edição/criação/remoção
  const atualizar = (atualizada) =>
    setAtividades((lista) => lista.map((a) => (a.id === atualizada.id ? atualizada : a)))
  const remover = (id) => setAtividades((lista) => lista.filter((a) => a.id !== id))
  const adicionar = () => setAtividades((lista) => [novaAtividade(), ...lista])

  // filtros
  const visiveis = useMemo(() => {
    const q = filtros.busca.trim().toLowerCase()
    return atividades.filter((a) => {
      if (filtros.materia && !a.materia.includes(filtros.materia)) return false
      if (filtros.dia && !a.dia.includes(filtros.dia)) return false
      if (filtros.semana && !a.semana.includes(filtros.semana)) return false
      if (filtros.pendentes && a.feito) return false
      if (q && !(`${a.topico} ${a.atividade} ${a.texto}`.toLowerCase().includes(q))) return false
      return true
    })
  }, [atividades, filtros])

  // derivados (sempre sobre o conjunto completo)
  const r = useMemo(() => resumo(atividades), [atividades])
  const fracos = useMemo(() => pontosFracos(atividades), [atividades])
  const porMateria = useMemo(() => desempenhoPorMateria(atividades), [atividades])

  // backup
  const exportar = () => {
    const blob = new Blob([JSON.stringify(atividades, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `planner-estudos-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }
  const importar = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const dados = JSON.parse(reader.result)
        if (Array.isArray(dados)) setAtividades(dados)
        else alert('Arquivo inválido: esperado uma lista de atividades.')
      } catch {
        alert('Não foi possível ler o arquivo JSON.')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }
  const resetar = () => {
    if (confirm('Resetar para os dados de exemplo? As atividades atuais serão perdidas.')) {
      setAtividades(atividadesExemplo.map((a) => ({ ...a })))
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#f7f7f5] transition-colors dark:bg-[#191919]">
      <div className="mx-auto max-w-6xl px-4 py-8">
      <Header tema={tema} setTema={setTema} />
      <StatsBar r={r} />
      <Toolbar
        filtros={filtros}
        setFiltros={setFiltros}
        onNova={adicionar}
        onExport={exportar}
        onImport={importar}
        onReset={resetar}
      />
      <PlanejamentoTable atividades={visiveis} onChange={atualizar} onDelete={remover} />
      <PontosFracos lista={fracos} />
      <Desempenho linhas={porMateria} />

      <footer className="mt-8 text-center text-xs text-gray-300 dark:text-gray-600">
        Réplica do template Notion · dados salvos no seu navegador
      </footer>
      </div>
    </div>
  )
}
