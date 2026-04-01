---
title: "Dogecoin Price API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Dogecoin USD price from on-chain data. Get latest price and block context."
keywords: [Dogecoin API examples, Dogecoin GraphQL queries, Bitquery]
---

# Get Latest Price of Doge Coin in USD

## Query Latest Dogecoin USD Price from Recent On-Chain Inputs

Doge Coin is one of the most famous meme coin in the cryptocurrency space. Using [this](https://ide.bitquery.io/dogecoin-price-in-use_1) query, we can get the latest price of Doge Coin in `USD`.

```graphql
query MyQuery {
  bitcoin(network: dogecoin) {
    inputs(
      options: { limit: 1, desc: "block.timestamp.time" }
      time: { after: "2024-12-18T00:00:00Z" }
    ) {
      amount: value
      usd: value(in: USD)
      price: expression(get: "usd/amount")
      block {
        timestamp {
          time
        }
      }
    }
  }
}
```

## Related Resources

- [Dogecoin schema overview](https://docs.bitquery.io/v1/docs/Schema/Dogecoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Dogecoin inflow/outflow example](https://docs.bitquery.io/v1/docs/Examples/Dogecoin/inflow-outflow)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
