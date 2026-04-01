---
title: "Dogecoin Transfers API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Dogecoin transfers and address flows. Get inbound and outbound transfer paths."
keywords: [Dogecoin API examples, Dogecoin GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Dogecoin Transfers API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Dogecoin transfers and address flows. Get inbound and outbound transfer paths."/>
<meta name="keywords" content="Dogecoin API examples, Dogecoin GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Dogecoin Transfers API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Dogecoin transfers and address flows. Get inbound and outbound transfer paths." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dogecoin Transfers API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Dogecoin transfers and address flows. Get inbound and outbound transfer paths." />
</head>

# Tranfers of an Address on DogeCoin Network

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
