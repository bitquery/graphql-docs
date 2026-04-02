---
title: "Celo Coinpath API"
description: "Query Celo coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."
keywords: ["Celo API", "Celo Coinpath", "Bitquery", "GraphQL"]
---

# Coinpath

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology.

<details>
<summary>Filtering Options</summary>

Coinpath data can be filtered using following arguments:

- `currency`: Filter by the currency involved in the transaction.
- `date`: Filter by the date of the transaction.
- `depth`: Filter by the depth of the transaction.
- `initialAddress`: Filter by the initial address.
- `initialDate`: Filter by the initial date.
- `initialTime`: Filter by the initial time.
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `receiver`: Filter by the receiver's address.
- `sender`: Filter by the sender's address.
- `time`: Filter by the time of the transaction.
  

</details>

The following are available fields for the `coinpath`:

- `amount`: returns the amount of tokens involved in the transaction.
- `any`:
- `block`: returns details of the block where the transaction happened.
- `count`: returns the aggregate count of transactions.
- `countBigInt`: returns the aggregate count of transactions in BigInt format.
- `currency`: returns details of the currency used in the transaction.
- `depth`: returns depth information.
- `maximum`: returns maximum of selected coinpath measurable fields
- `minimum`: returns minimum of selected coinpath measurable fields
- `receiver`: returns information about the receiver.
- `sender`: returns information about the sender.
- `transaction`:  returns transaction details.
- `transactions`: returns attributes of transactions.

## Example Query

The following query traces outbound CELO fund flow from an address up to 2 hops deep, returning sender/receiver details, amounts, and block timestamps. Add `direction: inbound` inside `options` to trace incoming funds instead.

```graphql
{
  ethereum(network: celo_mainnet) {
    coinpath(
      initialAddress: { is: "0xe11BFCBDd43745D4Aa6f4f18E24aD24f4623af04" }
      currency: { is: "CELO" }
      depth: { lteq: 2 }
      options: {
        seed: 110
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2023-01-01", till: "2023-06-30" }
    ) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      amount
      currency {
        symbol
        name
      }
      transaction {
        hash
        value
      }
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d")
        }
      }
      depth
      count
    }
  }
}
```

For more coinpath examples — including inbound tracing, two-address relationship analysis, and multi-hop fund tracking — see the [Coinpath Money Flow API examples](/v1/docs/Examples/coinpath/money-flow-api).

## Related Resources

- [Celo schema overview](https://docs.bitquery.io/v1/docs/Schema/celo/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
