---
title: "Tezos Arguments API"
description: "Query Tezos GraphQL arguments data using Bitquery GraphQL API. Get query arguments, filters, and options for this schema."
keywords: ["Tezos API", "Tezos Arguments", "Bitquery", "GraphQL"]
---

# Arguments

The Arguments API provides you with information about arguments.

Here's an example demonstrating how to extract arguments from a transaction:

```
{
  tezos {
    arguments(
      amount: {gt: 1}
      transactionHash: {is: "oofuccmuGQJF49hWfUpN9xZKPZMcXVNJbYjMCsVh4Cqv2ThVSnr"}
    ) {
      amount
      argname
      argvalue
      block {
        height
      }
      opPath
      proto
      protocol
      receiver {
        address
      }
      sender {
        address
      }
      status
      timestamp {
        iso8601
      }
      transaction {
        hash
        source
      }
      success
    }
  }
}
```

<details>

<summary>Filtering Arguments</summary>

You can filter arguments using the following fields:

-   `any`: A filter that applies OR logic to refine results based on other fields.
-   `argname`: Filter using argument name.
-   `argvalue`: Filter using argument value.
-   `block`: Filter with the block where the transaction is included.
-   `blockhash`: Filter using block hash.
-   `date`: Filter using the date of the transfer.
-   `internal`: Filter based on whether the transfer is internal or `external`.
-   `opPath`: Filter using opPath.
-   `options`: Filter data by sorting, limiting, and other constraints.
-   `proto`: Filter by proto value.
-   `protocol`: Filter by protocol.
-   `receiver`: Filter by receiver address.
-   `sender`: Filter by sender address.
-   `status`: Filter by the status of the transaction.
-   `success`: Filter by the success of the transaction.
-   `time`: Filter by the time of the transaction.
-   `transactionHash`: Filter by transaction hash.
-   `transactionSource`: Filter by the source of the transaction.

</details>

### Returned Arguments Information

-   `amount`: Returns the amount transferred.
-   `any`: A catch-all field to fetch data using any of the other fields.
-   `argname`: Returns the argument name.
-   `argvalue`: Returns the argument value.
-   `block`: Returns details of the block where the transaction is included.
-   `count`: Returns the count and other metrics.
-   `countBigInt`: Returns the count and other metrics as BigInt.
-   `date`: Returns the date of the transaction.
-   `expression`: Performs arithmetic operations on fields and returns an output value.
-   `internal`: Indicates whether the transfer is internal or external.

-   `maximum`: Returns the maximum for the selected field of Tezos Argument.
-   `minimum`: Returns the minimum for the selected field of Tezos Argument.

-   `opPath`: Returns the value of the op Path.

-   `proto`: Returns the value of the proto field.

-   `protocol`: Returns the protocol used for the transaction.

-   `receiver`: Returns details of the transaction receiver.

-   `sender`: Returns details of the transaction sender.

-   `status`: Returns the status of the transaction.

-   `success`: Returns the success of the transaction as a boolean.

-   `timestamp`: Returns the timestamp of the transaction.

-   `transaction`: Returns details of the transaction where the transfer is included.

## Related Resources

- [Tezos schema overview](https://docs.bitquery.io/v1/docs/Schema/tezos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Tezos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/tezos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
