---
title: "Stellar Effects API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Stellar ledger effects. Get state changes, operations, and transaction links."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

# Stellar Effects API

Inspect Stellar ledger effects — state changes triggered by transactions, trades, and other operations — using the Bitquery GraphQL API.

## Get Latest Stellar Network Effects

Return the most recent Stellar ledger effects for a given date, with operation type, effect name, detail payload, account address, and the originating transaction.

**Variations:** Shift the `date` filter for a different day, raise `limit` for more rows, or add an `effect` filter (e.g., `account_credited`) to isolate a specific type. See [query features](/docs/category/query-features) for sorting options.

```
query MyQuery {
  stellar(network: stellar) {
    effects(options: {limit: 10, desc: "timestamp.time"}, date: {is: "2024-07-16"}) {
      address {
        address
      }
      operation {
        name
      }
      effect
      details
      order
      timestamp {
        time
      }
      transaction {
        hash
        sender
        index
      }
    }
  }
}


```

## Filter Stellar Ledger Effects by Effect Type

Narrow Stellar effects to a single type using the `effect` argument — here, `account_credited` — to track incoming asset credits for any account. [Run the query on the IDE](https://ide.bitquery.io/Latest-Account-Credit-Effect-on-Stellar).

**Variations:** Swap `account_credited` for `account_debited`, `trustline_created`, `trade`, or other effect names. Add an `address` filter to scope results to one account.

```
query MyQuery {
  stellar(network: stellar) {
    effects(
      options: {limit: 10, desc: "timestamp.time"}
      date: {is: "2024-07-16"}
      effect: {is: "account_credited"}
    ) {
      address {
        address
      }
      operation {
        name
      }
      effect
      details
      order
      timestamp {
        time
      }
      transaction {
        hash
        sender
        index
      }
    }
  }
}

```

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar liquidity pool examples](https://docs.bitquery.io/v1/docs/Examples/stellar/stellar-liquiditypool-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
