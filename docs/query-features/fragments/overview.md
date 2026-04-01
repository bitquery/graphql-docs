---
sidebar_position: 1
title: "GraphQL Fragments in Bitquery API"
description: "Reuse query fragments for balance history and other patterns to reduce duplication in Bitquery GraphQL."
keywords: [Bitquery, GraphQL, fragments, reuse, queries]
---

<head>
<meta name="title" content="GraphQL Fragments in Bitquery API"/>
<meta name="description" content="Reuse query fragments for balance history and other patterns to reduce duplication in Bitquery GraphQL."/>
<meta name="keywords" content="Bitquery, GraphQL, fragments, reuse, queries"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="GraphQL Fragments in Bitquery API" />
<meta property="og:description" content="Reuse query fragments for balance history and other patterns to reduce duplication in Bitquery GraphQL." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="GraphQL Fragments in Bitquery API" />
<meta property="twitter:description" content="Reuse query fragments for balance history and other patterns to reduce duplication in Bitquery GraphQL." />
</head>

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

## Related Resources

- [GraphQL aliases](https://docs.bitquery.io/v1/docs/query-features/aliases)
- [Basic structure of a query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Utilities API](https://docs.bitquery.io/v1/docs/query-features/utilities/utilities)

