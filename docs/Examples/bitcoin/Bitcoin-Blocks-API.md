---
title: "Bitcoin Blocks API Examples"
description: "Example GraphQL queries for Bitcoin block data. Get recent blocks, height, difficulty, transaction counts, and timestamps."
keywords: [Bitcoin API examples, Bitcoin GraphQL queries, Bitquery]
---

# Blocks API

The Bitcoin Blocks API returns block-level data including height, difficulty, size, timestamps, and transaction counts. Use it for block explorer features, mining analytics, and network monitoring.

## Retrieve Ten Most Recent Bitcoin Blocks with Height and Stats

```
query  {
  bitcoin(network: bitcoin) {
    blocks(options: {desc: "height", limit: 10}, date: {after: "2023-10-10"}) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      difficulty
      transactionCount
      blockSizeBigInt
    }
  }
}


```

Get the 10 most recent Bitcoin blocks with height, difficulty, transaction count, size, and timestamp. Ordered by block height descending.

**Variations:** Change `limit` for more blocks. Use `height: {is: N}` to look up a specific block. Add `date` for a time-bounded query. Switch `network` to `litecoin`, `dogecoin`, or other UTXO chains.

## Get Top Bitcoin Blocks Ranked by Transaction Count

```
query  {
  bitcoin(network: bitcoin) {
    blocks(options: {limit: 10, desc: "transactionCount"}) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      difficulty
      maximum(of: transaction_count, get: transaction_count)
      transactionCount
    }
  }
}

```

Find the blocks with the highest transaction counts on Bitcoin. Uses `desc: "transactionCount"` to surface the busiest blocks — useful for studying network congestion and block utilization.

**Variations:** Sort by `difficulty` or `blockSizeBigInt` instead. Add `date` to search within a specific period. Use [aggregations](/docs/query-features/aggregation/) like `average(of: transaction_count)` for average transactions per block.

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin examples index](https://docs.bitquery.io/v1/docs/examples/Bitcoin/index)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)