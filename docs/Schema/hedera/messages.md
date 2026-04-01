---
title: "Hedera Messages API"
description: "Query Hedera messages data using Bitquery GraphQL API. Get chain messages, actors, and method calls."
keywords: ["Hedera API", "Hedera Messages", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Hedera Messages API"/>
<meta name="description" content="Query Hedera messages data using Bitquery GraphQL API. Get chain messages, actors, and method calls."/>
<meta name="keywords" content="Hedera API, Hedera Messages, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Hedera Messages API" />
<meta property="og:description" content="Query Hedera messages data using Bitquery GraphQL API. Get chain messages, actors, and method calls." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Hedera Messages API" />
<meta property="twitter:description" content="Query Hedera messages data using Bitquery GraphQL API. Get chain messages, actors, and method calls." />
</head>

# Messages

The Messages API provides information about blockchain messages on the Hedera Blockchain.

Here's an exmaple showcasing how to fetch message data:

```
{
  hedera {
    messages(
      date: {after: "2023-08-13"}
      options: {desc: "consensusTimestamp.time", limit: 10}
    ) {
      consensusTimestamp {
        time
      }
      entity {
        id
      }
      message
      nodeAccount {
        id
      }
      payerAccount {
        id
      }
      result {
        id
      }
      time {
        iso8601
      }
      topicRunningHash
    }
  }
}
```

<details>

<summary>Filtering Messages</summary>

You can filter blockchain messages using the following arguments:

-   `any`: A field for filtering using any of the other fields.
-   `date`: Filter by the date of the transaction.
-   `entityType`: Filter by entity type.
-   `nodeAccont`: Filter by the specific account of the node where the transaction is being sent.
-   `options`: Filter data by sorting, ordering, and constraining.
-   `payerAccount`: Filter by a specific account in the transaction.
-   `result`: Filter by the transaction result.
-   `success`: Filter by the success of the transactions.
-   `transactionHash`: Filter by the hash of the transaction where the message is involved.
-   `transactionRunningHash`: Filter by the transaction running hash.

</details>

### Returned Message Information

-   `any`: A catch-all field that allows fetching data by any of the other fields.
-   `consensusTimestamp`: Returns the consensus timestamp of the transaction.
-   `count`: Returns the count and other metrics.
-   `countBigInt`: Returns the count and other metrics as BigInt.
-   `date`: Returns the date of the transaction.
-   `entity`: Returns details about the entity.
-   `expression`: Performs arithmetic operations on fields and returns the results.
-   `feeCurrency`: Returns details about the currency in which the fee is paid.
-   `initialBalance`: Returns the initial balance.
-   `maxFee`: Returns the maximum fee for the transaction.
-   `maximum`: Returns the maximum for the selected measurable field of Hedera Message.
-   `memo`: Returns the value of the memo field.
-   `message`: Returns the value of the message.
-   `minimum`: Returns the minimum for the selected measurable field of Hedera Message.
-   `nodeAccount`: Returns the specific account of the node where the transaction is being sent.
-   `payerAccount`: Returns the specific account in transactions.
-   `result`: Returns the result of the transaction.
-   `success`: Returns the success of the transaction as a result.
-   `time`: Returns the time of the transaction.
-   `topicRunningHash`: Returns the value of the topic running hash.
-   `topicSequenceNumber`: Returns the value of the topic sequence number.
-   `transactionFee`: Returns the fee consumed by the transaction.
-   `transactionHash`: Returns the hash of the transaction.
-   `transactionValidDurationInSec`: Returns the duration of transaction validity in seconds.
-   `validStart`: Returns the timestamp when the transaction validity starts.

## Related Resources

- [Hedera schema overview](https://docs.bitquery.io/v1/docs/Schema/hedera/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Hedera Coinpath API](https://docs.bitquery.io/v1/docs/Schema/hedera/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
