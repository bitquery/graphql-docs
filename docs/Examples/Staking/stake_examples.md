---
title: "Staking API Examples"
description: "Example GraphQL queries for staking data. Get Cardano stake rewards and distribution history."
keywords: [staking API examples, GraphQL queries, Bitquery]
---

# Staking Data Examples

## Get Staking Data for a Stake Address on Cardano

Look up staking rewards for a Cardano stake address. The `rewardsAmount` field returns the total ADA earned through delegation — useful for reward tracking, tax reporting, and staking performance analysis. [Run query](https://ide.bitquery.io/Cardano-stake-data-for-a-stake-address).

**Variations:** Replace the stake address with any Cardano stake key. Combine with the Cardano `address` API to get both balance and staking data in one request.

```
query MyQuery {
  cardano {
    address(
      address: {is: "stake1u9l0967s948z2v3fzwcrff2rudm9ujhvn4zj9j3auxc74tcnsdf7k"}
    ) {
      address {
        address
      }
      staking {
        rewardsAmount
      }
    }
  }
}

```

## Get Latest BSC StakeNFT Events From the YieldFarming Contract

Retrieve the latest NFT staking events from a YieldFarming contract on BSC. Uses the `arguments` API to extract the staker address (`member`) and token ID (`tokenId`) from each `StakeNFT` event. [Run query](https://ide.bitquery.io/latest-Staked-NFT_1).

**Variations:** Change the event name and contract address for any staking protocol. Add `date` or `time` filters for a specific period. Switch `network` to any EVM chain.

```
{
  ethereum(network: bsc) {
    arguments(
      smartContractEvent: {is: "StakeNFT"}
      smartContractAddress: {is: "0x204e1F673819baE4a9C582c7DE42a6D146Afe156"}
      options: {limit: 10, desc: "block.height"}
    ) {
      transaction {
        hash
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      staker: any(of: , argument_value, argument: {is: "member"})
      nftID: any(of: argument_value, argument: {is: "tokenId"})
    }
  }
}

```

## Get Recent Solana Staking Rewards per Block Sorted by Height

Fetch per-block staking rewards on Solana using the `blockRewards` API with `rewardType: Staking`. Returns the reward amount and block height for the 10 most recent blocks. [Run query](https://ide.bitquery.io/staking-rewards-on-solana).

**Variations:** Change `rewardType` to `Fee` or `Rent` for other reward types. Use [aggregations](/docs/query-features/aggregation/) like `sum` on `amount` for total rewards over a period. Add a `date` filter for a specific time range.

```
{
  solana {
    blockRewards(
      rewardType: {is: Staking}
      options: {limit: 10, desc: "block.height"}
    ) {
      block {
        height
      }
      amount
      rewardType
    }
  }
}


```

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos examples](https://docs.bitquery.io/v1/docs/Examples/cosmos/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)