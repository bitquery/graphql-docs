---
title: "Cosmos Blocks API"
description: "Query Cosmos blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."
keywords: ["Cosmos API", "Cosmos Blocks", "Bitquery", "GraphQL"]
---

# Blocks

The `blocks` field allows us to fetch details about the blocks from Cosmos blockchain.

Here is an example that demonstrates how to retrieve blocks data:

```
{
  cosmos {
    blocks(
      date: {after: "2023-08-06"}
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

<details>
<summary>Filtering Blocks</summary>

Blocks data can be filtered using following arguments: 

-   `any`: A catch-all filter (OR logic) that can be used to filter the results by any of the other fields.
-   `date`: filter by date of block creation
-   `hash`: filter by block hash
-   `height`: filter by block height
-   `options`: filter returned data by ordering, limiting, and constraining it
-   `proposer`: filter by address of block proposer
-   `time`: filter by time of block creation

</details>

-   `any`: catch-all field that can be used to fetch the results by any of the other fields
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics as BigInt
-   `date`: returns date when block is created
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `hash`: returns block hash
-   `header`: returns block header
-   `maximum`: returns maximum for selected measurable field of Cosmos blocks
-   `metadata`: returns metadata of block
-   `minimum`: returns minimum for selected measurable field of Cosmos blocks
-   `proposer`: returns address and annotation (if available) of block proposer
-   `timestamp`: returns block timestamp

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cosmos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/cosmos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
