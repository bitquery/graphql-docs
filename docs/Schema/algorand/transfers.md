---
title: "Algorand Transfers API"
description: "Query Algorand transfers data using Bitquery GraphQL API. Get asset transfers, amounts, senders, receivers, and currencies."
keywords: ["Algorand API", "Algorand Transfers", "Bitquery", "GraphQL"]
---

# Transfers

The `transfers` field allows us to fetch details about token transfers from the Algorand blockchain.

Here is an exmaple that demonstrates how to fetch 10 latest transfers:

```
{
  algorand {
    transfers(
      date: {after: "2023-08-05"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      currency {
        address
        name
        symbol
      }
      firstRound
      lastRound
      memo
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        hash
      }
      transferType
    }
  }
}
```

<details>
<summary>Filtering Transfers</summary>

Transfer data can be filtered using the following arguments

-   `amount`: filter by amount of transferred token 
-   `any`:
-   `currency`: filter by currency of transferred token 
-   `date`: filter by date of the transfer
-   `height`: filter by block height 
-   `options`: filter returned data by ordering, limiting, and constraining it
-   `receivers`: filter by recevier address of transfer
-   `sender`: filter by sender address of transfer
-   `time`: filter by time of the transfer
-   `transferType`: filter by transfer type 
-   `txHash`: filter by transaction hash of transfer
-   `txIndex`: filter by index in the block where the transaction is included
-   `txSender`: filter by sender address of transaction 
-   `txType`: filter by transaction type

</details>

-   `amount`: returns amount of transferred token
-   `any`:
-   `block`: returns block where transaction is included
-   `count`: returns count and other metrics
-   `countBigInt`: returns count and other metrics as BigInt
-   `currency`: returns currency of transferred token
-   `date`: returns date of the transfer
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `firstRound`: returns first round for the transfer
-   `lastRound`: returns last round for the transfer
-   `maximum`: returns maximum for selected measurable field of Algorand transfers
-   `memo`: returns value of memo field
-   `minimum`: returns minimum for selected measurable field of Algorand transfers
-   `receiver`: returns address and annotation for receiver of the transfer
-   `sender`: returns address and annotation for sender of the transfer
-   `transaction`: returns details of transaction in which transfer occurred 
-   `transferType`: returns transfer type

## Related Resources

- [Algorand schema overview](https://docs.bitquery.io/v1/docs/Schema/algorand/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Algorand Coinpath API](https://docs.bitquery.io/v1/docs/Schema/algorand/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
