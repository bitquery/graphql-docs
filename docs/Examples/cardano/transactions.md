---
title: "Cardano Transactions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cardano transactions. Get tx details for a specific date and daily transaction counts."
keywords: [Cardano API examples, Cardano GraphQL queries, Bitquery, Cardano transactions, mintCount, feeValue]
---

# Cardano Transactions API

Query Cardano transactions with input and output totals, fees in ADA and USD, mint and withdrawal counts, and block context using the Transactions API.

## Get Cardano Transactions for a Specific Date

Retrieve 10 Cardano transactions from a specific date with input value in ADA and USD, fee value in ADA and USD, mint count, withdrawal totals, and output value. Useful for daily reporting, fee analysis, and spot-checking on-chain activity.

**Variations:** Change `date: {is: ...}` to `date: {since: ..., till: ...}` for a range, sort by `options: {desc: ["block.height", "index"], limit: 10}` to get the latest transactions in order, or add `feeValue: {gt: ...}` to filter for high-fee transactions.

```
{
  cardano(network: cardano) {
    transactions(options: {limit: 10}, date: {is: "2023-11-29"}) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      hash
      index
      inputValue
      input_value_usd: inputValue(in: USD)
      outputValue
      inputCount
      outputCount
      feeValue
      fee_value_usd: feeValue(in: USD)
      mintCount
      withdrawalValue
      withdrawalCount
    }
  }
}
```

## Count Daily Cardano Transactions Over Recent Days

Aggregate the total transaction count per day for the most recent days on Cardano. Useful for building activity dashboards, monitoring network throughput, and detecting usage spikes.

**Variations:** Switch to `startOfInterval(unit: day, interval: 10)` for coarser buckets, change `limit` for more days, or add `date: {since: ..., till: ...}` to scope a specific window. See [query features](/docs/category/query-features) for aggregation patterns.

```
{
  cardano(network: cardano) {
    transactions(options: {desc: "date.date", limit: 10}) {
      date {
        date
      }
      count
    }
  }
}
```

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Cardano Transactions schema](https://docs.bitquery.io/v1/docs/Schema/cardano/transactions)
- [Cardano Inputs and Outputs API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/inputs-outputs)
- [Transaction API examples](https://docs.bitquery.io/v1/docs/Examples/Transactions/transaction-api)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
