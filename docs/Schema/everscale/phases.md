# Phases

Everscale Phases API gives details on the 4 phases (approve, vote, pre-commit and commit) in order to ensure the consensus is reached.

```
query MyQuery {
  everscale {
    phases(
      txAccount: {is: "-1:3333333333333333333333333333333333333333333333333333333333333333"}
      options: {limit: 10, desc: "timestamp.time"}
      txHash: {is: "a4b46363ffd19a16223bd3bcb47e037bd71be92e3da92770bb6a14c521bdbe4b"}
    ) {
      blockShard
      blockHash
      data
      height
      previousBlock
      shardedBlock {
        shard
        height
        hash
      }
      timestamp {
        time
      }
      transactions {
        endStatus
        account
        aborted
        hash
        originalStatus
        type
      }
      type
    }
  }
}
```

<details>
<summary> Filtering Phases  </summary>

`blockHash`	The hash of the block that the phase was executed in.

`blockHeight`	The height of the block that the phase was executed in.

`blockShard`	The shard of the block that the phase was executed in.

`blockWorkchain`	The workchain of the block that the phase was executed in.

`date`	The date and time of the phase.

`phaseData`	The data of the phase.

`phaseFee`	The fee for the phase.

`phaseType`	The type of the phase.

`previousBlock`	The hash of the previous block.

`shardedBlockHash`	The hash of the sharded block that the phase was executed in.

`shardedBlockShard`	The shard of the sharded block that the phase was executed in.

`shardedBlockWorkchain`	The workchain of the sharded block that the phase was executed in.

`shardedHeight`	The height of the sharded block that the phase was executed in.

`time`	The time of the phase.

`txAborted`	Whether the transaction was aborted.

`txAccount`	The address of the account that sent the transaction.

`txEndStatus`	The final status of the transaction.

`txHash`	The hash of the transaction.

`txOriginalStatus`	The original status of the transaction.

`txType`	The type of the transaction.

</details>