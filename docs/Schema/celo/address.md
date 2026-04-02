---
title: "Celo Address API"
description: "Celo EVM addresses: CELO and stablecoin balances, ERC-20 contract metadata, balance history, and labels via Bitquery GraphQL."
keywords: ["Celo API", "Celo Address", "Bitquery", "GraphQL"]
---

# Address

The `address` allows us to retrieve information about a specific address.

Celo is an EVM-compatible, mobile-first network with native stablecoins such as cUSD and cEUR alongside CELO for governance. The address API returns CELO balance, annotations, balance history, and smart contract details including token metadata. Use it for mobile wallet lookups, stablecoin issuer verification, and building account overview pages for Celo's financial-inclusion ecosystem.

Here is an example that demonstrates how to retrieve basic information about the a smart contract:

```
query {
  ethereum(network: celo_mainnet) {
    address(address: {is: "address here"}) {
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

- [Celo schema overview](https://docs.bitquery.io/v1/docs/Schema/celo/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Celo Coinpath API](https://docs.bitquery.io/v1/docs/Schema/celo/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
