---
sidebar_position: 1
---

# Overview

Bitquery API offers access to indexed data from the Celo blockchain to enable blockchain data retrieval via GraphQL API for developers.

The Celo schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

You can access data from RC1, Celo Alfajores, and Baklava RC1.

To retrieve data from the Ethereum blockchain, you need to provide the `network` argument with the value `celo_mainnet` as shown below:

```
query {
  ethereum(network: celo_mainnet){
    __typename
  }
}
```

Let's dive in and explore the Ethereum data available through Bitquery API.
