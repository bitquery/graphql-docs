---
sidebar_position: 1
title: "Celo API — Blockchain Data Schema | Bitquery"
description: "Access Celo blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Celo API, Celo GraphQL, Celo blockchain data, Bitquery]
---

# Overview

Bitquery API offers access to indexed data from the Celo blockchain to enable blockchain data retrieval via GraphQL API for developers.

The Celo schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

You can access data from RC1, Celo Alfajores, and Baklava RC1.

To retrieve data from the Ethereum blockchain, you need to provide the `network` argument with the value `celo_mainnet` as shown below:

```
query {
  ethereum(network: celo_mainnet){
    __typename
  }
}
```

Let's dive in and explore the Ethereum data available through Bitquery API.

Celo is a mobile-first EVM-compatible network with native stable-value assets such as **cUSD** and **cEUR**, plus **CELO** for governance and gas-related economics. Production and test networks (for example mainnet, Alfajores, Baklava) are selected via the `network` argument on the `ethereum` root. Bitquery surfaces blocks, transfers, contracts, DEX trades, and coinpath like other EVM chains.

## What You Can Query

- **Blocks** — heights, timestamps, validators where indexed, gas aggregates, and transaction inclusion
- **Transactions** — hashes, senders, recipients, status, gas, and contract call input data
- **Transfers** — CELO, ERC-20 stablecoins, and other tokens with amounts and counterparties
- **Smart contracts** — deployments and log-driven events for DeFi and mobile dApps
- **DEX trades** — swap-level records for on-chain DEX activity on Celo
- **Coinpath** — token flow tracing across addresses and protocols

## Common Use Cases

- **Stablecoin circulation** — track cUSD/cEUR (and related assets) mint, burn, and transfer patterns
- **Mobile and remittance analytics** — monitor high-volume payment contracts and wallet cohorts
- **DeFi monitoring** — DEX volumes, pool events, and protocol treasuries on Celo

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Polygon schema overview](https://docs.bitquery.io/v1/docs/Schema/Polygon/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
