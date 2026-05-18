---
title: "Cardano Address API Examples"
description: "Example GraphQL queries for Cardano addresses. Get wallet balances with native assets and aggregate address activity metrics."
keywords:
  [
    Cardano API examples,
    Cardano GraphQL queries,
    Bitquery,
    Cardano address,
    addressStats,
    balance,
    staking,
  ]
---

# Cardano Address API

Look up Cardano wallet data with the `address` cube (balances per asset, including native tokens, plus staking details on Shelley-era addresses) and the `addressStats` cube (pre-aggregated activity metrics — inflows, outflows, transaction counts, first/last active). Replace the example addresses with your own target wallet.

## Get Cardano Address Balances and Staking Info

Fetch a Cardano address's balances across ADA and every native token it holds, along with its staking snapshot (controlled stake, staked amount, rewards available, rewards withdrawn). Ideal for wallet UIs, portfolio trackers, and staking dashboards.

**Variations:** Remove the `staking` block if you only need balances, or keep only the `ADA` balance by inspecting `currency.symbol` client-side. For stake-address-level lookups (starting with `stake1...`), pass the stake address to the same `is:` filter.

```
{
  cardano(network: cardano) {
    address(
      address: {is: "addr1v9m34968vfwya2dydafkaq48ag9pzerznwjf0ewu4jj5vfsvgmyhk"}
    ) {
      address {
        address
        annotation
      }
      balance {
        value
        currency {
          name
          symbol
          decimals
          address
          tokenId
          tokenType
        }
      }
      staking {
        controlledTotalStake
        stakedAmount
        stakedAmountWithRewards
        rewardsAmount
        rewardsAvailable
        withdrawnAmount
        address {
          address
          annotation
        }
      }
    }
  }
}
```

## Get Cardano Address Activity Metrics via addressStats

Retrieve pre-aggregated activity metrics for a Cardano address: total inflows and outflows, inbound and outbound transaction counts, unique senders and receivers, unique active days, balance, and first/last active timestamps. Useful for quick address-profile checks, compliance screening, and analytics dashboards.

:::caution
`addressStats` returns pre-aggregated data. In some cases it can be slightly out of date. For precise balance calculations, sum `outputs` and subtract `inputs` as shown in the [Inputs and Outputs examples](/docs/Examples/cardano/inputs-outputs).
:::

**Variations:** Pair this with an `address(...)` lookup (above) to combine fast aggregate metrics with per-asset balances, or run it against a list of DAO / exchange / protocol addresses to profile them side-by-side.

```
{
  cardano(network: cardano) {
    addressStats(
      address: {is: "addr1v9m34968vfwya2dydafkaq48ag9pzerznwjf0ewu4jj5vfsvgmyhk"}
    ) {
      address {
        address
        annotation
        balance
        inflows
        outflows
        inboundTransactions
        outboundTransactions
        uniqueSenders
        uniqueReceivers
        uniqueDaysWithTransfers
        firstActive {
          time
        }
        lastActive {
          time
        }
      }
    }
  }
}
```

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Cardano Address schema](https://docs.bitquery.io/v1/docs/Schema/cardano/address)
- [Cardano AddressStats schema](https://docs.bitquery.io/v1/docs/Schema/cardano/addressstats)
- [Cardano Inputs and Outputs API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/inputs-outputs)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)