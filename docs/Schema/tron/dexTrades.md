---
title: Tron DEX Trades API
---

<head>
<meta name="title" content="Tron DEX Trades API"/>
<meta name="description" content="Get information on dex trades, liquidity pools, trade pairs and more on the Tron blockchain. Also, get information on dex trades, liquidity pools, trade pairs and more for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron api, Tron api docs, Tron crypto api, Tron blockchain api,tron network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron DEX Trades API" />
<meta property="og:description" content="Get information on dex trades, liquidity pools, trade pairs and more on the Tron blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron DEX Trades API" />
<meta property="twitter:description" content="Get information on dex trades, liquidity pools, trade pairs and more on the Tron blockchain." />
</head>

The `dexTrades` field allows us to fetch dex trades from Tron network.

Here is an example that demonstrates how to retrieve DEX trades:

```
{
  tron {
    dexTrades(
      date: {after: "2023-07-26"}
      options: {limit: 10, desc: "block.timestamp.iso8601"}
    ) {
      baseAmount
      baseCurrency {
        address
        name
      }
      block {
        hash
        height
        timestamp {
          iso8601
        }
      }
      buyAmount
      buyCurrency {
        address
        name
      }
      energyFee
      energyUsageTotal
      fee
      internalTransactionsCount
      logsCount
      quoteAmount
      quoteCurrency {
        address
        name
      }
      quotePrice
      sellAmount
      sellCurrency {
        address
        name
      }
      side
      tradeAmount(in: USD)
      transaction {
        hash
      }
    }
  }
}
```

<details>
<summary>Fileting DEX Trades</summary>

DEX trades can be filtered using the following arguments:

-   `any`:
-   `baseCurrency`: filter by base currency of trade
-   `buyAmount`: filter by buy amount of trade
-   `buyCurrency`: filter by buy currency of trade
-   `date`: filter by date of trade
-   `exchangeAddress`: filter by exchange address
-   `exchangeName`: filter by name of exchange
-   `height`: filter by block height
-   `maker`: filter by maker of the trade
-   `makerOrTaker`: filter by address of maker or taker
-   `options`: filter returned data by ordering, limiting, and constraining it
-   `price`: filter by trade price
-   `priceAsymmetry`: filter by price asymmetry of trade
-   `protocol`: filter by protocol name of smart contract
-   `quoteCurrency`: filter by quote currency of smart contract
-   `sellAmount`: filter by sell amount of trade
-   `sellCurrency`: filter by sell currency of trade
-   `smartContractAddress`: filter by address of smart contract being called 
-   `taker`: filter by address of taker
-   `time`: filter by time of the trade
-   `tradeAmountUsd`: filter by trade amount in USD
-   `tradeIndex`: filter by trade index in transaction
-   `txHash`: filter by transaction hash

</details>

The following fields are available for the `dexTrades`:

-   `any`:
-   `baseAmount`: returns base amount of trade
-   `baseCurrency`: returns base currency of trade
-   `block`: returns block where trade is included
-   `buyAmount`: returns buy amount of trade
-   `buyCurrency`: returns buy currency of trade
-   `count`: returns trade count and other metrics of trade
-   `countBigInt`: returns count and other metrics as `BigInt`
-   `date`: returns date of the trade
-   `energyFee`: returns energy fee for trade 
-   `energyUsageTotal`: returns total energy usage for the trade
-   `exchange`: returns exchange where trade happened
-   `expression`: performs arithematic operation on fields in the query and returns value of the operation
-   `fee`: returns fee for the trade
-   `internalTransactionCount`: returns internal transaction count of trade
-   `internalTransactionCountBigInt`: returns internal transaction count as `BigInt`
-   `logsCount`: returns logs count
-   `logsCountBigInt`: returns logs count as `BigInt`
-   `maker`: returns address info of trade maker side 
-   `maximum`: returns maximum for selected measurable field of Tron DEX trades
-   `minimum`: returns minimum for selected measurable field of Tron DEX trades
-   `netFee`: returns net fee for the trade 
-   `netUsage`: returns net usage for the trade
-   `price`: returns price of the trade
-   `protocol`: returns protocol name of the smart contract
-   `quoteAmount`: returns quote amount of trade
-   `quotePrice`: returns quote price of the trade 
-   `sellAmount`: returns sell amount of the trade 
-   `sellCurrency`: returns sell currency of the trade
-   `side`: returns side of the trade
-   `smartContract`: returns details of smart contract being called
-   `taker`: returns taker side of trade 
-   `timeInterval`: returns time interval
-   `tradeAmount`: returns trade amount
-   `tradeIndex`: returns index of trade in the transaction
-   `transaction`: returns details of transaction
