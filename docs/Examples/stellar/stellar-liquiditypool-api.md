---
title: "Stellar Liquidity Pools API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Stellar liquidity pool effects. Get pool operations, transactions, and currencies."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

# Stellar Liquidity Pools API

This API allows you to access and analyze effects from Stellar's liquidity pools. Effects are specific changes that occur within the ledger due to operations performed on the liquidity pools.

## Get Latest Stellar Liquidity Pool Effects for One Pool

The below query gets the latest effects for a specific liquidity pool, including details about the operation, the transaction, and the pool itself.

You can run the query [here](https://ide.bitquery.io/Latest-XLMAqua-Pool-Updates)

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

The query below fetches the most recent deposit effects into all liquidity pools. This query provides details about the deposit operation, including the amount, pool details, transaction hash, and currency.
You can run the query [here](https://ide.bitquery.io/Latest-Pool-Deposits)

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
