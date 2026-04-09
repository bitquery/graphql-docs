---
sidebar_position: 4
title: "Sum Aggregation in Bitquery GraphQL API"
description: "Calculate total amounts with sum and conditional criteria for transfers, volume, and USD in Bitquery GraphQL."
keywords: [Bitquery, GraphQL, sum, aggregation, transfers, USD]
---

# Sum


The sum of a metric is the total value of all the data points in the metric. This can be useful for calculating total sales, volume, or other metrics.

As we have seen [earlier](docs/query-features/aggregation/aggregation.md), we calculate sum by memtioning it in the fields that support summation.

`amount(calculate: sum)`

## Summation with criteria

We can also caculate sum by restricting the results with additional criterion. Let's look at an example: The query will return the sum of the amounts of tokens transferred to and from the specified address, in USD

```

query ($network: EthereumNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime, $limit: Int!, $offset: Int!) {
  ethereum(network: $network) {
    transfers(
      date: {since: $from, till: $till}
      amount: {gt: 0}
      any: [{receiver: {is: $address}}, {sender: {is: $address}}]
      options: {limit: $limit, offset: $offset, asc: "currency.symbol"}
    ) {
      sum_in: amount(calculate: sum, receiver: {is: $address})
      sum_out: amount(calculate: sum, sender: {is: $address})
      sum_in_usd: amount(in: USD, calculate: sum, receiver: {is: $address})
      sum_out_usd: amount(in: USD, calculate: sum, sender: {is: $address})
      currency {
        address
        symbol
        tokenType
      }
    }
  }
}

{
  "limit": 10,
  "offset": 0,
  "network": "ethereum",
  "address": "0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511",
  "from": "2022-06-17",
  "till": "2022-06-24T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

By mention the address as a sender or receiver we are calculating:

- The total amount of ETH that was transferred into and out of the address, as `sum_in` and `sum_out` fields
- The total amount of ETH that was transferred into and out of the address as the `sum_in_usd` and `sum_out_usd` fields

**Sum** is the aggregation you reach for when only the **total** matters: how much volume moved, how many tokens flowed in aggregate, or what fees added up over a window. It complements row-level listings: you might still use `limit` for samples, but `calculate: sum` answers headline KPIs in one response. Pairing sum with **filters** (time range, address, currency, amount thresholds) defines the population being totaled; pairing it with **grouping** at the query level (for example, per-currency transfer rows) yields subtotals per bucket instead of one global figure.

## Practical Tips

- **Trading and liquidity metrics**: Use sum on trade or transfer amount fields to report total volume, turnover, or notional over a period for a pair, pool, or protocol.
- **Treasury and flow analysis**: Combine sum with sender/receiver criteria (as in the example) to separate inflows, outflows, and USD equivalents for an address or contract.
- **Fees and costs**: When the schema exposes fee-related amounts, summing over a date range gives protocol revenue or user cost totals without exporting raw rows to a spreadsheet.
- **Filtered totals**: Apply the same predicates you use for listing events so the sum reflects only “large transfers,” “whitelisted tokens,” or other business rules—not the whole chain history.
- **Per-dimension subtotals**: When your query returns one row per currency, token, or day (depending on schema support), each row’s sum is that slice’s total; verify how your selection groups data so you do not misread a global aggregate as a per-asset one.

## Related Resources

- [Aggregation overview](https://docs.bitquery.io/v1/docs/query-features/aggregation/)
- [Count aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/count)
- [Filtering fields](https://docs.bitquery.io/v1/docs/query-features/filtering/fields)
- [Coinpath explained — overview](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Bitcoin examples](https://docs.bitquery.io/v1/docs/examples/Bitcoin)