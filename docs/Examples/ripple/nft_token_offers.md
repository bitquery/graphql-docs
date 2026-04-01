---
title: "Ripple NFT Token Offers API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for XRPL NFT token offers. Filter by sender, amounts, and operations."
keywords: [Ripple API examples, XRP GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Ripple NFT Token Offers API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for XRPL NFT token offers. Filter by sender, amounts, and operations."/>
<meta name="keywords" content="Ripple API examples, XRP GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Ripple NFT Token Offers API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for XRPL NFT token offers. Filter by sender, amounts, and operations." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Ripple NFT Token Offers API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for XRPL NFT token offers. Filter by sender, amounts, and operations." />
</head>

# Ripple NFT Token Offers API

Ripple NFT Token Offers API provides all details regarding NFT Token offers on Ripple Blockchain. Below are some examples of `nftokenOffers` API:

## Get NFT Token Offers from a specific Transaction Sender

We are using the below query to get the NFT Token Offers from a particular address `rBEARbo4Prn33894evmvYcAf9yAQjp4VJF` on Ripple Blockchain. You can find the query [here](https://ide.bitquery.io/NFT-Token-offers-API-on-Ripple-blockchain).

```
query ($network: RippleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  ripple(network: $network) {
    nftokenOffers(
      options: {asc: "timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      transactionSender: {is: $address}
    ) {
      block
      transaction {
        index
        type
      }
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      fromAccount {
        address
        annotation
      }
      destinationAccount {
        address
        annotation
      }
      nftokenCurrency {
        name
        symbol
      }
      currency {
        name
        symbol
      }
      nftokenAmount
      nftoken_amount_usd: nftokenAmount(in: USD)
      amount
      amount_usd: amount(in: USD)
      operation
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "address": "rBEARbo4Prn33894evmvYcAf9yAQjp4VJF",
  "network": "ripple"
}
```

## Related Resources

- [Ripple schema overview](https://docs.bitquery.io/v1/docs/Schema/ripple/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Blockchain API examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
