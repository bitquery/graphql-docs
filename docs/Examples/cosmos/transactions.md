---
title: "Cosmos Transactions API Examples"
description: "Example GraphQL queries for Cosmos transactions. Get fees, gas, signers, and raw transaction data."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Transactions API

Query Cosmos blockchain transactions, including fees, gas usage, signers, and raw transaction data.

## Get Cosmos Transaction by Transaction Hash

Look up a specific Cosmos transaction by its hash. Returns block info, fee details, gas usage, raw transaction data, signer address, and transaction type.

**Variations:** Replace the `hash` value to look up any transaction. Add `options: {limit: N}` when querying without a hash to paginate results. See [query features](/docs/category/query-features) for available filters.

```
{
  cosmos {
    transactions(
      hash: {is: "028b49185b0be6adf7b24804a3c28cd3a0a01c9b0ce0c6eb2e7dce1f5c0dc6b2"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      fee
      feeCurrency {
        name
        address
      }
      gasUsed
      index
      rawTx
      signer {
        address
      }
      type
    }
  }
}
```

## Get Cosmos Transactions by Signer and Date

Retrieve all transactions signed by a specific address on a given date. Returns block info, fees, gas usage, and raw transaction data for each match.

**Variations:** Use `date: {after: "..."}` for a date range instead of a single day. Remove the `signer` filter to see all transactions on that date. See [query features](/docs/category/query-features) for sorting and pagination.

```
{
  cosmos {
    transactions(
      date: {is: "2023-08-09"}
      signer: {is: "cosmos1alprdufsxvxauwcsh08hjpzsqc8elwlq3evztg"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      fee
      feeCurrency {
        name
        address
      }
      gasUsed
      index
      rawTx
      signer {
        address
      }
      type
    }
  }
}
```

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos transfers examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)

