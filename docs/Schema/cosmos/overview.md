---
sidebar_position: 1
title: "Cosmos API — Blockchain Data Schema | Bitquery"
description: "Access Cosmos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Cosmos API, Cosmos GraphQL, Cosmos blockchain data, Bitquery]
---

<head>
<meta name="title" content="Cosmos API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Cosmos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Cosmos API, Cosmos GraphQL, Cosmos blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cosmos API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Cosmos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cosmos API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Cosmos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

# Overview

Bitquery empowers developers by offering comprehensive access to indexed data from the Cosmos blockchain through our user-friendly and efficient GraphQL API.

Our Cosmos schema simplifies the process of retrieving blockchain data, providing developers with easy access to various types of indexed information, including detailed data about addresses, attributes, blocks, messages, transactions, and transfers.

To fetch data using the Cosmos API, simply include the `network` argument and provide the name of the specific network you wish to retrieve data from, as demonstrated below:

```
{
  cosmos(network: cosmoshub) {
    __typename
  }
}
```

Bitquery supports following networks:

- `cosmosbub`: Cosmos Hub
- `heimdall`: Heimdall (Matic Verification Network)
- `crypto_mainnet`: Crypto.org mainnet

Let's dive in and explore the Cosmos data available through Bitquery API.

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos API examples](https://docs.bitquery.io/v1/docs/Examples/cosmos)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
