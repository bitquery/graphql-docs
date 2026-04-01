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

## Related Resources

- [Basic structure of a query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
- [Fragments overview](https://docs.bitquery.io/v1/docs/query-features/fragments/overview)
- [Count aggregation](https://docs.bitquery.io/v1/docs/query-features/aggregation/count)
- [GraphQL IDE — how to start](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Schema — Ethereum overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)