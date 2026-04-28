---
title: "Solana Instruction Accounts API (Removed in V1) — Schema Notice"
description: "The V1 Solana instructionAccounts schema has been removed. Use V2 for per-instruction account metadata, or V1 transfers, transactions, and coinpath."
keywords:
  [
    "Solana instructionAccounts API",
    "Solana schema",
    "Bitquery V1",
    "Solana V2 API",
    "Solana program accounts",
    "GraphQL",
  ]
---

# InstructionAccounts (Removed in V1)

:::danger Removed in V1 — use the V2 Solana Instructions API

The Solana `instructionAccounts` query has been **removed from the V1 GraphQL schema** (`graphql.bitquery.io`). The replacement is the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** at `https://streaming.bitquery.io/graphql`, which exposes per-instruction account lists via `Solana.Instructions.Accounts` and balance updates via `Solana.InstructionBalanceUpdates`. This page is kept to preserve inbound links.

:::

## Where per-instruction account metadata lives now

Use the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** for parsed instructions and the accounts they touch (`Solana.Instructions.Accounts`, `Solana.InstructionBalanceUpdates`):

- V2 Solana Instructions API: [`https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/`](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)
- V2 endpoint: `https://streaming.bitquery.io/graphql`
- V2 docs home: [`https://docs.bitquery.io/`](https://docs.bitquery.io/)
- See [V1 and V2 endpoints](/docs/graphql-ide/v1-and-v2) for an overview of differences.

For wallet-level activity, fund flow, accounting, and compliance use cases that do not require per-instruction account metas, V1 continues to support:

- [Solana transfers schema](/docs/Schema/solana/transfers) and [transfers examples](/docs/Examples/Solana/transfers) (full historical SOL and SPL transfers)
- [Solana transactions schema](/docs/Schema/solana/transactions) and [transactions examples](/docs/Examples/Solana/transactions-api)
- [Solana address schema](/docs/Schema/solana/address) and [address examples](/docs/Examples/Solana/address-api)
- [Solana Coinpath schema](/docs/Schema/solana/coinpath) for multi-hop tracing

## Related Resources

- **[V2 Solana Instructions API (replacement)](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)**
- [Solana schema overview (V1)](/docs/Schema/solana/overview)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
- [Solana transfers schema (V1)](/docs/Schema/solana/transfers)
- [Solana transfers examples (V1)](/docs/Examples/Solana/transfers)
- [V2 docs home](https://docs.bitquery.io/)
