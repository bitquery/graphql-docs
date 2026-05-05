---
title: "Cosmos Transfers API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos transfers. Get transfers by signer, currency, value, and time."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Transfers API

Query token transfers on the Cosmos blockchain, including sender/receiver details, currency info, and transfer values.

## Get Cosmos Transfers by Signer Sorted by Time and Value

Retrieve the latest token transfers initiated by a specific transaction signer, sorted by timestamp and value in descending order. Returns the top 10 transfers with full block, currency, and participant details.

**Variations:** Remove the `transactionSigner` filter to see all transfers, or add a `currency` filter for a specific token. See [query features](/docs/category/query-features) for sorting and pagination.

```
{
  cosmos {
    transfers(
      transactionSigner: {is: "cosmos1alprdufsxvxauwcsh08hjpzsqc8elwlq3evztg"}
      options: {desc: ["block.timestamp.iso8601", "value"], limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
      }
      type
      value
    }
  }
}
```

## Get Recent Cosmos Transfers for a Specific Currency

Fetch the highest-value ATOM transfers after a given date. Returns the top 10 transfers sorted by value, with block, currency, and participant details.

**Variations:** Change `currency: {is: "Atom"}` to query a different token. Adjust the `date` filter or switch sorting to `block.timestamp.iso8601` for chronological order. See [query features](/docs/category/query-features) for more options.

```
{
  cosmos {
    transfers(
      options: {desc: "value", limit: 10}
      date: {after: "2023-08-05"}
      currency: {is: "Atom"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
      }
      type
      value
    }
  }
}
```

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos address examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/address)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)

