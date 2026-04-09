---
title: "Cosmos Blocks API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos blocks. Get heights, proposers, timestamps, and block counts."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Blocks API

Query Cosmos blockchain blocks, including block height, proposer address, timestamps, and metadata.

## Get Ten Most Recent Cosmos Blocks

Fetch the 10 most recent Cosmos blocks with their hash, header, height, metadata, proposer address, and timestamp.

**Variations:** Increase `limit` to retrieve more blocks. Add a `proposer` filter to see blocks from a specific validator. See [query features](/docs/category/query-features) for sorting and pagination.

```
{
  cosmos {
    blocks(
      date: {after: "2023-08-07"}
      options: {desc: "timestamp.iso8601", limit: 10}
    ) {
      hash
      header
      height
      metadata
      proposer {
        address
      }
      timestamp {
        iso8601
      }
    }
  }
}
```

## Get Cosmos Blocks Filtered by Block Proposer

List recent blocks proposed by a specific validator address. Returns block hash, height, proposer, and timestamp for each matching block.

**Variations:** Change the `proposer` address to query a different validator. Widen the `date` range or remove it entirely for historical data. See [query features](/docs/category/query-features) for filtering.

```
{
  cosmos {
    blocks(
      date: {after: "2023-08-07"}
      options: {desc: "timestamp.iso8601", limit: 10}
      proposer: {is: "13EE3F05F20C6AD8FD27CBEF33DD61D5F99ECF6F"}
    ) {
      hash
      height
      proposer {
        address
      }
      timestamp {
        iso8601
      }
    }
  }
}
```

## Count Cosmos Blocks by Block Proposer

Count the total number of blocks proposed by a specific validator address within a date range. Useful for measuring validator productivity.

**Variations:** Remove the `proposer` filter to count all blocks in the range. Change `uniq: blocks` to other values for different aggregations. See [query features](/docs/category/query-features) for counting options.

```
{
  cosmos {
    blocks(
      date: {after: "2023-08-07"}
      proposer: {is: "13EE3F05F20C6AD8FD27CBEF33DD61D5F99ECF6F"}
    ) {
      count(uniq: blocks)
    }
  }
}
```

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos transactions examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/transactions)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)