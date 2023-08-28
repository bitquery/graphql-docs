# Smart Contract Events

The Harmony Smart Contract Events API provides information about events emiited from smart contract on the Harmony Blockchain.

<details>

<summary>Filtering Smart Contract Events</summary>

You can filter events using following fields:

-   any: a catch-all filter that applies OR logic and allows to filter using any of the other fields
-   date: filter by date when events is emitted
-   height: filter by height of the block where transaction is included
-   nonce: filter by nonce of the transaction
-   options: filter data by ordering and limiting it
-   shardId: filter by shard id where transaction was originated
-   smartContractAddress: filter by address of smart contract being called
-   smartContractEvent: filter by event name of smart contract being emitted
-   time: filter by time when transaction was created
-   toShardId: filter by shard id where transaction is sent to
-   txFrom: filter by transaction from address
-   txHash: filter by hash of the transaction
-   txIndex: filter by index of the transaction
-   txTo: filter by transaction to address

</details>

### Returned Smart COntract Events Data

-   any: a catch-all field that allows to fetch data using any of the other field
-   block: returns information about block where transaction is included
-   count: returns count and other metrics
-   countBigInt: returns count and other metircs as BigInt
-   date: returns date when transaction was created
-   epoch: returns epoch when transaction was created
-   expression: performs arithematic operation on value of other field and returns output
-   maximum: returns maximum for selected measurable field for Harmony Smart Contract Events
-   minimum: returns minimum for selected measurable field for Harmony Smart Contract Events
-   nonce: returns nonce of the transaction
-   shardId: returns shard id where transaction was originated
-   smartContractAddress: returns address of smart contract from which event is emitted
-   smartContractEvent: returns deatails of smart contract events being emitted
-   toShardId: returns shard id where transaction is sent to
-   txFrom: returns transaction from address
-   txHash: returns hash of the transaction
-   txIndex: returns index of the transaction in the block
-   txTo: returns transaction to address
