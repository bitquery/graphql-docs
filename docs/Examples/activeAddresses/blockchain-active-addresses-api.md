---
title: "Active Addresses API Examples"
description: "Example GraphQL queries for active addresses by chain or token. Count unique addresses over time."
keywords: [active addresses API examples, GraphQL queries, Bitquery]
---

# Active address API

The Active Addresses API counts unique addresses that participated in on-chain activity — transactions, transfers, or contract interactions. Use it for network health metrics, user engagement tracking, and token adoption analysis.



## Get Active Ethereum Addresses Count Since a Date

Count all unique active addresses on Ethereum since a given date using `count(uniq: address)`. Always include a `date` filter to keep the query fast — the API scans all matching activity.

**Variations:** Add `currency` to count active addresses for a specific token. Use `date: {since: ..., till: ...}` for a specific period. Switch the network for other EVM chains. Group by `date.date` for daily active address trends.

[Open this query on IDE](https://ide.bitquery.io/active-addresses-on-blockchain)

```graphql
{
  ethereum {
    activeAddresses (date: {since: "2023-01-01"}) {
      uniqueAddresses: count(uniq: address)
    }
  }
}

```

## Query Active Ethereum Addresses for USDT Token Activity

Count unique addresses that interacted with a specific token by adding a `currency` filter. This query returns the total active address count for [USDT](https://explorer.bitquery.io/ethereum/token/0xdac17f958d2ee523a2206206994597c13d831ec7) on Ethereum.

**Variations:** Change the token address for any ERC-20. Add `date` for a time-bounded count. Use `currency: {in: [...]}` for multiple tokens. Compare across chains by adding aliased blocks for other networks.


[Open this query on IDE](https://ide.bitquery.io/active-addresses-for-USDT-on-Ethereum)

```graphql
{
  ethereum {
    activeAddresses(currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}) {
      uniqueAddresses: count(uniq: address)
    }
  }
}
```

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Address stats examples](https://docs.bitquery.io/v1/docs/Examples/addressStats/address-stats-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)