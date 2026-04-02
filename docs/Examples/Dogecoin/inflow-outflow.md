---
title: "Dogecoin Transfers API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Dogecoin transfers and address flows. Get inbound and outbound transfer paths."
keywords: [Dogecoin API examples, Dogecoin GraphQL queries, Bitquery]
---

# Tranfers of an Address on DogeCoin Network

## Dogecoin Address Inbound and Outbound Coinpath Depth and Amounts

Doge Coin is one of the most famous meme coin in the cryptocurrency space. Using [this](https://ide.bitquery.io/zFB1y4MP5B) query, we can get the transfers of Doge Coin to a particular address.

```graphql
query (
  $network: BitcoinNetwork!
  $address: String!
  $inboundDepth: Int!
  $outboundDepth: Int!
  $limit: Int!
  $from: ISO8601DateTime
  $till: ISO8601DateTime
) {
  bitcoin(network: $network) {
    inbound: coinpath(
      initialAddress: { is: $address }
      depth: { lteq: $inboundDepth }
      options: {
        direction: inbound
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: $limit }
      }
      date: { since: $from, till: $till }
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      transaction {
        hash
      }
      amount
      depth
      count
    }
    outbound: coinpath(
      initialAddress: { is: $address }
      depth: { lteq: $outboundDepth }
      options: {
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: $limit }
      }
      date: { since: $from, till: $till }
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      transactions {
        amount
        txHash
        txValue
      }
      amount
      depth
      count
    }
  }
}
{
  "inboundDepth": 1,
  "outboundDepth": 1,
  "limit": 100,
  "offset": 0,
  "network": "dogecoin",
  "address": "DJVeRemZM842GmvT6WR3PzVkqhqCEUGsDH",
  "from": null,
  "till": null,
  "dateFormat": "%Y-%m"
}
```

## Related Resources

- [Dogecoin schema overview](https://docs.bitquery.io/v1/docs/Schema/Dogecoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Dogecoin latest price example](https://docs.bitquery.io/v1/docs/Examples/Dogecoin/get-latest-price)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
