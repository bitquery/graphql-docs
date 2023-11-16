---
sidebar_position: 2
---

# Specific Queries on Address and Balances

## Get Native and Token Balance for a Matic Address

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