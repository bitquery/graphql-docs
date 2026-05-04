# DEX Trade API

Our Tron DEX Trade API provides comprehensive information about DEX Trades from Tron blockchain.

## Get USDT Trade from Tron blockchain

```
{
  tron(network: tron) {
    dexTrades(
      options: {desc: ["block.height", "tradeIndex"], limit: 10, offset: 0}
      date: {since: "2023-07-10", till: "2023-07-11"}
      baseCurrency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
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
        address {
          address
        }
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      baseAmount
      base_amount_usd: baseAmount(in: USD)
      baseCurrency {
        address
        symbol
      }
      quoteAmount
      quote_amount_usd: quoteAmount(in: USD)
      quoteCurrency {
        address
        symbol
      }
      maker {
        address
      }
      taker {
        address
      }
      transaction {
        hash

      }
    }
  }
}
```

This query retrieves the latest 10 decentralized exchange (DEX) trades on the Tron network that involve the base currency "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" and occurred between July 10, 2023, and July 11, 2023. The query includes trade timestamps, trade index, protocol used, exchange name and address, smart contract address with annotation, base and quote amounts and currencies, amounts in USD, maker and taker addresses, and transaction hashes.

## Get All Trading Pair for USDT on Tron blockchain

```
{
  tron(network: tron) {
    dexTrades(
      baseCurrency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      options: {desc: "count", limit: 10, offset: 0, limitBy: {each: "smartContract.address.address", limit: 1}}
    ) {
      baseCurrency {
        symbol
        name
        address
      }
      quoteCurrency {
        symbol
        name
        address
      }
      smartContract {
        address {
          address
        }
      }
      count
    }
  }
}
```

This query retrieves the latest 10 decentralized exchange (DEX) trades on the Tron network for the base currency "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" and provides the base currency symbol, name, and address, quote currency symbol, name, and address, smart contract address, and the trade count for each unique smart contract address involved in the trades.

## SunSwap DEX Trades on Tron

SunSwap is the leading DEX on Tron by volume. Use the `exchangeName` filter to scope dexTrades to SunSwap-only and pull the most recent trades — this is the highest-traffic DEX query pattern on Tron.

```graphql
{
  tron(network: tron) {
    dexTrades(
      options: {desc: "block.timestamp.time", limit: 25}
      exchangeName: {is: "SunSwap"}
      date: {after: "2026-05-01"}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      exchange {
        fullName
      }
      baseAmount
      base_amount_usd: baseAmount(in: USD)
      baseCurrency {
        symbol
        address
      }
      quoteAmount
      quote_amount_usd: quoteAmount(in: USD)
      quoteCurrency {
        symbol
        address
      }
      tradeAmountIsUsd: tradeAmount(in: USD)
      maker {
        address
      }
      taker {
        address
      }
    }
  }
}
```

Returns the most recent 25 SunSwap trades after January 1, 2024 with USD-denominated trade size, base/quote amounts and symbols, and the maker/taker addresses.

## OHLC Price Candles for a Tron Token Pair

Build OHLC (open / high / low / close) candles for any token pair on Tron. This is the canonical chart-input query for Tron token explorers and trading dashboards.

```graphql
{
  tron(network: tron) {
    dexTrades(
      options: {asc: "timeInterval.minute", limit: 60}
      date: {since: "2024-03-01", till: "2024-03-02"}
      baseCurrency: {is: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}
      quoteCurrency: {is: "TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7"}
    ) {
      timeInterval {
        minute(count: 5)
      }
      baseCurrency {
        symbol
      }
      quoteCurrency {
        symbol
      }
      trades: count
      open_price: minimum(of: block, get: quote_price)
      high_price: quotePrice(calculate: maximum)
      low_price: quotePrice(calculate: minimum)
      close_price: maximum(of: block, get: quote_price)
      base_volume: baseAmount
      quote_volume: quoteAmount
    }
  }
}
```

Produces 5-minute candles for the USDT/WTRX pair on March 1, 2024. Replace the base/quote currency contracts with any TRC20 pair to chart it.

## Top Tron DEX Traders by USD Volume

Rank the most active traders on Tron DEXes by USD trade volume — useful for trader-leaderboard dashboards and copy-trade signal generation.

```graphql
{
  tron(network: tron) {
    dexTrades(
      options: {desc: "tradeAmount", limit: 25}
      date: {since: "2024-01-01", till: "2024-01-31"}
    ) {
      taker {
        address
      }
      trade_volume_usd: tradeAmount(in: USD)
      trade_count: count
      buy_count: count(side: {is: BUY})
      sell_count: count(side: {is: SELL})
    }
  }
}
```

Aggregates by taker address and returns the top 25 wallets by USD trade volume on Tron DEXes for January 2024, with buy/sell breakdowns.
