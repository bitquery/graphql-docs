---
sidebar_position: 1
title: "Solana API — Blockchain Data Schema | Bitquery"
description: "Access Solana blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Solana API, Solana GraphQL, Solana blockchain data, Bitquery]
---

<head>
<meta name="title" content="Solana API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Solana blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Solana API, Solana GraphQL, Solana blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Solana API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Solana blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Solana API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Solana blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

# Overview

Bitquery API offers access to indexed data from the Solana blockchain. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.
The schema contains information on blockRewards, address, transfers, transactions, instructions
and instructionAccounts.


```
query MyQuery {
  solana(network: solana){
    __typename
  }
}

```

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana API examples](https://docs.bitquery.io/v1/docs/Examples/Solana)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
