---
title: Tron DEX Trades API
---

<head>
<meta name="title" content="Tron DEX Trades API"/>
<meta name="description" content="Get information on dex trades, liquidity pools, trade pairs and more on the Tron blockchain. Also, get information on dex trades, liquidity pools, trade pairs and more for tokens or NFTs on the Tron blockchain."/>
<meta name="keywords" content="Tron api, Tron python api, Tron nft api, Tron scan api, Tron matic api, Tron api docs, Tron crypto api, Tron blockchain api,matic network api"/>
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

The `dexTrades` API allows us to retrieve dex trade data from Tron blockchain.

Here's an example query that fetches 10 latest trades on Tron blockchain:

```
{
  tron {
    dexTrades(options: {limit: 10, desc: "block.timestamp.iso8601"}) {
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
      }
    }
  }
}


```

<details>
<summary>Filtering Trades</summary>

- `amountBuy`:
- `amountSell`:
- `any`:
- `buyCurrency`:
- `buyer`:
- `contractType`:
- `date`:
- `exchangeId`:
- `height`:
- `options`:
- `sellCurrency`:
- `seller`:
- `success`:
- `time`:
- `txHash`:

</details>

- `amountBuy`:
- `amountSell`:
- `any`:
- `block`:
- `buyCurrency`:
- `buyer`:
- `contractType`:
- `count`:
- `countBigInt`:
- `date`:
- `energyUsageTotal`:
- `exchangeId`:
- `expression`:
- `fee`:
- `maximum`:
- `minimum`:
- `netUsage`:
- `sellCurrency`:
- `seller`:
- `success`:
- `txHash`:
