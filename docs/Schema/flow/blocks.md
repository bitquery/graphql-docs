---
title: "Flow Blocks API"
description: "Query Flow blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."
keywords: ["Flow API", "Flow Blocks", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Flow Blocks API"/>
<meta name="description" content="Query Flow blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."/>
<meta name="keywords" content="Flow API, Flow Blocks, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Flow Blocks API" />
<meta property="og:description" content="Query Flow blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Flow Blocks API" />
<meta property="twitter:description" content="Query Flow blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata." />
</head>

# Blocks

The Flow Blocks API provides detailed information about blocks created on the Flow Blockchain.

<details>

<summary>Filtering Blocks</summary>

You can filter the blocks using the following fields:

-   any: a catch-all filter that applies OR logic and allows filtering using any of the other fields
-   collectionCount: filter by collection count in the block
-   date: filter by date when block was created
-   height: filter by height of the block in the blockchain
-   id: filter by id of the block
-   options: filter returned data by ordering, sorting and limiting it
-   parentBlockId: filter by id of parent block
-   time: filter by time when block was created
-   transactionsCount: filter by transaction included in the block

</details>

### Returned Blocks Information

-   any: a catch-all field which can be used to fetch data with any of the other fields
-   blockSignatures: returns BLS signatures of consensus node
-   collectionsCount: returns count of collections in the block
-   count: returns count and other metrics for different fields 
-   countBigInt: returns count and other metrics as BigInt
-   date: returns date when the block was created
-   expression: performs artithematic operatio on value of other field and returns output 
-   height: returns height of the block in the chain
-   id: returns SHA3-256 hash of the entrie block payload
-   maximum: returns maximum for selected measurable field of Flow Blocks
-   minimum: returns minimum for selected measurable field of Flow Blocks
-   parentBlockId: returns id/hash of parent block
-   time: returns time when block was created
-   transactionsCount: returns transaction count of block

## Related Resources

- [Flow schema overview](https://docs.bitquery.io/v1/docs/Schema/flow/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Flow Coinpath API](https://docs.bitquery.io/v1/docs/Schema/flow/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
