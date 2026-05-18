---
title: "Tron Transfers API Examples"
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

<!-- ADDED BY CLAUDE — please review. SEO target: "USDT TRC20 transfers", "USDT Tron tracking",
     "Tron whale tracker", "TRC20 top holders". Tron is the #1 chain by USDT volume so these
     queries cover the highest-traffic Tron-on-Bitquery search intents. -->

## Track Large USDT TRC20 Transfers (Tron Whale Tracker)

Use this query to monitor whale-sized USDT (TRC20) transfers on Tron in real time. This is the most common Tron monitoring pattern — Tron is the largest network by USDT settlement volume, and whale movements are a leading signal for exchange in/outflows. We filter by the USDT TRC20 contract `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t` and use the `amount: {gt: 1000000}` filter to surface transfers above 1M USDT.

```graphql
{
  tron(network: tron) {
    transfers(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      amount: {gt: 1000000}
      date: {after: "2026-01-01"}
      options: {desc: "block.timestamp.iso8601", limit: 25}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        symbol
        address
      }
      sender {
        address
      }
      receiver {
        address
      }
      txHash
    }
  }
}
```

Returns the most recent 25 USDT TRC20 whale transfers above 1,000,000 USDT after January 1, 2026, including sender/receiver addresses and the transaction hash.

## Top USDT TRC20 Receivers (Inflow Leaderboard)

Identify the addresses receiving the most USDT on Tron over a given time window. This is useful for exchange-deposit detection, treasury inflow analysis, and ranking the most active stablecoin destinations on Tron.

```graphql
{
  tron(network: tron) {
    transfers(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      date: {since: "2024-01-01", till: "2024-01-31"}
      options: {desc: "total_received", limit: 25}
    ) {
      receiver {
        address
        annotation
      }
      total_received: amount(calculate: sum)
      transfer_count: count
      currency {
        symbol
      }
    }
  }
}
```

Aggregates USDT received per address for January 2026 and returns the top 25 by sum. Annotations expose well-known recipients (Binance, OKX, Bybit hot wallets, etc.).

## Daily USDT TRC20 Volume on Tron (Time Series)

Build a daily volume chart for USDT on Tron. This time-series shape is the canonical query for Tron stablecoin dashboards and is well-suited to dashboards that benchmark stablecoin activity at TRC20 contract granularity.

```graphql
{
  tron(network: tron) {
    transfers(
      currency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      date: {since: "2026-01-01", till: "2026-03-31"}
      options: {asc: "date.date"}
    ) {
      date {
        date(format: "%Y-%m-%d")
      }
      transfer_volume: amount(calculate: sum)
      transfers_count: count
      unique_senders: count(uniq: senders)
      unique_receivers: count(uniq: receivers)
    }
  }
}
```

Returns one row per day with total USDT volume, transfer count, and unique active senders/receivers, which are the four core daily metrics for Tron stablecoin analytics.

## Stablecoin Flows on Tron (USDT + USDC + USDD)

A unified query covering the three major stablecoins on Tron. Useful for compliance, treasury monitoring, and cross-stablecoin flow analytics.

```graphql
{
  tron(network: tron) {
    transfers(
      currency: {in: [
        "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
        "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
        "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR"
      ]}
      date: {after: "2026-05-01"}
      options: {desc: "block.timestamp.iso8601", limit: 50}
    ) {
      amount
      currency {
        symbol
        address
      }
      sender {
        address
      }
      receiver {
        address
      }
      block {
        timestamp {
          iso8601
        }
      }
      txHash
    }
  }
}
```

The `currency: {in: [...]}` filter covers USDT TRC20, USDC TRC20, and USDD in a single request and returns the most recent 50 stablecoin transfers across all three.
## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron address examples](https://docs.bitquery.io/v1/docs/Examples/tron/address)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)