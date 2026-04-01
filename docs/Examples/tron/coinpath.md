---
title: "Tron Coinpath API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron coinpath and fund flows. Trace sender, receiver, depth, and amounts."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Tron Coinpath API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Tron coinpath and fund flows. Trace sender, receiver, depth, and amounts."/>
<meta name="keywords" content="Tron API examples, Tron GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Coinpath API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Tron coinpath and fund flows. Trace sender, receiver, depth, and amounts." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Coinpath API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Tron coinpath and fund flows. Trace sender, receiver, depth, and amounts." />
</head>

# Coinpath API


Our Tron Coinpath API provides comprehensive information about money flow of addresses on the Tron blockchain.

## Get Money Flow of Particular Address

```graphql
{
  tron {
    coinpath(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      initialAddress: {is: "TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN"}
      initialDate: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 5}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      depth
      receiver {
        address
        balance
        amountOut
        amountIn
      }
      sender {
        address
        amountIn
        amountOut
        balance
      }
      transaction {
        hash
      }
    }
  }
}
```

This query allows you to retrieve the money flow details originating from a particular address (TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN) for the Tron currency (TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t) after July 31, 2023. The results are ordered in descending order based on block timestamps and are limited to the top 5 entries.

## Get Money Flow With Particular Receiver Address

```graphql
{
  tron {
    coinpath(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      options: {desc: "block.timestamp.iso8601", limit: 5}
      initialDate: {after: "2023-07-31"}
      receiver: {is: "TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN"}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      depth
      receiver {
        address
        balance
        amountOut
        amountIn
      }
      sender {
        address
        amountIn
        amountOut
        balance
      }
      transaction {
        hash
      }
    }
  }
}
```
This query allows you to retrieve the money flow details where the receiver is a particular address (TTd9qHyjqiUkfTxe3gotbuTMpjU8LEbpkN) for the Tron currency (TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t) after July 31, 2023. The results are ordered in descending order based on block timestamps and are limited to the top 5 entries.

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath money flow examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)

