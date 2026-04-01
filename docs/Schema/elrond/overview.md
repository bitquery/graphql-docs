---
sidebar_position: 1
title: "Elrond API — Blockchain Data Schema | Bitquery"
description: "Access Elrond blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Elrond API, Elrond GraphQL, Elrond blockchain data, Bitquery]
---

<head>
<meta name="title" content="Elrond API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Elrond blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Elrond API, Elrond GraphQL, Elrond blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Elrond API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Elrond blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Elrond API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Elrond blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

# Overview

MultiversX API offers access to indexed data from the MultiversX network including shards, block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as shard information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the elrond blockchain, you need to provide the `elrond` argument with the value `elrond` as shown below:

```
query MyQuery {
  elrond(network: elrond){
    __typename
  }
}

```

Let's dive in and explore the elrond data available through Bitquery API.

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
