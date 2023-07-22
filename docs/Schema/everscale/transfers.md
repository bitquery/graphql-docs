# Transfers

Everscale Transfers API gets you information on transfers. The compleet schema and the fileds can be seen in the query below:

```
query ($network: EverscaleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  everscale(network: $network) {
    transfers(
      options: {desc: "timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      amount
      amount_usd: amount(in: USD)
      currency {
        symbol
        address
        tokenId
        tokenType
        name
        decimals
      }
      transactions {
        hash
        endStatus
        account
        aborted
        originalStatus
        type
      }
      sender {
        address
      }
      receiver {
        address
      }
      transferType
      shardedBlock {
        height
        hash
        shard
      }
      height
      blockShard
      blockHash
      amountDecimal
    }
  }
}
<!-- Parameters -->

{
  "limit": 10,
  "offset": 0,
  "network": "everscale",
  "from": "2023-07-14",
  "till": "2023-07-21T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details>
<summary>
Filtering Transfers
</summary>

`blockHash`	The hash of the block that the transaction was included in.

`blockHeight`	The height of the block that the transaction was included in.

`blockShard`	The shard of the block that the transaction was included in.

`blockWorkchain`	The workchain of the block that the transaction was included in.

`currency`	The currency that was transferred in the transaction.

`date`	The date and time of the transaction.

`entityId`	The ID of the entity that was transferred.

`messageDirection`	The direction of the message.

`messageHash`	The hash of the message.

`messageReceiver`	The address of the message receiver.

`messageSender`	The address of the message sender.

`messageTypeName`	The name of the message type.

`messageValue`	The value of the message.

`previousBlock`	The hash of the previous block.

`shardedBlockHash`	The hash of the sharded block that the transaction was included in.

`shardedBlockShard`	The shard of the sharded block that the transaction was included in.

`shardedBlockWorkchain`	The workchain of the sharded block that the transaction was included in.

`shardedHeight`	The height of the sharded block that the transaction was included in.

`time`	The time of the transaction.

`transferReceiver`	The address of the transfer receiver.

`transferSender`	The address of the transfer sender.

`transferType`	The type of the transfer.

`txAborted`	Whether the transaction was aborted.

`txAccount`	The address of the account that sent the transaction.

`txEndStatus`	The final status of the transaction.

`txHash`	The hash of the transaction.

`txOriginalStatus`	The original status of the transaction.

`txType`	The type of the transaction.

</details>