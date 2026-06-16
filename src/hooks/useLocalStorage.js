import { useEffect, useState } from 'react'

// Estado persistido em localStorage. Lê 1x na montagem, grava a cada mudança.
export function useLocalStorage(key, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(key)
      return guardado != null ? JSON.parse(guardado) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(valor))
    } catch {
      /* quota/serialização — ignora */
    }
  }, [key, valor])

  return [valor, setValor]
}
