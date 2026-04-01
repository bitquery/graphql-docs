---
title: "Hedera Inputs API"
description: "Query Hedera inputs data using Bitquery GraphQL API. Get transaction inputs, authorizers, and signatures context."
keywords: ["Hedera API", "Hedera Inputs", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Hedera Inputs API"/>
<meta name="description" content="Query Hedera inputs data using Bitquery GraphQL API. Get transaction inputs, authorizers, and signatures context."/>
<meta name="keywords" content="Hedera API, Hedera Inputs, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Hedera Inputs API" />
<meta property="og:description" content="Query Hedera inputs data using Bitquery GraphQL API. Get transaction inputs, authorizers, and signatures context." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Hedera Inputs API" />
<meta property="twitter:description" content="Query Hedera inputs data using Bitquery GraphQL API. Get transaction inputs, authorizers, and signatures context." />
</head>

# Inputs

The Inputs API provides information about transaction inputs on the Hedera Blockchain.

Here's an example showcasing how to retrieve input data:

```
{
  hedera {
    inputs(
      date: {after: "2023-08-13"}
      options: {desc: "consensusTimestamp.time", limit: 5}
    ) {
      amount
      consensusTimestamp {
        time
      }
      currency {
        address
        name
      }
      feeCurrency {
        address
        name
      }
      initialBalance(in: USD)
      nodeAccount {
        id
      }
      payerAccount {
        id
      }
      result {
        id
        name
      }
      transactionHash
      validStart {
        time
      }
    }
  }
}
```

<details>

<summary>Filtering Calls</summary>

You can filter your input data using the following filters:

-   `amount`: Filter by the transfer amount.
-   `any`: A field for filtering results based on any of the other fields.
-   `date`: Filter by the transfer date.
-   `entityType`: Filter by the entity.
-   `nodeAccount`: Filter by the specific account of the node where the transaction is sent.
-   `options`: Filter data through sorting, ordering, and constraining.
-   `payerAccount`: Filter by a specific account in transactions.
-   `result`: Filter by the transaction result.
-   `success`: Filter by the success of the transfer.
-   `transactionHash`: Filter by the transaction where the transfer occurred.
-   `transferEntity`: Filter by the transfer account.

</details>

### Returned Input Information

-   `amount`: Returns the transferred amount in the input.
-   `any`: A catch-all field to fetch all data based on any of the other fields.
-   `consensusTimestamp`: Returns the consensus timestamp of the transactions.
-   `count`: Returns the count and other metrics.
-   `countBigInt`: Returns the count and other metrics as BigInt.
-   `currency`: Returns the currency used in the transfer.
-   `date`: Returns the date of the transfer.
-   `entity`: Returns entity details.
-   `expression`: Performs arithmetic operations on fields and returns the results.
-   `feeCurrency`: Returns details about the currency in which the fee is paid.
-   `initialBalance`: Returns the initial balance.
-   `maxFee`: Returns the maximum fee for the transaction.
-   `maximum`: Returns the maximum value for the selected measurable field of Hedera Input.
-   `memo`: Returns the value of the memo field of the transaction.
-   `minimum`: Returns the minimum value for the selected measurable field of Hedera Input.
-   `nodeAccount`: Returns the specific account of the node where the transaction is being sent.
-   `payerAccount`: Returns the specific account in the transaction.
-   `result`: Returns the transaction result.
-   `success`: Returns the success of the transaction as a boolean.
-   `time`: Returns the time of the transaction.
-   `transactionFee`: Returns the transaction fee.
-   `transactionHash`: Returns the transaction hash where the transfer happened.
-   `transactionValidDurationInSec`: Returns the transaction valid duration in seconds.
-   `transferEntity`: Returns details about the transfer account.
-   `validStart`: Returns the start timestamp of the valid duration for the transaction.

## Related Resources

- [Hedera schema overview](https://docs.bitquery.io/v1/docs/Schema/hedera/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Hedera Coinpath API](https://docs.bitquery.io/v1/docs/Schema/hedera/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
