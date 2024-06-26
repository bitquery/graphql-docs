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