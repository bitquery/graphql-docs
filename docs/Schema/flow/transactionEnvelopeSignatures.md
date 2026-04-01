---
title: "Flow Transaction Envelope Signatures API"
description: "Query Flow signatures data using Bitquery GraphQL API. Get envelope signatures and signing accounts."
keywords: ["Flow API", "Flow Transaction Envelope Signatures", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Flow Transaction Envelope Signatures API"/>
<meta name="description" content="Query Flow signatures data using Bitquery GraphQL API. Get envelope signatures and signing accounts."/>
<meta name="keywords" content="Flow API, Flow Transaction Envelope Signatures, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Flow Transaction Envelope Signatures API" />
<meta property="og:description" content="Query Flow signatures data using Bitquery GraphQL API. Get envelope signatures and signing accounts." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Flow Transaction Envelope Signatures API" />
<meta property="twitter:description" content="Query Flow signatures data using Bitquery GraphQL API. Get envelope signatures and signing accounts." />
</head>

# Transaction Envelope Signatures

The Flow Transaction Envelope Signatures API provides details about envelope signatures of transaction from the Flow Blockchain.

<details>

<summary>Filtering Transaction Envelope Signatures</summary>

You can filter the data using following fields:

-   address: filter by address of the account for the signature
-   any: a catch-all field that applies OR logic and allows to filter data using any of the other fields
-   blockId: filter by id/hash of block where transaction is included
-   collectionId: filter by id of collection where transaction is included
-   date: filter by date of transaction creation
-   eventsCount: filter by count of events in the transaction
-   gasLimit: filter by gas limit of the transaction
-   height: filter by height of the block where transaction is included
-   indexInCollection: filter by index of transaction in the collection
-   keyId: filter by id of account key
-   options: filter data by ordering and limiting it
-   payer: filter by address of payer
-   proposalKeyId: filter by key id of proposal key
-   proposalKeySequenceNumber: filter by sequence number of proposal key
-   proposer: filter by address of proposer
-   referenceBlockId: filter by id/hash of reference block
-   signature: filter by raw signature data
-   statusCode: filter by status code of the transaction
-   time: filter by time when transaction was created
-   transactionId: filter by id/hash of transaction

</details>

### Returned Transaction Envelope Signatures Information

-   address: returns address of account for the signature
-   any: a catch-all feild that allows to fetch data using any of the other fields
-   block: returns information about block where transaction was included
-   collectionId: returns SHA3-256 has of the collection contents
-   count: returns count and other metrics of Flow Transaction Envelope Signatures
-   countBigInt: returns count and other metrics of Flow Transaction Envelope Signatures as BigInt
-   date: returns date when transaction was created
-   expression: performs arithematic operation on value of other fields and returns output
-   keyId: returns id of the account key
-   maximum: returns maximum for selected measurable field of Flow Transaction Envelope Signatures
-   minimum: returns minimum for selected measurable field of Flow Transaction Envelope Signatures
-   signature: returns raw signature data
-   time: returns time the transaction was created
-   transaction: returns basic information about transaction

## Related Resources

- [Flow schema overview](https://docs.bitquery.io/v1/docs/Schema/flow/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Flow Coinpath API](https://docs.bitquery.io/v1/docs/Schema/flow/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
