# Smart Contract Calls

The `smartContractCalls` field allows you to retrieve smart contract calls made to any smart contract on Algorand blockchain.

Here's an exmaple that demonstrates how to use `smartContractCalls` query:

```
{
  algorand {
    smartContractCalls(
      date: {after: "2023-08-05"}
      smartContractAddress: {is: "2TUBOBZ7CP7EZXFOWULEG5HE6WJ34TT7SBZ5AMHGR222O7RZNBK3I4BUMY"}
    ) {
      count(uniq: txs)
    }
  }
}
```

<details>
<summary>Filtering Smart Contract Calls</summary>

-   `any`:
-   `date`: filter by selecting date in range, list or just date
-   `height`: fitler by block height of executed calls
-   `options`: filter returned data by ordering, limiting, and constraining it
-   `smartContractAddress`: filter by smart contract address being called
-   `time`: filter by time on which call was executed
-   `txHash`: filter by transaction hash of the call
-   `txIndex`: filter by index of transaction in the block
-   `txSender`: filter by transaction from address
-   `txType`: filter by transaction type

</details>

-   `any`:
-   `block`: returns block in which transaction is included
-   `count`: returns count and other metrics
-   `countBigInt`: returns coutn and other metrics as `BigInt`
-   `date`: returns date of transaction
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `fee`: returns fee consumed for transaction
-   `firstRound`: returns first round of transaction
-   `genesisHash64`: returns genesis hash
-   `gensisId`: returns genesis block ID
-   `lastRound`: returns last round of transaction
-   `maximum`: returns maximum of selected measurable field of Algorand Calls
-   `minimum`: returns minimum of selected measurable field of Algorand Calls
-   `note`: returns value of note field
-   `poolerror`: returns value of pool error field
-   `smartContract`: returns information of smart contract being called
-   `transaction`: returns information of transaction where call was executed
-   `txSender`: returns information of transaction sender
-   `txType`: returns transaction type in which transfer happened
