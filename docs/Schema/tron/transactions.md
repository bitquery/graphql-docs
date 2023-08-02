# Transactions

The `transactions` field allows us to fetch transactions details from Tron blockchain.

Here is an example that demonstrates how to fetch transaction data:

```
{
  tron {
    transactions(
      date: {after: "2023-07-26"}
      options: {desc: "block.timestamp.iso8601", limit: 10}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      contractAddress {
        address
      }
      energyFee
      energyUsageTotal
      hash
      index
      netFee
      netUsage
      refBlockHash
      result
      signatures
      logsCount
      internalTransactionsCount
    }
  }
}
```

<details>
<summary>Filtering Transactions</summary>

-   `any`:
-   `contractAddress`: filter by contract address
-   `date`: filter by date of the transaction
-   `height`: filter by block height
-   `options`: filter returned data by ordering, limiting, and constraining it
-   `refBlockHash`: filter by ref block hash
-   `success`: filter by success of the transaction
-   `time`: filter by selecting time in range, list or just time
-   `txHash`: filter by transaction hash
-   `txIndex`: filter index of transaction in the block

</details>

-   `any`:
-   `block`: returns block where transaction is included
-   `contractAddress`: returns contract address
-   `count`: returns count and other metrics of transaction
-   `countBigInt`: returns count and other metrics as `BigInt`
-   `date`: returns date of the transaction
-   `energyFee`: returns energy fee of the transaction
-   `energyUsageTotal`: returns total energy usage for transaction 
-   `expiration`: returns expiration
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `fee`: returns transaction fee 
-   `feeLimit`: returns transaction fee limit
-   `hash`: returns transaction hash
-   `index`: returns index of transaction in the block
-   `internalTransactionsCount`: returns internal transactions count
-   `internalTransactionsCountBigInt`: returns internal transactions count as `BigInt`
-   `logsCount`: returns logs count
-   `logcCountBigInt`: returns logs count as `BigInt`
-   `maximum`: returns maximum for selected [measurable field of Tron transactions](/v1/docs/graphql-reference/enums/tron-transactions-measureable)
-   `minimum`: returns minimum for selected [measurable field of Tron transactions](/v1/docs/graphql-reference/enums/tron-transactions-measureable)
-   `netFee`: returns net fee for transaction
-   `netUsage`: returns net usage for transaction
-   `refBlockHash`: returns ref block hash as hex
-   `result`: returns result message
-   `signatures`: returns signatures
-   `success`: returns if transaction is successful or not
