---
title: "Flow Coinpath API"
description: "Query Flow coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."
keywords: ["Flow API", "Flow Coinpath", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Flow Coinpath API"/>
<meta name="description" content="Query Flow coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers."/>
<meta name="keywords" content="Flow API, Flow Coinpath, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Flow Coinpath API" />
<meta property="og:description" content="Query Flow coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Flow Coinpath API" />
<meta property="twitter:description" content="Query Flow coinpath data using Bitquery GraphQL API. Get fund flows, hop paths, and address-level tracing across transfers." />
</head>

# Coinpath

The Tezos Coinpath API provides information about money flow from the Flow Blockchain. 

<details>

<summary>Filtering Returned Data</summary>

You can filter the data using following fields:

-   currency: filter by currency of transfer
-   date: filter by date of the transfer
-   depth: filter by 1-based hop depth of the graph
-   initialAddress: filter by initial addreess of transfer
-   initialDate: filter by initial date of the transfer
-   initialTime: filter by intial time of the transfer
-   options: filter returned data by ordering and limiting it
-   receiver: filter by address of the transfer receiver
-   sender: filter by address of transfer sender
-   time: filter by time of the transacion

</details>

### Returned Information

-   amount: returns summary of transferred amount
-   any: a catch-all field that allows us to fetch data using any of the other fields
-   block: returns summary of block where transaction is included
-   count: returns count of transfers
-   countBigInt: returns count of transfer as BigInt
-   currency: returns currency of transfer
-   depth: provides 1-based hop depth of the transfer graph
-   maximum: returns maximum for selected measurable field of Coinpath 
-   minimum: returns minimum for selected measurable field of Coinpath
-   receiver: returns address of transfer receiver
-   sender: returns address of transfer sender
-   transaction: returns summary of transaction where transfer is included

## Related Resources

- [Flow schema overview](https://docs.bitquery.io/v1/docs/Schema/flow/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
