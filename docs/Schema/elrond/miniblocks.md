# MultiversX Miniblocks API

MultiversX uses a concept called mini-blocks to handle cross-shard transactions. A mini-block is a small block that contains only cross-shard transactions. These mini-blocks are then aggregated into regular blocks, which are mined on each shard.

Bitquery's MultiversX miniblocks API contains information on the same.
Below are the fields in the schema:

```
query ($network: ElrondNetwork!,  $from: ISO8601DateTime, $till: ISO8601DateTime) {
  elrond(network: $network) {
    miniblocks(
      options: {desc: "time.time", limit: 10, offset: 0}
      time: {since: $from, till: $till}
    ) {
      time {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      hash
      receiverBlockHash
      receiverShard
      type
      senderBlock {
        epoch
        hash
        height
        previousBlockHash
        publicKeyBitmap
        shard
        size
        sizeTxs
      }
    }
  }
}
{

  "network": "elrond",
  "from": "2023-08-25T12:40:56.000Z",
  "till": "2023-08-25T13:10:56.000Z",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Miniblocks</summary>

- **options** : A set of options that can be used to filter the results.
  - **desc** or **asc** : The order of the results, either "asc" (ascending) or "desc" (descending).
  - **limit** : The maximum number of results to return. The default is 10.
  - **offset** : The number of results to skip. The default is 0.
- **time** : A filter that can be used to select blocks created within a specified time range.
- **blockNonce:** This field allows you to filter the results by the block nonce of the mini-block. The block nonce is a number that is used to prevent double-spending.
- **blockHash:** This field allows you to filter the results by the hash of the mini-block. The hash is a unique identifier for the mini-block.
- **any:** This field is a catch-all field ( OR logic) that can be used to filter on any other field in the miniblocks API.
- **miniblockHash:** This field allows you to filter the results by the hash of the mini-block.
- **height:** This field allows you to filter the results by the height of the mini-block. The height is the number of mini-blocks that have been mined before this mini-block.
- **epoch:** This field allows you to filter the results by the epoch of the mini-block. The epoch is a period of time that is used to measure the progress of the blockchain.
- **date:** This field allows you to filter the results by the date when the mini-block was mined.
- **stateRootHash:** This field allows you to filter the results by the state root hash of the mini-block. The state root hash is a hash of the state of the blockchain at the time the mini-block was mined.
- **sizeTxs:** This field allows you to filter the results by the number of transactions in the mini-block.
- **size:** This field allows you to filter the results by the size of the mini-block in bytes.
- **shard:** This field allows you to filter the results by the shard where the mini-block was mined.
- **receiverShard:** This field allows you to filter the results by the shard where the mini-block was received.
- **receiverBlockHash:** This field allows you to filter the results by the hash of the block that received the mini-block.
- **publicKeyBitmap:** This field allows you to filter the results by the public key bitmap of the mini-block. The public key bitmap is a bit array that represents the validators who voted to approve the mini-block.
- **proposer:** This field allows you to filter the results by the address of the block proposer. The block proposer is the validator who submitted the mini-block to the network.
- **previousBlockHash:** This field allows you to filter the results by the hash of the previous block.
- **round:** This field allows you to filter the results by the round of the mini-block. The round is a number that is used to prevent forks in the blockchain

</details>

## Fields

`time`: The time when the mini-block was mined.
`hash`: The hash of the mini-block.
`receiverBlockHash`: The hash of the block that received the mini-block.
`receiverShard`: The shard that received the mini-block.
`type`: The type of the mini-block, for example `TxBlock`
`senderBlock`: The block that sent the mini-block.
