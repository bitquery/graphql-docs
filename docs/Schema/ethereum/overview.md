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

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Polygon schema overview](https://docs.bitquery.io/v1/docs/Schema/Polygon/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
