---
sidebar_position: 1
title: "Dogecoin API — Blockchain Data Schema | Bitquery"
description: "Access Dogecoin blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Dogecoin API, Dogecoin GraphQL, Dogecoin blockchain data, Bitquery]
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

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Dogecoin API examples](https://docs.bitquery.io/v1/docs/Examples/Dogecoin)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
