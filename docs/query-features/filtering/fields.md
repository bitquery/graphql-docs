---
sidebar_position: 2
title: "Filter Fields in Bitquery GraphQL API"
description: "Use method filters, date, time, uniq counts, and field combinations to narrow Bitquery blockchain and DEX queries."
keywords: [Bitquery, GraphQL, filters, fields, uniq, transactions]
---

<head>
<meta name="title" content="Filter Fields in Bitquery GraphQL API"/>
<meta name="description" content="Use method filters, date, time, uniq counts, and field combinations to narrow Bitquery blockchain and DEX queries."/>
<meta name="keywords" content="Bitquery, GraphQL, filters, fields, uniq, transactions"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Filter Fields in Bitquery GraphQL API" />
<meta property="og:description" content="Use method filters, date, time, uniq counts, and field combinations to narrow Bitquery blockchain and DEX queries." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Filter Fields in Bitquery GraphQL API" />
<meta property="twitter:description" content="Use method filters, date, time, uniq counts, and field combinations to narrow Bitquery blockchain and DEX queries." />
</head>

# Fields

Each method for every API will have different set of fields as filters. For example, the blocks method will have the following fields as filters:

- date: The date of the block. The since and till options can be used
  to filter the results by date.
- time: The time of the block. The before option can be used to filter
  the results by time.

- size: The size of the block in bytes. The gteq option can be used to
  filter the results by size.
- miner: The miner who mined the block.
- height: The height of the block in the blockchain.

- blockReward: The block reward for the block.
- blockHash: The hash of the block.

Here's another example of fields available for filtering in `transactions` method:

![tx](/img/ide/transactions.png)

You can use any combination of fields to filter your results if they contradict each other.

## Getting distinct values

The `uniq` keyword is used to specify that only unique or distinct values should be returned in the query results. This is particularly useful when you want to eliminate duplicate entries and only count or retrieve each unique instance of a specific value.

In the example provided, we are querying for the distinct count of senders who made transactions on a specific date.
The field `count(uniq: senders)` would count each sender only once, therefore providing the total number of unique senders.

```
query MyQuery {
  ethereum(network: ethereum) {
    transactions(date: {is: "2024-01-01"}) {
      count(uniq: senders)
    }
  }
}


```

## Related Resources

- [Options filter](https://docs.bitquery.io/v1/docs/query-features/filtering/options)
- [Limits and limitBy](https://docs.bitquery.io/v1/docs/query-features/filtering/limits)
- [Sorting](https://docs.bitquery.io/v1/docs/query-features/filtering/sorting)
- [Basic structure of a query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
- [Aggregation overview](https://docs.bitquery.io/v1/docs/query-features/aggregation/aggregation)
