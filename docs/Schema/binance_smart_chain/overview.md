---
sidebar_position: 1
---

# Overview

Bitquery API offers access to indexed data from the BNB blockchain via GraphQL API for developers.

The BNB schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the Ethereum blockchain, you need to provide the `network` argument with the value `bsc` as shown below:

```
query {
  ethereum(network: bsc){
    __typename
  }
}
```

Let's dive in and explore the BNB data available through Bitquery API.
