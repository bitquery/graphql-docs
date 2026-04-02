---
sidebar_position: 2
title: "GraphQL Aliases in Bitquery API"
description: "Rename GraphQL response fields with aliases in Bitquery queries for clearer DEX trade and token data."
keywords: [Bitquery, GraphQL, aliases, field renaming, DEX]
---

# Aliases


An alias is a short, descriptive name for a metric. It can be used to make metric names more readable and easier to understand. Aliases are typically used in conjunction with tags to identify specific metrics. Bitquery APIs support aliases.


You can give an alias to any field in the response by writing 

`alias: field`

```
 sellCurrency {
       seller_address: address
        symbol
      }
```
Renaming the address as seller_address makes it clearer. The response will be returned as 

```
 "sellCurrency": {
            "seller_address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            "symbol": "WETH"
          },
```

You can rename more than 1 field, even all fields in the response as per your needs.
Here's an example of a query with aliasing:

```
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 1}
      date: {after: "2023-07-01"}
      smartContractAddress: {is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"}
    ) {
      buyCurrency {
       buyer_address: address
        symbol
      }
      sellCurrency {
       seller_address: address
        symbol
      }
      smartContract {
        address {
          address
        }
      }
    }
  }
}
```

Aliases are not just cosmetic: they let the **same GraphQL response shape** carry multiple logically distinct values when the underlying schema repeats the same field name. In Bitquery, that matters whenever you request the same conceptual field more than once under different filters, arguments, or parent selections—something the GraphQL spec would forbid without renaming. Clear aliases also stabilize client code: your application can depend on stable JSON keys such as `buyer_address` instead of inferring meaning from nesting alone.

## When to Use Aliases

- **Same field, different meaning**: When two sibling selections both expose `address` (or similar) but one is a buyer, pool, or contract, aliases disambiguate them in one round trip without post-processing heuristics.
- **Multi-chain or multi-network patterns**: When you issue several root fields (for example, one per network) that share identical subfield names, aliases keep responses mergeable in a single JSON object without key collisions.
- **Readability for dashboards and APIs**: When you embed query results in products or reports, aliasing matches domain language (for example, `seller_address`) and reduces training cost for consumers of the data.
- **Composing queries from templates**: When you generate GraphQL from code, aliases let you parameterize “which side of the trade” or “which role” while reusing one fragment-shaped selection block.
- **Documentation through naming**: When sharing queries across a team, intentional aliases act as inline documentation for what each branch of the selection set represents.

## Related Resources

- [Basic structure of a query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
- [Fragments overview](https://docs.bitquery.io/v1/docs/query-features/fragments/overview)
- [Count aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/count)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Schema — Ethereum overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)