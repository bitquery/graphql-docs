---
title: "Staking API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for staking data. Get Cardano stake rewards and distribution history."
keywords: [staking API examples, GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Staking API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for staking data. Get Cardano stake rewards and distribution history."/>
<meta name="keywords" content="staking API examples, GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Staking API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for staking data. Get Cardano stake rewards and distribution history." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Staking API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for staking data. Get Cardano stake rewards and distribution history." />
</head>

# Staking Data Examples

## Get Staking Data for a Stake Address on Cardano

Below is an example to get the staking information for the address using the `staking` function. The `rewardsAmount` field returns the total amount of staking rewards that have been earned by the address. You can access the query [here](https://ide.bitquery.io/Cardano-stake-data-for-a-stake-address)

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

## Get Latest staked NFT on Ethereum

The query below retrieves the latest 10 transactions on the Ethereum blockchain which called the `StakeNFT` event on the `YieldFarming` smart contract address
You can access the query [here](https://ide.bitquery.io/latest-Staked-NFT_1)

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

## Staking Rewards for every Block on Solana

The query below retrieves the staking rewards for every block on the Solana blockchain. The query limits the results to the 10 most recent blocks and sorts the results by `block height` in `descending` order.
You can access the query [here](https://ide.bitquery.io/staking-rewards-on-solana)

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
