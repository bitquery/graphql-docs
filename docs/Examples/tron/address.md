---
title: "Tron Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron addresses. Get balance, rewards, and smart contract details for an address."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Tron Address API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Tron addresses. Get balance, rewards, and smart contract details for an address."/>
<meta name="keywords" content="Tron API examples, Tron GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Address API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Tron addresses. Get balance, rewards, and smart contract details for an address." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Address API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Tron addresses. Get balance, rewards, and smart contract details for an address." />
</head>

# Address API

Our Tron Address API provides all details regarding any address on Tron Blockchain. If given address is a smart contract API also details of that smart contract too.

## Get Address Balance

```
{
    tron {
        address(address: { is: "ADDRESS_HERE"}) {
            address
            annotation
            balance(in: USD)
        }
    }
}
```

Replace `ADDRESS_HERE` with the actual Tron address you want to query. This will return the balance of TRX tokens for given Tron address in USD, along with the address itself and any additional annotation associated with it.

Removing `in` argument will give you balance of TRX tokens for given Tron address.

## Get TRX Token Balance History of Address

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      balances(currency: {is: "TRX"}) {
        history {
          block
          timestamp
          transferAmount
          value
        }
      }
    }
  }
}
```

Replace `ADDRESS_HERE` with the Tron address you want to query. This query will provide the change in balance of the given address for a selected currency. It allows you to obtain the balance history for a particular currency using a single query.

## Get Claimable Rewards of Address

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      claimableRewards
    }
  }
}
```

Replace `ADDRESS_HERE` with the Tron address you want to query. This query will provide the claimable voting reward of the given Tron address.

## Get Smart Contract Details from Address

```
{
  tron {
    address(address: {is: "ADDRESS_HERE"}) {
      smartContract {
        contractType
        currency {
          decimals
          name
          symbol
          tokenType
        }
        protocolType
      }
    }
  }
}
```

Replace `ADDRESS_HERE` with the Tron address you want to query. This query will fetch basic details of the smart contract, such as contract type and protocol type. If the contract is an ERC-20 token, it will also return additional information like decimals, name, symbol, and token type.

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron transfers examples](https://docs.bitquery.io/v1/docs/Examples/tron/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)