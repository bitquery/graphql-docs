---
sidebar_position: 1
title: "Tron API — Blockchain Data Schema | Bitquery"
description: "Access Tron blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Tron API, Tron GraphQL, Tron blockchain data, Bitquery]
---

<head>
<meta name="title" content="Tron API — Blockchain Data Schema | Bitquery"/>
<meta name="description" content="Access Tron blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."/>
<meta name="keywords" content="Tron API, Tron GraphQL, Tron blockchain data, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron API — Blockchain Data Schema | Bitquery" />
<meta property="og:description" content="Access Tron blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron API — Blockchain Data Schema | Bitquery" />
<meta property="twitter:description" content="Access Tron blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more." />
</head>

# Tron API Overview

Bitquery's Tron API offers access to indexed data from the Tron network including shards, block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as shard information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the tron blockchain, you need to provide the `tron` argument with the value `tron` as shown below:

```
query MyQuery {
  tron(network: tron){
    __typename
  }
}


```

Let's dive in and explore the Tron data available through Bitquery API.

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron API examples](https://docs.bitquery.io/v1/docs/Examples/tron)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
