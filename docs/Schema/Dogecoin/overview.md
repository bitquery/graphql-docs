---
sidebar_position: 1
title: "Dogecoin API — Blockchain Data Schema | Bitquery"
description: "Access Dogecoin blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Dogecoin API, Dogecoin GraphQL, Dogecoin blockchain data, Bitquery]
---

<head>
<meta name="title" content="Dogecoin API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Dogecoin blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Dogecoin API, Dogecoin GraphQL, Dogecoin blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Dogecoin API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Dogecoin blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dogecoin API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Dogecoin blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

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
