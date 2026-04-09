---
title: "Tron Transfers API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron token transfers. Get latest transfers, TRC-20 flows, and inflow/outflow totals."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Transfer API

Track Tron token transfers including TRC-20 movements, sender/receiver addresses, amounts, and inflow/outflow totals.

## Get Latest Tron USDT Transfers After a Block Date

Fetch the most recent USDT transfers on Tron after a given date, returning amounts, sender/receiver addresses, currency details, and transaction hashes.

**Variations:** Change the `currency` to track a different TRC-20 token, or adjust the `date` filter for a different time range.

```
{
  tron {
    transfers(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
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
      receiver {
        address
      }
      sender {
        address
      }
      txHash
    }
  }
}
```

## Get Latest Tron USDT Transfers Received by a Specific Address

Fetch the most recent USDT transfers received by a given Tron address. [Run this query in the IDE](https://ide.bitquery.io/tron-transactions-by-receiver).

**Variations:** Switch `receiver` to `sender` to see outgoing transfers, or change the `currency` to track a different TRC-20 token.

```
{
  tron {
    transfers(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      date: {after: "2023-07-31"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
      receiver: {is: "TShuppF9wx9Ddx7ih1E2o88QskXeqQpGKE"}
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
      receiver {
        address
      }
      sender {
        address
      }
      txHash
    }
  }
}
```

## List Tron Transfers at a Specific Block Height

Retrieve all token transfers that occurred at a specific Tron block height, useful for block-level auditing.

**Variations:** Add a `currency` filter to scope to a single token, or use a `date` range instead of `height`.

```
{
  tron {
    transfers(
      height: {is: 53420256}
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
      receiver {
        address
      }
      sender {
        address
      }
      txHash
    }
  }
}
```

## Sum Tron Address Inflow and Outflow Totals by Currency

Sum all incoming and outgoing transfer amounts for a Tron address, grouped by currency. [Run this query in the IDE](https://ide.bitquery.io/Tron-Transfer-API).

**Variations:** Add a `date` filter to scope totals to a specific period, or add a `currency` filter to focus on a single token.

```
query MyQuery {
  tron(network: tron) {
    incoming_txs: transfers(receiver: {is: "TMfXyeQPYfgrG4NqpoTnksGPCUJBYmEedQ"}) {
      total_value: amount(calculate: sum)
      currency {
        name
      }
    }
    outgoing_txs: transfers(sender: {is: "TMfXyeQPYfgrG4NqpoTnksGPCUJBYmEedQ"}) {
      total_value: amount(calculate: sum)
      currency {
        name
      }
    }
  }
}
```

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron address examples](https://docs.bitquery.io/v1/docs/Examples/tron/address)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
