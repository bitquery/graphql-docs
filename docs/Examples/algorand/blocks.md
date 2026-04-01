---
title: "Algorand Blocks API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Algorand blocks. Get proposers, rewards, and block metadata."
keywords: [Algorand API examples, Algorand GraphQL queries, Bitquery]
---

# Algorand Blocks API

Pur Alogrand Blocks API provides all details regarding blocks generated on Algorand Blockchain. Below are some examples of `blocks` API:

## Get Latest Blocks by A Proposer

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

Replace `PROPOSER_ADDRESS_HERE` with the actual Algorand address of the proposer you want to query. This query will return the details of the 10 latest blocks from the Algorand blockchain, produced by the specified proposer address after the date "2023-08-05". The retrieved block information includes block height, hash, current protocol version, proposer address, reward, seed, and timestamp.

## Get Total Reward Earned By Proposer

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

Replace `PROPOSER_ADDRESS_HERE` with the actual Algorand address of the proposer you want to query. This query will return the total sum of rewards for all blocks produced by the specified proposer address from the Algorand blockchain.

## Related Resources

- [Algorand schema overview](https://docs.bitquery.io/v1/docs/Schema/algorand/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Algorand address examples](https://docs.bitquery.io/v1/docs/Examples/algorand/address)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)