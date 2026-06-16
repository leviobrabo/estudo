# 🎈 Template Minimalista — Planner de Estudos

Réplica em site do template Notion **Template Minimalista** (planner de estudos para concurso).
React + Vite + Tailwind. Dados salvos no navegador (`localStorage`), sem backend.

## Rodar local

```bash
cd estudos-planner
npm install
npm run dev          # abre em http://localhost:5173
```

## Build

```bash
npm run build        # gera dist/
npm run preview      # serve o build local
```

## Funções (1:1 com o Notion)

- **Relógio ao vivo** + título 🎈 (substitui o widget indify).
- **Planejamento** — tabela editável: Tópico, Atividade, Matéria, Dia da semana, Semana, Feito, Revisado, Acertos, Questões, **Desempenho (fórmula automática)**, Texto.
- **+ Nova atividade** — cria linha no topo.
- **Filtros** — Matéria, Dia, Semana, busca e "só pendentes".
- **Revisão → Pontos fracos** — tópicos abaixo do alvo da matéria (limiar 60–80%), pior primeiro.
- **Desempenho acumulado** — soma por matéria + percentual com barras.
- **Resumo** — feitas, % concluído, questões, desempenho médio.
- **Backup** — exportar / importar JSON · resetar para exemplo.

## Deploy na Vercel

A Vercel detecta Vite automaticamente. Primeira vez exige login (abre no navegador):

```bash
cd estudos-planner
npx vercel login      # autentica sua conta (device auth no navegador)
npx vercel            # deploy de preview
npx vercel --prod     # deploy de produção (link público)
```

> Alternativa: suba este repo no GitHub e conecte na Vercel (deploy a cada push).
