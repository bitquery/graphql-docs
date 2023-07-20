# DEX Trades

`dexTrades` type allows you to retrives dex trade data from Ethereum blockchain.

Here's an exmaple query that retrieves 10 latest trades on Ethereum blockchain:

```
query {
  ethereum {
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
- `baseCurrency`:
- `blockHash`:
- `buyAmount`:
- `buyCurrency`:
- `date`:
- `exchangeAddress`:
- `exchangeName`:
- `height`:
- `maker`:
- `makerOrTaker`:
- `makerSmartContractType`:
- `options`:
- `price`:
- `priceAsymmetry`:
- `protocol`:
- `quoteCurrency`:
- `sellAmount`:
- `sellCurrency`:
- `smartContractAddress`:
- `taker`:
- `takerSmartContractType`:
- `time`:
- `tradeAmountUsd`:
- `tradeIndex`:
- `txHash`:
- `txSender`:
- `txTo`:

</details>

- `any`:
- `baseAmount`:
- `baseCurrency`:
- `block`:
- `buyAmount`:
- `buyCurrency`:
- `count`:
- `countBigInt`:
- `date`:
- `exchange`:
- `expression`:
- `gas`:
- `gasPrice`:
- `gasValue`:
- `maker`:
- `maximum`:
- `minimum`:
- `price`:
- `protocol`:
- `quoteAmount`:
- `quoteCurrency`:
- `quotePrice`:
- `sellAmount`:
- `sellCurrency`:
- `side`:
- `smartContract`:
- `taker`:
- `timeInterval`:
- `tradeAmount`:
- `tradeIndex`:
- `transaction`:
  