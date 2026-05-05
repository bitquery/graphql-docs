---
title: "Solana Instructions API (Removed in V1) — Schema Notice"
description: "The V1 Solana instructions schema has been removed. See V2 for parsed program/instruction analytics, or use V1 transfers, transactions, and coinpath."
keywords:
  [
    "Solana instructions API",
    "Solana schema",
    "Bitquery V1",
    "Solana V2 API",
    "Solana program analytics",
    "GraphQL",
  ]
---

# Instructions (Removed in V1)

:::danger Removed in V1 — use the V2 Solana Instructions API

The Solana `instructions` query has been **removed from the V1 GraphQL schema** (`graphql.bitquery.io`). The replacement is the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** at `https://streaming.bitquery.io/graphql`. This page is kept to preserve inbound links and direct readers to the supported alternative.

:::

## Where instruction-level data lives now

Use the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** for program-, instruction-, and DEX-trade-level analytics on Solana, including parsed program/method data, account lists, logs, balance update counts, inner instructions, and real-time WebSocket subscriptions.

- V2 Solana Instructions API: [`https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/`](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)
- V2 endpoint: `https://streaming.bitquery.io/graphql`
- V2 docs home: [`https://docs.bitquery.io/`](https://docs.bitquery.io/)
- See [V1 and V2 endpoints](/docs/graphql-ide/v1-and-v2) for an overview of differences.

If you do not need raw instruction parsing, the following V1 surfaces are unchanged and continue to be the recommended path for accounting, audit, trading, compliance, treasury, and bulk-export use cases:

- [Solana transfers schema](/docs/Schema/solana/transfers) and [transfers examples](/docs/Examples/Solana/transfers)
- [Solana transactions schema](/docs/Schema/solana/transactions) and [transactions examples](/docs/Examples/Solana/transactions-api)
- [Solana address schema](/docs/Schema/solana/address) and [address examples](/docs/Examples/Solana/address-api)
- [Solana Coinpath schema](/docs/Schema/solana/coinpath) for multi-hop fund flow

## Related Resources

- **[V2 Solana Instructions API (replacement)](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)**
- [Solana schema overview (V1)](/docs/Schema/solana/overview)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
- [Solana transfers schema (V1)](/docs/Schema/solana/transfers)
- [Solana transfers examples (V1)](/docs/Examples/Solana/transfers)
- [V2 docs home](https://docs.bitquery.io/)
