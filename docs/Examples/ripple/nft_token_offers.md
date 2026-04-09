---
title: "Ripple NFT Token Offers API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for XRPL NFT token offers. Filter by sender, amounts, and operations."
keywords: [Ripple API examples, XRP GraphQL queries, Bitquery]
---

# Ripple NFT Token Offers API

Explore NFT token offer data on the XRP Ledger — filter by sender, receiver, currency, and offer amount using the Bitquery GraphQL API.

## Get XRP Ledger NFT Token Offers from a Specific Transaction Sender

Look up all NFT token offers sent by a given address on XRPL. Returns the offer currency, native and USD amounts, destination account, and operation type for each offer — useful for tracking NFT marketplace activity for address `rBEARbo4Prn33894evmvYcAf9yAQjp4VJF`.

**Variations:** Narrow results by `operation` type (e.g., buy vs. sell offers), add `date` ranges, or pivot the filter to `destinationAccount`. See [query features](/docs/category/query-features) for pagination and sorting options.

[Open this query on IDE](https://ide.bitquery.io/NFT-Token-offers-API-on-Ripple-blockchain)

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
