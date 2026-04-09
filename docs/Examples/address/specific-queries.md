---
title: "Address & Balance Query Examples — Bitquery GraphQL"
description: "Example GraphQL queries for address balances on EVM networks. Get native and token balances for Polygon and more."
keywords: [address API examples, GraphQL queries, Bitquery]
sidebar_position: 2
---

# Specific Queries on Address and Balances

## Get Native MATIC and Token Balances on Polygon for an Address

Get both the native MATIC balance and all ERC-20 token balances for a Polygon address in one query. The `balance` field returns the native balance, while `balances(currency: {not: "MATIC"})` excludes the native token from the token list. Also retrieves smart contract attributes for the address. [Run query](https://ide.bitquery.io/Get-balances--Native-Balance--MATIC).

**Variations:** Remove the `not` filter to include MATIC in the token list. Add `currency: {is: "..."}` for a specific token. Switch `network` to `ethereum`, `bsc`, or any EVM chain. Use [aliases](/docs/query-features/aliases) to rename fields for cleaner responses.

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

The `value` and `balance` fields return `Float` values (not strings).

## Related Resources

- [Polygon schema overview](https://docs.bitquery.io/v1/docs/Schema/Polygon/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Blockchain address API examples](https://docs.bitquery.io/v1/docs/Examples/address/Blockchain-Address-API-Examples)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
