# Address

Avalanche Address API provides information about an address on the Avalanche blockchain. Below are the fields in the schema:

```
query ($network: EthereumNetwork!) {
  ethereum(network: $network) {
    blocks(options: {desc: "height", limit: 10}) {
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
      rewardCurrency {
        symbol
        decimals
        name
        address
        tokenId
        tokenType
      }
      totalDifficulty
      uncleCount
      gasLimit
      difficulty
      gasUsed
      hash
    }
  }
}
{
  "network": "avalanche"
}
```

<details><summary>Filtering Address</summary>

`limit`: The maximum number of results to return.

`time`: The timestamp of the block.

`transactionCount`: The number of transactions in the block.

`uncleCount`: The number of uncles in the block.

`miner`: The address of the miner who mined the block.

`height`: The height of the block.

`blockReward`: The reward that the miner received for mining the block.

`blockHash`: The hash of the block.

`any`: A catch-all filter (OR logic) that can be used to filter the results by any of the other fields.

`date`: The date of the block.

</details>



`balance`: The balance of the address

`transactionCount`: The number of transactions in the block

`rewards`: A list of rewards that the address has earned.

`uncles`: A list of uncles that the address has mined.

`totalDifficulty`: The total difficulty of the blocks that the address has mined.

`gasLimit`: The total gas limit of the transactions that the address has sent or received.

`difficulty`: The total difficulty of the blocks that the address has mined.

`gasUsed`: The total gas used by the transactions that the address has sent or received.

`hash`: The hash of the address.

`rewardCurrency`: The currency of the reward.

`reward`: The reward that the miner received for mining the block.

`reward_usd`: The reward that the miner received for mining the block in USD.