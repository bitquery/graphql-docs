---
title: "Tezos Balance Updates API"
description: "Query Tezos balance updates data using Bitquery GraphQL API. Get balance updates, contracts, and token movements."
keywords: ["Tezos API", "Tezos Balance Updates", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Tezos Balance Updates API"/>
<meta name="description" content="Query Tezos balance updates data using Bitquery GraphQL API. Get balance updates, contracts, and token movements."/>
<meta name="keywords" content="Tezos API, Tezos Balance Updates, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Tezos Balance Updates API" />
<meta property="og:description" content="Query Tezos balance updates data using Bitquery GraphQL API. Get balance updates, contracts, and token movements." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tezos Balance Updates API" />
<meta property="twitter:description" content="Query Tezos balance updates data using Bitquery GraphQL API. Get balance updates, contracts, and token movements." />
</head>

# Balance Updates

The balanceUpdates API allows you to retrieve information about balance updates for a specific address.

Here's an example that demonstrates how to fetch balance updates data:

```

```

<details>

<summary>Filtering Balance Updates</summary>

You can filter balance updates data using the following fields:

-   `address`: filter by address
-   `any`: a catch-all field that allows filtering data using any of the other fields
-   `attribute`: filter using attributes
-   `block`: filter by block where the transaction is included
-   `blockHash`: filter by block hash
-   `category`: filter by category
-   `change`: filter by change in value
-   `cycle`: filter by cycle
-   `date`: filter by date of the transaction
-   `freezer`: filter by the value of the freezer field
-   `internal`: filter by whether the transfer is internal or external
-   `kind`: filter by kind of balance update
-   `opPath`: filter by value of opPath
-   `options`: filter data by limiting, sorting, and constraining
-   `proto`: filter by proto value
-   `protocol`: filter by protocol used for the transaction
-   `source`: filter by source
-   `time`: filter by time of the transaction
-   `transactionHash`: filter by transaction hash
-   `transactionSource`: filter by transaction source

</details>

### Returned Balance Updates Information

-   `address`: returns the address
-   `any`: a catch-all field to fetch data using any of the other fields
-   `attribute`: returns the value of the attribute
-   `block`: returns information about blocks where the transaction is included
-   `category`: returns the category of balance updates
-   `change`: returns the change value
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics as BigInt
-   `cycle`: returns the cycle value
-   `date`: returns the date of the transaction
-   `expression`: performs arithmetic operations on the value of the field and returns the output value
-   `freezer`: returns the freezer value as a boolean
-   `internal`: returns whether the transfer is internal or external
-   `kind`: returns the kind of balance update
-   `maximum`: returns the maximum for the selected measurable field of Tezos Balance Updates
-   `minimum`: returns the minimum for the selected measurable field of Tezos Balance Updates
-   `opPath`: returns the value of opPath
-   `proto`: returns the proto value
-   `protocol`: returns the protocol used for the transaction
-   `source`: returns the source of the transaction
-   `timestamp`: returns the timestamp of the transaction
-   `transaction`: returns details of the transaction

## Related Resources

- [Tezos schema overview](https://docs.bitquery.io/v1/docs/Schema/tezos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Tezos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/tezos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
