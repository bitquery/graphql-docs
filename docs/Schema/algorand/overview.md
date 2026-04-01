---
sidebar_position: 1
title: "Algorand API — Blockchain Data Schema | Bitquery"
description: "Access Algorand blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Algorand API, Algorand GraphQL, Algorand blockchain data, Bitquery]
---

# Overview

Bitquery API offers access to indexed data from the Algorand blockchain.

to fetch data from Algorand blockchain, you need to provide the `network` argument with the value `algorand`as shown below:

```
{
  algorand(network: algorand) {
    __typename
  }
}
```

You can also fetch data from Algorand Betanet (`algorand_betanet`).

Let's dive in and explore the Algorand data available through Bitquery API.

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Algorand API examples](https://docs.bitquery.io/v1/docs/Examples/algorand)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
