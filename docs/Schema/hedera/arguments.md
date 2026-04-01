---
title: "Hedera Arguments API"
description: "Query Hedera GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema."
keywords: ["Hedera API", "Hedera Arguments", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Hedera Arguments API"/>
<meta name="description" content="Query Hedera GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema."/>
<meta name="keywords" content="Hedera API, Hedera Arguments, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Hedera Arguments API" />
<meta property="og:description" content="Query Hedera GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Hedera Arguments API" />
<meta property="twitter:description" content="Query Hedera GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema." />
</head>

# Arguments 

The Arguments API provides you with information about event arguments. It offers valuable information about various aspects, such as the specific values of event arguments, their corresponding types, and even the transaction where the event originally occurred.

Here's an example that demonstrates how to extract arguments from a transaction:

```
{
  hedera {
    arguments(
      transactionHash: {is: "a793d06106dba8a3752a5a58ae7131ed2954414f5bbf52718b175ca7ef08339632fa37ad133b0bee48abe12399df706e"}
    ) {
      argtype
      argument
      consensusTimestamp {
        time
      }
      date {
        date
      }
      initialBalance
      transactionBytes
      transactionHash
      transactionValidDurationInSec
      value
    }
  }
}
```

<details>

<summary>Filtering Arguments</summary>

You can filter the retrieved arguments using the following fields:

- `any`: A filter that applies OR logic to refine results based on other fields. 
- `date`: Filter arguments by the date of the associated transaction.
- `nodeAccount`: Filter results to a specific account of the node that the transaction is being sent to.
- `options`: Filter returned data through sorting, limiting, and other constraints.
- `payerAccount`:  Filter by a specific account involved in the transaction.
- `result`: Filter by the result of the transaction.
- `smartContractEntity`: Filter by a specific smart contract entity.
- `success`: Filter transactions based on their success status.
- `transactionHash`: Filter by the hash of the transaction.

</details>

### Returned Arguments Information

- `any`: An inclusive field allowing retrieval of results based on other attributes.
- `argType`: Provides the type of the argument.
- `argument`: Displays the name of the argument.
- `chargedTxFee`: Returns the fee charged for the transaction.
- `consensusTimestamp`: Presents the consensus timestamp in either time or nanoseconds.
- `count`: Offers the count of results along with other metrics.
- `countBigInt`: Offers the count of results along with other metrics in BigInt format.
- `date`: Specifies the date of the associated transaction.
- `expression`: Enables arithmetic operations on query fields, returning the result of the operation.
- `feeCurrency`: Presents details about the currency in which the transaction fee was paid, including address, name, and symbol.
- `initialBalance`:  Shows the initial balance.
- `maxFee`: Displays the maximum fee amount.
- `maximum`: Provides the maximum value for selected measurable fields in Hedera Arguments.
- `memo`: Retrieves the value of the memo field in the transaction.
- `minimum`: Provides the minimum value for selected measurable fields in Hedera Arguments.
- `nodeAccount`: Provides details about a specific account of the node the transaction is being sent to, including ID, number, realm ID, and shard ID.
- `payerAccount`:  Presents details about a specific account involved in the transaction, including ID, number, realm ID, and shard ID.
- `result`: Displays the result of the transaction.
- `smartContractEntity`: Provides information about a smart contract entity, including ID, number, realm ID, and shard ID.
- `success`: Indicates the success status of the transaction as a boolean.
- `transactionBytes`:  Provides the bytes of the transaction.
- `transactionFee`: Displays the transaction fee.
- `transactionHash`: Presents the hash of the transaction.
- `transactionValidDurationInSec`: Provides the duration for which this transaction is valid in seconds.
- `validStart`: Displays the start timestamp of the valid duration of the transaction.
- `value`: Displays the value of the arguments.

## Related Resources

- [Hedera schema overview](https://docs.bitquery.io/v1/docs/Schema/hedera/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Hedera Coinpath API](https://docs.bitquery.io/v1/docs/Schema/hedera/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
