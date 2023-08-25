# Blocks

Bitquery's Avalanche blocks API provides information on blocks in the Avalanche chain. Below are the fields in the schema:


```
query ($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  ethereum(network: $network) {
    blocks(
      options: {desc: "height", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      transactionCount
      address: miner {
        address
        annotation
      }
      reward
      reward_usd: reward(in: USD)
      hash
      gasUsed
      gasLimit
      difficulty
      parentHash
      nonce
      rewardCurrency {
        symbol
        decimals
        name
        tokenId
        tokenType
        address
      }
      totalDifficulty
    }
  }
}

```

<details><summary> Filtering Blocks</summary>

- **options** : A set of options that can be used to filter the results.
  - **desc** or **asc** : The order of the results, either "asc" (ascending) or "desc" (descending).
  - **limit** : The maximum number of results to return. The default is 10.
  - **offset** : The number of results to skip. The default is 0.
- **time** : A filter that can be used to select blocks created within a specified time range.

- **any** : A catch-all filter (OR logic) that can be used to select blocks that match any of the other filters.
- **height** : A filter that can be used to select blocks with a specific height.
- **date** : A filter that can be used to select blocks created on a specific date.
- **blockHash** : A filter that can be used to select blocks with a specific hash.
- **miner**: Filter by the miner who mined the block.

</details>

## Fields

`timestamp`: The Unix timestamp for when the block was created.

`height`: The height of the block in the chain.

`parentHash`: Returns the parent hash for the block.

`hash`: The hash of the block.

`pivot`: The pivot block hash of the block.

`address`: The address of the miner who mined the block.

`reward`: Returns reward for the block

`blame`: The blame score of the block.
 
`totalDifficulty`: The total difficulty of the block
