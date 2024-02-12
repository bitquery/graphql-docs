---
sidebar_position: 1
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

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your API keys, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::