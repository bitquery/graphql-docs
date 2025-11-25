---
title: Stellar Trades API
description: Access comprehensive Stellar Trade API with Effects and Price
slug: /blockchain/Stellar/trade-effects-api
keywords:
  - Stellar Trade Effects API
  - Stellar DEX API
  - Stellar trading API
  - Stellar blockchain API
  - Stellar GraphQL API
  - Stellar trade data
  - Stellar token swaps
  - Stellar DEX trades
  - Stellar trading analytics
  - Stellar API documentation
  - Stellar blockchain data API
  - Stellar asset trading
  - Stellar orderbook API
  - Stellar liquidity pools
  - free stellar api
  - stellar data api
---

# Stellar Trades API 


## What are Stellar Trade Effects?

A successful trade operation on the Stellar network will yield zero or more effects. These effects represent specific changes that occur in the ledger as a result of trading activities. Trade effects capture detailed information about asset exchanges.

## Getting Started

New to Bitquery? Here's how to get started:

1. **[Create a free account](https://ide.bitquery.io/)** - Get instant access to our GraphQL IDE
2. **[Generate your Access token](https://docs.bitquery.io/docs/authorisation/how-to-generate/)** - Required for API access

Need help crafting a query or subscription? Message us on [support](https://t.me/Bloxy_info).

### Trades of a Token on Stellar

This query retrieves trade effects for a specific token on the Stellar network. The `priceAmount` field represents the sell asset per buy asset ratio, providing you with accurate pricing information for each trade.

**Key Features:**
- Filter by buy currency name
- Time range filtering
- USD value conversions for both buy and sell amounts
- Complete currency and issuer information
- Transaction context with block and hash

[Run Query](https://ide.bitquery.io/AQUA-Stellar-Trades)

```graphql
query {
  stellar(network: stellar) {
    tradeEffects(
      options: { desc: "block", asc: "transaction.index", limit: 10, offset: 0 }
      time: { since: "2025-11-24T01:05:00.000Z", till: "2025-11-25T13:35:00.999Z" }
      buyCurrencyName: { is: "AQUA [GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA]" }
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      block
      transaction {
        hash
        index
      }
      sellAmount
      sell_amount_usd: sellAmount(in: USD)
      sellCurrency {
        symbol
        name
      }
      sellIssuer {
        address
        annotation
      }
      buyAmount
      priceAmount
      buy_amount_usd: buyAmount(in: USD)
      buyCurrency {
        symbol
        name
      }
      buyIssuer {
        address
        annotation
      }
    }
  }
}
```

### Latest Trade Effects on Stellar

This query retrieves the most recent trade effects on the Stellar network, providing comprehensive information about each trade including seller addresses, operation details, and complete currency information.


You can run the query [here](https://ide.bitquery.io/Latest-Trade-Effects-on-Stellar)

```graphql
query MyQuery {
  stellar(network: stellar) {
    tradeEffects(
      date: {is: "2024-07-17"}
      options: {limit: 10, desc: "timestamp.time"}
    ) {
      address {
        address
      }
      effectIndex
      buyIssuer {
        address
      }
      buyCurrency {
        name
        address
      }
      buyAmount
      sellAmount
      priceAmount
      order
      operation {
        name
      }
      seller {
        address
      }
      sellIssuer {
        address
      }
      sellCurrency {
        name
        address
      }
      timestamp {
        time
      }
    }
  }
}
```

