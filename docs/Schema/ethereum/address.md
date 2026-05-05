---
title: "Ethereum Addresses API"
description: "Explore specific address details, balances, and smart contract attributes using Bitquery's Ethereum address query."
---

<head>
<meta name="title" content="Ethereum Addresses API"/>

<meta name="description" content="Explore specific address details, such as the USDT token balance, using Bitquery's address query. Discover balance, attributes, and more information effortlessly."/>

<meta name="keywords" content="Token Balance, ERC20, USDT Balance, USDC Balance, ETH Balance, Ethereum, Ethereum Address"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ethereum Addresses API" />

<meta property="og:description" content="Explore specific address details, such as the USDT token balance, using Bitquery's address query. Discover balance, attributes, and more information effortlessly." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ethereum Addresses API" />

<meta property="twitter:description" content="Explore specific address details, such as the USDT token balance, using Bitquery's address query. Discover balance, attributes, and more information effortlessly." />
</head>

The `address` allows us to retrieve information about a specific address.

On Ethereum, an address can be an externally owned account (EOA) or a smart contract. The address API returns the current ETH balance, human-readable annotations where available, and—when the address is a contract—details such as contract type, protocol type, token metadata (decimals, symbol, token standard), and on-chain attributes. Use this for wallet pages, portfolio dashboards, token supply lookups, and quick contract verification before diving into transfer or event history.

Here is an example that demonstrates how to retrieve basic information about the USDT smart contract:

```
query {
  ethereum {
    address(address: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}) {
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

- `address` : Filter by a specific address or a list of addresses.

</details>

The following are available fields for the address:

- `address`: Returns the address.
- `annotation`: Returns the annotation of the address if available.
- `balance`: Returns the current balance of the address.
- `balances`: Returns the balance history of the address.
- `smartContract`: Returns details if the address is that of a smart contract.

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath (Ethereum)](https://docs.bitquery.io/v1/docs/Schema/ethereum/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)
