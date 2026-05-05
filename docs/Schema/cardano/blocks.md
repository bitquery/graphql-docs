---
title: "Cardano Blocks API"
description: "Query Cardano blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."
keywords: ["Cardano API", "Cardano Blocks", "Bitquery", "GraphQL"]
---

# Blocks


```
query ($network: CardanoNetwork!, $height: Int!) {
  cardano(network: $network) {
    blocks(height: {is: $height}) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      blockHash
      blockSize
      blockVersion
      transactionCount
      epoch
      opCert
      slot
      slotInEpoch
      slotLeaderDescription
      slotLeaderHash
      vrfKey
      height
    }
  }
}
{
  "height": 9070536,
  "network": "cardano"
}
```

<details>
<summary>Filtering Blocks</summary>


`blockHash`
The hash of the block.

`blockSize`
The size of the block in bytes.

`blockVersion`
The version of the block.

`date`
The date of the block.

`epoch`
The epoch of the block.

`height`
The height of the block.

`opCert`
The operational certificate for the block.

`options`
Additional options for the query, such as limits, sorting and pagination.

`slot`
The slot of the block.

`slotInEpoch`
The slot of the block within the epoch.

`slotLeaderHash`
The hash of the slot leader for the block.

`time`
The timestamp of the block.

`transactionCount`
The number of transactions in the block.

`version`
The version of the block.

`vrfkey`
The VRF key for the block.


</details>

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cardano Coinpath API](https://docs.bitquery.io/v1/docs/Schema/cardano/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
