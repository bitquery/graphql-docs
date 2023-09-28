---
title: "Ethereum Blocks API"
---

<head>
<meta name="title" content="Ethereum Blocks API"/>

<meta name="description" content="Access Ethereum block data, including gas limits, rewards, and more. Get the latest 10 blocks with the Ethereum Blocks API."/>

<meta name="keywords" content="Ethereum blockchain, Block information, Block data retrieval, Ethereum network, Block height, Gas limit, Block rewards, Timestamp, Block difficulty, Transaction count, Uncle count, Total difficulty, Block size, Miner, Block hash, Block date, Block filtering options, Block aggregation, Ethereum analytics, Ethereum development"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ethereum Blocks API" />

<meta property="og:description" content="Access Ethereum block data, including gas limits, rewards, and more. Get the latest 10 blocks with the Ethereum Blocks API." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ethereum Blocks API" />

<meta property="twitter:description" content="Access Ethereum block data, including gas limits, rewards, and more. Get the latest 10 blocks with the Ethereum Blocks API." />
</head>

The `blocks` field allows us to retrieve information about the blocks from the Ethereum blockchain.

Here is an example that demonstrates how to retrieve 10 latest blocks from Ethereum blockchains:
```
{
  ethereum {
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

-   `any`:
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
