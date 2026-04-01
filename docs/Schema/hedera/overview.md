---
sidebar_position: 1
title: "Hedera API — Blockchain Data Schema | Bitquery"
description: "Access Hedera blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Hedera API, Hedera GraphQL, Hedera blockchain data, Bitquery]
---

<head>
<meta name="title" content="Hedera API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Hedera blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Hedera API, Hedera GraphQL, Hedera blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Hedera API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Hedera blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Hedera API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Hedera blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

# Overview

Our API makes it easy to access different types of data from the Hedera blockchain, like addresses, arguments, calls, and more.

## Getting Started

To use the API, specify the network parameter with the Hedera network name. For example:

```
{
    hedera(network: hedera){
        __typename
    }
}
```

Supported networks:

- `hedera`: Hedera Mainnet

Let's dive in and explore the Hedera data available through Bitquery API.

## Using the Explorer

You can also use our user-friendly [explorer](https://explorer.bitquery.io/hedera) to interactively explore Hedera blockchain data.

[![Hedera Explorer](/img/hedera-explorer.png)](https://explorer.bitquery.io/hedera)

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Hedera API examples](https://docs.bitquery.io/v1/docs/Examples/hedera)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
