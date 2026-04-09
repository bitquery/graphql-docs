---
title: "Bitcoin Transaction API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Bitcoin transactions. Get latest txs, fees, inputs, outputs, and daily aggregates."
keywords: [Bitcoin API examples, Bitcoin GraphQL queries, Bitquery]
---

# Transaction API

The Bitcoin Transaction API returns detailed transaction data including inputs, outputs, fees, block context, and USD values. Works with query variables for flexible pagination and date filtering.

## Get Latest Bitcoin Transactions with Fees and Transfer Values

```
query ($network: BitcoinNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  bitcoin(network: $network) {
    transactions(
      options: {desc: ["block.height", "index"], limit: $limit, offset: $offset}
      time: {since: $from, till: $till}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      inputValue
      input_value_usd: inputValue(in: USD)
      outputCount
      inputCount
      index
      hash
      feeValue
      fee_value_usd: feeValue(in: USD)
    }
  }
}

```

Fetch the latest Bitcoin transactions with input/output values in BTC and USD, fee amounts, and block context. Uses query variables for `limit`, `offset`, and date range — a reusable pattern for paginated transaction feeds.

**Variations:** Adjust `limit` and `offset` for pagination. Narrow with `inputAddress` or `outputAddress` for a specific wallet. Add `hash: {is: "..."}` for a single transaction lookup.

## Daily Bitcoin Transaction Count and Average Fee per Day

```
query ($network: BitcoinNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  bitcoin(network: $network) {
    transactions(options: {asc: "date.date"}, date: {since: $from, till: $till}) {
      date: date {
        date(format: $dateFormat)
      }
      count: countBigInt
      feeValue
      avgFee: feeValue(calculate: average)
    }
  }
}

```

Get daily transaction counts and average fees over a date range. Returns count, total fees, and average fee per day — useful for fee trend analysis and network health dashboards.

**Variations:** Change the date variables for different periods. Add `feeValue(calculate: median)` for median fees. Use `count(uniq: addresses)` for daily active address counts alongside fee data.

## List Bitcoin Transactions Sent from a Specific Address

```
query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    transactions(
      options: {desc: ["block.height"]}
      inputAddress: {is: "bc1p4kufll9uhnpkgzuc65slcxd2qaw2hl9xecket3h8yyu4awglcsqslqaztd"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      inputValue
      hash
      feeValue
      outputValue
    }
  }
}

```

List all transactions where a specific address was an input (sender). Returns input values, output values, fees, and block timestamps — the standard query for viewing a Bitcoin wallet's outbound transaction history.

**Variations:** Switch to `outputAddress` for received transactions. Add `date` for a time range. Use [limit/offset](/docs/query-features/filtering/options) for pagination. Add `value(in: USD)` for USD-equivalent amounts.

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin examples index](https://docs.bitquery.io/v1/docs/examples/Bitcoin/index)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
