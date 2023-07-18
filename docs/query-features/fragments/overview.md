---
sidebar_position: 1
---

# Fragments

A fragment spread is a way to reuse a fragment definition in another fragment or query. This can be useful for reducing code duplication and making your queries more readable.

You can use fragments in your query using the `fragment` keyword


## Example


In the example below, the `historicalBalances` fragment is spread into the `EthBalanceHistory` query. This allows us to reuse the `historicalBalances` fragment to query for the balance history of an address and currency.

The `balanceChange` fragment is also spread into the `historicalBalances` fragment. This allows us to query for the block number and value of each balance change.

```
query EthBalanceHistory($network: EthereumNetwork!, $address: String!, $currency: String!) {
  nativeBalanceHistory: ethereum(network: $network) {
    ...historicalBalances
  }
}

fragment historicalBalances on Ethereum {
  address(address: {is: $address}) {
    balances(currency: {is: $currency}) {
      history {
        ...balanceChange
      }
    }
  }
}

fragment balanceChange on EthereumBalanceChange {
  block
  value
}

```
**Parameters**
```
{
  "network": "ethereum",
  "address": "0x4976a4a02f38326660d17bf34b431dc6e2eb2327",
  "currency": "ETH"
}
```


