# Cosmos Address API

Our Cosmos Address API provides all the details regarding any address on Cosmos Blockchain.

## Get Balance of Address

```
{
  cosmos {
    address(address: {is: "ADDRESS_HERE"}) {
      balance
    }
  }
}
```

Replace `ADDRESS_HERE` with the desired Cosmos address you wish to query. This will return the balance of the native currency associated with the given Cosmos address.

## Get Balance of Address in USD

```
{
  cosmos {
    address(address: {is: "ADDRESS_HERE"}) {
      balance(in: USD)
    }
  }
}
```

Replace `ADDRESS_HERE` with the desired Cosmos address you want to query. This query will provide the balance of the native currency associated with the given Cosmos address, displayed in USD. The `in` operator is utilized to specify the desired currency for balance conversion.

## Get Balance of Multiple Addresses

```
{
  cosmos {
    address(address: {in: ["ADDRESS_HERE", "ADDRESS_HERE"]}) {
      balance
    }
  }
}
```

Replace `ADDRESS_HERE` with the desired Cosmos addresses you want to query. This query will provide the balances of the native currency associated with each Cosmos address specified in the array. The `address` field fetches essential information for each address, and the `balance` returns the respective native currency balances. This showcases the ability to pass an array of addresses, allowing you to retrieve balances for multiple addresses at once.





## Delegated Tokens and Rewards by a Cosmos address

Use [this query](https://ide.bitquery.io/cosmos-staking-reward-and-delegation0_7) to get rewards and delegated data for cosmos address.

```graphql
query MyQuery {
  cosmos {
    address(address: {is: "cosmos18sqvyf4ss84qree7gndph5chmm82fgls9as2zq"}) {
      reward
      rewardTokensInfo {
        denom
        amount
      }
    }
  }
}

```



Alternatively To get delegated values of a Cosmos address you can use [this query](https://ide.bitquery.io/cosmos-delegate-values).

```
{
  cosmos {
    transfers(
      currency: {is: "Atom"}
      transactionSigner: {is: "cosmos1usat8mm2uldpa79wwya4ax2uvge42yag6902sa"}
    ) {
      value(calculate: sum)
      type
    }
  }
}
```

To get the same data for other currencies use following query.

```
{
  cosmos {
    transfers(
      transactionSigner: {is: "cosmos1usat8mm2uldpa79wwya4ax2uvge42yag6902sa"}
    ) {
      value(calculate: sum)
      type
      currency{
        name
        symbol
        address
      }
    }
  }
}
```