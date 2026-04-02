---
sidebar_position: 1
title: "Dash API — Blockchain Data Schema | Bitquery"
description: "Access Dash blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Dash API, Dash GraphQL, Dash blockchain data, Bitquery]
---

# Dash API Overview

Bitquery API offers access to indexed data from the Dash blockchain through the Dash schema. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.

The Dash schema contains various types of queries, including block, transaction, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, transfers, and other relevant information.

To retrieve data from the Dash blockchain, you need to provide the `network` argument with the value `Dash` as shown below:

```
query {
  bitcoin(network: dash){
    __typename
  }
}
```

Let's dive in and explore the Dash data available through Bitquery API.

Dash is a privacy-oriented UTXO network known for optional coin-mixing (PrivateSend), fast-confirmation InstantSend locks, and a masternode layer that supports governance and services. InstantSend and PrivateSend appear as on-chain transaction types where applicable; Bitquery indexes the ledger so you can analyze blocks, transactions, addresses, and value flows like other Bitcoin-family chains.

## What You Can Query

- **Blocks** — heights, timestamps, sizes, difficulty, and the transactions included in each block
- **Transactions** — hashes, fees, version and locktime context, and UTXO inputs and outputs
- **Addresses** — receive and spend activity derived from script and address-level views of the UTXO set
- **Transfers** — movements of DASH between addresses with amounts and linkage to parent transactions
- **Coinpath** — multi-hop tracing of funds across addresses for flow and clustering-style analysis

## Common Use Cases

- **Network and masternode-era analytics** — monitor block intervals, fees, and throughput alongside transaction patterns
- **UTXO flow tracing** — use coinpath to follow value across several hops for investigations or risk scoring
- **Explorer and wallet services** — power address pages, transaction detail, and recent-block feeds for Dash users
- **Enterprise payment processing** — merchants and payment providers accepting DASH can reconcile InstantSend-confirmed transactions against point-of-sale records using block and transaction-level queries

## Related Resources

- [Coinpath Money Flow API examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Cross-chain API examples](https://docs.bitquery.io/v1/docs/Examples/cross-chain/cross-chain-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
