# Arguments

Everscale Arguments API provides details on the wallet including the following fields.


```
query ($network: EverscaleNetwork!, $address: String!) {
  everscale(network: $network) {
    arguments(
      smartContractAddress: {is: $address}
      argumentType: {is: call}
    ) {
      timestamp {
        time
      }
      shardedBlock {
        hash
        workchain
        shard
        height
      }
      messages {
        hash
        typeName
        value
      }
      smartContractMethod {
        name
        signature
      }
      transactions {
        endStatus
        account
        aborted
        hash
        originalStatus
        type
      }
      blockShard
      field
      height
    }
  }
}
Parameters

{
  "address": "-1:3333333333333333333333333333333333333333333333333333333333333333",
  "network": "everscale"
}
```

<details>
<summary>Filtering Arguments</summary>

Arguments data can be filtered using following arguments:

`argumentField`

The name of the argument.

`argumentIndex`

The index of the argument.

`argumentType`

The type of the argument.

`argumentValue`

The value of the argument.

`blockHash`

The hash of the block.

`blockHeight`

The height of the block.

`blockShard`

The shard of the block.

`blockWorkchain`

The workchain of the block.

`date`

The date and time of the transaction.

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