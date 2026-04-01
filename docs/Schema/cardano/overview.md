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

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
