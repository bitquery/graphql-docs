---
sidebar_position: 1
title: "Velas API — Blockchain Data Schema | Bitquery"
description: "Access Velas blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Velas API, Velas GraphQL, Velas blockchain data, Bitquery]
---

<head>
<meta name="title" content="Velas API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Velas blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Velas API, Velas GraphQL, Velas blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Velas API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Velas blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Velas API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Velas blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

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

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Velas API examples](https://docs.bitquery.io/v1/docs/Examples/velas)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
