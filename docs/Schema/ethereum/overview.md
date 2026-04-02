---
sidebar_position: 1
title: "Ethereum API — Blockchain Data Schema | Bitquery"
description: "Access Ethereum blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Ethereum API, Ethereum GraphQL, Ethereum blockchain data, Bitquery]
---

# Overview

Bitquery API offers access to indexed data from the Ethereum blockchain through the ethereum schema. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.

The ethereum schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the Ethereum blockchain, you need to provide the `network` argument with the value `ethereum` as shown below:

```
query {
  ethereum(network: ethereum){
    __typename
  }
}
```
:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

Let's dive in and explore the Ethereum data available through Bitquery API.

**Ethereum** was the first widely adopted **smart contract** platform: **ETH** pays for gas, **ERC-20** tokens power DeFi and payments, and **ERC-721** (and related standards) anchor NFT markets. The ecosystem remains one of the largest on-chain economies. Bitquery’s **ethereum** schema exposes **blocks**, **transactions**, **transfers**, **smart contracts**, **DEX trades**, **coinpath**, and **active addresses** for both raw chain analytics and market intelligence.

## What You Can Query

- **Blocks** — number, timestamp, fee recipient under proof-of-stake, base fee under EIP-1559, gas used and limits
- **Transactions** — hashes, from and to, nonces, gas price or effective gas price, and success or revert status
- **Transfers** — ETH, ERC-20, and major NFT transfers with amounts, contract addresses, and USD pricing where available
- **Smart contracts** — creations, method calls, and internal transactions as indexed from execution traces
- **DEX trades** — swaps, pools, and volume from integrated decentralized exchanges
- **Coinpath** — graph-style tracing of assets across many hops and intermediate contracts
- **Active addresses** — engagement metrics derived from indexed sends, receives, and contract interactions

## Common Use Cases

- **DeFi and market data** — rank tokens, pools, and DEX volume for research terminals or trading products
- **Institutional reporting** — tie **transfers**, balances, and **active addresses** to treasury or compliance views
- **Investigations** — use **coinpath** to map how ETH or tokens moved through mixers, bridges, or nested contracts

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Polygon schema overview](https://docs.bitquery.io/v1/docs/Schema/Polygon/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
