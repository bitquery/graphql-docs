---
title: "Cronos Address API"
description: "Query Cronos address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Cronos API", "Cronos Address", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Cronos Address API"/>
<meta name="description" content="Query Cronos address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."/>
<meta name="keywords" content="Cronos API, Cronos Address, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cronos Address API" />
<meta property="og:description" content="Query Cronos address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cronos Address API" />
<meta property="twitter:description" content="Query Cronos address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
</head>

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

## Related Resources

- [Cronos schema overview](https://docs.bitquery.io/v1/docs/Schema/Cronos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cronos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/Cronos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
