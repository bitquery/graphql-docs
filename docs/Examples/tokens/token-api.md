---
title: "Token API Examples"
description: "Example GraphQL queries for token prices, holders, supply, and DEX trades. Works across supported EVM chains."
keywords: [token API examples, GraphQL queries, Bitquery]
---

# Token API
Bitquery's Token API gives you price, supply, balance, transfer history, DEX trading data, and approval events for any token across all supported blockchains. The examples below use USDT on Ethereum, but every query works for any token on any chain — just swap the contract address and network.


## Get Latest Ethereum USDT per WETH DEX Price in USD

Get the real-time DEX price of any token pair by fetching the most recent trade. The `expression` field derives the USD price per token from on-chain amounts using Bitquery's hourly USD reference prices (sourced from centralized exchanges via Cryptorank).

**Variations:** Change `baseCurrency` and `quoteCurrency` to any token contract address. Switch `network` to `bsc`, `matic`, or any supported EVM chain. Use [aggregations](/docs/query-features/aggregation/) like `average` or `median` on `quotePrice` for smoothed pricing over a period.


[Open this query on IDE](https://ide.bitquery.io/Token-Price-in-USDT-Template_1_1_1)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      options: {desc: ["block.height"], limit: 1}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      baseCurrency {
        symbol
      }
      quoteCurrency {
        symbol
      }
      quotePrice
      quoteAmountInUSD: quoteAmount(in: USD)
      baseAmount
      quotePriceInUSD: expression(get: "quoteAmountInUSD / baseAmount")
      exchange {
        fullNameWithId
        address {
          address
          annotation
        }
      }
    }
  }
}

```

## Get Ethereum USDT Five-Minute OHLC Candles Against WETH

Build candlestick chart data for any DEX token pair. Returns 5-minute OHLC candles using `calculate: maximum` and `calculate: minimum` on `quotePrice`, with open/close derived from block ordering. The `priceAsymmetry` and `tradeAmountUsd` filters remove outlier and dust trades.

**Variations:** Change `minute(count: 5)` to `minute(count: 15)`, `hour`, or `day` for different candle intervals. Adjust `tradeAmountUsd: {gt: N}` to set a minimum trade size. See [sorting](/docs/query-features/filtering/sorting) for ordering options.


[Open this query on IDE](https://ide.bitquery.io/USDC-OHLC-Data-template)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      time: {since: "2023-06-01T00:00:00Z", till: "2023-06-20T00:00:00Z"}
      priceAsymmetry: {lt: 1}
      tradeAmountUsd: {gt: 100}
      options: {limit: 10, desc: "timeInterval.minute"}
    ) {
      timeInterval {
        minute(count: 5)
      }
      baseCurrency {
        name
      }
      quoteCurrency {
        name
      }
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: block, get: quote_price)
      close: maximum(of: block, get: quote_price)
    }
  }
}

```


## Aggregate Ethereum USDT Transfer Medians Counts and Unique Parties

Compute aggregate statistics for any token's transfer activity — median and average transfer size, total volume, transfer count, unique senders, unique receivers, and date range. This query summarizes all-time USDT transfer data on Ethereum in a single call.

**Variations:** Add a `date` filter for a specific period. Swap `median` for `sum`, `maximum`, or `minimum` via the [aggregation API](/docs/query-features/aggregation/). Use `currency: {in: [...]}` to compare multiple tokens side by side.

[Open this query on IDE](https://ide.bitquery.io/USDT-Token-API_1)

```graphql
{
  ethereum(network: ethereum) {
    transfers(
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      amount: {gt: 0}
    ) {
      currency {
        symbol
        address
        decimals
        name
        tokenType
      }
      median: amount(calculate: median)
      average: amount(calculate: average)
      amount
      count
      days: count(uniq: dates)
      sender_count: count(uniq: senders)
      receiver_count: count(uniq: receivers)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}
```

## List Ethereum Transactions Sent to USDT Token Contract
List all transactions sent directly to a token's smart contract address. Useful for monitoring contract interactions, governance votes, or direct token deposits. Returns gas costs, block height, and sender details.

**Variations:** Change `txTo` to any contract address. Filter by `txSender` to see transactions from a specific caller. Add `success: true` to exclude reverted transactions. Apply [limit/offset](/docs/query-features/filtering/options) for pagination.

[Open this query on IDE](https://ide.bitquery.io/query/RNqa8PqNZ4CfQR9U)

```graphql
{
  ethereum {
    transactions(
      txTo: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      options: {limit: 10, desc: "block.height"}
      date: {after: "2023-07-01"}
    ) {
      amount
      block {
        height
        timestamp {
          time(format: "%y-%m-%d")
        }
      }
      feePayer
      gas
      gasCurrency {
        symbol
      }
      gasPrice
      gasValue
      hash
      to {
        address
      }
      sender {
        address
      }
    }
  }
}
```

## Trace Ethereum USDT Inbound and Outbound Coinpath by Address

Trace the source and destination of token funds using Coinpath. This query runs both `inbound` (where funds came from) and `outbound` (where funds went) traces for USDT on a single address — core to AML investigations, compliance checks, and fund-tracking dashboards.

**Variations:** Increase `depth: {lteq: N}` to trace further hops. Change `currency` to track any ERC-20 or native token. Adjust `limitBy: {each: "depth", limit: N}` to control results per hop. See [Coinpath Explained](/docs/building-queries/Coinpath-Explained/Overview) for a full guide.

[Open this query on IDE](https://ide.bitquery.io/USDT-Transaction-Tracking-Template_1_1)

```graphql
{
  ethereum(network: ethereum) {
    inbound: coinpath(
      initialAddress: {is: "0x477573f212a7bdd5f7c12889bd1ad0aa44fb82aa"}
      currency: {is: "0xdAC17F958D2ee523a2206206994597C13D831ec7"}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2020-10-08", till: "2020-10-09"}
    ) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      amount
      currency {
        symbol
      }
      depth
      count
      block {
        timestamp {
          time
        }
      }
    }
    outbound: coinpath(
      initialAddress: {is: "0x477573f212a7bdd5f7c12889bd1ad0aa44fb82aa"}
      currency: {is: "0xdAC17F958D2ee523a2206206994597C13D831ec7"}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: "2020-10-08", till: "2020-10-09"}
    ) {
      sender {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      receiver {
        address
        annotation
        smartContract {
          contractType
          currency {
            symbol
            name
          }
        }
      }
      amount
      currency {
        symbol
      }
      depth
      count
      block {
        timestamp {
          time
        }
      }
    }
  }
}
```

## List Recent Ethereum USDT Transfers with Receiver and Success Flag
Fetch the most recent transfers for a specific token with receiver address, `success` status flag, and the originating transaction sender (`txFrom`). Works for both real-time monitoring and historical lookups.

**Variations:** Add `sender` or `receiver` filters to track a specific wallet. Use `success: false` to find failed transfers. Apply [sorting](/docs/query-features/filtering/sorting) by `block.timestamp.time` for chronological order.

[Open this query on IDE](https://ide.bitquery.io/USDT-Transaction-History-API-Template_1)


```graphql
{
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "block.timestamp.time", limit: 10}
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      date: {after: "2023-07-01"}
    ) {
      currency {
        name
        symbol
      }
      block {
        timestamp {
          time
        }
      }
      transaction {
        hash
        txFrom {
          address
        }
      }
      receiver {
        address
        annotation
      }
      success
    }
  }
}
```

## Get Ethereum USDT Circulating Supply with Mint and Burn Totals
Calculate a token's circulating supply by combining contract metadata with mint and burn totals. Mints are transfers from the zero address (`0x000...000`), burns are transfers to it. The query also returns contract attributes, decimals, and token type.

**Variations:** Replace the token address with any ERC-20 contract. Use `amount(calculate: sum)` with a `date` filter to track supply changes over time. Combine with the balance history query below for a full supply audit.

[Open this query on IDE](https://ide.bitquery.io/Total-Circulating-Supply-of-a-USDT-Template)

```graphql
{
  initialSupply: ethereum(network: ethereum) {
    address(address: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}) {
      annotation
      address
      smartContract {
        attributes {
          address {
            address
          }
          name
          type
          value
        }
        contractType
        currency {
          symbol
          name
          decimals
          tokenType
        }
      }
    }
    burn: transfers(
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      receiver: {is: "0x0000000000000000000000000000000000000000"}
    ) {
      amount(calculate: sum)
    }
    mint: transfers(
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      sender: {is: "0x0000000000000000000000000000000000000000"}
    ) {
      amount(calculate: sum)
    }
  }
}
```

## Get Latest Ethereum DEX USDT Trade Price in USD
Get the USD price of any token from its latest DEX trade using the buy/sell currency model. The `expression` field calculates price per token by dividing the USD buy amount by the raw buy quantity. Returns the exchange name, protocol, and trade index.

**Variations:** Switch `buyCurrency` to `baseCurrency` for the base/quote model. Change the token address for any ERC-20. Add `exchange: {is: "Uniswap"}` to price from a specific DEX. See [expressions](/docs/query-features/expressions/overview) for custom calculations.


[Open this query on IDE](https://ide.bitquery.io/Get-USDT-Price-in-USD-Template)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {desc: ["block.height", "tradeIndex"], limit: 1, offset: 0}
      buyCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
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
      priceInUSD: expression(get: "buy_amount_usd / buyAmount")
    }
  }
}
```


## List Ethereum USDT DEX Pairs Quote Tokens and Pool Addresses
Discover all DEX trading pairs for a token with pool addresses, exchange names, and protocol types. Results are sorted by trade count to show the most active pairs first — useful for identifying liquidity and the best venues for a token.

**Variations:** Change `baseCurrency` to any token address. Adjust the `date` range for different activity windows. Use [count aggregation](/docs/query-features/aggregation/count) with `desc: "count"` to rank pairs by volume.

[Open this query on IDE](https://ide.bitquery.io/query/xA8yam1LgfrPxNnP)


```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      date: {since: "2023-06-29", till: "2023-07-06T23:59:59"}
      options: {desc: "count", limit: 10, offset: 0}
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
      poolAddress: smartContract {
        address {
          address
        }
      }
      exchange {
        address {
          address
        }
        name
        fullNameWithId
        fullName
      }
      protocol
      count
    }
  }
}
```

## Get Ethereum Wallet USDT Balance for One Address

Look up the current token balance for any wallet address. This query returns the USDT balance held by a specific Ethereum address using the `balances` field with a currency filter.

**Variations:** Remove the `currency` filter to get all token balances for the wallet. Use `currency: {in: [...]}` for multiple tokens. Switch `network` to query balances on BSC, Polygon, or other EVM chains.

[Open this query on IDE](https://ide.bitquery.io/USDT-Balance-API-Template)

```graphql
{
  ethereum(network: ethereum) {
    address(address: {is: "0x28c6c06298d514db089934071355e5743bf21d60"}) {
      balances(currency: {is: "0xdAC17F958D2ee523a2206206994597C13D831ec7"}) {
        value
      }
    }
  }
}

```

## Get Ethereum Smart Contract Call Trace for One Transaction Hash
Retrieve the full smart contract call trace for a transaction — every internal call, method invocation, and value transfer sorted by `callDepth`. Useful for debugging failed transactions or understanding complex DeFi interactions.

:::note
For richer call trace data including return values and decoded logs, see the [V2 Smart Contract Calls API](https://docs.bitquery.io/docs/examples/calls/smartcontract/).
:::

[Open this query](https://ide.bitquery.io/Transaction-Call-Trace_1_1)


```graphql
{
  ethereum(network: ethereum) {
    smartContractCalls(
      options: {limit: 10, offset: 0, asc: "callDepth"}
      txHash: {is: "0xfd2ce83798867583d37c044d988d3cb343efd57713dc1135edec80af2985db36"}
    ) {
      smartContract {
        address {
          address
          annotation
        }
        contractType
        protocolType
      }
      smartContractMethod {
        name
        signatureHash
      }
      address: caller {
        address
        annotation
      }
      success
      amount
      amount_usd: amount(in: USD)
      gasValue
      gas_value_usd: gasValue(in: USD)
      callDepth
    }
  }
}
```

## List Ethereum USDT Transfers for One Wallet in Date Range
Build a complete transfer history for a specific token and wallet within a date range. Uses the `any` filter to capture both sent and received USDT transfers for the address, with USD amounts and block timestamps.

**Variations:** Remove the `currency` filter to see all token activity. Adjust `date` for different periods. Add [sorting](/docs/query-features/filtering/sorting) by `amount` to surface largest transfers first. Use [aliases](/docs/query-features/aliases) to rename response fields for cleaner integration.

[Open this query on IDE](https://ide.bitquery.io/USDT-Wallet-History-v1_1_1_1)


```graphql
{
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "block.timestamp.time", asc: "currency.symbol", limit: 10, offset: 0}
      date: {since: "2023-06-27", till: "2023-07-04T23:59:59"}
      amount: {gt: 0}
      any: [{receiver: {is: "0xf6e8516ce73c290f43dd32d57f7ba9056d62d244"}}, {sender: {is: "0xf6e8516ce73c290f43dd32d57f7ba9056d62d244"}}]
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: sender {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}
```

## List Ethereum USDT Transfers After a Date with Receivers
Get the latest transfers for any token after a specific date, with receiver addresses and `success` status. A minimal query pattern for monitoring ongoing token activity.

**Variations:** Add `sender` or `receiver` filters to narrow results. Use `amount: {gt: N}` for a minimum threshold. Switch to the `time` filter for sub-day precision.

[Open this query on IDE](https://ide.bitquery.io/USDT-Transfer-API-Template)

```graphql
{
  ethereum(network: ethereum) {
    transfers(
      options: {desc: "block.timestamp.time", limit: 10}
      currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      date: {after: "2023-07-01"}
    ) {
      currency {
        name
        symbol
      }
      block {
        timestamp {
          time
        }
      }
      transaction {
        hash
        txFrom {
          address
        }
      }
      receiver {
        address
        annotation
      }
      success
    }
  }
}

```

## Get Ethereum USDT Yearly High and Low vs WETH on DEX
Find the yearly high and low DEX prices for any token pair using `calculate: maximum` and `calculate: minimum` on `quotePrice` grouped by year. The `priceAsymmetry` and `tradeAmountUsd` filters remove outlier trades for cleaner results.

**Variations:** Change `year(count: 5)` to `month`, `day`, or `hour` for finer granularity. Adjust `tradeAmountUsd: {gt: 5000}` to set the minimum trade size. Add `open` and `close` fields (as in the OHLC query) for full candlestick data.

[Open this query on IDE](https://ide.bitquery.io/USDC-All-time-high-low-v1_1_1_1_1_1)

```graphql
{
  ethereum(network: ethereum) {
    dexTrades(
      baseCurrency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      time: {since: "2021-01-13T00:00:00Z", till: "2023-06-20T00:00:00Z"}
      priceAsymmetry: {lt: 1}
      tradeAmountUsd: {gt: 5000}
      options: {limit: 10, desc: "timeInterval.year"}
    ) {
      timeInterval {
        year(count: 5)
      }
      baseCurrency {
        name
      }
      quoteCurrency {
        name
      }
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
    }
  }
}

```

## Find Token Holders Using the V2 Token Holders API

Token holder data is available through the [V2 Token Holders API](https://docs.bitquery.io/docs/examples/balances/tokenHolders-api/), which supports holder counts, top holders, and balance distribution for any token.

## Get Ethereum USDT Balance History with Transfers per Block

Track how a wallet's token balance changed over time with block-level granularity. Returns the balance value, transfer amount, and timestamp for each block where the balance was updated — useful for portfolio tracking and audit trails.

**Variations:** Adjust the `date` filter for different time periods. Remove the `currency` filter to see balance changes across all tokens. For richer balance tracking, see the [V2 BalanceUpdates API](https://docs.bitquery.io/docs/examples/balances/balance-api/).

[Open this query on IDE](https://ide.bitquery.io/usdt-balance-history-template)

```
{
  ethereum {
    address(address: {is: "0x28c6c06298d514db089934071355e5743bf21d60"}) {
      balances(
        currency: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
        date: {after: "2023-07-01"}
      ) {
        history {
          value
          transferAmount
          timestamp
          block
        }
        currency {
          name
          symbol
        }
      }
    }
  }
}

```

## List Ethereum USDT Approval Events from Token Contract
Monitor ERC-20 token approval events emitted by a contract. Approval events fire whenever a wallet grants spending permission to another address (e.g., DEX router approvals). Returns the event signature, transaction hash, and block timestamp.

**Variations:** Change `smartContractEvent: {is: "Transfer"}` for Transfer events instead. Add `arguments` to the response to get the approved spender address and amount. Filter by `transaction.txFrom` to see approvals from a specific wallet.

[Open this query on IDE](https://ide.bitquery.io/Get-USDT-Approval-Events-Template)

```graphql
 {
  ethereum {
    smartContractEvents(
      smartContractAddress: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}
      smartContractEvent: {is: "Approval"}
      options: {limit: 10, desc: "block.timestamp.iso8601"}
    ) {
      smartContractEvent {
        name
        signature
      }
      smartContract {
        address {
          address
          annotation
        }
      }
      transaction {
        hash
      }
      block {
        timestamp {
          iso8601
        }
      }
    }
  }
}

```

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [DEX trading data examples](https://docs.bitquery.io/v1/docs/Examples/dexTrades/dex-trading-data-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)