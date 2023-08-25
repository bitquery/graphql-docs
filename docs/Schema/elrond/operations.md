# MultiversX Operations API

The MultiversX Operations API allows you to query information about operations on the MultiversX blockchain. You can use this API to get information about the sender, receiver, type, action, and other details of an operation.
Below are the fields in the schema:

```
query ($network: ElrondNetwork!,  $from: ISO8601DateTime, $till: ISO8601DateTime, $tx_hash: String!) {
  elrond(network: $network) {
    operations(
      options: {asc: "index", limit: 10, offset: 0}
      date: {since: $from, till: $till}
      txHash: {is: $tx_hash}
    ) {
      time {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      index
      type
      action
      data
      message
      miniblock {
        hash
        receiverBlockHash
        receiverShard
        type
      }
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "tx_hash": "hash here",
  "network": "elrond"
}
```

<details><summary>Filtering Operations</summary>

**options** : A set of options that can be used to filter the results.

- **asc** or **desc** : The order of the results, either "asc" (ascending) or "desc" (descending).
- **limit** : The maximum number of results to return. The default is 10.
- **offset** : The number of results to skip. The default is 0.

- **any** : A catch-all filter ( OR logic) that can be used to select operations that match any of the other filters. This is useful if you want to combine multiple filters to narrow down the results.

- **date:** This field allows you to filter the results by the time when the operation was submitted. You can use the `since` and `till` options to specify a time range.
- **txHash:** This field allows you to filter the results by the hash of the transaction that the operation belongs to.
- **operationType:** This field allows you to filter the results by the type of the operation.
- **operationReceiver:** This field allows you to filter the results by the address of the receiver of the operation.
- **operationSender:** This field allows you to filter the results by the address of the sender of the operation.
- **operationIndex:** This field allows you to filter the results by the index of the operation in the transaction.
- **operationData:** This field allows you to filter the results by the data that was passed to the operation.
- **operationAction:** This field allows you to filter the results by the action performed by the operation.
- **miniblockReceiverShard:** This field allows you to filter the results by the shard where the miniblock that the operation was included in was received.
- **miniblockReceiverBlockHash:** This field allows you to filter the results by the hash of the block that the miniblock that the operation was included in was received in.
- **miniblockHash:** This field allows you to filter the results by the hash of the miniblock that the operation was included in.
- **index:** This field allows you to filter the results by the index of the operation in the miniblock.
- **height:** This field allows you to filter the results by the height of the miniblock that the operation was included in.
- **epoch:** This field allows you to filter the results by the epoch of the miniblock that the operation was included in.
- **dataOperation:** This field allows you to filter the results by the data operation that was performed by the operation.
- **data:** This field allows you to filter the results by the data that was passed to the data operation.
- **blockNonce:** This field allows you to filter the results by the block nonce of the miniblock that the operation was included in.
- **blockHash:** This field allows you to filter the results by the hash of the miniblock that the operation was included in.

</details>

## Fields

- **time:** The time when the operation was submitted.
- **sender:** The address of the sender of the operation.
- **receiver:** The address of the receiver of the operation.
- **index:** The index of the operation in the transaction.
- **type:** The type of the operation.
- **action:** The action performed by the operation.
- **data:** The data that was passed to the operation.
- **message:** The message that was sent to the smart contract.
- **miniblock:** The miniblock that the operation was included in. This includes the following fields:
  - `hash`: The hash of the miniblock.
  - `receiverBlockHash`: The hash of the block that received the miniblock.
  - `receiverShard`: The shard where the block that received the miniblock resides.
  - `type`: The type of the miniblock.
