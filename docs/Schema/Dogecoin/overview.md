---
sidebar_position: 1
---
# Dogecoin API Overview

Bitquery API offers access to indexed data from the Dogecoin blockchain through the Dogecoin schema. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.

The Dogecoin schema contains various types of queries, including block, transaction, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, transfers, and other relevant information.

To retrieve data from the Dogecoin blockchain, you need to provide the `network` argument with the value `Dogecoin` as shown below:

```
query {
    bitcoin(network: dogecoin){
    __typename
  }
}
```

Let's dive in and explore the Dogecoin data available through Bitquery API.