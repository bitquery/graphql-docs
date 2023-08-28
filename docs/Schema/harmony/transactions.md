# Transactions

The Harmony Transactions API provides information about transaction form the Harmony blockchain.

<details>

<summary>Filtering Transactions</summary>

You can filter transactions using the following fields: 

-   any: a catch-all field that applies OR logic and allows to filter using any of the other fields
-   creates: filter by transactionc creates
-   date: filter by date when transaction was created
-   epoch: filter by epoch when transaction was created
-   ledger: filter by height of the block where transaction is included
-   nonce: filter by nonce of the transaction 
-   options: filter data by ordering and limiting it
-   receiver: filter by address of receiver
-   sender: filter by address of sender
-   shardId: filter by id of shard where transaction was originated
-   status: filter by status of the transaction
-   success: filter by success of the transaction as Boolean
-   time: filter by time when transaction was created
-   toShardId: filter by id of shard where transaction was sent to
-   transactionHash: filter by hash of the transaction
-   transactionIndex: filter by index of the transaction in the block

</details>

### Returned Transaction Information

-   any: a catch-all field that allows to fetch data using any of the other field
-   blockHash: returns hash of the block
-   count: retruns count and other metrics
-   countBigInt: returns count and other metrics as BigInt
-   creates: returns transaction creates
-   data: returns value of data field
-   date: returns date when transaciton was created
-   epoch: returns epoch when transaction was created
-   expression: performs arithematic operation on values of other fields and returns output 
-   gas: returns gas provided by the sender of the transactions 
-   gasPrice: returns gas price provides by the sender
-   gasValue: returns gas value consumed by transaction
-   ledger: returns height of the block where transaction is included
-   maximum: returns maximum for selected measurable field of Harmony Transactions
-   minimum: returns minimum for selected measurable field of Harmony Transactions
-   nonce: returns nonce of the transaction
-   receiver: returns address of receiver
-   sender: returns address of sender
-   shardId: returns id of shard where transaction was originated
-   status: returns status of the transaction
-   success: returns success of the transaction as Boolean
-   time: returns time when transaction was created
-   toShardId: returns id of shard where transaction was sent to
-   transactionHash: returns hash of the transaction
-   transactionIndex: returns index of transaction in the block
-   value: returns value transferred in ATTO
