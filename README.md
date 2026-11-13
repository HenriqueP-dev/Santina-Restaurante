# Santina Restaurante (site em desenvolvimento)

Projeto iniciado a partir do modelo de sites de hospedagem (o mesmo do projeto Hotel Winner).
Passo a passo do modelo: [`COMO-CRIAR-NOVO-SITE.md`](COMO-CRIAR-NOVO-SITE.md).

## Estado atual

- O código ainda é o **modelo de hotel/pousada**, com o conteúdo em branco (`src/conteudo/novo.ts`). Só o nome do cliente foi preenchido.
- **Falta confirmar qual restaurante Santina é** (cidade, telefone, endereço, horários) e receber cardápio e fotos. Nada foi inventado.
- Um restaurante não tem quartos e comodidades: as seções precisam ser adaptadas (cardápio, horário de funcionamento, reserva de mesa). Isso ainda não foi feito.

## Rodar

```bash
npm install
npm run build
npm run test:e2e
```

Cores e fontes: `src/styles/tema.css`. Conteúdo: `src/conteudo/novo.ts`.
