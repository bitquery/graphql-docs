---
sidebar_position: 1
title:  Polygon API Overview
---


<head>
<meta name="title" content="Polygon API Overview - Start here"/>
<meta name="description" content="Polygon (Matic) Blockchain API - Get Real-time and historical data for Polygon blockchain, including DEX trades, token transfers, NFT, transactions, money flow, gas, Smart contract calls, and events. "/>
<meta name="keywords" content="polygon api, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon API Overview - Start here" />
<meta property="og:description" content="Polygon (Matic) Blockchain API - Get Real-time and historical data for Polygon blockchain, including DEX trades, token transfers, NFT, transactions, money flow, gas, Smart contract calls, and events." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon API Overview - Start here" />
<meta property="twitter:description" content="Polygon (Matic) Blockchain API - Get Real-time and historical data for Polygon blockchain, including DEX trades, token transfers, NFT, transactions, money flow, gas, Smart contract calls, and events." />
</head>


## What is Polygon(Matic) API?

Bitquery's GraphQL API offers access to indexed data from the Polygon (Matic) blockchain.

The Polygon schema contains various types of queries, including block, transaction, event, transactions, trades, NFTs, transfers, and much more.

To retrieve data from the Polygon blockchain, you need to provide the `network` argument with the value `matic` as shown below:

```
query {
  ethereum(network: matic){
    __typename
  }
}
```

Polygon is an EVM-type blockchain; therefore datatype is `ethereum`, but the `network` is `matic`.

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::


Let's dive in and explore the Polygon API in following chapters.
