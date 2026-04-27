---
title: "Solana Instructions API (Removed in V1) — Use V2 or V1 Alternatives"
description: "The Solana instructions API has been removed from Bitquery V1. Find equivalents in the V2 API for program/instruction analytics, or use V1 transfers, transactions, and coinpath."
keywords:
  [
    "Solana instructions API",
    "Bitquery V1",
    "Solana program analytics",
    "Solana DEX trades",
    "Solana V2 API",
    "Solana transfers",
    "Solana transactions",
  ]
---

# Solana Instructions Data (Removed in V1)

:::danger Removed in V1 — use the V2 Solana Instructions API

The **Solana `instructions` and `instructionAccounts` APIs are no longer available on the V1 endpoint** (`graphql.bitquery.io`). The replacement is the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** at `https://streaming.bitquery.io/graphql`, which provides parsed program/method data, account lists, logs, balance update counts, inner instructions, and real-time WebSocket subscriptions.

:::

## What changed

Bitquery has retired the V1 instruction-level surface for Solana. Program IDs, parsed action names, instruction logs, inner instructions, and per-instruction account metadata are no longer returned by V1 GraphQL queries against `solana.instructions { ... }` or `solana.instructionAccounts { ... }`.

This page is preserved so existing inbound links and bookmarks resolve to a clear redirection. There are no working queries on this page.

## Recommended alternatives

### 1) V2 Solana Instructions API (recommended)

Use the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** as the direct replacement. It is the supported home for Solana instruction-, program-, and DEX-trade-level analytics, with parsed program IDs, methods, account lists, logs, balance update counts, ancestor indexes, and inner instructions — plus real-time **subscriptions** over WebSockets.

- **V2 Solana Instructions API:** [`https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/`](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)
- **V2 endpoint:** `https://streaming.bitquery.io/graphql`
- **V2 docs home:** [`https://docs.bitquery.io/`](https://docs.bitquery.io/)
- **V1 vs V2 reference:** see [V1 and V2 endpoints](/docs/graphql-ide/v1-and-v2)
- **Try V2 in IDE:** [`https://ide.bitquery.io/explore/EVM`](https://ide.bitquery.io/explore/EVM)

What V1 instructions used to cover, in V2 terms:

- Solana parsed instructions and inner instructions — [V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/) (`Solana.Instructions`)
- Solana DEX trades (parsed swaps, pool, market) — V2 `Solana.DEXTrades`
- Token balance updates and mint events — V2 `Solana.TokenBalanceUpdates`, `Solana.InstructionBalanceUpdates`
- Token creation, burn, metadata — see the "Latest Created Tokens", "Track Real-time Token Burn", and "Token Metadata" examples on the [V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/) page

### 2) V1 transfers, transactions, and coinpath

If you only need fund-flow, accounting, audit, trading, compliance, or wallet-level analytics, V1 already covers these without instructions:

- [Solana transfers API examples](/docs/Examples/Solana/transfers) — full historical SOL and SPL transfer rows for [accounting and tax](/docs/Examples/Solana/transfers#wallet-sender-receiver), [audit](/docs/Examples/Solana/transfers#parallel-sent-received-range), [trading research](/docs/Examples/Solana/transfers#earliest-mint-transfer), [compliance and forensics](/docs/Examples/Solana/transfers#multi-wallet-aggregates), and [bulk export to S3 + Parquet](/docs/Examples/Solana/transfers#bulk-export-s3-parquet).
- [Solana transactions API examples](/docs/Examples/Solana/transactions-api) — fee, fee payer, success/failure, signer, instruction count, and block context at the transaction level.
- [Solana address API examples](/docs/Examples/Solana/address-api) — wallet balance and annotation lookups, including batched multi-address queries.
- [Solana Coinpath API](/docs/Schema/solana/coinpath) — multi-hop SOL/SPL fund flows for investigation and tracing.

## Mapping V1 instructions concepts to alternatives

| V1 instruction-level need              | Recommended replacement                                                                                                                                                |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parsed program / action / logs         | [V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/) — `Solana.Instructions` (parsed program, method, logs, ancestors)   |
| DEX swap-level decoding                | V2 `Solana.DEXTrades` (DEX, pool, market, side, price, USD)                                                                                                            |
| Per-instruction account metas          | [V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/) — `Solana.Instructions.Accounts` and `Solana.InstructionBalanceUpdates` |
| Token creation / burn / metadata       | [V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/) — created tokens, burn tracking, Metaplex metadata examples         |
| Wallet activity, balance changes       | V1 [transfers](/docs/Examples/Solana/transfers) + [transactions](/docs/Examples/Solana/transactions-api)                                                               |
| Funding source / first transfer / flow | V1 [transfers](/docs/Examples/Solana/transfers#system-program-funding) + [coinpath](/docs/Schema/solana/coinpath)                                                      |
| Token mint discovery and history       | V1 [transfers](/docs/Examples/Solana/transfers#earliest-mint-transfer) + V2 `Solana.TokenSupplyUpdates`                                                                |

## Related Resources

- **[V2 Solana Instructions API (replacement)](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)**
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
- [Solana transfers API examples (V1)](/docs/Examples/Solana/transfers)
- [Solana transactions API examples (V1)](/docs/Examples/Solana/transactions-api)
- [Solana address API examples (V1)](/docs/Examples/Solana/address-api)
- [Solana schema overview (V1)](/docs/Schema/solana/overview)
- [V2 docs home](https://docs.bitquery.io/)
