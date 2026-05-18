---
title: "Tron Coinpath API Examples"
description: "Example GraphQL queries for Tron coinpath and fund flows. Trace sender, receiver, depth, and amounts."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Coinpath API

Trace the flow of funds across Tron addresses with depth, amounts, and sender/receiver balances.

## Trace Tron USDT Coinpath From Initial Sender After a Date

Trace the outward money flow from a specific Tron address for a given TRC-20 token. Returns transfer amounts, depth, and sender/receiver balances at each hop.

**Variations:** Change `initialAddress` to trace a different wallet, adjust `currency` for another token, or increase `limit` for deeper tracing. See [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview) for details.

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

## Trace Tron USDT Coinpath To a Receiver Address After a Date

Trace incoming fund flows to a specific Tron receiver address for a given token. Returns amounts, depth, and balance snapshots at each hop.

**Variations:** Swap `receiver` for `sender` to trace outflows, or widen the `initialDate` range. See [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview) for details.

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

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath money flow examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
