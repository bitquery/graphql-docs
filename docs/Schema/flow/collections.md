---
title: "Flow Collections API"
description: "Query Flow collections data using Bitquery GraphQL API. Get NFT collections, IDs, and collection metadata."
keywords: ["Flow API", "Flow Collections", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Flow Collections API"/>
<meta name="description" content="Query Flow collections data using Bitquery GraphQL API. Get NFT collections, IDs, and collection metadata."/>
<meta name="keywords" content="Flow API, Flow Collections, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Flow Collections API" />
<meta property="og:description" content="Query Flow collections data using Bitquery GraphQL API. Get NFT collections, IDs, and collection metadata." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Flow Collections API" />
<meta property="twitter:description" content="Query Flow collections data using Bitquery GraphQL API. Get NFT collections, IDs, and collection metadata." />
</head>

# Collections

The Flow Collections API provides information about collections from the Flow Blockchain. A collection is batch of transactions that have been includes in a block.

<details>

<summary>Filtering Collections</summary>

You can filer the collections data using the following fields:

-   any: a catch-all filter that applies OR logic and allows to filter using any of the other fields
-   blockId: filter by id of the block where collection is included
-   collectionId: filter by SHA3-256 hash of the collection contents
-   date: filter by date the transaction was created
-   height: filter by block height
-   index: filter by index of collection in the block
-   options: filter data by ordering, sorting and limiting it
-   time: filter by time the transaction was created
-   transactionsCount: filter by transaction count in collection

</details>

### Returned Collections Information

-   any: a catch-all fields to fetch data using any of the other fields
-   block: provides basic information about block where collection is included
-   count: returns count and other metrics for Flow Collections
-   countBigInt: returns count and other metrics for Flow Collections as BigInt
-   date: returns date when collection was created
-   expression: performs arithematic operations on value of other fields and returns output
-   id: returns SHA3-256 hash of the collection contents
-   index: returns index of collection inside block
-   maximum: returns maximum for selected measurable field of Flow Collections
-   minimum: returns minimum for selected measurable field of Flow Collections
-   signatures: returns BLS signatures of the collection nodes guaranteeing the collection
-   time: returns time the collection was created
-   transactionsCount: returns count of transactions inside collection

## Related Resources

- [Flow schema overview](https://docs.bitquery.io/v1/docs/Schema/flow/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Flow Coinpath API](https://docs.bitquery.io/v1/docs/Schema/flow/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
