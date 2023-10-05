---
sidebar_position: 1
---
# Overview

Bitquery API offers access to indexed data from the Bitcoin blockchain through the bitcoin schema. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.

The bitcoin schema contains various types of queries, including block, transaction, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, transfers, and other relevant information.

To retrieve data from the Bitcoin blockchain, you need to provide the `network` argument with the value `bitcoin` as shown below:

```
query {
  bitcoin(network: bitcoin){
    __typename
  }
}
```

You can use the `bitcoin` API to retrieve data from the following UTXO blockchains. If you wish to switch your network to a different blockchain, the available options are:
- `litecoin` 
- `dogecoin`
- `dash`
- `zcash`
- `bitcash`
- `bitcoinsv`

Let's dive in and explore the Bitcoin data available through Bitquery API.