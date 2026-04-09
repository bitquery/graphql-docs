---
sidebar_position: 1
title: "Expressions in Bitquery GraphQL API"
description: "Define custom calculated fields with expression() in Bitquery V1 GraphQL, including limitBy and derived metrics."
keywords: [Bitquery, GraphQL, expressions, expression(), calculated fields]
---

# Expressions

**What is an Expression?**

An expression is a mathematical function that can be applied to metrics in a GraphQL query. Bitquery's V1 dataset supports expressions to allow you to calculate custom metrics.

You can create an expression in a query using `expression()` function.

**Breaking down Expressions**

The following query shows how to use expressions in a GraphQL query:

```
query GetTopGainers {
ethereum(network: bsc) {
 dexTrades(
   options: {desc: ["baseCurrency.name", "amount_expression"], limit: 50, limitBy: {each: "buyCurrency.name, a.b", limit: 2}}
   quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
   time: {since: "2022-12-01"}
   tradeAmountUsd: {gt: 10}
 ) {
   baseCurrency {
     name
     address
     symbol
   }
   tradeAmount(in: USD)
   open_price: minimum(of: block, get: quote_price)
   close_price: maximum(of: block, get: quote_price)
   buyAmount
   sellAmount
   price_expression: expression(get: "close_price / open_price")
   Price_expressionX2: expression(get: "price_expression * 2")
   open_price_x2: expression(get: "open_price * 2")
   amount_expression: expression(get: "buyAmount - sellAmount")
   buyCurrency {
     address
     name
   }
   a: sellCurrency {
     b: address
   }
 }
}
}
```

In this query, the `price_expression` field is calculated by dividing the `close_price` field by the `open_price` field. The `Price_expressionX2` field is calculated by multiplying the `price_expression` field by 2. The `open_price_x2` field is calculated by multiplying the `open_price` field by 2. The `amount_expression` field is calculated by subtracting the `sellAmount` field from the `buyAmount` field.

**Allowing more than 1 field in limitby**

The `limitby` field can be used to limit the results of a query to a specific number of results per field. The new version of the Bitquery API allows you to specify more than 1 field in the `limitby` field. For example, the following query limits the results to 1 result per `buyCurrency.address` and `sellCurrency.address`:

```
{
  ethereum {
    dexTrades(
      options: {
        desc: ["block.height", "tradeIndex"],
        limit: 10,
        offset: 0,
        limitBy: {
          each: "buyCurrency.address, sellCurrency.address",
          limit: 1
        }
      }
      date: {after: "2022-12-27", till: "2023-01-03"}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      tradeIndex
      protocol
      exchange {
        name
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      sellCurrency {
        address
      }
      buyCurrency {
        address
      }
    }
  }
}
```

Expressions shine when the metric you need is **not stored directly** but is a simple function of fields Bitquery already returns—ratios, spreads, net amounts, or scaled prices. Computing these in the query keeps sorting, limiting, and filtering aligned with the derived value (for example, ordering by a custom score) and avoids shipping raw columns to your app only to recompute the same arithmetic. They are especially useful for DEX-style analytics where “price” is naturally expressed from quantities or from min/max of a price series over a window.

## When to Use Expressions

- **Ratios and relative change**: When you need a return multiple, buy/sell imbalance, or close-over-open style metric, expressions combine existing aggregated or scalar fields without an extra round trip.
- **Percentages and normalization**: When you want to express a share of a total or rescale a metric, derive it with `expression()` so dashboards consume a single field.
- **Net flows**: When inflow minus outflow (or buy minus sell) answers the business question, expressions encode that definition next to the raw components for transparency.
- **Chained derived fields**: When one calculated value feeds another (as with a price expression then a multiple of that price), expressions document the dependency chain in the query itself.
- **Less post-processing**: When you would otherwise download rows and run Python or SQL again for simple arithmetic, moving it into Bitquery reduces pipeline code and keeps limits and `limitBy` behavior consistent with the computed sort keys.

## Related Resources

- [Bitquery API FAQ](https://docs.bitquery.io/v1/docs/building-queries/FAQ)
- [Limits and limitBy](https://docs.bitquery.io/v1/docs/query-features/filtering/limits)
- [Aggregation overview](https://docs.bitquery.io/v1/docs/query-features/aggregation/)
- [Metrics in Bitquery GraphQL API](https://docs.bitquery.io/v1/docs/query-features/Metrics)
- [Introduction](https://docs.bitquery.io/v1/docs/intro)
