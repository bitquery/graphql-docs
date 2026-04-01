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

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
