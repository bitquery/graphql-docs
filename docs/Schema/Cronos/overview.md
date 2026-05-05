---
sidebar_position: 1
title: "Cronos API — Blockchain Data Schema | Bitquery"
description: "Access Cronos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Cronos API, Cronos GraphQL, Cronos blockchain data, Bitquery]
---

# Overview

Bitquery Cronos API offers access to indexed data from the cronos blockchain via GraphQL API for developers.

The cronos schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the cronos blockchain, you need to provide the `network` argument with the value `cronos` as shown below:

```
query {
  ethereum(network: cronos){
    __typename
  }
}
```

Let's dive in and explore the cronos data available through Bitquery API.

Cronos is an EVM-compatible chain from Crypto.com, using **CRO** for gas and settlement. Its ecosystem spans DeFi protocols, DEXes, and bridged assets; Bitquery exposes the same Ethereum-style primitives (blocks, logs, transfers, DEX tables) under the `ethereum` root with `network: cronos`.

## What You Can Query

- **Blocks** — heights, timestamps, producers/validators where exposed, gas usage aggregates, and transaction counts
- **Transactions** — hashes, senders, status, gas used and price, and input data for contract calls
- **Transfers** — native CRO and ERC-20 movements with amounts, counterparties, and USD valuation where available
- **Smart contracts** — deployment and interaction surfaces via events and call-related fields
- **DEX trades** — swaps and liquidity events aligned with Bitquery’s DEX-oriented schemas for EVM chains
- **Coinpath** — graph-style tracing of token flows across addresses and contracts

## Common Use Cases

- **DeFi and DEX dashboards** — volume, liquidity, and pair-level activity on Cronos
- **Wallet and portfolio tracking** — histories and balances derived from transfer and transaction filters
- **Contract monitoring** — watch specific contracts or event signatures for protocol or treasury activity
- **Crypto.com ecosystem integration** — enterprises building on the Crypto.com stack can correlate on-chain Cronos activity with CRO-based payment, card, and exchange flows for unified business intelligence

## Related Resources

- [DEX Trades examples](https://docs.bitquery.io/v1/docs/Examples/dexTrades/dex-trading-data-api)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath Money Flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Polygon schema overview](https://docs.bitquery.io/v1/docs/Schema/Polygon/overview)
