# OHLC API

Using our APIs, you can also get [OHLC](https://en.wikipedia.org/wiki/Open-high-low-close_chart) data.

The OHLC API allows you to retrieve OHLC data for a given asset pair and time period.

## OHLC Hourly Data for a Token Pair

This query gets OHLC data for the period from 5pm to 6pm UTC on July 9, 2023,, where the base currency is DAI (0xd0b3a986fff305854a7238a8e099cce1ced01a3d) and the quote currency is USDC (0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) in 10 minute intervals.

```
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 6, asc: "timeInterval.minute"}
      time: {since: "2023-07-09T17:00:00Z", till: "2023-07-09T18:00:00Z"}
      baseCurrency: {is: "0xd0b3a986fff305854a7238a8e099cce1ced01a3d"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    ) {
      timeInterval {
        minute(count:10)
      }
      baseCurrency {
        symbol
        address
      }
      baseAmount
      baseAmountInUSD: baseAmount(in: USD)
      quoteCurrency {
        symbol
        address
      }
      quoteAmount
      quoteAmountInUSD: quoteAmount(in: USD)
      trades: count
      quotePrice
      average_price: quotePrice(calculate: average)
      maximum_price: quotePrice(calculate: maximum)
      minimum_price: quotePrice(calculate: minimum)
      open_price: minimum(of: block, get: quote_price)
      close_price: maximum(of: block, get: quote_price)
      averagePriceInUSD: expression(get: "quoteAmountInUSD/baseAmount")
    }
  }
}


```

The `timeInterval` field indicates time interval for which the data is aggregated.

## Filtering Outliers in OHLC

In this example, we are getting OHLC prices by aggregating price data at run time. Additionally, we are using `priceAsymmetry` and `tradeAmountUsd` to filter out trades with abnormal prices. Read more about priceAsymmetry [here](https://docs.bitquery.io/v1/docs/building-queries/FAQ#how-to-use-priceasymmetry-to-filter-anomalies-and-outliers-in-trades-)

[Open this query on IDE](https://ide.bitquery.io/Uniswap-OHLC-data-5-minute-candle--WETHUSDT)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { limit: 10, asc: "timeInterval.minute" }
      date: { is: "2023-05-23" }
      exchangeName: { is: "Uniswap" }
      baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      quoteCurrency: { is: "0xdac17f958d2ee523a2206206994597c13d831ec7" }
      priceAsymmetry: { lt: 1 }
      tradeAmountUsd: { gt: 500 }
    ) {
      timeInterval {
        minute(count: 5)
      }
      baseCurrency {
        symbol
        address
      }
      baseAmount
      quoteCurrency {
        symbol
        address
      }
      quoteAmount
      trades: count
      quotePrice
      maximum_price: quotePrice(calculate: maximum)
      minimum_price: quotePrice(calculate: minimum)
      open_price: minimum(of: block, get: quote_price)
      close_price: maximum(of: block, get: quote_price)
    }
  }
}
```
