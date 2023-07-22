
# Calls

Everscale Calls API provides details on the wallet including the following fields.


```
query MyQuery {
  everscale(network: everscale) {
    calls(
      txAccount: {is: "3333333333333333333333333333333333333333333333333333333333333333"}
    ) {
      blockHash
      blockShard
      height
      messages {
        hash
        direction
        value
        typeName
      }
      smartContractAddress {
        annotation
        address
      }
      shardedBlock {
        hash
        height
        shard
      }
      previousBlock
      smartContractMethod {
        signature
        name
        signatureHash
      }
      timestamp {
        time
      }
      transactions {
        type
        endStatus
        account
        aborted
        originalStatus
        hash
      }
    }
  }
}
```

<details>
<summary>Filtering Calls</summary>

`blockHash`

The hash of the block.

`blockHeight`

The height of the block.

`blockShard`

The shard of the block.

`blockWorkchain`

The workchain of the block.

`date`

The date and time of the block.

`messageDirection`

The direction of the message.

`messageHash`

The hash of the message.

`messageReceiver`

The address of the message receiver.

`messageSender`

The address of the message sender.

`messageTypeName`

The name of the message type.

`messageValue`

The value of the message.



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

`smartContractAddress`

The address of the smart contract.

`smartContractMethod`

The name of the smart contract method.

`time`

The time of the transaction.

`txAborted`

Whether the transaction was aborted.

`txAccount`

The address of the account that sent the transaction.

`txEndStatus`

The final status of the transaction.

`txHash`

The hash of the transaction.

`txOriginalStatus`

The original status of the transaction.

`txType`

The type of the transaction.

</details>