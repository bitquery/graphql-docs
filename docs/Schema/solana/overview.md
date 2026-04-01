---
sidebar_position: 1
title: "Solana API — Blockchain Data Schema | Bitquery"
description: "Access Solana blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Solana API, Solana GraphQL, Solana blockchain data, Bitquery]
---

# Overview

Bitquery API offers access to indexed data from the Solana blockchain. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.
The schema contains information on blockRewards, address, transfers, transactions, instructions
and instructionAccounts.


```
query MyQuery {
  solana(network: solana){
    __typename
  }
}

```

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana API examples](https://docs.bitquery.io/v1/docs/Examples/Solana)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
