---
title: "Harmony Arguments API"
description: "Query Harmony GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema."
keywords: ["Harmony API", "Harmony Arguments", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Harmony Arguments API"/>
<meta name="description" content="Query Harmony GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema."/>
<meta name="keywords" content="Harmony API, Harmony Arguments, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Harmony Arguments API" />
<meta property="og:description" content="Query Harmony GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Harmony Arguments API" />
<meta property="twitter:description" content="Query Harmony GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema." />
</head>

# Arguments

The Harmony Arguments API provides information about arguments of smart contract calls and events.

<details>

<summary>Filtering Arguments</summary>

You can filter data using following fields:

-   any: a catch-all field that applies OR logic and allows to filter data using any of the other fields
-   argument: filter by name of the arugment
-   blockHash: filter by hash of the block where transaction is included
-   date: filter by date the transaction was created
-   ledger: filter by block height
-   nonce: filter by value of transaction nonce
-   options: filter data by ordering and limiting it
-   receiver: filter by address of receiver
-   sender: filter by address of sender
-   shardId: filter by shard id where transaction was created
-   smartContractAddress: filter by address of smart contract being called
-   smartContractId: filter by id of smart contract
-   time: filter by time when transaction was created
-   toShardId: filter by shard id where transaction was sent to
-   txIndex: filter by transaction index in the block

</details>

### Returned Arguments Information

-   address: returns address
-   any: a catch-all filter that allows to fetch data using any of the other field
-   argIndex: returns index of the argument in the transaction
-   argType: returns type of the argument
-   argument: returns value of the argument
-   blockHash: returns hash of the block where transaction is included
-   callPath: returns call path
-   count: returns count and other metrics of Harmony Argument
-   date: returns count and other metrics of Harmony Argument as BigInt
-   epoch: returns epoch of transaction
-   expression: performs arithematic operation on value of other fields and returns output
-   external: returns if transfer is external or internal
-   ledger: returns height of the block where transaction is included
-   maximum: returns maximum for selected measurable field of Harmony Argument
-   minimum: returns minimum for selected measurable field of Harmony Argument
-   nonce: returns nonce of the transaction
-   number: returns number
-   receiver: returns address of the receiver
-   sender: returns address of the sender
-   shardId: returns id of shard where transaction originated
-   signatureId: returns id of signature
-   smartContractAddress: returns address of smart contract being called
-   smartContractId: returns id of smart contract being called
-   time: returns time when transaction was created
-   toShardId: returns id of shard where transaction was sent
-   value: returns value of argument

## Related Resources

- [Harmony schema overview](https://docs.bitquery.io/v1/docs/Schema/harmony/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Harmony Coinpath API](https://docs.bitquery.io/v1/docs/Schema/harmony/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
