---
title: "Cardano Blocks API Examples"
description: "Example GraphQL queries for Cardano blocks. Look up a block by height and list recent blocks in a time window."
keywords: [Cardano API examples, Cardano GraphQL queries, Bitquery, Cardano blocks, epoch, slot]
---

# Cardano Blocks API

Query Cardano block data — heights, hashes, epoch and slot context, sizes, protocol versions, slot-leader metadata, and transaction counts — using the Blocks API.

## Get a Specific Cardano Block by Height

Look up a single Cardano block by its height. Returns the block hash, size and version, epoch, slot and slot-in-epoch, operational certificate, slot-leader details, VRF key, transaction count, and timestamp.

**Variations:** Swap `height` for `blockHash: {is: "..."}` to look up by hash, or pass an array with `height: {in: [...]}` to fetch multiple blocks in one call. See [query features](/docs/category/query-features) for more filter options.

```
query {
  cardano(network: cardano) {
    blocks(height: {is: 9612373}) {
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
```

## List Recent Cardano Blocks in a Time Window

Retrieve the 10 most recent Cardano blocks produced between two timestamps. Useful for monitoring chain progression, building explorer front-ends, or tracking block-production patterns across epochs.

**Variations:** Adjust `limit` for more or fewer blocks, widen the `time` window, or sort ascending with `asc: "height"` to walk the chain forward. Add `transactionCount` thresholds client-side to find the busiest blocks.

```
{
  cardano(network: cardano) {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      time: {since: "2023-11-30T06:10:00Z", till: "2023-11-30T06:17:00Z"}
    ) {
      height
      blockHash
      blockSize
      transactionCount
      epoch
      slot
      slotInEpoch
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
    }
  }
}
```

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Cardano Blocks schema](https://docs.bitquery.io/v1/docs/Schema/cardano/blocks)
- [Cardano Transactions API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/transactions)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)