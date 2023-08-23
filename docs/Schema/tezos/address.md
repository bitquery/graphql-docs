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