# Orbilink

Marketplace B2B brasileiro construído com **Next.js 14** (App Router), **Tailwind CSS** e **Supabase**.

## Pré-requisitos

- Node.js 18+
- Conta no [Supabase](https://supabase.com)

## Configuração

1. Instale as dependências:

```bash
npm install
```

2. Copie o arquivo de ambiente e preencha com os dados do seu projeto Supabase:

```bash
cp .env.example .env.local
```

Variáveis obrigatórias:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Paleta de cores

| Tom   | Hex       | Token Tailwind   |
|-------|-----------|------------------|
| 400   | `#6194F6` | `orbilink-400`   |
| 500   | `#4984E3` | `orbilink-500`   |
| 600   | `#3173D0` | `orbilink-600`   |
| 700   | `#1863BD` | `orbilink-700`   |
| 800   | `#0052AA` | `orbilink-800`   |

## Estrutura

```
src/
  app/           # App Router (layout, páginas)
  components/    # Navbar, Footer
  lib/supabase/  # Cliente browser do Supabase
```

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor de produção
- `npm run lint` — ESLint
