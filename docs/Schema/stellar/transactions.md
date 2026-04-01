---
title: "Stellar Transactions API"
description: "Query Stellar transactions data using Bitquery GraphQL API. Get transactions, fees, statuses, and included operations."
keywords: ["Stellar API", "Stellar Transactions", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Stellar Transactions API"/>
<meta name="description" content="Query Stellar transactions data using Bitquery GraphQL API. Get transactions, fees, statuses, and included operations."/>
<meta name="keywords" content="Stellar API, Stellar Transactions, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Stellar Transactions API" />
<meta property="og:description" content="Query Stellar transactions data using Bitquery GraphQL API. Get transactions, fees, statuses, and included operations." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Stellar Transactions API" />
<meta property="twitter:description" content="Query Stellar transactions data using Bitquery GraphQL API. Get transactions, fees, statuses, and included operations." />
</head>

# Transactions

> Transactions comprise a bundle of between 1-100 operations and are

> signed and submitted to the ledger by accounts.

Bitquery transactions API has the following fields:

```

query ($network: StellarNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {

stellar(network: $network) {

transactions(

options: {desc: "block", asc: "index", limit: 10, offset: 0}

time: {since: $from, till: $till}

) {

block

timestamp {

time(format: "%Y-%m-%d %H:%M:%S")

}

hash

index

fee

fee_usd: fee(in: USD)

sender {

address

annotation

}

success

timeBounds

sequence

operationCount

memos

memoType

}

}

}



{

"network": "stellar",

"from": "2023-08-21T13:19:39.000Z",

"till": "2023-08-21T13:49:39.000Z",

"dateFormat": "%Y-%m-%d"

}

```

<details>

<summary>Filtering Transactions</summary>

- **options**

This object specifies the options for the query. The following fields are supported:

- **desc** or **asc**- The order in which the results should be returned. The default is `asc` (ascending).

- **limit** - The maximum number of results to return.

- **offset** - The offset from the first result to return.

- **time**

This object specifies the date range for the query.

- **timeBounds**

The time bounds for the transaction in epochs for eg: [0,1792625642)

- **success**

A boolean value that indicates whether the transaction was successful.

- **sequence**

The sequence number of the transaction. This is a unique identifier for the transaction within the account that sent the transaction.

- **sender**

The account that sent the transaction.

- **memoType**

The type of memo that was included in the transaction.

- **memos**

The memos that were included in the transaction

- **maxFee**

The maximum fee that is willing to pay for the transaction. This is denominated in stroops.

- **index**

The index of the transaction in the ledger. This is a unique identifier for the transaction within the ledger.

- **hash**

The hash of the transaction. This is a unique identifier for the transaction.

- **fee**

The fee that was paid for the transaction. This is denominated in stroops.

- **block**

The number of the block in which the transaction was included.

- **any**

A catch-all field ( OR logic) that can be used to filter for transactions that match any of the other fields.

- **date**

The date of the transaction.

</details>

## Fields

- **block**

The number of the block in which the transaction was included.

- **timestamp**

The time at which the transaction was submitted to the Stellar network.

- **hash**

The hash of the transaction.

- **index**

The index of the transaction in the ledger.

- **fee**

The fee that was paid for the transaction. This is denominated in stroops.

- **fee_usd**

The fee that was paid for the transaction in USD.

- **sender**

The account that sent the transaction.

- **success**

A boolean value that indicates whether the transaction was successful.

- **timeBounds**

The time bounds for the transaction. This is an object that contains the start time and end time in epoch of the transaction , for e.g [0,1692625600) .

- **sequence**

The sequence number of the transaction. This is a unique identifier for the transaction within the account that sent the transaction.

- **operationCount**

The number of operations in the transaction.

- **memos**

The memos that were included in the transaction. This is an array of objects that contain the memo text and the memo type.

- **memoType**

The type of memo that was included in the transaction.

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Stellar Coinpath API](https://docs.bitquery.io/v1/docs/Schema/stellar/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
