---
sidebar_position: 1
title: Bitcoin GraphQL schema overview
description: Bitcoin (BTC) blockchain data in GraphQL—blocks, transactions, UTXO inputs/outputs, address stats, coinpath, and Omni layer.
keywords:
  - Bitcoin schema
  - Bitcoin GraphQL API
  - BTC API
  - Bitquery Bitcoin
---

# Bitcoin API Overview

Bitquery API offers access to indexed data from the Bitcoin blockchain through the bitcoin schema. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.

The bitcoin schema contains various types of queries, including block, transaction, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, transfers, and other relevant information.

**Examples:** Step-by-step Bitcoin API guides are in the [Bitcoin API documentation](https://docs.bitquery.io/v1/docs/examples/Bitcoin). For money-flow tracing, see the [Coinpath API guide](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api) and the schema [coinpath](coinpath) field.

To retrieve data from the Bitcoin blockchain, you need to provide the `network` argument with the value `bitcoin` as shown below:

```
query {
  bitcoin(network: bitcoin){
    __typename
  }
}
```

Let's dive in and explore the Bitcoin data available through Bitquery API.