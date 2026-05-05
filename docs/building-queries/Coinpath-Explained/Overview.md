---
sidebar_position: 1
title: "Coinpath Overview — Blockchain Fund Flow Analysis"
description: "Coinpath abstracts blockchain protocol details to provide a unified fund-flow analysis layer. Trace money movement across UTXO, EVM, and ledger-based chains for compliance, forensics, and investigation."
keywords: [Coinpath, fund flow, money flow, blockchain compliance, AML, crypto forensics, transaction tracing, fund tracking, Bitquery]
---

# Overview of Coinpath

Coinpath is Bitquery's proprietary technology for **tracing the movement of funds** across blockchain networks. It abstracts away protocol-level differences (UTXO models, account balances, payment ledgers) and presents a single, unified money-flow graph that you can query with GraphQL.

<iframe width="600" height="405" src="https://www.youtube.com/embed/uojWLq8PbMc" frameborder="0" allowfullscreen></iframe>

## Why Coinpath?

Raw blockchain data tells you that address A sent tokens to address B in a single transaction. Coinpath goes further:

- **Multi-hop tracing** — follow funds through 2, 5, or even 10+ intermediate wallets with a single query (`depth` parameter).
- **Directional analysis** — track inbound (where did the money come from?) and outbound (where did it go?) flows independently.
- **Cross-chain coverage** — the same GraphQL schema works for Bitcoin, Ethereum, BSC, Solana, Cardano, Ripple, Stellar, and 20+ other networks.
- **Built-in attribution** — Coinpath uses chain-specific algorithms (LRFS for EVM, proportional I/O for UTXO) to assign amounts to edges in the money-flow graph.

## Use Cases

| Area | What Coinpath enables |
|---|---|
| **AML / Compliance** | Trace stolen funds, screen counterparties, generate evidence for regulators. |
| **Hack investigation** | Map where exploited funds moved after an attack (e.g. Upbit hack tracing). |
| **Bundle & sybil detection** | Identify wallets funded by the same source to detect coordinated pump schemes. |
| **Forensic auditing** | Build a complete funding history for any address across multiple hops. |
| **DeFi risk scoring** | Score addresses based on exposure to flagged wallets at any depth. |

## How Coinpath Works Across Chain Types

Different blockchains represent value in fundamentally different ways. Coinpath adapts its algorithm for each model:

| Chain type | Algorithm | Details |
|---|---|---|
| **EVM** (Ethereum, BSC, Polygon, …) | Last-Received First-Spent (LRFS) | Associates incoming balance changes with outgoing ones in receipt order. [Learn more →](./Fund%20Tracking/EVM_Chains) |
| **UTXO** (Bitcoin, Litecoin, Dogecoin, …) | Proportional input-output attribution | Splits transaction amounts across inputs and outputs proportionally. [Learn more →](./Fund%20Tracking/UTXO_Chains) |
| **Ledger-based** (Ripple, Stellar) | Multi-currency path extraction | Handles cross-currency payments and implicit transfers within a single transaction. [Learn more →](./Fund%20Tracking/Ledger_Based_Chains) |

## What You'll Learn in This Section

1. **[How to Read a Coinpath Graph](./How_to_read_coinpath_graph)** — understand nodes, edges, levels, and the difference between `transaction` vs `transactions` grouping.
2. **Fund Tracking by Chain Type**
   - [EVM Networks](./Fund%20Tracking/EVM_Chains) — LRFS method, worked example, Ethereum query.
   - [UTXO Networks](./Fund%20Tracking/UTXO_Chains) — proportional attribution, Bitcoin query.
   - [Ledger-Based Networks](./Fund%20Tracking/Ledger_Based_Chains) — multi-currency complexities.

## Quick Start

Jump straight into example queries:

- [Coinpath Money Flow API — full query cookbook](/docs/Examples/coinpath/money-flow-api)
- [Bitcoin Coinpath API examples](/docs/Examples/bitcoin/Bitcoin-Coinpath-API)
- [Bitcoin Coinpath schema reference](/docs/Schema/bitcoin/coinpath)
- [Ethereum Coinpath schema reference](/docs/Schema/ethereum/coinpath)

## Related Resources

- [How to Read a Coinpath Graph](./How_to_read_coinpath_graph)
- [Coinpath for EVM Networks](./Fund%20Tracking/EVM_Chains)
- [Coinpath for UTXO Networks](./Fund%20Tracking/UTXO_Chains)
- [Coinpath for Ledger-Based Networks](./Fund%20Tracking/Ledger_Based_Chains)
- [Coinpath Money Flow API — query cookbook](https://docs.bitquery.io/v1/docs/examples/coinpath/money-flow-api)
- [Bitcoin Coinpath schema reference](https://docs.bitquery.io/v1/docs/Schema/bitcoin/coinpath)
- [Ethereum Coinpath schema reference](https://docs.bitquery.io/v1/docs/Schema/ethereum/coinpath)
