---
title: "DEX Trading Data API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for DEX trades across EVM chains. Get swaps, liquidity, prices, and DEX analytics."
keywords: [DEX API examples, DEX GraphQL queries, Bitquery]
sidebar_position: 1
---

# DEX Trading Data APIs

The DEX Trading Data API returns on-chain swap data from hundreds of decentralized exchanges across [40+ blockchains](https://app-status.bitquery.io/). Query individual trades, aggregate price data, discover trading pairs, and build DEX analytics dashboards.

## Buy/Sell Currency vs Base/Quote Currency

The API offers two currency models:

- **Buy/Sell Currency** — matches only one side of the swap. If you query `sellCurrency: B`, you get only swaps where B was sold.
- **Base/Quote Currency** — matches both sides. If you query `quoteCurrency: B`, you get every swap where B appeared on either side.

**Example:** Given trades A↔B, B↔C, C↔A — filtering by `sellCurrency: B` returns only trade 1, while `quoteCurrency: B` returns trades 1 and 2.

Use **buy/sell** when you need directional data (e.g., who bought token X). Use **base/quote** when you want all trading activity for a token regardless of direction.

## Time vs Date

The `date` filter matches only the calendar date (ignores the time component). Use the `time` filter when you need sub-day precision.

- `date: {since: "2023-07-17T23:59:59"}` — the time part is ignored; returns data from July 17 onward.
- `time: {since: "2023-07-17T23:59:59"}` — returns data from exactly 23:59:59 UTC onward.

All timestamps use **UTC** and the **ISO 8601** format.

## How we get USD price?

USD doesn't exist on-chain. Bitquery sources USD prices for all listed tokens from centralized exchanges via [Cryptorank](https://cryptorank.io/exchanges/dex), stored as hourly candles. These reference prices are multiplied into trade, transfer, and balance data at the time the on-chain event occurred — so you get historically accurate USD values.

## priceAsymmetry

The `priceAsymmetry` filter removes trades where the USD values of the buy side and sell side diverge significantly — a sign of outlier or manipulated prices.

`priceAsymmetry: {lt: 1}` means: only return trades where the USD difference between buy and sell amounts is less than $1. Use this with `tradeAmountUsd: {gt: N}` to produce clean, reliable price feeds.

## How to calculate USD pricing with our APIs?

Use the `expression` field to derive USD prices from any available USD amount in the response. For example, `expression(get: "sell_amount_usd / buyAmount")` calculates the USD price per token from the sell-side USD value. See this [example query](https://ide.bitquery.io/Ethereum-Trades-for-specific-time). The `quotePrice` field is available when using the base/quote currency model and gives the quote price per base token directly.

## Difference b/w protocol and exchange

A **protocol** is the underlying smart contract logic (e.g., Uniswap V2, Uniswap V3). An **exchange** is a specific deployment of that protocol. PancakeSwap is an exchange that uses the Uniswap V2 protocol. Use `protocol` to query all exchanges built on the same codebase, or `exchangeName`/`exchangeAddress` to target a specific DEX.

## How to check if exchange is indexed by Bitquery?

If Bitquery indexes a protocol (e.g., Uniswap V2), every exchange using that protocol is automatically indexed — even if we haven't named it. Query trades for any exchange by passing its factory address to `exchangeAddress`. [Try it here](https://ide.bitquery.io/query/pzizr56shpq6wQrX).

## Get Ethereum DEX Trades for a Full UTC Time Window

Fetch DEX trades on Ethereum within a precise UTC time window using the `time` filter. Returns buy/sell amounts in USD, exchange names, pool addresses, and derived token prices via `expression`.

**Variations:** Switch to `date` for day-level queries. Add `buyCurrency` or `sellCurrency` for a specific token. Filter by `exchangeName` or `protocol` for a specific DEX. Apply [sorting](/docs/query-features/filtering/sorting) by `buyAmount` or `sellAmount` for largest trades.

[Open this query on IDE](https://ide.bitquery.io/Ethereum-Trades-for-specific-time).

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 10, offset: 0 }
      time: { since: "2023-07-17T00:00:00", till: "2023-07-17T23:59:59" }
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
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      buyAmount
      buyCurrency {
        address
        symbol
      }
      buy_amount_usd: buyAmount(in: USD)
      sellAmount
      sellCurrency {
        address
        symbol
      }
      sell_amount_usd: sellAmount(in: USD)
      transaction {
        hash
      }
      PriceInUSD1: expression(get: "buy_amount_usd / buyAmount")
      PriceInUSD2: expression(get: "sell_amount_usd / buyAmount")
    }
  }
}
```

## Get Uniswap Ethereum DEX Trades by Factory Contract Addresses

Get trades from a specific DEX using `exchangeAddress` (recommended) or `exchangeName`. This example queries all three Uniswap versions by passing V1, V2, and V3 factory addresses with `in: [...]`.

**Variations:** Replace factory addresses for SushiSwap, PancakeSwap, or any DEX. Use `exchangeName` alone for a quick lookup (less precise). Add `protocol` to also filter by protocol version. Switch `network` for other EVM chains.

[Open this query in IDE](https://ide.bitquery.io/Trades-for-Uniswap)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 10, offset: 0 }
      date: { since: "2023-07-10", till: "2023-07-11" }
      exchangeName: { is: "Uniswap" }
      exchangeAddress: {
        in: [
          "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"
          "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95"
          "0x1f98431c8ad98523631ae4a59f267346ea31f984"
        ]
      }
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
      buyAmount
      buy_amount_usd: buyAmount(in: USD)
      buyCurrency {
        address
        symbol
      }
      sellAmount
      sell_amount_usd: sellAmount(in: USD)
      sellCurrency {
        address
        symbol
      }
      transaction {
        hash
      }
    }
  }
}
```

## Get Ethereum DEX Trades for Uniswap v3 Protocol Across Exchanges

Query all trades on the Uniswap V3 protocol regardless of which exchange deployed it. The `protocol` filter captures every Uniswap V3 fork — useful for measuring total protocol-level volume and activity.

**Variations:** Change to `"Uniswap v2"`, `"Sushiswap"`, or any indexed protocol. Combine with `exchangeAddress` to narrow to a specific deployment. Add `date` or `baseCurrency` for further filtering.

[Open this in IDE](https://ide.bitquery.io/Trades-for-protocol-uniswap-v3)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 10, offset: 0 }
      date: { since: "2023-07-10", till: "2023-07-11" }
      protocol: { is: "Uniswap v3" }
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
      buyAmount
      buy_amount_usd: buyAmount(in: USD)
      buyCurrency {
        address
        symbol
      }
      sellAmount
      sell_amount_usd: sellAmount(in: USD)
      sellCurrency {
        address
        symbol
      }
      transaction {
        hash
      }
    }
  }
}
```

## Get Ethereum DEX Token Prices Against WETH in One Query
Get the latest DEX price for up to 1,000 tokens against WETH in a single query using `limitBy: {each: "buyCurrency.address", limit: 1}`. Returns the most recent trade per token with derived USD prices — ideal for building a token price dashboard.

**Variations:** Change `sellCurrency` to any base token (e.g., USDT, USDC). Adjust `limitBy` to get more price points per token. Add `exchangeName` to price from a specific DEX.

```
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {desc: ["block.height", "tradeIndex"], limit: 1000, offset: 0, limitBy: {each: "buyCurrency.address", limit: 1}}
      date: {after: "2024-03-01"}
      sellCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
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
      }
      buyAmount
      buyCurrency {
        symbol
        address
        name
      }
      buy_amount_usd: buyAmount(in: USD)
      sellAmount
      sellCurrency {
        symbol
        address
        name
      }
      sell_amount_usd: sellAmount(in: USD)
      priceInUSD: expression(get: "sell_amount_usd / buyAmount")
    }
  }
}
```

## Get Ethereum DEX Trades Where the Transaction Sender Is a Wallet

Find all DEX swaps initiated by a specific wallet using the `txSender` filter. Returns both base/quote amounts, maker/taker addresses, and USD values — useful for building a wallet's complete DEX trading history.

**Variations:** Use `makerOrTaker` instead to match on the actual swap participants (not just the transaction sender). Add `buyCurrency` or `baseCurrency` to filter by token. Apply [aggregations](/docs/query-features/aggregation/) like `sum` on amounts for total traded volume.

[Open this query on IDE](https://ide.bitquery.io/Trades-for-a-given-wallet)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 10, offset: 0 }
      date: { since: "2023-07-10", till: "2023-07-19" }
      txSender: { is: "0x5D53F622b9F69e03ea0A960EDc65B6457A1aB235" }
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
        txFrom {
          address
        }
      }
    }
  }
}
```

## Get Ethereum DEX Trades for the SHIB Token as Base Currency

Get all DEX trades for a specific token using the `baseCurrency` filter. Returns trades from every pair and DEX where [SHIB](https://explorer.bitquery.io/ethereum/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce) is traded, with maker/taker addresses and USD amounts.

**Variations:** Use `buyCurrency` instead for directional (buy-only) trades. Add `quoteCurrency` to target a specific pair. Apply [sorting](/docs/query-features/filtering/sorting) by `baseAmount` for largest trades.

[Open this query on IDE](https://ide.bitquery.io/Trades-for-SHIB-token)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 10, offset: 0 }
      date: { since: "2023-07-10", till: "2023-07-11" }
      baseCurrency: { is: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce" }
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
        txFrom {
          address
        }
      }
    }
  }
}
```

## List Top Ethereum DEX Quote Pairs for WETH by Trade Count

Discover all DEX trading pairs for a token sorted by trade count, with one result per pool contract using `limitBy: {each: "smartContract.address.address", limit: 1}`. Shows the most active pairs first — useful for finding where a token has the deepest liquidity.

**Variations:** Remove `limitBy` to see all pools. Change `baseCurrency` to any token address. Add `date` for a specific period. Use [count aggregation](/docs/query-features/aggregation/count) for total trades per pair.

[Open this on IDE](https://ide.bitquery.io/Pairs-for-give-token-on-ethereum)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
      options: {
        desc: "count"
        limit: 10
        offset: 0
        limitBy: { each: "smartContract.address.address", limit: 1 }
      }
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

## Get Ethereum DEX Trades for WOJAK Versus WETH Currency Pair

Get trades for a specific token pair by combining `buyCurrency` and `quoteCurrency` filters. This example fetches [WOJAK](https://explorer.bitquery.io/ethereum/token/0x5026f006b85729a8b14553fae6af249ad16c9aab)/[WETH](https://explorer.bitquery.io/ethereum/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) trades with derived USD prices via `expression`.

**Variations:** Use `baseCurrency`/`quoteCurrency` for bidirectional matching. Add `exchangeName` or `smartContractAddress` to target a specific pool. Apply [OHLC aggregation](/docs/Examples/dexTrades/ohlc) for candlestick data.

[Open this query on IDE](https://ide.bitquery.io/Trades-for-a-trading-pair-on-Ethereum)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 10, offset: 0 }
      date: { since: "2023-07-10", till: "2023-07-19" }
      buyCurrency: { is: "0x5026f006b85729a8b14553fae6af249ad16c9aab" }
      quoteCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
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
      quotePrice
      priceInUSD: expression(get: "quote_amount_usd/baseAmount")
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
        txFrom {
          address
        }
      }
    }
  }
}
```

## Get Ethereum DEX Trades for a Liquidity Pool Contract Address

Query trades from a specific liquidity pool by passing the pool contract address to `smartContractAddress`. Use the **buy/sell** model to avoid duplicate results — the base/quote model returns each swap twice (once per side).

**Variations:** Add `date` or `time` for a specific period. Filter by `buyCurrency` to see only one direction. Combine with the pool balance query below to correlate trade activity with liquidity depth.

[Open this query in IDE](https://ide.bitquery.io/Trades-for-a-pair-token-on-ethereum)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 10, offset: 0 }
      date: { since: "2023-07-10", till: "2023-07-19" }
      smartContractAddress: { is: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852" }
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
      buyAmount
      buy_amount_usd: buyAmount(in: USD)
      buyCurrency {
        address
        symbol
      }
      sellAmount
      sell_amount_usd: sellAmount(in: USD)
      sellCurrency {
        address
        symbol
      }
      transaction {
        hash
        txFrom {
          address
        }
      }
    }
  }
}
```

## Derive Ethereum Token USD Price From Latest ERUTA Versus WETH Trade

Derive the USD price for any token — even those without stablecoin pairs — by using the `expression` field on a trade against WETH. Since Bitquery has USD pricing for WETH, dividing `sell_amount_usd` by `buyAmount` gives the token's USD price. This is the standard approach to solve the [DEX price index problem](https://bitquery.io/blog/dex-price-index).

**Variations:** Change `sellCurrency` to WBNB, WAVAX, or any token with known USD price. Use `baseCurrency`/`quoteCurrency` with `quotePrice` for the direct quote price. Add [time-series grouping](/docs/query-features/aggregation/) for price history.

[Open this query on IDE](https://ide.bitquery.io/Latest-price-of-ERUTA)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 1, offset: 0 }
      buyCurrency: { is: "0x409b46013c78c63cf376f17466aef87895617451" }
      sellCurrency: { is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" }
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
      }
      buyAmount
      buyCurrency {
        symbol
      }
      buy_amount_usd: buyAmount(in: USD)
      sellAmount
      sellCurrency {
        symbol
      }
      sell_amount_usd: sellAmount(in: USD)
      priceInUSD: expression(get: "sell_amount_usd / buyAmount")
    }
  }
}
```

## List New BSC PancakeSwap PairCreated Events From the Factory Contract

Track new liquidity pool deployments on PancakeSwap by monitoring `PairCreated` events from the [factory contract](https://explorer.bitquery.io/bsc/smart_contract/0xbcfccbde45ce874adcb698cc183debcf17952812/events). Returns both token addresses, token names, and the pair contract address — essential for new token discovery and listing alerts.

**Variations:** Replace the factory address for any Uniswap V2 fork on any EVM chain. Add `argument: {is: "token0"}` with a specific value to find pairs for a given token. Use [limit/offset](/docs/query-features/filtering/options) for pagination.

[Open this query on IDE](https://ide.bitquery.io/Latest-Pair-Created-on-Pancake-Swap_1_1)

```graphql
{
  ethereum(network: bsc) {
    arguments(
      options: { desc: ["block.height"], limit: 10 }
      smartContractAddress: {
        in: ["0xbcfccbde45ce874adcb698cc183debcf17952812"]
      }
      smartContractEvent: { is: "PairCreated" }
      date: { after: "2023-07-17" }
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      pair: any(of: argument_value, argument: { is: "pair" })
      token0: any(of: argument_value, argument: { is: "token0" })
      token0Name: any(
        of: argument_value
        argument: { is: "token0" }
        as: token_name
      )
      token1: any(of: argument_value, argument: { is: "token1" })
      token1Name: any(
        of: argument_value
        argument: { is: "token1" }
        as: token_name
      )
    }
  }
}
```

## Get BSC DEX Trades Using an Unlisted Exchange Factory Address

Query trades from any DEX — even if it isn't named in Bitquery — by using its factory address in the `exchangeAddress` filter. Bitquery indexes all protocols it supports, so every fork is automatically available through its factory address.

**Variations:** Replace the address with any DEX factory contract. Add `buyCurrency` or `baseCurrency` for a specific token. Use `protocol` to discover which protocol the exchange uses.

[Open this query on IDE](https://ide.bitquery.io/GIBX-trades)

```graphql
{
  ethereum(network: bsc) {
    dexTrades(
      options: { desc: ["block.height", "tradeIndex"], limit: 10, offset: 0 }
      date: { since: "2023-07-11", till: "2023-07-17" }
      exchangeAddress: { is: "0x97bCD9BB482144291D77ee53bFa99317A82066E8" }
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
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      exchange {
        address {
          address
        }
      }
      buyAmount
      buy_amount_usd: buyAmount(in: USD)
      buyCurrency {
        address
        symbol
      }
      sellAmount
      sell_amount_usd: sellAmount(in: USD)
      sellCurrency {
        address
        symbol
      }
      transaction {
        hash
      }
    }
  }
}
```

## Read Ethereum USDC and WETH Balances Inside a Uniswap Pool Contract

Check the current liquidity depth of a DEX pool by querying the token balances held in the pool contract. This example reads the WETH and USDC balances inside the Uniswap V3 WETH/USDC pool ([0x88e6...5640](https://explorer.bitquery.io/ethereum/smart_contract/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640)). Use [this query](https://ide.bitquery.io/tokens-in-pair-contract) to discover which tokens make up any pool.

**Variations:** Replace the pool address and currency addresses for any pool. Add `value(in: USD)` for USD-equivalent balances. Remove the `currency` filter to see all tokens in the contract.

[Open this query in IDE](https://ide.bitquery.io/liquidity-of-token-pair-on-ethereum-using-balance-api)

```graphql
{
  ethereum(network: ethereum) {
    address(address: { is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" }) {
      balances(
        currency: {
          in: [
            "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
          ]
        }
      ) {
        value
        currency {
          address
          symbol
          tokenType
        }
      }
    }
  }
}
```

## Track Ethereum Mint and Burn Events for USDC WETH Pool Liquidity

Track liquidity additions and removals for a DEX pool by monitoring `Mint` and `Burn` events. This query returns token amounts, owner addresses, and tick ranges for the USDC/WETH Uniswap V3 pool ([0x88e6...5640](https://explorer.bitquery.io/ethereum/smart_contract/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640/events)) — essential for LP tracking and TVL analytics.

**Variations:** Replace the pool address for any Uniswap V3 pool. Add `date` or `time` for a specific period. Use [count aggregation](/docs/query-features/aggregation/count) to compare mint vs burn frequency.

[Open this query on IDE](https://ide.bitquery.io/Mint-and-burn-to-track-liquidity)

```graphql
{
  ethereum {
    mint: arguments(
      options: { limit: 10, desc: "block.height" }
      smartContractAddress: { is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" }
      smartContractEvent: { is: "Mint" }
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      amount0: any(of: argument_value, argument: { is: "amount0" })
      owner: any(of: argument_value, argument: { is: "owner" })
      tickUpper: any(of: argument_value, argument: { is: "tickUpper" })
      sender: any(of: argument_value, argument: { is: "sender" })
      amount1: any(of: argument_value, argument: { is: "amount1" })
      tickLower: any(of: argument_value, argument: { is: "tickLower" })
      amount: any(of: argument_value, argument: { is: "amount" })
    }
    burn: arguments(
      options: { limit: 10, desc: "block.height" }
      smartContractAddress: { is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" }
      smartContractEvent: { is: "Burn" }
    ) {
      block {
        height
      }
      transaction {
        hash
      }
      amount0: any(of: argument_value, argument: { is: "amount0" })
      owner: any(of: argument_value, argument: { is: "owner" })
      tickUpper: any(of: argument_value, argument: { is: "tickUpper" })
      amount1: any(of: argument_value, argument: { is: "amount1" })
      tickLower: any(of: argument_value, argument: { is: "tickLower" })
      amount: any(of: argument_value, argument: { is: "amount" })
    }
  }
}
```

## Resolve Buy and Sell Currencies for an Ethereum Pool Smart Contract

Identify which tokens make up a DEX pool by fetching a single trade from the pool contract. Returns the buy and sell currency addresses and symbols — the standard method to resolve pool composition when you only have the pool address.

**Variations:** Replace `smartContractAddress` with any pool contract. Use this as a lookup step before running balance or trade queries for the pool.

[Open this query in IDE](https://ide.bitquery.io/tokens-in-pair-contract)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: { limit: 1 }
      date: { after: "2023-07-01" }
      smartContractAddress: { is: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" }
    ) {
      buyCurrency {
        address
        symbol
      }
      sellCurrency {
        address
        symbol
      }
      smartContract {
        address {
          address
        }
      }
    }
  }
}
```

## Count Ethereum DEX Trades Above a USD Threshold for a Pool

Count unique transactions in a DEX pool that exceeded a USD threshold. Uses `count(uniq: txs)` with `tradeAmountUsd: {gt: 500}` to filter out small trades — useful for measuring significant trading activity. [Run query](https://ide.bitquery.io/Ethereum-Get-Count-of-Trades-Above-Certain-USD-Value-for-a-Pool).

**Variations:** Adjust `tradeAmountUsd` threshold for different definitions of "significant." Remove `uniq: txs` for total trade count (including multiple swaps per tx). Add `date` for a specific period.

````
{
  ethereum {
    dexTrades(
      smartContractAddress: {is: "0xcc1d85cd93ea833772913445282bd56354a90467"}
      tradeAmountUsd: {gt: 500}
      time: {since: "2023-08-22T04:54:35Z"}
    ) {
      count(uniq: txs)
    }
  }
}```
````

## Get Rolling Twenty Four Hour Ethereum Pool Trade Volume

Get rolling 24-hour trading volume in USD for a DEX pool using `tradeAmount(in: USD)` grouped by `timeInterval { hour(count: 24) }`. This query returns the last 30 data points — ideal for volume charts and liquidity monitoring. [Run query](https://ide.bitquery.io/Ethereum-24H-Trading-Value-of-a-Pool-for-last-30-days).

**Variations:** Change `hour(count: 24)` to `hour(count: 1)` for hourly granularity or `day` for daily totals. Adjust `limit` for more or fewer data points. Add `buyCurrency` to track volume for one side of the pair.

```
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {limit: 30, desc: "timeInterval.hour"}
      date: {since: "2023-08-21"}
      smartContractAddress: {is: "0xcc1d85cd93ea833772913445282bd56354a90467"}
    ) {
      count
      tradeAmount(in: USD)
      timeInterval {
        hour(count: 24)
      }
    }
  }
}
```

## Count Unique Ethereum DEX Buy and Sell Tokens on One Date

Count the number of unique tokens traded across all Ethereum DEXes on a specific date using `count(uniq: buy_currency)` and `count(uniq: sell_currency)`. Useful for measuring token diversity and DEX ecosystem breadth.

**Variations:** Change `date` to any day or use `date: {since: ..., till: ...}` for a range. Add `exchangeName` to count tokens on a specific DEX. Use [aliases](/docs/query-features/aliases) to query multiple dates in one request.

```
query MyQuery {
  ethereum(network: ethereum) {
    dexTrades(date: {is: "2024-01-01"}) {
      Unique_tokens_bought: count(uniq: buy_currency)
      Unique_tokend_sold: count(uniq: sell_currency)
    }
  }
}

```

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [DEX OHLC examples](https://docs.bitquery.io/v1/docs/Examples/dexTrades/ohlc)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
