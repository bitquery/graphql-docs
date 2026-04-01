---
sidebar_position: 1
title: "Cronos API — Blockchain Data Schema | Bitquery"
description: "Access Cronos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Cronos API, Cronos GraphQL, Cronos blockchain data, Bitquery]
---

<head>
<meta name="title" content="Cronos API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Cronos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Cronos API, Cronos GraphQL, Cronos blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cronos API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Cronos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cronos API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Cronos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

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

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Polygon schema overview](https://docs.bitquery.io/v1/docs/Schema/Polygon/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
