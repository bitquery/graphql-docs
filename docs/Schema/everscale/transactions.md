# Transactions

The Everscale transactions API provides information on everscale transactions. The schema includes the following data:

```
query ($network: EverscaleNetwork!, $limit: Int!, $offset: Int!, $hash: String!) {
  everscale(network: $network) {
    transactions(
      options: {desc: "timestamp.time", limit: $limit, offset: $offset}
      txHash: {is: $hash}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      blockHash
      blockShard
      blockWorkchain
      shardedBlock {
        height
        hash
        shard
        workchain
      }
      previousBlock
      hash
      type
      account
      logicalTime
      inMessageBounceFlag
      aborted
      originalStatus
      endStatus
      destroyed
      boc
      oldHash
      newHash
      outMessagesCount
      accountFees
      fee_usd: accountFees(in: USD)
      extInAndIhrInFees
      creditFirst
      previousTxHash
      previousTxLogicalTime
    }
  }
}
<!-- Parameters -->
{
  "limit": 10,
  "offset": 0,
  "hash": "a4b46363ffd19a16223bd3bcb47e037bd71be92e3da92770bb6a14c521bdbe4b",
  "network": "everscale"
}
```

<details>
<summary> Filtering Transactions  </summary>

`blockHash`	The hash of the block that the transaction was included in.

`blockHeight`	The height of the block that the transaction was included in.

`blockShard`	The shard of the block that the transaction was included in.

`blockWorkchain`	The workchain of the block that the transaction was included in.

`date`	The date and time of the transaction.

`previousBlock`	The hash of the previous block.

`previousTxHash`	The hash of the previous transaction.

`previousTxLogicalTime`	The logical time of the previous transaction.

`shardedBlockHash`	The hash of the sharded block that the transaction was included in.

`shardedBlockShard`	The shard of the sharded block that the transaction was included in.

`shardedBlockWorkchain`	The workchain of the sharded block that the transaction was included in.

`shardedHeight`	The height of the sharded block that the transaction was included in.
`time`	The time of the transaction.

`txAborted`	Whether the transaction was aborted.

`txAccount`	The address of the account that sent the transaction.

`txAccountFees`	The fees paid by the account that sent the transaction.

`txCreditFirst`	Whether the transaction credits the first account.

`txDestroyed`	Whether the transaction was destroyed.

`txEndStatus`	The final status of the transaction.

`txExtInAndIhr` InFees	The fees paid by external accounts and IHR in the transaction.

`txHash`	The hash of the transaction.

`txInMessageBounceFlag`	Whether the transaction is a bounce transaction.

`txLogicalTime`	The logical time of the transaction.

`txNewHash`	The new hash of the transaction, if it was replaced.

`tx01dHash`	The 01d hash of the transaction, if it was replaced.

`txOriginalStatus`	The original status of the transaction.

`txOutMessagesCount`	The number of messages sent by the transaction.

`txType`	The type of the transa

</details>