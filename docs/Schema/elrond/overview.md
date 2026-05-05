---
sidebar_position: 1
title: "Elrond API — Blockchain Data Schema | Bitquery"
description: "Access Elrond blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Elrond API, Elrond GraphQL, Elrond blockchain data, Bitquery]
---

# Overview

:::caution Deprecated
Bitquery has stopped supporting the Elrond (MultiversX) blockchain. Historical data may still be available, but it is no longer updated. The schema reference below is preserved for archival purposes.
:::

MultiversX API offers access to indexed data from the MultiversX network including shards, block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as shard information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the elrond blockchain, you need to provide the `elrond` argument with the value `elrond` as shown below:

```
query MyQuery {
  elrond(network: elrond){
    __typename
  }
}

```

Let's dive in and explore the elrond data available through Bitquery API.

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
