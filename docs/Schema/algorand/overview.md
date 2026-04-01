---
sidebar_position: 1
title: "Algorand API — Blockchain Data Schema | Bitquery"
description: "Access Algorand blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Algorand API, Algorand GraphQL, Algorand blockchain data, Bitquery]
---

<head>
<meta name="title" content="Algorand API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Algorand blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Algorand API, Algorand GraphQL, Algorand blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Algorand API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Algorand blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Algorand API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Algorand blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

# Overview

Bitquery API offers access to indexed data from the Algorand blockchain.

to fetch data from Algorand blockchain, you need to provide the `network` argument with the value `algorand`as shown below:

```
{
  algorand(network: algorand) {
    __typename
  }
}
```

You can also fetch data from Algorand Betanet (`algorand_betanet`).

Let's dive in and explore the Algorand data available through Bitquery API.

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Algorand API examples](https://docs.bitquery.io/v1/docs/Examples/algorand)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
