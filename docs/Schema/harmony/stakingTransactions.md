# Staking Transactions

The Harmony Staking Transaction API provides details about staking transactions from the Harmony blockchain.

<details>

<summary>Filtering Staking Transaction</summary>

You can filter staking transactions using following fields:

-   any: a catch-all filter that applies OR logic and allows to filter using any of the other fields
-   date: filter by date when transaction was created
-   delegatorAddress: filter address of delegator 
-   ledger: filter by height of the block
-   nonce: filter by nonce of the transaction
-   options: filter data by ordering and limiting it
-   shardId: filter by shard id where transaction was originated
-   status: filter by status of the transaction
-   success: filter success of the transaction
-   transactionHash: filter by hash of the transaction
-   transactionType: filter by type of the transaction
-   validatorAddress: filter by address of validator

</details>

### Returned Staking Transaction Information

-   any: a catch-all field that allows us to fetch data using any of the other fields
-   blockHash: returns hash of the block where transaction is included
-   count: returns count and other metrics
-   countBigInt: returns count and other metrics as BigInt
-   data: returns data od the value field
-   date: returns date when transaction was created
-   delegatorAddress: returns adddress of delegator 
-   epoch: returns epoch when transaction was created
-   expression: performs arithematic operation on value of other field and returns output
-   gas: returns gas provided by the sender of the transactions
-   gasPrice: returns gas price provides by the sender
-   gasValue: returns gas value consumed by transaction
-   ledger: returns height of block where transaction is included
-   maximum: returns maximum for selected measurable field of Harmony Staking Transactions
-   minimum: returns minimum for selected measurable field of Harmony Staking Transactions
-   nonce: returns nonce of the transaction
-   shardId: returns shard id where transaction is originated
-   status: returns status of transaction 
-   success: returns success of the transaction as boolean
-   time: returns time when the transaction was created 
-   transactionHash: returns has of the transaction
-   transactionType: returns type of the transaction
-   validatorAddress: returns address of the validator
-   value: returns value transfrred in atto
