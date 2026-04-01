---
sidebar_position: 1
title: "Bitcoin API — Blockchain Data Schema | Bitquery"
description: "Access Bitcoin blockchain data through Bitquery's GraphQL API. Query blocks, transactions, addresses, coinpath fund tracking, and UTXO data."
keywords: [Bitcoin API, Bitcoin GraphQL, Bitcoin blockchain data, Bitquery]
---

# Bitcoin API Overview

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

Let's dive in and explore the Bitcoin data available through Bitquery API.

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin API examples](https://docs.bitquery.io/v1/docs/examples/Bitcoin)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
