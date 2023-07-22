# Blocks

Everscale Blocks API provides details on the wallet including the following fields.

```

query {
  everscale(network: everscale) {
    blocks(blockHeight: {is: 29765998}) {
      master_blocks_count: count(shardedBlockWorkchain: {is: -1})
      sharded_blocks_count: count(shardedBlockWorkchain: {not: -1})
      afterSplit
      afterMerge
      beforeSplit
      boc
      globalId
      hash
      logicalTimeEnd
      logicalTimeStart
      randomSeed
      previousBlock
      shard
      status
      shardedBlock {
        shard
        height
        hash
      }
      verticalSeqNo
      version
      value {
        created
        exported
        feesCollected
        feesImported
        fromPreviousBlock
        imported
        minted
        toNextBlock
      }
    }
  }
}
```

<details>
<summary>Filtering Blocks</summary>

`blockHeight`

The height of the block.

`blockShard`

The shard of the block.

`blockWorkchain`

The workchain of the block.

`catchainSeqno`

The catchain sequence number.

`date`

The date and time of the block.

`globalId`

The global ID of the block.

`logicalTimeEnd`

The logical time end of the block.

`logicalTimeStart`

The logical time start of the block.

`minimalReferenceMasterchain`

The minimal reference masterchain.


`previousBlock`

The hash of the previous block.

`shardedBlockHash`

The hash of the sharded block.

`shardedBlockShard`

The shard of the sharded block.

`shardedBlockWorkchain`

The workchain of the sharded block.

`shardedHeight`

The height of the sharded block.

`softwareCapabilities`

The software capabilities of the block.

`softwareVersion`

The software version of the block.

`status`

The status of the block.

`time`

The time of the block.

`txCount`

The number of transactions in the block.

`validatorListHashShort`

The short hash of the validator list.

`valueFlowCreated`

The amount of value created in the block.

`valueFlowExported`

The amount of value exported from the block.

`valueFlowFeesCollected`

The amount of fees collected in the block.

`valueFlowFeesImported`

The amount of fees imported into the block.

`valueFlowFromPreviousBlock`

The amount of value from the previous block.

`valueFlowImported`

The amount of value imported into the block.

`valueFlowMinted`

The amount of value minted in the block.

`valueFlowToNextBlock`

The amount of value to the next block.

`version`

The version of the block.

`verticalSeqNo`

The vertical sequence number.

`wantMerge`

Whether the block wants to merge.



</details>