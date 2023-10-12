---
sidebar_position: 1
---
# Dash API Overview

Bitquery API offers access to indexed data from the Dash blockchain through the Dash schema. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.

The Dash schema contains various types of queries, including block, transaction, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, transfers, and other relevant information.

To retrieve data from the Dash blockchain, you need to provide the `network` argument with the value `Dash` as shown below:

```
query {
  bitcoin(network: dash){
    __typename
  }
}
```

Let's dive in and explore the Dash data available through Bitquery API.