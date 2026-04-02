---
sidebar_position: 1
title: "GraphQL Fragments in Bitquery API"
description: "Reuse query fragments for balance history and other patterns to reduce duplication in Bitquery GraphQL."
keywords: [Bitquery, GraphQL, fragments, reuse, queries]
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

Fragments pay off when you find yourself **copy-pasting the same block of fields** into several queries or when one query needs the same selection under multiple paths (for example, different variables or aliases). They keep a single source of truth for “what a balance change looks like” or “which token fields we always need,” which reduces mistakes when the schema evolves. Nesting fragments—smaller fragments included inside larger ones—mirrors how you think about domain objects (a balance change inside a history inside an address) without repeating literal field lists.

## When to Use Fragments

- **Repeated field sets**: When three or more queries need identical columns for the same GraphQL type, extract a fragment so a schema change updates one definition instead of many.
- **DRY across environments**: When staging and production queries differ only by variables but should share shape, fragments ensure parity and simplify code review.
- **Cross-chain or multi-entity queries**: When you query similar structures on different roots or with different arguments, shared fragments keep token, trade, or transfer shapes consistent while you vary only the entry point.
- **Client and server collaboration**: When mobile, web, and backend services consume the same Bitquery shapes, a checked-in fragment document becomes an informal contract for the payload.
- **Readability of large operations**: When a query would span dozens of lines, named fragments break it into navigable pieces without changing the wire protocol.

## Related Resources

- [GraphQL aliases](https://docs.bitquery.io/v1/docs/query-features/aliases)
- [Basic structure of a query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Utilities API](https://docs.bitquery.io/v1/docs/query-features/utilities/utilities)

