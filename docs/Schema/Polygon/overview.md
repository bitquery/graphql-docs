---
sidebar_position: 1
title: "Polygon API — Blockchain Data Schema | Bitquery"
description: "Access Polygon blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Polygon API, Polygon GraphQL, Polygon blockchain data, Bitquery]
---


## What is Polygon(Matic) API?

Bitquery's GraphQL API offers access to indexed data from the Polygon (Matic) blockchain.

The Polygon schema contains various types of queries, including block, transaction, event, transactions, trades, NFTs, transfers, and much more.

To retrieve data from the Polygon blockchain, you need to provide the `network` argument with the value `matic` as shown below:

```
query {
  ethereum(network: matic){
    __typename
  }
}
```

Polygon is an EVM-type blockchain; therefore datatype is `ethereum`, but the `network` is `matic`.

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::


Let's dive in and explore the Polygon API in following chapters.

**Polygon** (historically **Matic**) operates as an **Ethereum-aligned** network—often described as a **sidechain** or **Layer 2** style scaling path—with **MATIC** used for fees and staking on Polygon PoS. **Low fees** and EVM compatibility made it a hub for **DeFi** venues such as **QuickSwap** and ported liquidity on **Aave** and similar protocols. Because Polygon is EVM-based, you query it through the **`ethereum` root type** with **`network: matic`**, and Bitquery provides **blocks**, **transactions**, **transfers**, **smart contracts**, **DEX trades**, **coinpath**, and **active addresses**—the same conceptual surface as Ethereum mainnet with Polygon-specific activity.

## What You Can Query

- **Blocks** — heights, timestamps, validators or producers as indexed, gas usage, and transaction counts on Polygon
- **Transactions** — hashes, senders, recipients, gas pricing, and success or failure for EVM execution
- **Transfers** — MATIC and ERC-20-style token movements with amounts and USD values where available
- **Smart contracts** — deployments and calls for Polygon-native and bridged protocols such as QuickSwap or Aave deployments
- **DEX trades** — swap and liquidity events from integrated DEX subgraphs or indexed contracts
- **Coinpath** — multi-hop flows across Polygon addresses, including bridge-related patterns when visible on-chain
- **Active addresses** — engagement metrics for wallets interacting with Polygon dApps

## Common Use Cases

- **Affordable DeFi analytics** — track DEX volume and lending protocol activity with mainnet-like fields at lower per-query cost on-chain
- **Cross-chain bridges** — relate Polygon **transfers** and **coinpath** results to bridge contracts and counterparties on other networks
- **Growth metrics** — use **active addresses** and transfer counts for ecosystem reporting and user-acquisition dashboards

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
