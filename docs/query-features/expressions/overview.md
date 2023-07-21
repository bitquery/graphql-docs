---
sidebar_position: 1
---

# Expressions

**What is an Expression?**

An expression is a mathematical function that can be applied to metrics in a GraphQL query.  Bitquery's V1 dataset supports expressions to allow you to calculate custom metrics.

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
ethereum(network: ethereum) {
dexTrades(
options: {desc: ["block.height", "tradeIndex"],
limit: 10, offset: 0,
limitBy: {each: "buyCurrency.address,sellCurrency.address", limit: 1}}
date: {since: "2022-12-27", till: "2023-01-03"}
) {
block {
timestamp {
time(format: "%Y-%m-%d %H:%M:%S")
}
height
}
tradeIndex
protocol
exchange {
fullName
}
smartContract {
address {
address
annotation
}
...
}
}
```


