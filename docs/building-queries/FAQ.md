---
title: "Bitquery API FAQ — Frequently Asked Questions"
description: "Answers to common Bitquery API questions: DEX maker/taker, transfers vs transactions, USD price, priceAsymmetry, and token market cap."
keywords: [Bitquery, FAQ, GraphQL API, DEX, token price, market cap]
---

# Glossary and Frequently Asked Questions

## What is a maker and taker in a DEX Trade?
To put it simply, the maker is the party that provides liquidity to the market and  the taker is the one who accepts the maker's offer and completes the trade.

## What is the difference between a transfer and a transaction on the chain?

Please read the difference between Transfers and transactions [**here**](https://community.bitquery.io/t/transfers-vs-transactions-what-is-the-difference/1589).

## How to calculate the price of a token in USD?

Use the `buyAmountUSD` and `sellAmount` fields from the DEX Trades API to derive a token's USD price on-chain.

Divide `buyAmountUSD` by `sellAmount` to get the USD price of the sell currency per unit. For example, if `buyAmountUSD` is 100 USD and `sellAmount` is 1 ETH, the price is 100 USD/ETH.

The following query retrieves DEX trades for a buy currency within a date range and computes the USD price using an inline `expression` field.

**Variations:** Change the `buyCurrency` address to price any ERC-20 token. Remove the date filter to get the latest trades instead of a historical window.

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

## How to use priceAsymmetry to filter anomalies and outliers in Trades ?

The `priceAsymmetry` filter removes trades with extreme price deviations, improving data accuracy for DEX analytics. Trades with a price asymmetry greater than 1 are excluded from results, eliminating manipulated or erroneous swaps.


`priceAsymmetry` measures how close a trade’s buy and sell prices are to each other. A value below 0.01 means the prices differ by less than 1%.
However, 0.01 can be too strict and may exclude legitimate trades. To balance accuracy, combine it with a `tradeAmountUsd: {gt: 100}` filter to only include trades with a trade amount of more than 100 USD.

The following query fetches OHLC candlestick data for a token pair while filtering out outlier trades using `priceAsymmetry` and a minimum `tradeAmountUsd` threshold. [Open in IDE](https://ide.bitquery.io/PriceAsymmetry-and-TradeAmountUSD).

```
query ($baseAddress: String, $interval: Int) {
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: $baseAddress}
      date: {since: "2023-07-30", till: "2023-07-30"}
      options: {limit: 500, desc: "timeInterval.minute"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      tradeAmountUsd: {gt: 100}
      priceAsymmetry: {lt: 1}
    ) {
      timeInterval {
        minute(count: $interval)
      }
      sellCurrency: quoteCurrency {
        address
      }
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: date, get: quote_price)
      close: maximum(of: date, get: quote_price)
    }
  }
}

{
  "interval": 5,
  "baseAddress": "0x6982508145454ce325ddbe47a25d4ec3d2311933"
}


```

## How to calculate the marketcap of a token ?

`Market capitalization = Latest token price * Total supply`

Above, we have already shown how to get the USD price of an asset; now, let's get the supply.

**Query to calculate token total supply**

`Total supply =  Initial Supply + Minted supply - Burned supply`

The query below reads the token's initial supply from its smart contract attributes and then uses the Transfer API to sum minted and burned amounts by tracking tokens sent to or received from the zero address (`0x000...000`).

[Open this query on IDE](https://ide.bitquery.io/Total-supply-of-FTC-token).

```
{
  ethereum(network: bsc) {
    address(address: {is: "0x20f663cea80face82acdfa3aae6862d246ce0333"}) {
      annotation
      address
      smartContract {
        attributes {
          name
          value
        }
        contractType
        currency {
          symbol
          name
          decimals
          tokenType
        }
      }
    }
    transfers(date: {since: null, till: null}, amount: {gt: 0}) {
      minted: amount(
        calculate: sum
        sender: {is: "0x0000000000000000000000000000000000000000"}
      )
      burned: amount(
        calculate: sum
        receiver: {is: "0x0000000000000000000000000000000000000000"}
      )
      currency(currency: {is: "0x20f663cea80face82acdfa3aae6862d246ce0333"}) {
        symbol
        name
      }
    }
  }
}

```

Note: In many cases token attributes shown as null in those cases you should find other ways to get supply of the token.

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [DEX Trades API examples](https://docs.bitquery.io/v1/docs/Examples/dexTrades/dex-trading-data-api)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Basic structure of a query](https://docs.bitquery.io/v1/docs/building-queries/basic-structure-of-a-query)
- [Expressions overview](https://docs.bitquery.io/v1/docs/query-features/expressions/overview)
- [Metrics in Bitquery GraphQL API](https://docs.bitquery.io/v1/docs/query-features/Metrics)
