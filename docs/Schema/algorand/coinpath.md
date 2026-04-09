---
title: "Algorand Coinpath API"
description: "Query Algorand coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."
keywords: ["Algorand API", "Algorand Coinpath", "Bitquery", "GraphQL"]
---

# Coinpath

The `coinpath` field allows us to retrieve detailed information about money flow using coinpath technology from Algorand.

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

The following query traces fund flow from a sender address on Algorand, returning amounts, block timestamps, receiver addresses, depth, and transaction hashes.

```graphql
{
  algorand {
    coinpath(
      date: { after: "2023-08-05" }
      options: { desc: "block.timestamp.iso8601", limit: 10 }
      sender: { is: "BWSNMG43TUYEOHE76J6KDWIY6MU4U6JFJYGAYCZA2RF5IS3XPO3P3G4FEI" }
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
      }
      sender {
        address
      }
      transaction {
        hash
        value
      }
    }
  }
}
```

For more coinpath examples — including receiver-based tracing and transaction counts — see the [Algorand Coinpath API examples](/v1/docs/Examples/algorand/coinpath) and the [Coinpath Money Flow API examples](/v1/docs/Examples/coinpath/money-flow-api).

## Related Resources

- [Algorand schema overview](https://docs.bitquery.io/v1/docs/Schema/algorand/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
