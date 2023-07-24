# Omni Transactions

The `omniTransactions` allows us to fetch details about omni tranasctions from Bitcoin network.

Here is an example that demonstrates `omniTransactions` query:

```
{
  bitcoin {
    omniTransactions(
      options: {limit: 10, desc: "block.timestamp.iso8601"}
      date: {after: "2023-07-22"}
    ) {
      block {
        timestamp {
          iso8601
        }
      }
      blockHash
      feeValue
      hash
      index
      json
      txSender
      type
      typeInt
      valid
      version
    }
  }
}
```

<details>
<summary>Filtering Omni Transactions</summary>

Omni Transactions can be filtered using the following arguments

-   `any`:
-   `date`: Filter by selecting the range, list or just date.
-   `feeValue`: Filter by transaction fee value
-   `height`: Filter by block height
-   `invalidReason`: 
-   `options`: Filter returned data by ordering, limiting, and constraining it.
-   `time`: Filter by selecting time in range, list or just time
-   `txHash`: Filter by transaction hash 
-   `txIndex`: Filter by transaction index in block
-   `txSender`: Filter by address of transaction sender
-   `type`: Filter by type
-   `typeId`: Filter by type Id
-   `valid`:
-   `version`: Filter by version

</details>

The following are available fields for the `omniTransactions`:

-   `any`:
-   `block`: returns block where transaction is included
-   `blockHash`: returns block hash
-   `count`: returns aggregate count of omni transactions
-   `countBigInt`: returns count as `BigInt`
-   `date`: returns date of the transactions
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `feeValue`: returns transactions total fee value
-   `hash`: returns hash of the transaction
-   `index`: returns index of omni transaction in the block
-   `invalidReason`:
-   `json`: 
-   `maximum`: returns maximum for selected measurable field of Bitcoin Omni Transactions
-   `minimum`: returns minimum for selected measurable field of Bitcoin Omni Transactions
-   `txSender`: returns transaction sender
-   `type`: returns type of transaction
-   `typeInt`: returns type as Int
-   `valid`:
-   `version`: returns version
