---
sidebar_position: 1
---

# Overview

Bitquery Cronos API offers access to indexed data from the cronos blockchain via GraphQL API for developers.

The cronos schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the cronos blockchain, you need to provide the `network` argument with the value `cronos` as shown below:

```
query {
  ethereum(network: cronos){
    __typename
  }
}
```

Let's dive in and explore the cronos data available through Bitquery API.
