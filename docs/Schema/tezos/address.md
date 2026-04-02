---
title: "Tezos Address API"
description: "Tezos tz addresses: balance (available, staking, delegated), annotations—XTZ account data—Bitquery GraphQL."
keywords: ["Tezos API", "Tezos Address", "Bitquery", "GraphQL"]
---

# Address

The `address` API allows you to retrieve detailed information about addresses from the Tezos blockchain.

Here's an example query that demonstrates how to fetch address details:

```
{
  tezos {
    address(address: {is: "tz1Vkoqo2ZQsVXBniYJDfX6F2NMfH5RoEuGn"}) {
      address
      balance {
        available
      }
    }
  }
}
```

<details>

<summary>Filtering Addresses</summary>

- `address`: Filter by a specific address or a list of addresses

</details>

### Returned Address Information

- `address`: Returns the address itself
- `annotation`: Provides any available annotation associated with the address
- `balance`: Returns the balance of the address, including staking balance, delegated balance, and total balance

## Related Resources

- [Tezos schema overview](https://docs.bitquery.io/v1/docs/Schema/tezos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Tezos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/tezos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
