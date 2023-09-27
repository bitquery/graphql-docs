---
sidebar_position: 1
---

# Overview

Bitquery Velas API offers access to indexed data from the velas blockchain via GraphQL API for developers.

The Velas schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the Velas blockchain, you need to provide the `network` argument with the value `velas` as shown below:

```
query {
  ethereum(network: velas){
    __typename
  }
}
```

Let's dive in and explore the Velas data available through Bitquery API.
