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
-   `maximum`: returns maximum for selected [measurable field of Cosmos blocks](/v1/docs/graphql-reference/enums/cosmos-block-measurable)
-   `metadata`: returns metadata of block
-   `minimum`: returns minimum for selected [measurable field of Cosmos blocks](/v1/docs/graphql-reference/enums/cosmos-block-measurable)
-   `proposer`: returns address and annotation (if available) of block proposer
-   `timestamp`: returns block timestamp
