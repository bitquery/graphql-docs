---
title: "Algorand Blocks API Examples"
description: "Example GraphQL queries for Algorand blocks. Get proposers, rewards, and block metadata."
keywords: [Algorand API examples, Algorand GraphQL queries, Bitquery]
---

# Algorand Blocks API

Query Algorand block data including proposer addresses, rewards, protocol versions, and timestamps using the Blocks API.

## Get Latest Algorand Blocks by Proposer Address

Retrieve the 10 most recent Algorand blocks proposed by a specific address after a given date. Returns block height, hash, protocol version, reward, seed, and timestamp.

**Variations:** Remove the `proposer` filter to query all blocks, or adjust `limit` and `date` for different ranges. See [query features](/docs/category/query-features) for sorting options.

```
{
  algorand {
    blocks(
      date: {after: "2023-08-05"}
      options: {desc: "timestamp.iso8601", limit: 10}
      proposer: {is: "PROPOSER_ADDRESS_HERE"}
    ) {
      currentProtocol
      hash
      height
      proposer {
        address
      }
      reward
      seed
      timestamp {
        iso8601
      }
    }
  }
}
```

## Sum Algorand Block Rewards for a Proposer

Calculate the total block rewards earned by a specific Algorand proposer address.

**Variations:** Add a `date` filter to limit the time range, or use `calculate: average` for mean reward per block. See [query features](/docs/category/query-features) for aggregation options.

```
{
  algorand {
    blocks(
      proposer: {is: "PROPOSER_ADDRESS_HERE"}
    ) {
      reward(calculate: sum)
    }
  }
}
```

## Related Resources

- [Algorand schema overview](https://docs.bitquery.io/v1/docs/Schema/algorand/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Algorand address examples](https://docs.bitquery.io/v1/docs/Examples/algorand/address)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)