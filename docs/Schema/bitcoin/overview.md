---
sidebar_position: 1
title: "Bitcoin API — Blockchain Data Schema | Bitquery"
description: "Access Bitcoin blockchain data through Bitquery's GraphQL API. Query blocks, transactions, addresses, coinpath fund tracking, and UTXO data."
keywords: [Bitcoin API, Bitcoin GraphQL, Bitcoin blockchain data, Bitquery]
---

# Bitcoin API Overview

Bitquery API offers access to indexed data from the Bitcoin blockchain through the bitcoin schema. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.

The bitcoin schema contains various types of queries, including block, transaction, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, transfers, and other relevant information.

To retrieve data from the Bitcoin blockchain, you need to provide the `network` argument with the value `bitcoin` as shown below:

```
query {
  bitcoin(network: bitcoin){
    __typename
  }
}
```

Let's dive in and explore the Bitcoin data available through Bitquery API.

Bitcoin is the original UTXO blockchain; **BTC** moves only through transaction inputs and outputs (no native EVM contracts). Bitquery exposes the full UTXO graph view: blocks, transactions, inputs and outputs, addresses, coinpath tracing, and Omni Layer–related data where indexed for assets on Bitcoin.

## What You Can Query

- **Blocks** — heights, timestamps, difficulty, sizes, miner/coinbase hints, and transaction lists
- **Transactions** — hashes, fees, versions, locktime, and per-vin/vout detail
- **Inputs and outputs** — prevout references, script types, and values for each UTXO edge
- **Addresses** — activity and aggregates derived from output scripts and address encodings
- **Coinpath** — multi-hop flows across addresses for tracing and graph analytics
- **Omni Layer** — property/token-oriented fields where Omni-class transactions are represented in the schema

## Common Use Cases

- **Exchange and custody reconciliation** — match deposits and withdrawals to UTXO-level movements
- **Compliance and investigations** — follow coinpath across hops with block and tx context
- **Omni and colored-coin style analytics** — track legacy token layers that ride on Bitcoin transactions

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin API examples](https://docs.bitquery.io/v1/docs/examples/Bitcoin)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
