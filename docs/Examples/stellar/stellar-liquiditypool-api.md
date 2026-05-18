---
title: "Stellar Liquidity Pools API Examples"
description: "Example GraphQL queries for Stellar liquidity pool effects. Get pool operations, transactions, and currencies."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

# Stellar Liquidity Pools API

Track Stellar liquidity pool activity — deposits, withdrawals, and trades — using the Bitquery GraphQL API.

## Get Latest Stellar Liquidity Pool Effects for One Pool

Pull the latest effects for a specific Stellar liquidity pool — operation type, transaction hash, share changes, and currency details. [Run the query on the IDE](https://ide.bitquery.io/Latest-XLMAqua-Pool-Updates).

**Variations:** Swap `liquidityPoolId` to watch a different pool, remove it to stream all pools, or add an `operation` filter (e.g., `liquidity_pool_deposit`) to isolate deposits, withdrawals, or trades.

```
query MyQuery {
  stellar(network: stellar) {
    liquidityPoolEffects(
      options: {limit: 10, desc: "timestamp.time"}
      date: {is: "2024-07-16"}
      liquidityPoolId: {is: "59fa1dc57433dcfbd2db7319d26cb3da1f28f2d8095a3ec36ad4ef9cadb0013e"}
    ) {
      amount
      liquidityPoolId
      liquidityPoolDetails
      operation {
        name
      }
      order
      shares
      transaction {
        hash
      }
      timestamp {
        time
      }
      currency {
        name
      }
    }
  }
}

```

## Get Latest Stellar Liquidity Pool Deposit Effects

Get the most recent deposit effects across all Stellar liquidity pools, returning amount, pool details, transaction hash, and currency. [Run the query on the IDE](https://ide.bitquery.io/Latest-Pool-Deposits).

**Variations:** Switch the `operation` filter to `liquidity_pool_withdrawal` or `liquidity_pool_trade` for other effect types. Add a `liquidityPoolId` filter to narrow results to one pool.

```
query MyQuery {
  stellar(network: stellar) {
    liquidityPoolEffects(
      options: {limit: 10, desc: "timestamp.time"}
      date: {is: "2024-07-16"}
      operation: {is: "liquidity_pool_deposit"}
    ) {
      amount
      liquidityPoolId
      liquidityPoolDetails
      operation {
        name
      }
      order
      shares
      transaction {
        hash
      }
      timestamp {
        time
      }
      currency {
        name
      }
    }
  }
}


```

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar effects examples](https://docs.bitquery.io/v1/docs/Examples/stellar/stellar-effects-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)