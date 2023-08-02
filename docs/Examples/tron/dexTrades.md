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

