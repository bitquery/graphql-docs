---
sidebar_position: 1
title: "Stellar API — Blockchain Data Schema | Bitquery"
description: "Access Stellar blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Stellar API, Stellar GraphQL, Stellar blockchain data, Bitquery]
---

# Overview

Bitquery's Stellar APIs give you information on the network's blocks, transactions, addresses, operations, payments and so on.
To get started, visit the [Stellar Explorer](https://explorer.bitquery.io/stellar)

![explorer](/img/ide/stellar.png)

To retrieve data from the Stellar blockchain, you need to use the API as shown below:

```
query{
  stellar{
    __typename
  }
}
```

Stellar is a multi-asset ledger: **XLM** is the native asset, while anchors and issuers define trust lines, tokens, and the on-ledger **Stellar DEX**. Path payments, liquidity pools, and fine-grained **operations** and **effects** model how value moves. Bitquery exposes blocks, ledgers, transactions, operations, payments, effects, transfers, and coinpath for graph-style analysis.

## What You Can Query

- **Blocks / ledgers** — sequence, close times, and summary fields for network progress
- **Transactions** — hashes, sources, fees, memo fields, and envelopes linking to inner operations
- **Operations** — payment, path payment, manage buy/sell offer, liquidity pool, and other Stellar operation types
- **Payments** — payment-specific records with assets, amounts, and destination accounts
- **Effects** — ledger effects that describe balance and trust-line changes from operations
- **Transfers** — normalized movements of XLM and issued assets between accounts
- **Coinpath** — chained flows across accounts and assets for analytics and tracing

## Common Use Cases

- **SDEX and anchor analytics** — volumes, spreads, and offer books for on-ledger markets and issued assets
- **Cross-border payment monitoring** — path payments, corridor assets, and liquidity pool usage
- **Account and asset compliance** — reconstruct activity from operations, effects, and transfers

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar API examples](https://docs.bitquery.io/v1/docs/Examples/stellar)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
