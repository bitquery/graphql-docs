---
title: BNB DEX Trades API
---

<head>
<meta name="title" content="BNB DEX Trades API"/>
<meta name="description" content="Get information on dex trades, liquidity pools, trade pairs and more on the BNB blockchain. Also, get information on dex trades, liquidity pools, trade pairs and more for tokens or NFTs on the BNB blockchain."/>
<meta name="keywords" content="BNB api, BNB python api, BNB nft api, BNB scan api, BNB matic api, BNB api docs, BNB crypto api, BNB blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="BNB DEX Trades API" />
<meta property="og:description" content="Get information on dex trades, liquidity pools, trade pairs and more on the BNB blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="BNB DEX Trades API" />
<meta property="twitter:description" content="Get information on dex trades, liquidity pools, trade pairs and more on the BNB blockchain." />
</head>

The `dexTrades` API allows us to retrieve dex trade data from BNB blockchain.

Here's an exmaple query that fetches 10 latest trades on BNB blockchain:

```
query {
  ethereum(network: bsc) {
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
- `maximum`: returns maximum of selected [measurable fields](/v1/docs/graphql-reference/enums/ethereum-dex-trades-measureable) of `dexTradees`
- `minimum`: returns minimum of selected [measurable fields](/v1/docs/graphql-reference/enums/ethereum-dex-trades-measureable) of `dexTradees`
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
  