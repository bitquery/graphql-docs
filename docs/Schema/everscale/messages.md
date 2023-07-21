
# Messages 

Everscale Messages API provides details on all interactions in the Everscale chain. 

```
query ($network: EverscaleNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: String!) {
  everscale(network: $network) {
    messages(
      options: {desc: "timestamp.time", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      messageSender: {is: $address}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      shardedBlock {
        hash
        height
        shard
      }
      transactions {
        hash
      }
      hash
      receiver {
        address
      }
      ihrFee
      ihrDisabled
      height
      fwdFee
      direction
      createdLogicalTime
      boc
      body
      bodyHash
      bounce
      bounced
      blockShard
      blockHash
    }
  }
}
<!-- Parameters -->
{
  "limit": 10,
  "offset": 0,
  "address": "-1:3333333333333333333333333333333333333333333333333333333333333333",
  "network": "everscale",
  "from": "2023-07-14",
  "till": "2023-07-21T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

<details>

<summary>Filtering messages</summary>

`messageBody`	The body of the message.

`blockHash`	The hash of the block that the message was sent in.

`messageBodyHash`	The hash of the message body.

`messageBounce`	Whether the message is a bounce message.

`messageBounced`	Whether the message has been bounced.

`messageCreatedLogicalTime`	The logical time at which the message was created.

`messageData`	The data of the message.

`messageDataHash`	The hash of the message data.

`messageDirection`	The direction of the message.

`messageFwdFee`	The forward fee for the message.

`messageHash`	The hash of the message.

`messageIhrDisabled`	Whether the message is ihr disabled.

`messageIndex`	The index of the message.

`messageIrbFee`	The irb fee for the message.

`messageReceiver`	The address of the message receiver.

`messageSender`	The address of the message sender.

`messageTypeName`	The name of the message type.

`messageValue`	The value of the message.

`previousBlock`	The hash of the previous block.

`shardedBlockHash`	The hash of the sharded block that the message was sent in.

`shardedBlockShard`	The shard of the sharded block that the message was sent in.

`shardedBlockWorkchain`	The workchain of the sharded block that the message was sent in.

`shardedHeight`	The height of the sharded block that the message was sent in.

`time`	The time at which the message was sent.

`txAborted`	Whether the transaction was aborted.

`txAccount`	The address of the account that sent the transaction.

`txEndStatus`	The final status of the transaction.

`txHash`	The hash of the transaction.

`txOriginalStatus`	The original status of the transaction.

</details>