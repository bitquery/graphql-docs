---
title: "Solana Block Rewards API"
description: "Query Solana block rewards data using Bitquery GraphQL API. Get block reward distributions, validators, and amounts."
keywords: ["Solana API", "Solana Block Rewards", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Solana Block Rewards API"/>
<meta name="description" content="Query Solana block rewards data using Bitquery GraphQL API. Get block reward distributions, validators, and amounts."/>
<meta name="keywords" content="Solana API, Solana Block Rewards, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Solana Block Rewards API" />
<meta property="og:description" content="Query Solana block rewards data using Bitquery GraphQL API. Get block reward distributions, validators, and amounts." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Solana Block Rewards API" />
<meta property="twitter:description" content="Query Solana block rewards data using Bitquery GraphQL API. Get block reward distributions, validators, and amounts." />
</head>

# Block Rewards

The BlockRewards API returns information about rewards on the Solana network. Solana implements a proof of stake reward scheme for validator nodes. Rewards are paid every epoch.

The fields in the schema for blockrewards API include: 

```
query ($network: SolanaNetwork!, $date: ISO8601DateTime, $height: Int) {
  solana(network: $network) {
    blockRewards(
      options: {limit: 10, offset: 0}
      date: {is: $date}
      height: {is: $height}
    ) {
      block {
        height
        timestamp {
          time
        }
        parentSlot
        previousBlockHash
        hash
      }
      account
      rewardType
      amount
      currency {
        symbol
        tokenId
        tokenType
        name
        decimals
        address
      }
      postBalance
      time {
        time
      }
    }
  }
}

<!-- Parameters -->

{
  "network": "solana",
  "height": 208986228,
  "from": "2023-07-26",
  "till": "2023-08-02T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```
<details><summary>Filtering blockRewards</summary>


`date` The date of the block rewards. 

`height` The height of the block rewards. 

`blockHash` The hash of the block rewards. 
 
`any` This field can be used to filter the results by any of the other fields in the response (OR logic)

`account` The account address that received the block rewards.

`previousBlockHash` The hash of the previous block.

`postBalance` The balance of the account after the block rewards were received.

`parentSlot` The slot number of the parent block.

`rewardType` The type of block rewards. 
</details>


## Fields

`block`: The block that the reward was issued for.

`account`: The account that received the reward.

`rewardType`: The type of reward.

`amount`: The amount of the reward.

`currency`: The currency of the reward.

`postBalance`: The balance of the account after the reward was issued.

`time`: The timestamp the reward was issued.

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Solana Coinpath API](https://docs.bitquery.io/v1/docs/Schema/solana/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
