---
title: "Tezos Blocks API"
description: "Query Tezos blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."
keywords: ["Tezos API", "Tezos Blocks", "Bitquery", "GraphQL"]
---

# Blocks

The Blocks API provides information about the blocks created on the Tezos blockchain.

Here's an example that demonstrates how to retrieve blocks data from the Tezos blockchain:

```
```

<details>

<summary>Filtering Blocks</summary>

You can filter blocks data using the following fields:

-   `any`: A filter that applies OR logic to refine results based on other fields.

-   `baker`: filter by the baker of the block.

-   `date`: filter by the date when the block was published.

-   `hash`: filter using the hash of the block.

-   `height`: filter by the block height.

-   `options`: filter data by sorting, limiting, and constraining.

-   `proto`: filter using the proto value.

-   `protocol`: filter using the protocol used.

-   `time`: filter using the time when the block was published.


</details>

### Returned Blocks Information

-   `any`: a catch-all field to fetch data using any of the other fields.

-   `baker`: return details of the block's baker.

-   `count`: returns count and other metrics.

-   `countBigInt`: returns count and other metrics as BigInt.

-   `date`: returns the date when the block was published.

-   `expression`: performs arithmetic operations on the value of other fields and returns output.

-   `hash`: returns the hash of the block.

-   `header`: returns information in the header of the block.

-   `height`: returns the height of the block.

-   `maximum`: returns the maximum for the selected measurable field of Tezos blocks.

-   `metdata`: returns block metadata.

-   `minimum`: returns the minimum for the selected measurable field of Tezos Blocks.

-   `proto`: returns the proto value.

-   `protocol`: returns information about the protocol used.

-   `timestamp`: returns the timestamp of the block.

## Related Resources

- [Tezos schema overview](https://docs.bitquery.io/v1/docs/Schema/tezos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Tezos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/tezos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
