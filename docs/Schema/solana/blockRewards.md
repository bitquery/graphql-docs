---
title: "Solana Block Rewards API — Validator Rewards, Epochs, Reward Type"
description: "Query Solana block rewards with Bitquery V1 GraphQL: validator and stake account reward distributions per epoch, reward type, post-balance, and currency. Built for staking analytics, validator economics, and yield reporting."
keywords:
  [
    "Solana block rewards API",
    "Solana validator rewards",
    "Solana staking rewards",
    "Solana epoch rewards",
    "Solana yield",
    "Bitquery V1",
    "Solana GraphQL",
  ]
---

# Block Rewards

The Solana **BlockRewards API** returns indexed reward distributions on the Solana network. Solana implements a proof-of-stake reward scheme for validator nodes; rewards are paid every epoch and the API exposes the **account** that received the reward, the **rewardType**, **amount**, **currency**, **postBalance**, and full **block** context.

Use it for **validator economics**, **stake-pool analytics**, **yield reporting** for SOL stakers, **delegated-stake reconciliation**, and to combine with [transactions](/docs/Schema/solana/transactions) for end-to-end performance views.

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

## Common use cases

- **Validator economics and yield reporting** — sum validator rewards by `account` and `rewardType` over an epoch range.
- **Stake-pool / staker reconciliation** — match rewards to stake accounts and feed accounting systems.
- **Treasury and tax** — combine block rewards with [transfers](/docs/Examples/Solana/transfers) for income recognition per period.
- **Network health** — monitor reward issuance trends alongside [block](/docs/Schema/solana/blocks) production.

<details>

<summary>Filtering blockRewards</summary>

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

- [Solana transfers schema (V1)](/docs/Schema/solana/transfers) — for the SOL/SPL movements that pair with reward income
- [Solana transfers examples (V1)](/docs/Examples/Solana/transfers)
- [Solana transactions schema (V1)](/docs/Schema/solana/transactions)
- [Solana blocks schema (V1)](/docs/Schema/solana/blocks)
- [Solana schema overview (V1)](/docs/Schema/solana/overview)
- [Solana Coinpath API (V1)](/docs/Schema/solana/coinpath)
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
