# Blocks


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