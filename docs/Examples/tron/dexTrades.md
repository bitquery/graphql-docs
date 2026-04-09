---
title: "Tron DEX Trades API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron DEX trades. Get pairs, base/quote currencies, smart contracts, and trade counts."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# DEX Trade API

Query Tron DEX trades including trading pairs, base/quote amounts in USD, exchange details, and per-pool trade counts.

## Get Recent Tron DEX USDT Trades in a Date Range

Fetch recent DEX trades for a specific base currency on Tron within a date window. Returns exchange info, base/quote amounts in USD, maker/taker addresses, and transaction hashes.

**Variations:** Change `baseCurrency` to query a different token, adjust `date` for another time range, or increase `limit` for more results.

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

## List Tron USDT Quote Pairs and Trade Counts per Liquidity Pool

List all quote-currency pairs and trade counts for a base token, grouped by liquidity pool smart contract.

**Variations:** Change `baseCurrency` to explore pairs for another token, or remove `limitBy` to see all pairs per pool.

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

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [DEX trades examples (folder)](https://docs.bitquery.io/v1/docs/Examples/dexTrades/dex-trading-data-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)

