---
sidebar_position: 1
title: "Stellar API — Blockchain Data Schema | Bitquery"
description: "Access Stellar blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Stellar API, Stellar GraphQL, Stellar blockchain data, Bitquery]
---

<head>
<meta name="title" content="Stellar API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Stellar blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Stellar API, Stellar GraphQL, Stellar blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Stellar API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Stellar blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Stellar API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Stellar blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

# Overview

Bitquery's Stellar APIs give you information on the network's blocks, transactions, addresses, operations, payments and so on.
To get started, visit the [Stellar Explorer](https://explorer.bitquery.io/stellar)

![explorer](/img/ide/stellar.png)

To retrieve data from the Stellar blockchain, you need to use the API as shown below:

```
query{
  stellar{
    __typename
  }
}
```

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar API examples](https://docs.bitquery.io/v1/docs/Examples/stellar)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
