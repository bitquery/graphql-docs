---
sidebar_position: 1
title: "Ripple API — Blockchain Data Schema | Bitquery"
description: "Access Ripple blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Ripple API, Ripple GraphQL, Ripple blockchain data, Bitquery]
---

# Overview

Bitquery's Ripple APIs give you information on the XRP's blocks, transactions, addresses, offers, payments and so on.
To get started, visit the [Ripple Explorer](https://explorer.bitquery.io/ripple)

![explorer](/img/ide/ripple.png)

To retrieve data from the Ripple blockchain, you need to use the API as shown below:

```
query{
  ripple{
    __typename
  }
}
```

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

The **XRP Ledger** (often called **Ripple** in market contexts) is **payment-centric**: **XRP** pays transaction fees and serves as a bridge asset, while the protocol includes a **built-in DEX**, **escrows**, **checks**, **payment channels**, and **NFTokens** for richer settlement patterns than simple one-hop sends. Bitquery exposes **blocks** (ledgers), **transactions**, **transfers**, **payments**, **balances**, **offers**, and **coinpath** for both XRP and issued assets.

## What You Can Query

- **Blocks** — ledger indexes, close times, and consensus-advanced ledger boundaries
- **Transactions** — types, outcomes, fees in XRP, and metadata for each validated transaction
- **Payments** — path payments, partial payments, and cross-currency settlement fields where the schema models them
- **Transfers** — XRP and issued-currency movements between accounts
- **Balances** — trust-line and reserve-related views as exposed for addresses and assets
- **Offers** — limit orders and liquidity on the ledger’s native decentralized exchange
- **Coinpath** — aggregated flows across intermediate steps for complex payment paths

## Common Use Cases

- **Remittance and payments** — analyze high-volume payment traffic and bridge use of XRP between corridors
- **DEX and liquidity** — monitor **offers**, fills, and trading-related transactions on the built-in order book
- **Advanced ledger features** — study escrows, checks, payment channels, or NFTokens when querying those transaction families

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ripple API examples](https://docs.bitquery.io/v1/docs/Examples/ripple)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
