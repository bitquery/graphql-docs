---
title: "Address & Balance Query Examples — Bitquery GraphQL"
description: "Example GraphQL queries for address balances on EVM networks. Get native and token balances for Polygon and more."
keywords: [address API examples, GraphQL queries, Bitquery]
sidebar_position: 2
---

# Specific Queries on Address and Balances

## Get Native MATIC and Token Balances on Polygon for an Address

This is a query that retrieves the native balance and token balances for an Ethereum address on the Matic network.
The native balance is the balance of the account in its native currency, which is MATIC in this case. The token balances are the balances of the account in other currencies.

The query below removes MATIC from the results and names the balance variable as native_balance.
You can find the query [here](https://ide.bitquery.io/Get-balances--Native-Balance--MATIC)

```
query MyQuery {
  ethereum(network: matic) {
    address(address: {is: "0xc16157e00b1bff1522c6f01246b4fb621da048d0"}) {
      native_balance: balance
      balances(currency: {not: "MATIC"}) {
        value
        currency {
          address
          name
          symbol
        }
      }
      smartContract {
        attributes {
          address {
            annotation
            address
          }
        }
      }
    }
  }
}

```

Please note that the fields `value` and `balance` field values are of type `Float` not string.

## Related Resources

- [Polygon schema overview](https://docs.bitquery.io/v1/docs/Schema/Polygon/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Blockchain address API examples](https://docs.bitquery.io/v1/docs/Examples/address/Blockchain-Address-API-Examples)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
