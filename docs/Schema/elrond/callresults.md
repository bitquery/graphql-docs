# MultiversX CallResults API

The MultiversX CallResults API allows you to query information about call results on the MultiversX blockchain. A call result is a record of a function call that was made to a smart contract. The API can be used to get information about the sender, receiver, value, type, and other details of a call result.

Below are the fields in the schema:

```
query ($network: ElrondNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $tx_hash: String!) {
  elrond(network: $network) {
    callResults(
      options: {asc: "index", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
      txHash: {is: $tx_hash}
    ) {
      time {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      index
      hash
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      value
      previousTxHash
      miniblock {
        type
        receiverShard
        receiverBlockHash
        hash
      }
      data
      dataOperation
      transaction {
        status
        signature
        hash
      }
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "tx_hash": "tx hash here",
  "network": "elrond"
}

```

<details><summary>Filtering CallResults</summary>

**options** : A set of options that can be used to filter the results.

- **asc** or **desc** : The order of the results, either "asc" (ascending) or "desc" (descending).
- **limit** : The maximum number of results to return. The default is 10.
- **offset** : The number of results to skip. The default is 0.

- **any** : A catch-all filter ( OR logic) that can be used to select callresults that match any of the other filters. This is useful if you want to combine multiple filters to narrow down the results.

- **blockHash:** This field allows you to filter the results by the hash of the block that the call result belongs to.
- **txSenderShard:** This field allows you to filter the results by the shard where the sender of the transaction resides.
- **txSender:** This field allows you to filter the results by the address of the sender of the transaction.
- **txReceiverShard:** This field allows you to filter the results by the shard where the receiver of the transaction resides.
- **txReceiver:** This field allows you to filter the results by the address of the receiver of the transaction.
- **txHash:** This field allows you to filter the results by the hash of the transaction that the call result belongs to.
- **transactionCount:** This field allows you to filter the results by the number of transactions in the block.
- **time:** This field allows you to filter the results by the time when the block was submitted.
- **stateRootHash:** This field allows you to filter the results by the hash of the state root of the block.
- **sizeTxs:** This field allows you to filter the results by the total size of the transactions in the block.
- **size:** This field allows you to filter the results by the total size of the block.
- **shard:** This field allows you to filter the results by the shard where the block was mined.
- **signature:** This field allows you to filter the results by the signature of the block.
- **round:** This field allows you to filter the results by the round of the block.
- **returnMessage:** This field allows you to filter the results by the return message of the block.
- **relayed:** This field allows you to filter the results by whether or not the block was relayed.
- **publicKeyBitmap:** This field allows you to filter the results by the public key bitmap of the block.
- **proposer:** This field allows you to filter the results by the proposer of the block.
- **previousTxHash:** This field allows you to filter the results by the hash of the previous transaction.
- **previousBlockHash:** This field allows you to filter the results by the hash of the previous block.
- **miniblockReceiverShard:** This field allows you to filter the results by the shard where the miniblock that the call result was included in was received.
- **miniblockReceiverBlockHash:** This field allows you to filter the results by the hash of the block that the miniblock that the call result was included in was received in.
- **miniblockHash:** This field allows you to filter the results by the hash of the miniblock that the call result was included in.
- **height:** This field allows you to filter the results by the height of the miniblock that the call result was included in.
- **epoch:** This field allows you to filter the results by the epoch of the miniblock that the call result was included in.
- **callResultValue:** This field allows you to filter the results by the value that was transferred as part of the call result.
- **callResultType:** This field allows you to filter the results by the type of the call result.
- **callResultSender:** This field allows you to filter the results by the address of the sender of the call result.
- **callResultRelayedValue:** This field allows you to filter the results by the value that was relayed as part of the call result.
- **callResultReceiver:** This field allows you to filter the results by the address of the receiver of the call result.
- **callResultNonce:** This field allows you to filter the results by the nonce of the call result.
- **callResultIndex:** This field allows you to filter the results by the index of the call result in the transaction.
- **callResultHash:** This field allows you to filter the results by the hash of the call result.
- **callResultGasPrice:** This field allows you to filter the results by the gas price of the call result.
- **callResultGasLimit:** This field allows you to filter the results by the gas limit of the call result.
- **callResultDataOperation:** This field allows you to filter the results by the data operation that was performed by the call result.
- **callResultData:** This field allows you to filter the results by the data that was passed to the call result.

</details>

## Fields

- **time:** The time when the call result was submitted.
- **index:** The index of the call result in the transaction.
- **hash:** The hash of the call result.
- **sender:** The address of the sender of the call result.
- **receiver:** The address of the receiver of the call result.
- **value:** The value that was transferred as part of the call result.
- **previousTxHash:** The hash of the transaction that the call result belongs to.
- **miniblock:** The miniblock that the call result was included in. This includes the following fields:
  - `type`: The type of the miniblock.
  - `receiverShard`: The shard where the block that received the miniblock resides.
  - `receiverBlockHash`: The hash of the block that received the miniblock.
  - `hash`: The hash of the miniblock.
- **data:** The data that was passed to the call result.
- **dataOperation:** The data operation that was performed by the call result.
- **transaction:** The transaction that the call result belongs to
