# MultiversX Notarized Blocks API


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
<details><summary></summary></details>

## Fields