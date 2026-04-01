---
title: "Cosmos Blocks API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cosmos blocks. Get heights, proposers, timestamps, and block counts."
keywords: [Cosmos API examples, Cosmos GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Cosmos Blocks API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Cosmos blocks. Get heights, proposers, timestamps, and block counts."/>
<meta name="keywords" content="Cosmos API examples, Cosmos GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cosmos Blocks API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Cosmos blocks. Get heights, proposers, timestamps, and block counts." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cosmos Blocks API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Cosmos blocks. Get heights, proposers, timestamps, and block counts." />
</head>

# Blocks API

Our Cosmos Blocks API provides all the information related to blocks produced on Cosmos network.

## Retrieve the 10 Most Recent Blocks

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

## Filter Blocks Based on Block Proposer

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

## Count Blocks Associated with a Specific Block Proposer

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