# MultiversX Block Validators API

The MultiversX Block Validators API allows you to query information about the validators of a block on the MultiversX blockchain. A validator is a node that has been elected to participate in the consensus process and produce blocks. The API can be used to get information about the validators of a block, including their addresses, shards, and public key bitmaps.

Below are the fields in the schema:

```
query ($network: ElrondNetwork!, $limit: Int!, $offset: Int!, $blockHash: String!, $date: ISO8601DateTime) {
  elrond(network: $network) {
    blockValidators(
      options: {limit: $limit, offset: $offset}
      date: {is: $date}
      blockHash: {is: $blockHash}
    ) {
      validator {
        hex
      }
      block {
        shard
        size
        sizeTxs
        transactionCount
        publicKeyBitmap
      }
    }
  }
}
{
  "limit": 10,
  "offset": 0,
  "blockHash": "block hash here",
  "date": "2023-08-25",
  "network": "elrond"
}

```

<details>

<summary>Filtering Block Validators</summary>

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

- **validator:** The address of the validator.
- **hex:** The hex representation of the validator's public key.
- **block:** The block that the validator was a part of. This includes the following fields:
  - `shard`: The shard where the block was mined.
  - `size`: The total size of the block.
  - `sizeTxs`: The total size of the transactions in the block.
  - `transactionCount`: The number of transactions in the block.
  - `publicKeyBitmap`: The public key bitmap of the block.
