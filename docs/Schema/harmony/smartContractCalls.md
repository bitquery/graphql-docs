# Smart Contract Calls

The Harmony Smart Contract Calls API provides detailed information about smart contract calls made on the Harmony Blockchain.

<details>

<summary>Filtering Smart Contract Calls</summary>

You can filter smart contract calls data using following fields:

-   any: a catch-all filter that applies OR logic and allows to filter using any of the other fields
-   date: filter by date when calls was made
-   external: filter by whether calls made was external or internal
-   height: filter by height of the block where transaction was included
-   nonce: filter by nonce of the transaction
-   options: filter data by ordering and limiting it
-   shardId: filter by shard id where transaction was originated
-   smartContractAddress: filter by address of smart contract being called
-   smartContractMethod: filter by method of smart contract being called
-   success: filter by success of smart contract calls
-   time: filter by time when transaction was made
-   toShardId: filter by shard id where transaction was sent to
-   txFrom: filter by transaction from address
-   txHash: filter by hash of the transaction
-   txIndex: filter by index of the transaction in the block
-   txTo: filter by transaction to address

</details>

### Returned Smart Contract Calls Information

-   amount: returns amount of token
-   any: a catch-all field that allows to fetch data usnig any of the other fields
-   block: returns details of block where transaction was included
-   callPath: returns depth of the call
-   count: returns count and other metrics 
-   countBigInt: returns count and other metrics as BigInt
-   date: returns date when call was made
-   expression: performs arithematic operation on values of other field and returns output
-   external: returns whether calls was internal or external as boolean
-   gas: returns units consumed for the calls
-   gasPrice: returns gas unit price for the calls
-   gasValue: returns gas value for the calls
-   maximum: returns maximum for selected measurable field of Harmony Smart Contract Calls 
-   minimum: returns minimum for selected measurable field of Harmony Smart Contract Calls
-   nonce: returns nonce of the transaction
-   shardId: returns shard id where transaction was originated
-   smartContractAddress: returns address of smart contract being called
-   smartContractMethod: returns method of smart contract being called
-   success: returns success of the call as Boolean
-   toShardId: returns shrad id where transaction is sent to
-   txFrom: returns transaction from address
-   txHash: returns hash of the transaction
-   txIndex: returns index of the transaction in the block
-   txSender: returns sender of the transaction
-   txTo: returns transaction to address
