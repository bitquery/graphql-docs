---
title: "Solana Transfers API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Solana transfer data. Get SPL and SOL transfers, wallet activity, and token movements."
keywords: [Solana API examples, Solana GraphQL queries, Bitquery]
---

# Solana Historical Transfers API

The Solana Historical Transfers API provides comprehensive access to token transfer data on the Solana blockchain, including SPL token transfers, SOL transfers, and detailed transaction information. This API enables real-time monitoring and historical analysis of all transfer activities across the Solana network.

## What is Solana Transfers API?

Bitquery's Solana Transfers API helps you fetch detailed transfer data by writing GraphQL queries. You can track token movements, monitor wallet activities, analyze transfer patterns, and build comprehensive dashboards for Solana-based applications.

## What are the capabilities of Bitquery Solana Transfers API?

The Solana Transfers API offers extensive capabilities:

- **Real-time and Historical Data**: Access both live and historical transfer information. For realtime information access the [new streaming Solana docs](https://docs.bitquery.io/docs/blockchain/Solana/)
- **Comprehensive Filtering**: Filter by wallet addresses, token types, time periods, and transaction signatures
- **Multi-token Support**: Track SOL, SPL tokens, and custom tokens
- **Detailed Transaction Data**: Get complete transfer details including amounts, timestamps, and transaction metadata
- **Balance Tracking**: Calculate wallet balances by analyzing incoming and outgoing transfers
- **Program Integration**: Identify which Solana programs initiated transfers
- **Flexible Querying**: Use GraphQL's powerful querying capabilities for complex data retrieval

## Difference between Solana RPC and Bitquery Solana Transfers API?

**Solana RPC**

- Raw transaction data requiring custom parsing
- No built-in transfer aggregation or filtering
- Limited historical data access
- Requires significant development effort for transfer analysis

**Bitquery Solana Transfers API**

- Pre-parsed, structured transfer data
- Built-in filtering, aggregation, and historical analysis
- Real-time streaming capabilities
- Ready-to-use transfer analytics and monitoring

## Real-time Streaming and Webhooks

For real-time transfer monitoring, you can convert GraphQL queries to subscriptions for live data streams. This enables:

- **WebSocket Connections**: Monitor transfers in real-time via WebSocket
- **Webhook Integration**: Set up automated notifications for specific transfer patterns
- **Live Dashboards**: Build real-time transfer tracking applications

Learn more about [WebSocket subscriptions](https://docs.bitquery.io/docs/subscriptions/websockets/) and [real-time Solana data streams](https://docs.bitquery.io/docs/streams/real-time-solana-data/).

For streaming real-time data, check our [Solana Streaming API docs](https://docs.bitquery.io/v1/docs/examples/Solana)

## Recent Solana Transfers for a Wallet as Sender or Receiver

Get the complete transfer history for a Solana wallet — both sent and received — using the `any` filter (OR on `senderAddress` and `receiverAddress`). Returns token details, amounts, timestamps, and transaction signatures. [Run query](https://ide.bitquery.io/Transfers-of-an-address_1).

**Variations:** Add `currency: {is: "..."}` for a specific SPL token. Use `date` or `time` for a date range. Apply [sorting](/docs/query-features/filtering/sorting) by `amount` for largest transfers. Add `amount(in: USD)` for USD values.

```
query MyQuery {
  solana {
    transfers(
      any: [{senderAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}, {receiverAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}]
      options: {desc: "block.timestamp.iso8601", limit: 100}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}
```

## Solana Token Holding Period in Blocks for One Wallet

This query calculates how long a wallet has been holding a specific token by looking at the first and last transfer block heights for that token into the wallet. It is useful for analyzing token holding behavior, vesting, or eligibility for airdrops and loyalty programs.

The query returns:

- **first**: minimum block height at which the wallet first received the token
- **last**: maximum block height at which the wallet most recently received the token
- **period**: the difference between `last` and `first` block heights, representing the _holding period in blocks_ (you can convert this to time using block timestamps if needed)

Update `receiverAddress` with the target wallet and `currency` with the token mint address you want to analyze.

[Run Query](https://ide.bitquery.io/find-holding-period-of-a-token-on-Solana)

```
query MyQuery {
  solana(network: solana) {
    transfers(
      receiverAddress: {is: "FwTau1HAZcjexdph4xvkLxATcKAabS1F1vPE6Ut3Gem9"}
      currency: {is: "6fHw6vUNrvuvjK2oadJm8Qkz152jef6wVDbdK2wNGiDT"}
    ) {
      first:minimum(of: height)
      last:maximum(of: height)
      period:expression(get:"last-first")
    }
  }
}
```

## Historical Solana Pumpfun Tokens Minted by Wallet from Transfers

[Run query](https://ide.bitquery.io/get-historical-created-token-and-creator)

```graphql
{
  solana {
    transfers(
      options: { limit: 100, desc: "block.height" }
      date: { is: "2025-12-08" }
      externalProgramId: { is: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P" }
      currency: { is: "9TXP4iVTcP7cChVhbUCQfvkSPKJrmHh1jxMkJgGqLzDP" }
      transferType: { is: mint }
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      instruction {
        action {
          name
        }
        callPath
        external
        externalAction {
          name
          type
        }
        program {
          name
          id
        }
        externalProgram {
          id
          name
        }
      }
      currency {
        name
        symbol
        address
      }
      date {
        date
      }
      amount
      receiver {
        address
        mintAccount
        type
      }
      transaction {
        signature
        signer
      }
      transferType
    }
  }
}
```

## Solana Pumpfun Token Migrations on a Specific Calendar Date

Track Pump Fun token migrations on a specific date by filtering for transfers to the migration receiver address via the Pump Fun program. Returns token details, sender/receiver with mint accounts, and transaction signatures. [Run query](https://ide.bitquery.io/pumpfun-transfers-type-v1-to-pumpfun-migrations_1).

**Variations:** Change `date` for different days. Adjust `receiverAddress` for other migration targets. Remove the `currency: {not: "SOL"}` filter to include SOL movements. Use [limit/offset](/docs/query-features/filtering/options) for pagination.

```
{
  solana {
    transfers(
      options: {limit: 500}
      date: {is: "2024-10-18"}
      currency:{not:"SOL"}
      externalProgramId: {is: "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P"}
      transferType: {in: transfer}
      receiverAddress: {is: "39azUYFWPz3VHgKCf3VChUwbpURdCHRxjWVowf5jUJjg"}
    ) {
      block {
        height
        timestamp {
          iso8601
        }
      }
      instruction {
        action {
          name
        }
        callPath
        external
        externalAction {
          name
          type
        }
        program {
          name
          id
        }
        externalProgram {
          id
          name
        }
      }
      currency {
        name
        symbol
        address
      }
      date {
        date
      }
      amount
      sender {
        address
        mintAccount
        type
      }
      receiver {
        address
        mintAccount
        type
      }
      transaction {
        signature
        signer
      }
      transferType
    }
  }
}
```

## Detect Solana Pumpfun Mayhem Mode Launch by Mint Amount

Detect whether a Pump Fun token was launched in Mayhem mode by checking for the characteristic 1 Billion token mint (1,000,000,000,000,000 raw units at 6 decimals) to the Mayhem AI agent address. Returns token details and transaction signature. [Run query](https://ide.bitquery.io/check-if-a-pump-fun-token-was-in-mayhem-mode).

**Variations:** Change the `currency` to check any Pump Fun token. Adjust `amount` for other mint amounts. Add `date` to search within a time range.

```
query MyQuery {
  solana {
    transfers(
      amount:{is:1000000000000000}
      receiverAddress: {is: "BwWK17cbHxwWBKZkUYvzxLcNQ1YVyaFezduWbtm2de6s"}
      currency: {is: "8ZVajuCD45RHs53LaCLpnqeKY519Ns64XZd12ZcLpump"}
    ){
      currency{
        name
        symbol
        decimals
        address
      }
      amount
      transaction{
      	signature
      }
    }
  }
}
```

## Solana Per-Token Sent, Received, and Balance for an Address

Calculate per-token balances for a Solana wallet by aggregating all sent and received amounts. Uses `expression(get: "sum_in - sum_out")` to compute the current balance, with separate inbound/outbound counts per token. [Run query](https://ide.bitquery.io/currency-sent-and-received-by-an-address#).

**Variations:** Add `currency: {is: "..."}` for a single token. Include `date` for a time-bounded calculation. Use `amount(in: USD)` for USD-equivalent totals.

```
query ($address: String!) {
  solana {
    transfers(
      any: [{receiverAddress: {is: $address}}, {senderAddress: {is: $address}}]
      options: {desc: "balance"}
    ) {
      sum_in: amount(calculate: sum, receiverAddress: {is: $address})
      sum_out: amount(calculate: sum, senderAddress: {is: $address})
      balance: expression(get: "sum_in - sum_out")
      count_in: countBigInt(receiverAddress: {is: $address})
      count_out: countBigInt(senderAddress: {is: $address})
      currency {
        address
        symbol
        tokenType
      }
    }
  }
}

```

```
{
  "address": "DoPnWi3csUodvLqu6VCLWg3EJwLccky9CD4C9ejL6Zgu"
}
```

## Solana Wallet Balances per Token Up to a Point in Time

Get a wallet's per-token balances as of a specific date by summing all transfers up to that point. Uses `date: {till: $date}` with the same `sum_in - sum_out` expression pattern — useful for historical snapshots, tax reporting, and point-in-time audits.

**Variations:** Change the `$date` variable for different snapshot dates. Add `currency: {is: "..."}` for a single token. Add `amount(in: USD)` for USD values.

[Run query](https://ide.bitquery.io/balance-on-a-specific-date#)

```
query ($address: String!, $date: ISO8601DateTime!) {
  solana {
    transfers(
      date:{till:$date}
      any: [{receiverAddress: {is: $address}}, {senderAddress: {is: $address}}]
      options: {desc: "balance"}
    ) {
      sum_in: amount(calculate: sum, receiverAddress: {is: $address})
      sum_out: amount(calculate: sum, senderAddress: {is: $address})
      balance: expression(get: "sum_in - sum_out")
      count_in: countBigInt(receiverAddress: {is: $address})
      count_out: countBigInt(senderAddress: {is: $address})
      currency {
        address
        symbol
        tokenType
      }
    }
  }
}
```

```
{
  "date":"2025-12-09",
  "address": "DoPnWi3csUodvLqu6VCLWg3EJwLccky9CD4C9ejL6Zgu"
}
```

## Solana SPL Token Holders with Aggregated Balances

Get a token's holder list with computed balances by aggregating all transfers per receiver address. Returns the top 10,000 holders sorted by balance with total received, sent, and net balance. [Run query](https://ide.bitquery.io/solana-holders_1).

**Variations:** Change the `currency` for any SPL token. Adjust `date: {since: "..."}` to compute balances from a specific date. Change `limit` for more/fewer holders. Filter by `amount(calculate: sum, gt: N)` to exclude dust holders.

```
{
  solana(network: solana) {
    transfers(
      date: { since: "2026-02-19" }
      currency: { is: "943YczGfS95e1ZnUSMd5DPQrGXaKBS2zGR76htycpump" }
      options: { limit: 10000, desc: "balance" }
    ) {
      sum_in: amount(calculate: sum)
      sum_out: amount(calculate: sum)
      balance: expression(get: "sum_in - sum_out")
      count_in: countBigInt
      count_out: countBigInt
      currency {
        address
        symbol
        tokenType
      }
      receiver {
        address
      }
    }
  }
}
```

## Solana Token Inflows to a Wallet for Bubble Map Charts

Retrieve all incoming token transfers to a wallet on a specific date with USD amounts — the data needed for bubble map visualizations showing where funds came from. See the full [Solana BubbleMaps guide](https://bitquery.io/blog/solana-bubblemaps-bitquery-zero-rpc).

**Variations:** Change `receiverAddress` to `senderAddress` for outflows. Adjust the `date` and `currency` variables. Use [limit/offset](/docs/query-features/filtering/options) for pagination through large result sets.

[Run query](https://ide.bitquery.io/map-query-working_1)

```
query TransfersForBubbleMap($since: ISO8601DateTime!, $currency: String, $limit: Int = 1000, $offset: Int = 0) {
  solana {
    transfers(
      date: {is: $since}
      options: {limit: $limit, offset: $offset, desc: ["date.date", "block.height"]}
      currency: {is: $currency}
      receiverAddress: {is: "CapuXNQoDviLvU1PxFiizLgPNQCxrsag1uMeyk6zLVps"}
    ) {

      amount (in:USD)
      currency {
        symbol
        address
        decimals
      }
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        signature
        transactionIndex
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
      date {
        date
      }
    }
  }
}
```

```
{
  "since": "2025-09-24",
  "till": "2025-09-24",
  "currency": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
  "limit": 100,
  "offset": 0
}
```

## List Solana Token Senders to a Specific Receiver Address

Identify every wallet that sent a specific token to a given receiver address on a particular date. Useful for tracking token sources, verifying payment senders, or investigating inbound fund origins.

**Variations:** Swap `receiverAddress` for `senderAddress` to find all recipients instead. Remove `date` for all-time data. Change the token address for any SPL token.

[Run query](https://ide.bitquery.io/find-sender-of-a-token)

```
query MyQuery {
  solana(network: solana) {
    transfers(
      options: {desc: "block.timestamp.iso8601", limit: 100}
      date: {is: "2025-09-19"}
      currency: {is: "BEgRWQSg9emtttqwWgf6Rp3U17EyaoUaerDZrFMzpump"}
      receiverAddress: {is: "AQ46kfYT3hW28Xg5gWHrJkzFSz1oGWBHC3FsTbqgMEco"}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}

```

## Solana Wallet Inflow and Outflow Transfers at Block Height

Analyze a wallet's inflow and outflow at a specific block height using [aliases](/docs/query-features/aliases) (`outflow:` and `inflow:`). Shows token details, program info, and sender/receiver types — useful for event-level forensics and block-by-block wallet analysis. [Run query](https://ide.bitquery.io/outflowinflow-of-an-address-on-Solana).

**Variations:** Change `height` to a different block. Use `date` or `time` instead for a time window. Add `currency: {is: "..."}` to filter by token.

```
{
  solana(network: solana) {
    outflow: transfers(
      options: {limit: 10, asc: ["block.height", "transaction.transactionIndex"]}
      height: {is: 347789961}
      senderAddress: {is: "CsVdJ8WH8Q9eHSTRpwtwN3TYApm24QnLKYUMNxJ3DaED"}
    ) {
      currency {
        tokenId
        symbol
        name
        address
      }
      instruction {
        program {
          name
          id
        }
        externalAction {
          type
          name
        }
      }
      sender {
        address
        type
        mintAccount
      }
      receiver {
        type
        mintAccount
        address
      }
      transaction {
        signature
        signer
        transactionIndex
      }
      block {
        height
      }
    }

    inflow: transfers(
      options: {limit: 10, asc: ["block.height", "transaction.transactionIndex"]}
      height: {is: 347789961}
      receiverAddress: {is: "CsVdJ8WH8Q9eHSTRpwtwN3TYApm24QnLKYUMNxJ3DaED"}
    ) {
      currency {
        tokenId
        symbol
        name
        address
      }
      instruction {
        program {
          name
          id
        }
        externalAction {
          type
          name
        }
      }
      sender {
        address
        type
        mintAccount
      }
      receiver {
        type
        mintAccount
        address
      }
      transaction {
        signature
        signer
        transactionIndex
      }
      block {
        height
      }
    }
  }
}


```

## Solana Wallet Transfers Within a Start and End Time Range

Get all transfers for a wallet within a precise UTC time window using the `time` filter. Captures both sent and received transfers via the `any` clause — useful for hourly reporting, compliance audits, and time-bounded analysis. [Run query](https://ide.bitquery.io/Transfers-of-a-wallet-for-a-specific-timeperiod).

**Variations:** Adjust the `time` range for different windows. Add `currency` to filter by token. Use `date` instead for day-level precision.

```
query MyQuery {
  solana {
    transfers(
      time:{since:"2025-07-24T14:00:00Z" till:"2025-07-24T16:00:00Z"}
      any: [{senderAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}, {receiverAddress: {is: "7g9JL79igx2rSe8MTMrPDUfEY4FmySqB4gokKpaHQYkD"}}]
      options: {desc: "block.timestamp.iso8601", limit: 100}
    ) {
      amount
      block {
        timestamp {
          iso8601
        }
      }
      currency {
        name
        symbol
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}
```

## Largest Solana Token Transfers by Amount After a Date

Find the biggest transfers for a specific token by sorting with `desc: "amount"`. Surfaces whale movements and large institutional transfers — useful for market impact analysis and whale tracking. [Run query](https://ide.bitquery.io/v1-top-transfers-of-a-solana-token_1).

**Variations:** Change the token address for any SPL token. Adjust the `date` filter. Add `senderAddress` or `receiverAddress` to focus on a specific wallet. Use `amount: {gt: N}` for a minimum threshold.

```
query MyQuery {
  solana {
    transfers(
      currency: {is: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"}
      options: {desc: "amount", limit: 10}
      date: {after: "2025-02-10"}
    ) {
      amount
      block {
        height
        hash
      }
      currency {
        symbol
        name
        decimals
        address
      }
      receiver {
        address
      }
      sender {
        address
      }
      transaction {
        signature
      }
    }
  }
}

```

## Solana Wallet Historical SOL and Stablecoin Balances via Transfers

Calculate a wallet's historical SOL and stablecoin balances at a point in time by separately summing sent and received amounts with USD conversion. Uses `time: {till: ...}` to cap the calculation at a specific timestamp. [Run query](https://ide.bitquery.io/solana-money-sent-and-recieved-by-an-address_5).

**Variations:** Change the `currency: {in: [...]}` array to track different tokens. Adjust the `time` for different snapshots. Remove the currency filter for all-token balance history.

```
{
  solana {
    sent: transfers(
      time: {till: "2025-01-01T00:00:00"}
      currency: {in: ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "SOL"]}
      senderAddress: {is: "8J88dokAnQBPJ5UopmTGNUHrciRXC5bqHqvK5ktKvFAA"}
    ) {
      USDAmount:amount(in:USD)
      Amount: amount
      currency {
        name
        decimals
        symbol
        address
      }
    }
    recieved: transfers(
      time: {till: "2025-01-01T00:00:00"}
      currency: {in: ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "SOL"]}
      receiverAddress: {is: "8J88dokAnQBPJ5UopmTGNUHrciRXC5bqHqvK5ktKvFAA"}
    ) {
      USDAmount:amount(in:USD)
      Amount: amount
      currency {
        name
        decimals
        symbol
        address
      }
    }
  }
}

```

## Solana Transfers for All Instructions in One Transaction Signature

Inspect every transfer inside a single Solana transaction by filtering on `signature`. Returns all token movements, program details, and sender/receiver account types — essential for debugging failed transactions or understanding complex DeFi interactions. [Run query](https://ide.bitquery.io/get-historical-transaction-detail-on-Solana).

**Variations:** Change the `signature` to any transaction. Remove the `date` filter if the transaction date is unknown. Add `currency` to filter for specific token movements within the transaction.

```
query MyQuery {
  solana(network: solana) {
    transfers(
      date: {is: "2025-07-19"}
      options: {limit: 1000, desc: ["transaction.transactionIndex", "block.height"]}
      signature: {is: "4p2Qbd3vH5xXDHLQRfEivHjAcoWTxad5ZcWjZmiHVtf1CnnvQC28Z2sLXgb8Bo7ivjNVmwYAE34phFPgcvKVph6k"}
    ) {
      amount
      block {
        hash
        height
        timestamp {
          time
        }
      }
      instruction {
        program {
          name
          id
        }
      }
      receiver {
        mintAccount
        type
        address
      }
      sender {
        type
        mintAccount
        address
      }
      transaction {
        signer
        signature
        transactionIndex
      }
      currency {
        name
        address
        symbol
      }
    }
  }
}
```

## Solana Network-Wide Transfers in a Narrow Time Window

Query all transfers across the entire Solana network within a narrow time window. Returns token movements from every program and wallet — useful for network-wide analytics, trending analysis, and aggregate metrics.

**Important Notes:**

- Keep time ranges small (1 day or less) to avoid memory limits
- Use this for network analysis and trending
- Consider using pagination for larger datasets

Test the API [here](https://ide.bitquery.io/get-transfers-data-for-a-particular-time-period).

```
query MyQuery {
  solana(network: solana) {
    transfers(
      time: {since: "2025-07-19T01:00:00Z", till: "2025-07-19T01:15:00Z"}
      options: {limit: 10, desc: ["transaction.transactionIndex", "block.height"]}
    ) {
      amount
      block {
        hash
        height
        timestamp {
          time
        }
      }
      instruction {
        program {
          name
          id
        }
      }
      receiver {
        mintAccount
        type
        address
      }
      sender {
        type
        mintAccount
        address
      }
      transaction {
        signer
        signature
        transactionIndex
      }
      currency {
        name
        address
        symbol
      }
    }
  }
}
```

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana address API examples](https://docs.bitquery.io/v1/docs/Examples/Solana/address-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
