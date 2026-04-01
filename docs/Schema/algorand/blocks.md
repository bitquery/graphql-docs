---
title: "Algorand Blocks API"
description: "Query Algorand blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."
keywords: ["Algorand API", "Algorand Blocks", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Algorand Blocks API"/>
<meta name="description" content="Query Algorand blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata."/>
<meta name="keywords" content="Algorand API, Algorand Blocks, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Algorand Blocks API" />
<meta property="og:description" content="Query Algorand blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Algorand Blocks API" />
<meta property="twitter:description" content="Query Algorand blocks data using Bitquery GraphQL API. Get block heights, hashes, timestamps, proposers, and protocol metadata." />
</head>

# Blocks

The `blocks` field allows us to retrieve details about blocks from Algorand blockchain.

Here's an example that demonstrates how to fetch information about 10 latest block from Algorand:

```
{
  algorand {
    blocks(
      options: {desc: "timestamp.iso8601", limit: 10}
      date: {after: "2023-07-17T00:00:00Z"}
    ) {
      currentProtocol
      hash
      height
      nextProtocol
      nextProtocolApprovals
      nextProtocolSwitchOn
      nextProtocolVoteBefore
      previousBlockHash
      proposer {
        address
        annotation
      }
      reward
      timestamp {
        iso8601
      }
      txnRoot
      upgradeApprove
      upgradePropose
    }
  }
}
```

<details>
<summary>Filtering Blocks</summary>

Blocks can be filtered using the following arguments:

- `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.
- `blockHash`: Filter by block hash
- `blockReward`: Filter by block reward
- `currentProtocol`: Filter by current protocol of the block
- `date`: Filter by date on which block is produced
- `height`: Filter by height of the block
- `nextProtocol`: Filter by next protocol of the block
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `proposer`: Filter by address block proposer or list
- `time`: Filter by selecting the date in a range, list or just date

</details>

- `any`: A catch-all filter (OR Logic) that can be used to filter the results by any of the other fields.
- `count`: returns counts and other metrics
- `countBigInt`: returns count and other metrics 
- `currentProtocol`: returns current protocol version
- `date`: returns date of the blocks
- `expression`: performs arithematic operation on fields in the query and returns value of the operation
- `frac`: returns value of frac field
- `hash`: returns block hash
- `height`: returns block height
- `maximum`: returns maximum of selected measurable field of Algorand blocks
- `minimum`: returns minimum of selected measurable field of Algorand blocks
- `nextProtocol`: returns the next proposed protocol version
- `nextProtocolApprovals`: returns number of blocks which approved the protocol upgrade
- `nextProtocolSwitchOn`: returns round on which the protocol upgrade will take effect
- `nextProtocolVoteBefore`: returns dealine round for this protocol upgrade
- `previousBlockHash`: returns previous block hash
- `proposer`: returns address and annotation (if available) for block proposer 
- `rate`: returns reward rate
- `reward`: returns reward for the block
- `seed`: reutrns seed of the block
- `timestamp`: returns timestamp of the block
- `txnRoot`: returns transaction root
- `upgradeApprove`: returns number of vote for the current proposal
- `upgradePropose`: returns proposed upgrade

## Related Resources

- [Algorand schema overview](https://docs.bitquery.io/v1/docs/Schema/algorand/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Algorand Coinpath API](https://docs.bitquery.io/v1/docs/Schema/algorand/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
