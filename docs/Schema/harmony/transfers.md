# Transfers

The Harmony Transfers API provides information about token transfers from the Harmony Blockchain.

<details>

<summary>Filtering Transfers</summary>

You can filter transfers using following fields:

-   any: a catch-all filter that applies OR logic and allows to filter using any of the other fields
-   blockHash: filter by hash of the block where transaction is included
-   currency: filter by currency of transfer
-   date: filter by date when transaction was created
-   entityId: filter by NFT id
-   ledger: filter by height of block where transaction was created
-   options: filter data by ordering and limiting it
-   sender: filter by address of sender
-   status: filter by status of transaction
-   success: filter by success of transaction as Boolean
-   time: filter by time when transaction was created
-   transactionHash: filter by hash of the transaction
-   transactionIndex: filter by index of the transaction in the block
-   transactionFrom: filter by address transaction was sent from
-   transferTo: filter by address transaction was sent to

</details>

### Returned Transfer Information

-   any: a catch-all field that allows to fetch data using any of the other fields
-   blockHash: returns hash of the block where transaction is included
-   count: returns count and other metrics
-   countBigInt: returns count and other metrics as BigInt
-   currency: returns currency of transfer
-   data: returns value of data field
-   date: returns date when transaction was created
-   entityId: returns NFT id if NFT transfer
-   epoch: returns epoch when transaction was created
-   expression: performs arithematic operation on values of other fields and returns output
-   external: provides information about if transfer is external or internal
-   gas: returns gas provided by the sender of the transactions
-   gasPrice: returns gas price provides by the sender
-   gasValue: returns gas value consumed by transaction
-   ledger: returns height of block where transaction is included
-   maximum: returns maximum for selected measurable field of Harmony Transfers
-   minimum: returns minimum for selected measurable field of Harmony Transfers
-   nonce: returns nonce of the transaction
-   shardId: returns shard id where transaction is originated
-   stakingTxType: returns type of staking transaction
-   status: returns status of the transaction
-   success: returns success of the transaction as boolean
-   time: returns time when transaction was created
-   toShardId: returns id of shard where transaction was sent to
-   transactionHash: returns hash of the transaction
-   transacitonIndex: returns index of transaction in the block
-   transferFrom: returns address of the payer
-   transferTo: returns address of the receiver
-   txSenderreturns address of the transaction sender
-   txTo: returns address of transaction receiver
-   value: returns value transferred in ATTO
