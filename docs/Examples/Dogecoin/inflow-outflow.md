---
title: "Dogecoin Transfers API Examples"
description: "Example GraphQL queries for Dogecoin transfers and address flows. Get inbound and outbound transfer paths."
keywords: [Dogecoin API examples, Dogecoin GraphQL queries, Bitquery]
---

# Tranfers of an Address on DogeCoin Network

Trace inbound and outbound fund movements for any Dogecoin address using the Coinpath money-flow API.

## Dogecoin Address Inbound and Outbound Coinpath Depth and Amounts

Visualize the complete money-flow graph for a Dogecoin address by querying inbound and outbound coinpaths in a single request. Returns sender/receiver pairs, transaction hashes, transfer amounts, and hop depth — ideal for compliance checks or fund-tracing on address `DJVeRemZM842GmvT6WR3PzVkqhqCEUGsDH`.

**Variations:** Raise `inboundDepth` / `outboundDepth` to trace funds across more hops, add `date` filters to scope the analysis, or widen `limitBy` for broader coverage. See [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview) for depth and direction details.

[Open this query on IDE](https://ide.bitquery.io/zFB1y4MP5B)

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