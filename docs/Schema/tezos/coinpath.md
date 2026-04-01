---
title: "Tezos Coinpath API"
description: "Query Tezos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."
keywords: ["Tezos API", "Tezos Coinpath", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Tezos Coinpath API"/>
<meta name="description" content="Query Tezos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."/>
<meta name="keywords" content="Tezos API, Tezos Coinpath, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Tezos Coinpath API" />
<meta property="og:description" content="Query Tezos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tezos Coinpath API" />
<meta property="twitter:description" content="Query Tezos coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers." />
</head>

# Coinpath

The Coinpath API provides information about the movement of funds within the Tezos Blockchain.

<details>

<summary>Filtering Returned Data</summary>

You can filter the returned data using the following criteria:

-   `date`: filter by the date of the transfer.
-   `depth`: filter by the depth of the transfer.
-   `initialAddress`: filter by the initial address of the transfer.
-   `initialDate`: filter by the initial date of the transfer.
-   `initialTime`: filter by the initial time of the transfer.
-   `options`: filter data using ordering, sorting, and constraining.
-   `receiver`: filter by the receiver of the transfer.
-   `sender`: filter by the sender of the transfer.
-   `time`: filter by the time of the transfer.

</details>

### Returned Information

-   `amount`: returns the amount of the transfer.
-   `any`: a catch-all field that allows you to fetch data using any of the other filters.
-   `block`: returns information about the block where the transaction is included.
-   `count`: returns the count and other metrics.
-   `countBigInt`: returns the count and other metrics as BigInt.
-   `currency`: returns the currency used in the transfer.
-   `depth`: returns the 1-hop depth of the transfer.
-   `maximum`: returns the maximum value for the selected measurable field in Coinpath.
-   `minimum`: returns the minimum value for the selected measurable field in Coinpath.
-   `receiver`: returns the receiver of the transfer.
-   `sender`: returns the sender of the transfer.
-   `transaction`: returns details about the transaction where the transfer occurred.

## Related Resources

- [Tezos schema overview](https://docs.bitquery.io/v1/docs/Schema/tezos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
