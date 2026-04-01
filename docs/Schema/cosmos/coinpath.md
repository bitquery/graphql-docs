---
title: "Cosmos Coinpath API"
description: "Query Cosmos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."
keywords: ["Cosmos API", "Cosmos Coinpath", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Cosmos Coinpath API"/>
<meta name="description" content="Query Cosmos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."/>
<meta name="keywords" content="Cosmos API, Cosmos Coinpath, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cosmos Coinpath API" />
<meta property="og:description" content="Query Cosmos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cosmos Coinpath API" />
<meta property="twitter:description" content="Query Cosmos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers." />
</head>

# Coinpath

The coinpath API provides detailed information about the money flow using coinpath technology.

<details>
<summary></summary>

-   `currency`: filter by the currency involved in the transactions.
-   `date`: filter by date of the transaction
-   `initialAddress`: filter initial address of the transfer
-   `initialDate`: filter by initial date of the transfer
-   `initialTime`: filter by initial time of the transfer
-   `options`: filter returned data by ordering, limiting and constraining it
-   `receiver`: filter by the receiver of ther transfer
-   `sender`: filter by the sender of the transfer
-   `time`: filter by time of the transfer

</details>

-   `amount`: returns summary of transferred value
-   `any`: catch-all field that can be used to fetch the results by any of the other fields
-   `block`: returns details of block where transaction is included 
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics
-   `currency`: returns currency of transfer
-   `depth`: returns 1- based hop depth of the graph
-   `maximum`: returns maximum for selected measurable field of Cosmos coinpath
-   `minimum`: returns minimum for selected measurable field of Cosmos coinpath
-   `receiver`: returns receiver address
-   `sender`: returns sender address
-   `transaction`: returns message of transfer happened

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
