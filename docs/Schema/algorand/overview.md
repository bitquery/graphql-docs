---
sidebar_position: 1
title: "Algorand API — Blockchain Data Schema | Bitquery"
description: "Access Algorand blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Algorand API, Algorand GraphQL, Algorand blockchain data, Bitquery]
---

# Overview

Bitquery API offers access to indexed data from the Algorand blockchain.

to fetch data from Algorand blockchain, you need to provide the `network` argument with the value `algorand`as shown below:

```
{
  algorand(network: algorand) {
    __typename
  }
}
```

You can also fetch data from Algorand Betanet (`algorand_betanet`).

Let's dive in and explore the Algorand data available through Bitquery API.

Algorand is a pure proof-of-stake layer 1 with fast finality, native **ALGO** transfers, and **ASA** (Algorand Standard Asset) tokens for fungible and non-fungible assets. Bitquery indexes blocks, payments-style activity, application (smart contract) calls, and asset movements for mainnet and Betanet.

## What You Can Query

- **Blocks** — round/height, timestamps, proposer context where indexed, and throughput-related fields
- **Transactions** — signatures, types, fees, and grouping of inner transactions where applicable
- **Transfers** — ALGO and ASA movements with asset IDs, amounts, senders, and receivers
- **Smart contract calls** — application (app) call transactions and related fields for on-chain program interaction
- **Coinpath** — chained asset flows across accounts for tracing and analytics

## Common Use Cases

- **ASA and ALGO treasury tracking** — monitor balances and transfer history for assets and accounts
- **dApp and DeFi analytics** — volume and participation around apps, pools, or known program IDs
- **Cross-account tracing** — use coinpath to follow ASA or ALGO through several hops

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Algorand API examples](https://docs.bitquery.io/v1/docs/Examples/algorand)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
