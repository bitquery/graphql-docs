# Glossary and Commonnly asked questions

## What is the difference between a transfer and a transaction on chain?

https://community.bitquery.io/t/transfers-vs-transactions-what-is-the-difference/1589


 ## How to calculate the price of a token in USD?

We can calculate price of a token in USD using `buyAmountUSD` and `sellAmount` fields.

The USD price is then calculated by dividing the `buyAmountUSD` field by the `sellAmount` field. This gives us the USD price of the sell currency in terms of the buy currency.

For example, if the `buyAmountUSD` field is 100 USD and the `sellAmount` field is 1 ETH, then the USD price of ETH is 100 USD / 1 ETH = 100 USD/ETH.

Below is the query to calculate price of a token betweeen two dates `from` and `to`

```
query ($from: ISO8601DateTime!, $to: ISO8601DateTime!, $limit: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      time: {after: $from, before: $to}
      options: {limit: $limit, asc: ["block.height", "tradeIndex"]}
      buyCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      transaction {
        hash
      }
      tradeIndex
      buyCurrency {
        symbol
        address
        name
        tokenType
        decimals
      }
      buyAmount
      buyAmountUSD: buyAmount(in: USD)
      sellCurrency {
        symbol
        address
        name
        tokenType
        decimals
      }
      sellAmount
      sellAmountUSD: sellAmount(in: USD)
      usdPrice: expression(get: "buyAmountUSD / sellAmount")
      maker {
        address
      }
      taker {
        address
      }
      protocol
      exchange {
        address {
          address
        }
        name
      }
      smartContract {
        address {
          address
        }
      }
    }
  }
}
<!-- Parameters -->
{
  "from": "2023-05-17T12:06:59.000Z",
  "to": "2023-05-17T12:21:59.000Z",
  "limit": 10
}
```