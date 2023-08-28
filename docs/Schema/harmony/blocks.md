# Blocks

The Harmony Blocks API provides information about blocks from the Harmony Blockchain.

<details>

<summary>Filtering Blocks</summary>

You can filter data using any of the following fields:

-   any: a catch-all field that applies OR logic and allows to filter using any of the other field
-   blockHash: filter by hash of the block
-   date: filter by date when block was created
-   difficulty: filter by difficulty of the block
-   epoch: filter epoch of the block
-   ledger: filter by block height 
-   miner: filter by address of the miner
-   nonce: filter by block nonce
-   options: filter data by ordering and limiting it
-   parentHash: filter by hash of parent block
-   shardId: filter by id of shard
-   size: filter by size of the block
-   stakingTransactionsCount: filter by count of staking transactions in the block
-   time: filter by time when block was created
-   transactionCount: filter by count of transaction in the block
-   unclesCount: filter by count of unlces= block hashes
-   viewId: filter by view id

</details>

### Returned Blocks Information

-   any: a catch-all field that allows to fetch data using any of the other field
-   blockhash: returns hash of the block
-   count: returns count and other metrics of Harmony Blocks
-   countBigInt: returns count and other metrics of Harmony Blocks as BigInt
-   date: returns date when transaction was created
-   difficulty: provides difficulty of the block
-   epoch: provides epoch of the block
-   expression: performs arithematic operation on value of other fields and returns output
-   extraData: returns value of extra data field of the block
-   gasLimit: returns gas limit of the block
-   gasUsed: returns gas used in the block
-   ledger: returns height of the block
-   logsBloom: returns bloom filter for the logs of the block
-   maximum: returns maximum for selected measurable field of Harmony Blocks
-   minimum: returns maximum for selected measurable field of Harmony Blocks
-   mixHash: returns mix hash of the block
-   nonce: returns nonce of the block
-   parentHash: returns hash of parent block
-   receiptsRoot: returns receipts root of the transaction
-   shardId: returns shard id of the block
-   size: reutrns size of the block
-   stakingTransactionsCount: returns count of staking transaction in the block
-   stateRoot: returns root of the final state trie of the block
-   time: returns time when block was created
-   transactionCount: returns count of transaction in the block 
-   transactionsRoot: returns root of the transaction trie of the block
-   unclesCount: returns count of uncles hashes
-   viewId: returns view id
