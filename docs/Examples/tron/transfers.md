# Transfer API

Our Tron Transfers API rpovides detailed information about token transfers made on the Tron blockchain.

## Get latest transfer for a token

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

This query retrieves the latest 10 transfers of a specific currency ("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t") on the Tron network that occurred after July 31, 2023. It provides details such as transfer amount, block timestamp, currency address and name, receiver and sender addresses, and transaction hash.

## Get latest transfers by receivers

In this query we use the `reciever` filter to get all transfers sent to an address on Tron. You can run it [here](https://ide.bitquery.io/tron-transactions-by-receiver)

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

This query retrieves the latest 10 transfers on the Tron network for the currency "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" that occurred after July 31, 2023, where the specified receiver address is "TShuppF9wx9Ddx7ih1E2o88QskXeqQpGKE". It provides details such as transfer amount, block timestamp, currency address and name, receiver address, sender address, and transaction hash.

## Filter transfers by block height

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

This query retrieves transfers on the Tron network that occurred at block height 53420256, providing details such as transfer amount, block timestamp, currency address and name, receiver address, sender address, and transaction hash.

## Tron Transfers Both Inflow and Outflow

The following query is used to fetch the total incoming and outgoing transfers for a specific address on the Tron network.

For both incoming and outgoing transfers, the total value of transfers and the currency name are returned.You can run the query [here](https://ide.bitquery.io/Tron-Transfer-API)

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
