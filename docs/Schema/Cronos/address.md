# Address

The `address` allows us to retrieve information about a specific address.

Here is an example that demonstrates how to retrieve basic information about the USDT smart contract:

```
query {
  ethereum(network: cronos) {
    address(address: {is: "0x01445c31581c354b7338ac35693ab2001b50b9ae"}) {
      smartContract {
        attributes {
          address {
            address
            annotation
          }
          name
          value
          type
        }
        contractType
        protocolType
        currency {
          decimals
          name
          symbol
          tokenType
        }
      }
      balance
      annotation
      address
    }
  }
}
```

<details>
<summary>Filtering Addresses</summary>
- `address`: Filter by a specific address or a list of addresses.

</details>

The following are available fields for the address:

- `address`: Returns the address.
- `annotation`: Returns the annotation of the address if available.
- `balance`: Returns the current balance of the address.
- `balances`: Returns the balance history of the address.
- `smartContract`: Returns details if the address is that of a smart contract.
