---
title: "Cronos Address API"
description: "Cronos EVM addresses on Bitquery: CRO balances, smart-contract token metadata (ERC-20), and human-readable annotations."
keywords: ["Cronos API", "Cronos Address", "Bitquery", "GraphQL"]
---

# Address

The `address` allows us to retrieve information about a specific address.

Cronos is an EVM-compatible chain from Crypto.com, so addresses follow the standard Ethereum model. The address API returns CRO balance, annotations, balance history, and smart contract details including token metadata and contract type. Use it for wallet pages, DeFi portfolio snapshots, and verifying contract attributes on the Cronos network before querying transfers or DEX trades.

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

## Related Resources

- [Cronos schema overview](https://docs.bitquery.io/v1/docs/Schema/Cronos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cronos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/Cronos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
