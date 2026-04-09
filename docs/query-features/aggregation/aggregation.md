---
sidebar_position: 1
title: "Aggregation in Bitquery GraphQL API"
description: "Group and aggregate blockchain data with sum, count, average, maximum, minimum, and median on Bitquery V1 GraphQL."
keywords: [Bitquery, GraphQL, aggregation, calculate, sum, count]
---

# Aggregation in V1 

Aggregation is a way to group data and calculate aggregate values. The API supports a variety of aggregation functions, including `sum`, `count`, `average`, `maximum`, and `minimum`.

The following query uses `calculate: sum` on the `amount` field to aggregate the total ETH sent by a specific address within a date range — a common pattern for wallet activity summaries and transaction volume tracking:

```
query ($network: EthereumNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(date: {since: $from, till: $till}, txSender: {is: $address}) {
      amount(calculate: sum)
    }
  }
}

```
The response returns a single `amount` value representing the summed ETH for the filtered address and date window.

**Variations:** Replace `sum` with `count` to get the number of transactions, or with `average` for the mean transaction size.

> Notes:

- The calculate keyword is case-sensitive.

- The calculate keyword can only be used on fields that contain numeric values.


This next query demonstrates multiple aggregation functions in a single request — computing average, maximum, and median gas prices for Ethereum transactions sorted by date. This pattern is useful for gas fee analytics dashboards:


```
query ($network: EthereumNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    transactions(options: {asc: "date.date"}, date: {since: $from, till: $till}) {
      date: date {
        date(format: $dateFormat)
      }
      gasPrice
      gasValue
      average: gasValue(calculate: average)
      maxGasPrice: gasPrice(calculate: maximum)
      medianGasPrice: gasPrice(calculate: median)
    }
  }
}

parameters: 

{
  "limit": 10,
  "offset": 0,
  "network": "ethereum",
  "from": "2023-07-11",
  "till": "2023-07-18T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```


> Notes:

The calculate argument can be used to specify the aggregation function that should be used.

## Related Resources

- [Count aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/count)
- [Sum aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/sum)
- [Basic structure of a query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
- [Filtering fields](https://docs.bitquery.io/v1/docs/query-features/filtering/fields)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)