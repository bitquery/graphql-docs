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