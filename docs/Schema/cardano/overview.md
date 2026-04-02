---
sidebar_position: 1
title: "Cardano API — Blockchain Data Schema | Bitquery"
description: "Access Cardano blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Cardano API, Cardano GraphQL, Cardano blockchain data, Bitquery]
---

# Overview

Bitquery provides as [explorer](https://explorer.bitquery.io/cardano) for you to easily view data on Cardano. 

![chains](/img/ide/cardano.png)

Bitquery API offers access to indexed data from the Cardano blockchain.

to fetch data from Algorand blockchain, you need to provide the `network` argument with the value `cardano`as shown below:

```
{
  cardano(network: cardano) {
    __typename
  }
}
```


Let's dive in and explore the cardano data available through Bitquery API.

Cardano uses an **eUTXO** model: **ADA** and **native tokens** live in transaction outputs guarded by scripts; minting policies control token creation. Staking and certificates appear as specialized transaction components. Bitquery indexes blocks, transactions, addresses, transfers, mint events, and coinpath-style flows under the `cardano` root.

## What You Can Query

- **Blocks** — heights, slot and epoch context, timestamps, and embedded transactions
- **Transactions** — hashes, fees, metadata, certificates, and withdrawals where present in indexed data
- **Addresses** — stake and payment address activity derived from outputs and movements
- **Transfers** — ADA and native asset movements with quantities, policies, and asset names
- **Mints** — mint and burn events tied to minting policies and transactions
- **Coinpath** — chained movements across addresses for tracing and analytics

## Common Use Cases

- **Native asset (token) analytics** — issuance, circulation, and holder flows for policy-specific assets
- **Staking and delegation views** — combine transaction and certificate-related fields for participation metrics (where exposed)
- **Wallet and explorer backends** — address histories, UTXO/eUTXO-aware transfers, and recent blocks

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
