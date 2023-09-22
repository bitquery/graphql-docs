---
title:  Polygon Blocks API
---


<head>
<meta name="title" content="Polygon Blocks API"/>
<meta name="description" content= "Get latest or historical blocks on Polygon (Matic) blockchain. Get all transactions, Fees and miner and other details."/>
<meta name="keywords" content="polygon api, polygon balance, polygon balance history, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Blocks API" />
<meta property="og:description" content="Get latest or historical blocks on Polygon (Matic) blockchain. Get all transactions, Fees and miner and other details." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Blocks API" />
<meta property="twitter:description" content="Get latest or historical blocks on Polygon (Matic) blockchain. Get all transactions, Fees and miner and other details." />
</head>

# Blocks

The `blocks` field allows us to retrieve information about the blocks from the Polygon blockchain.

Here is an example that demonstrates how to retrieve 10 latest blocks from Polygon blockchains:
```
{
  ethereum(network: matic) {
    blocks(
      options: {limit: 10, desc: "timestamp.iso8601"}
      date: {after: "2023-07-18T00:00:00Z"}
    ) {
      gasLimit
      height
      hash
      timestamp {
        iso8601
      }
      difficulty
      size
      reward
      uncleCount
      transactionCount
      totalDifficulty
    }
  }
}
```

<details>
<summary>Filtering Blocks</summary>

Blocks data can be filtered using following arguments:

-   `any`:
-   `blockHash`: Filter by block hash.
-   `blockReward`: Filter by block reward given to the block producer.
-   `date`: Filter by the date on which the block was mined.
-   `height`: Filter by the height of the block.
-   `miner`: Filter by the miner who mined the block.
-   `options`: Filter returned data by ordering, limiting, and constraining it. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`.
-   `size`: Filter by the size of the block.
-   `time`: Filter by when the block was mined.
-   `transactionCount`: Filter by the number of transactions in the block.
-   `uncleCount`:

</details>

-   `any`: Used for `or` condition
-   `count`: returns the aggregate count of blocks.
-   `countBigInt`: returns the aggregate count of blocks in `BigInt` format.
-   `date`: returns the date on which the block was mined.
-   `difficulty`: returns the block difficulty.
-   `expression`: performs arithematic operation and returns value of the operation
-   `gasLimit`: returns the gas limit for the block.
-   `gasUsed`: returns the gas used for that block.
-   `hash`: returns the hash of the block.
-   `height`: returns the height of the block.
-   `maximum`: returns the maximum of selected [measruable fields](/v1/docs/graphql-reference/enums/ethereum-blocks-measureable) of Ethereum Blocks
-   `miner`: returns the miner of the block.
-   `minimum`: returns the minimum of selected [measruable fields](/v1/docs/graphql-reference/enums/ethereum-blocks-measureable) of Ethereum Blocks
-   `nonce`: returns the nonce of the block.
-   `parentHash`: returns the parent hash for the block.
-   `reward`: returns the reward given to the miner for producing the block.
-   `rewardCurrency`: returns the reward currency.
-   `size`: returns the block size.
-   `timestamp`: returns the timestamp when the block was mined.
-   `totalDifficulty`: returns the total difficulty.
-   `transactionCount`: returns the number of transactions included in the block.
-   `transactionCountBigInt`:
-   `uncleCount`:
-   `uncleCountBigInt`:


:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your API keys, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::