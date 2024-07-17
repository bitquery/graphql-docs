
# Stellar Liquidity Pools API

## Latest Pool Effects for a Particular Pool

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

## Latest Liquidity Pool Deposits

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