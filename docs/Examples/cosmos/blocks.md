---
title: "Cosmos Blocks API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos blocks. Get heights, proposers, timestamps, and block counts."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

# Blocks API

Our Cosmos Blocks API provides all the information related to blocks produced on Cosmos network.

## Get Ten Most Recent Cosmos Blocks

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

This query retrieves details about the 10 most recent blocks on the Cosmos blockchain. It includes information like block hash, header, height, metadata, block proposer's address, and timestamp for each block. The results are ordered by timestamp in descending order.

## Get Cosmos Blocks Filtered by Block Proposer

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

This query fetches details about the 10 most recent blocks on the Cosmos blockchain. It specifically filters the results to include only blocks proposed by the address `13EE3F05F20C6AD8FD27CBEF33DD61D5F99ECF6F`. It retrieves information such as the block hash, block height, address of the block proposer, and timestamp for each of these filtered blocks. The results are sorted based on the timestamp in descending order.

## Count Cosmos Blocks by Block Proposer

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

This query counts the number of blocks proposed by the address `13EE3F05F20C6AD8FD27CBEF33DD61D5F99ECF6F` on the Cosmos blockchain after the date "2023-08-07". It provides the total count of unique blocks that were proposed by the specified address within the specified timeframe.

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos transactions examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/transactions)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)