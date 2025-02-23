---
title:  Polygon DEX Trade API
---


<head>
<meta name="title" content="Polygon DEX Trade API"/>
<meta name="description" content= "Get Real-time and historical trades, price, OHLC details on DEXs on the Polygon blockchain, such as QuickSwap, Sushiswap, Uniswap, etc."/>
<meta name="keywords" content="polygon api, Quickswap api, polygon trades, polygon token price, polygon compliance, polygon money tracking, polygon balance, polygon balance history, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon DEX Trade API" />
<meta property="og:description" content="Get Real-time and historical trades on DEXs on the Polygon blockchain, such as QuickSwap, Sushiswap, Uniswap, etc." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon DEX Trade API" />
<meta property="twitter:description" content="Get Real-time and historical trades on DEXs on the Polygon blockchain, such as QuickSwap, Sushiswap, Uniswap, etc." />
</head>



## DEX Trades

The `dexTrades` field allows us to retrieve dex trade data from Matic blockchain.

Here's an exmaple query that fetches 10 latest trades on Matic blockchain:

```
query {
  ethereum(network: matic) {
    dexTrades(date: {after: "2023-07-17T00:00:00Z"}, options: {limit: 10}) {
      baseCurrency {
        address
        name
        symbol
      }
      baseAmount(in: USD)
      buyAmount
      block {
        timestamp {
          iso8601
        }
      }
      buyCurrency {
        address
        name
        symbol
      }
      exchange {
        fullName
        fullNameWithId
        address {
          address
          annotation
        }
      }
      quoteCurrency {
        address
        name
        symbol
      }
      quoteAmount(in: USD)
      sellAmount
      quotePrice
      sellCurrency {
        address
        name
        symbol
      }
      transaction {
        hash
        txFrom {
          address
          annotation
        }
      }
    }
  }
}
```

Read **[this](/docs/Examples/dexTrades/dex-trading-data-api.md)** to learn more about DEXTrade APIs.

<details>
<summary>Filtering DEX Trades</summary>

DEX Trades can be filtered using following arguments:

- `any`:
- `baseCurrency`: Filter by the base currency of the trade.
- `blockHash`: Filter by the block hash.
- `buyAmount`: Filter by the buy amount of the trade.
- `buyCurrency`: Filter by the buy currency of the trade.
- `date`: Filter by the date of the trade.
- `exchangeAddress`: Filter by the exchange on which the trade happened.
- `exchangeName`: Filter by the name of the exchange.
- `height`: Filter by the block height of the trade.
- `maker`: Filter by the maker's address.
- `makerOrTaker`: Filter by the maker or taker's address.
- `makerSmartContractType`: Filter by the type of maker smart contract.
- `options`: Filter returned data by ordering, limiting, and constraining it.
- `price`:  Filter by the price.
- `priceAsymmetry`: Filter by the price asymmetry in the trade.
- `protocol`: Filter by the protocol on which the trade happened.
- `quoteCurrency`: Filter by the quote currency of the trade.
- `sellAmount`: Filter by the sell amount of the trade.
- `sellCurrency`: Filter by the sell currency in the trade.
- `smartContractAddress`: Filter by the address of the exchange smart contract.
- `taker`: Filter by the address of the taker.
- `takerSmartContractType`: Filter by the type of taker smart contract.
- `time`:Filter by the time of the trade.
- `tradeAmountUsd`: Filter by the trade amount in USD.
- `tradeIndex`: FFilter by the index of the trade in the transaction.
- `txHash`: Filter by the hash of the transaction in which the trade happened.
- `txSender`: Filter by the sender's address of the transaction.
- `txTo`: Filter by the address to which the transaction was sent.

</details>

The following are available fields for the `dexTrades`:

- `any`:
- `baseAmount`:  returns the base amount for the trade.
- `baseCurrency`: returns the base currency for the trade.
- `block`:  returns information about the block in which the trade was executed.
- `buyAmount`:  returns the buy amount for the trade.
- `buyCurrency`: returns the buy currency for the trade.
- `count`: returns the aggregate count of the trades.
- `countBigInt`:  returns the aggregate count of trades in `BigInt` format.
- `date`: returns the date on which the trade was executed.
- `exchange`: returns information about the exchange on which the trade was executed.
- `expression`: performs arithmetic operations and returns the value of the operation.
- `gas`: returns the gas consumed to execute the trade.
- `gasPrice`: returns the gas price for the trade.
- `gasValue`: returns the gas value for the trade.
- `maker`: returns the maker's address of the trade.
- `maximum`: returns maximum of selected measurable fields of `dexTradees`
- `minimum`: returns minimum of selected measurable fields of `dexTradees`
- `price`: returns the price at which the trade was executed.
- `protocol`:  returns the name of the protocol which executed that trade.
- `quoteAmount`: returns the quote amount for the trade.
- `quoteCurrency`: returns the quote currency for the trade.
- `quotePrice`: returns the quote price for the trade.
- `sellAmount`: returns the sell amount for the trade.
- `sellCurrency`: returns the sell currency for the trade.
- `side`: returns the side of the trade, like buy or sell.
- `smartContract`: returns information about the exchange smart contract on which the trade happened.
- `taker`: returns the address of the taker side of the trade.
- `timeInterval`: returns information about the time interval.
- `tradeAmount`: returns the trade amount in the base currency.
- `tradeIndex`: returns the index of the trade in the transaction.
- `transaction`:  returns information about the transaction in which the trade was executed.
  


:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::