---
title: "Algorand Coinpath API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Algorand coinpath. Trace senders, receivers, and transaction counts."
keywords: [Algorand API examples, Algorand GraphQL queries, Bitquery]
---

# Algorand Coinpath API

Trace the flow of funds between Algorand addresses using the Coinpath API, including sender-receiver paths, transaction depths, and amounts.

## Get Algorand Coinpath Transactions for Sender After Date

Trace outgoing fund flows from a specific Algorand sender address after a given date. Returns the 10 most recent coinpath transactions with amount, currency, receiver, depth, and transaction details.

**Variations:** Swap `sender` for `receiver` to trace incoming flows, adjust the `date` filter, or change `limit` for more results. See [query features](/docs/category/query-features) for aggregation options.

```
{
  algorand {
    coinpath(
      date: {after: "2023-08-05"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      sender: {is: "SENDER_ADDRESS_HERE"}
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
      transaction {
        hash
        value
      }
    }
  }
}
```

## Count Algorand Coinpath Transactions Received by Address After Date

Count the total coinpath transactions received by a specific Algorand address after a given date.

**Variations:** Add a `sender` filter to narrow by source, or replace `count` with `amount(calculate: sum)` to get total value. See [query features](/docs/category/query-features) for more options.

```
{
  algorand {
    coinpath(
      date: {after: "2023-08-01"}
      receiver: {is: "BWSNMG43TUYEOHE76J6KDWIY6MU4U6JFJYGAYCZA2RF5IS3XPO3P3G4FEI"}
    ) {
      count
    }
  }
}
```

## Related Resources

- [Algorand schema overview](https://docs.bitquery.io/v1/docs/Schema/algorand/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath money flow examples](https://docs.bitquery.io/v1/docs/Examples/coinpath/money-flow-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
