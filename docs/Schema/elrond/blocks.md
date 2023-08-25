# MultiversX Blocks API

The MultiversX Blocks API allows you to query information about blocks on the MultiversX blockchain. You can use this API to get information about the block hash, height, timestamp, and other details.Below are the fields in the schema:

```
query ($network: ElrondNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  elrond(network: $network) {
    blocks(date: {since: $from, till: $till}, options: {limit: 10, desc: "height"}) {
      shard
      epoch
      hash
      height
      previousBlockHash
      publicKeyBitmap
      proposer {
        hex
      }
    }
  }
}
{

  "network": "elrond",
  "from": "2023-08-18",
  "till": "2023-08-25T23:59:59",
  "dateFormat": "%Y-%m-%d"
}

```

<details><summary>Filtering Blocks</summary>

- `any`: A catch-all field ( OR Logic) that can be used to filter on any other field in the blocks API.
- `blockHash`: Filter by block hash.
- `date`: Filter by the date on which the block was mined.
- `height`: Filter by the height of the block.
- `miner`: Filter by the miner who mined the block.
- `options`: Filter returned data by ordering, limiting, and constraining it. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`.
- `size`: Filter by the size of the block.
- `time`: Filter by when the block was mined.

</details>

## Fields

- `shard`: The shard on which the block was mined.
- `epoch`: The epoch number of the block.
- `hash`: The hash of the block.
- `height`: The height of the block.
- `previousBlockHash`: The hash of the previous block.
- `publicKeyBitmap`: The public key bitmap of the block.
- `proposer`: The address of the block proposer.
