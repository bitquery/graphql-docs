# MultiversX Notarized Blocks API

The MultiversX Notarized Blocks API allows you to query information about notarized blocks on the MultiversX blockchain. A notarized block is a block that has been verified by a set of validators. The API can be used to get information about notarized blocks, including their hashes, epochs, heights, and public key bitmaps.

```
query ($network: ElrondNetwork!, $limit: Int!, $offset: Int!, $blockHash: String!, $date: ISO8601DateTime) {
  elrond(network: $network) {
    notarizedBlock(
      options: {limit: $limit, offset: $offset}
      date: {is: $date}
      blockHash: {is: $blockHash}
    ) {
      notarizedBlockHash
      block {
        hash
        epoch
        height
        publicKeyBitmap
        shard
        sizeTxs
      }
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "blockHash": "hash here",
  "date": "2023-08-25",
  "network": "elrond"
}

```

<details><summary>Fitlering Notarized Blocks</summary>

- `any`: A catch-all field ( OR Logic) that can be used to filter on any other field in the blocks API.
- `blockHash`: Filter by block hash.
- `date`: Filter by the date on which the block was mined.
- `height`: Filter by the height of the block.
- `miner`: Filter by the miner who mined the block.
- `options`: Filter returned data by ordering, limiting, and constraining it. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`.
- `size`: Filter by the size of the block.
- `time`: Filter by when the block was mined
- `previousBlockHash`: Filter by the hash of the previous block.
- `publicKeyBitmap`: Filter by the public key bitmap of the block.
- `proposer`: Filter by the address of the block proposer.

</details>

## Fields

- **notarizedBlockHash:** The hash of the notarized block.
- **block:** The block that was notarized. This includes the following fields:
  - `hash`: The hash of the block.
  - `epoch`: The epoch of the block.
  - `height`: The height of the block.
  - `publicKeyBitmap`: The public key bitmap of the block.
  - `shard`: The shard where the block was mined.
  - `sizeTxs`: The total size of the transactions in the block
