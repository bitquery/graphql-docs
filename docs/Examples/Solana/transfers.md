---
title: "Solana Historical SPL & SOL Transfers API | Bitquery GraphQL"
description: "Full historical Solana token transfer data via GraphQL: SPL and SOL, wallet balances over time, compliance and audit-style exports. Examples for accounting, tax, trading, and data pipelines."
keywords:
  [
    Bitquery,
    Solana GraphQL API,
    Solana SPL token transfers,
    Solana wallet history,
    historical Solana transfers,
    Solana transaction history API,
    blockchain audit data,
    Solana compliance analytics,
    token holder analytics,
    Parquet export,
    data warehouse,
  ]
---

# Solana Historical Transfers API

Bitquery indexes **complete historical** Solana **SOL** and **SPL token** transfers as structured rows you can filter, aggregate, and reconcile—without parsing raw RPC transactions yourself. Teams use this dataset for **accounting** and ledger tie-out, **tax and reporting** pipelines (Bitquery provides movement and USD fields; always apply your jurisdiction's rules—this is not tax advice), **trading and market** analysis, **compliance** and source-of-funds views, **audit** sampling and evidence bundles (signatures, slots, timestamps), **treasury** monitoring, and **data engineering** (dashboards, ETL, or bulk files). For live streams, see the [Solana streaming docs](https://docs.bitquery.io/docs/blockchain/Solana/).

## Use Cases at a Glance

Jump to examples by intent:

- **Accounting and tax** — [Per-token sent, received, and balance](#per-token-sent-received-balance), [balances up to a point in time](#balance-point-in-time), [parallel sent and received over a date range](#parallel-sent-received-range), [wallet activity in a time window](#wallet-time-range)
- **Audit and assurance** — [Balances as of a date](#balance-point-in-time), [inflow/outflow at a block height](#block-inflow-outflow), [all transfers in one transaction](#per-signature-transfers); for large populations see [Bulk export (S3 and Parquet)](#bulk-export-s3-parquet)
- **Trading and research** — [Largest token transfers](#largest-transfers-after-date), [earliest transfer for a mint](#earliest-mint-transfer), [Pump Fun mints by wallet](#pumpfun-mints-by-wallet)
- **Compliance and investigations** — [Who funded wallets (System Program)](#system-program-funding), [multi-wallet aggregates](#multi-wallet-aggregates), [bubble-map inflows](#bubble-map-inflows), [Coinpath overview](/docs/building-queries/Coinpath-Explained/Overview)
- **Treasury and operations** — [Wallet as sender or receiver](#wallet-sender-receiver), [historical SOL and stablecoin rows](#historical-sol-stablecoin-rows)
- **Data products and bulk export** — [Pagination and limits](/docs/query-features/filtering/options), [aggregations](/docs/query-features/aggregation/), [Bulk export (S3 and Parquet)](#bulk-export-s3-parquet)

## What the Solana Transfers API Gives You

- **Historical and streaming** — Full archive for analytics; for realtime use the [streaming Solana docs](https://docs.bitquery.io/docs/blockchain/Solana/) and [subscriptions](https://docs.bitquery.io/docs/subscriptions/websockets/).
- **Filtering** — Wallets, mints, time, block height, programs, success, amounts, signatures.
- **Aggregates** — Per-token `sum` / `count`, [expressions](/docs/query-features/expressions/overview) (e.g. net balance), and [sorting](/docs/query-features/filtering/sorting).
- **Evidence-friendly fields** — Block height, timestamps, transaction signature, program and instruction metadata where indexed.

## Solana RPC vs. Bitquery Transfers

**RPC** — Encoded transactions, heavy parsing, limited turnkey history for analytics.

**Bitquery** — Pre-parsed transfer rows, filters, aggregates, and time-bounded pulls suited to reporting and monitoring.

## Real-Time Streaming and Webhooks

You can turn queries into subscriptions for live streams and webhooks. See [WebSocket subscriptions](https://docs.bitquery.io/docs/subscriptions/websockets/), [real-time Solana streams](https://docs.bitquery.io/docs/streams/real-time-solana-data/), and [more Solana API examples](/docs/Examples/Solana/address-api).

## Recent Solana Transfers for a Wallet as Sender or Receiver {#wallet-sender-receiver}

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

## Historical Solana Pump Fun Tokens Minted by Wallet from Transfers {#pumpfun-mints-by-wallet}

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

## Solana Pump Fun Token Migrations on a Specific Calendar Date

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

## Detect Solana Pump Fun Mayhem Mode Launch by Mint Amount

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

## Solana Per-Token Sent, Received, and Balance for an Address {#per-token-sent-received-balance}

Calculate per-token balances for a Solana wallet by aggregating all sent and received amounts. Uses `expression(get: "sum_in - sum_out")` to compute the current balance, with separate inbound/outbound counts per token—common for **accounting** tie-out, **treasury** views, and **audit** rollforwards. [Run query](https://ide.bitquery.io/currency-sent-and-received-by-an-address#).

**Variations:** Add `currency: {is: "..."}` for a single token. Bound the period with `date: {since: "...", till: "..."}` or `time: {since: "...", till: "..."}` for tax-year or contract-window totals. Sort with `options: {desc: ["count_in", "count_out"], asc: "currency.symbol"}` when you care about activity counts and alphabetical token order. Use `amount(in: USD)` for USD-equivalent totals. See [aggregation](/docs/query-features/aggregation/) and [options](/docs/query-features/filtering/options).

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

## Solana Wallet Balances per Token Up to a Point in Time {#balance-point-in-time}

Get a wallet's per-token balances as of a specific date by summing all transfers up to that point. Uses `date: {till: $date}` with the same `sum_in - sum_out` expression pattern—useful for **historical snapshots**, **tax** and regulatory reporting pipelines, and **audit** evidence at a cutoff. The same pattern works with `time: {till: "..."}` for a precise UTC cutoff.

**Variations:** Change the `$date` variable for different snapshot dates. Add `currency: {is: "..."}` for a single token. Add `amount(in: USD)` for USD values. Prefer `height` filters (see [block inflow/outflow](#block-inflow-outflow)) when you must align to a slot. Combine with [sorting](/docs/query-features/filtering/sorting) on `balance` or token fields as needed.

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

## Solana Token Inflows to a Wallet for Bubble Map Charts {#bubble-map-inflows}

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

## Solana Multi-Wallet Transfer Aggregates (Bubble-Map Style) {#multi-wallet-aggregates}

For **compliance graphs**, **holder-set analytics**, or **bubble-map** style visuals, you often need **aggregated flows between many addresses** (only edges where both sender and receiver are in your set). Filter `senderAddress` and `receiverAddress` with the same `in` list, restrict mints with `currency: {in: $currencies}`, and sum amounts. This pattern scales better than hard-coding dozens of GraphQL variables—pass one address array from your app. See the [Solana BubbleMaps guide](https://bitquery.io/blog/solana-bubblemaps-bitquery-zero-rpc).

**Variations:** Add `success: {is: true}` to drop failed transactions. Tighten `date` for performance. Use [limit/offset](/docs/query-features/filtering/options) to page.

```
query SolanaMultiWalletAggregates(
  $addresses: [String!]
  $currencies: [String!]
  $count: Int
  $offset: Int
  $start_date: ISO8601DateTime
  $end_date: ISO8601DateTime
) {
  solana(network: solana) {
    transfers(
      senderAddress: {in: $addresses}
      receiverAddress: {in: $addresses}
      currency: {in: $currencies}
      success: {is: true}
      options: {limit: $count, offset: $offset}
      date: {since: $start_date, before: $end_date}
    ) {
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        symbol
        name
        address
      }
      sum: amount(calculate: sum)
    }
  }
}
```

```
{
  "addresses": [
    "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
    "EwfYTqVjBp1hMrFE8qHR2wdWPJYFtczFXXmfw27cfXgL",
    "4JKcs9USYFHSwQf473ahXuTXRYCjuBzY4dg21UhdzhFz"
  ],
  "currencies": [
    "-",
    "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
  ],
  "count": 25000,
  "offset": 0,
  "start_date": "2022-12-10",
  "end_date": "2023-06-10"
}
```

## Parallel Solana Sent and Received Transfers for a Wallet (Date Range) {#parallel-sent-received-range}

**Accounting**, **tax**, and **audit** teams often need **separate ledgers** of outbound vs inbound transfers for the same wallet over a reporting window. Query `sent: transfers(...)` and `received: transfers(...)` in one GraphQL request using field aliases. Below, each branch filters `amount: {gt: 0}` and returns block time, counterparties, USD, and signatures for evidence.

**Variations:** Align `time` on both branches. Add `currency` for one mint. Use `date` instead of `time` for day-level reporting.

```
query SolanaWalletSentReceivedRange {
  solana(network: solana) {
    sent: transfers(
      options: {desc: "block.height", limit: 1000, offset: 0}
      senderAddress: {is: "FD4s4MU7o58ReoR97zjM5dWBmY5RF7RSm93G3LZqnzJa"}
      time: {since: "2025-06-25", till: "2025-07-25"}
      amount: {gt: 0}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        mintAccount
      }
      receiver {
        address
        mintAccount
      }
      currency {
        name
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        feePayer
        signature
      }
    }
    received: transfers(
      options: {desc: "block.height", limit: 1000, offset: 0}
      receiverAddress: {is: "FD4s4MU7o58ReoR97zjM5dWBmY5RF7RSm93G3LZqnzJa"}
      time: {since: "2025-06-25", till: "2025-07-25"}
      amount: {gt: 0}
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        mintAccount
      }
      receiver {
        address
        mintAccount
      }
      currency {
        name
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        feePayer
        signature
      }
    }
  }
}
```

## Who Funded These Solana Wallets (System Program) {#system-program-funding}

For **compliance** and **source-of-funds** review, native SOL funding often shows up through the **System Program**. The query below returns early inbound SOL (or system-level) transfers to a small set of receivers, one row per receiver (`limitBy`), ordered by block and transaction index.

**Variations:** Expand `receiverAddress: {in: [...]}`. Adjust `limit` and `limitBy`. Remove `programId` to see all funding assets (may be noisier).

```
{
  solana(network: solana) {
    transfers(
      receiverAddress: {in: ["9yYya3F5EJoLnBNKW6z4bZvyQytMXzDcpU5D6yYr4jqL", "2WN4rnEmB9c9ouC7VTb4CBXbyiY7qTMcvWUxKKQ2D47T"]}
      programId: {is: "11111111111111111111111111111111"}
      options: {limit: 2, asc: ["block.height", "transaction.transactionIndex"], limitBy: {each: "receiver.address", limit: 1}}
    ) {
      currency {
        symbol
      }
      instruction {
        program {
          id
        }
      }
      sender {
        address
      }
      receiver {
        address
        mintAccount
      }
      amount
      transaction {
        signature
        transactionIndex
      }
      block {
        height
        timestamp {
          unixtime
        }
      }
    }
  }
}
```

## Earliest On-Chain Transfer for a Solana Token Mint {#earliest-mint-transfer}

**Trading**, **research**, and **provenance** workflows often need the **first** indexed transfer for a mint (mint creation or first movement). Request `limit: 1` with ascending block and transaction index. Inspect `sender`, `receiver`, and `transaction` (including `signer`) for attribution—not legal proof of "creator" by itself.

**Variations:** Add `date: {since: "..."}` to bound scan cost. Change `currency` to your mint address.

```
{
  solana(network: solana) {
    transfers(
      date: {since: "2023-05-05"}
      options: {limit: 1, asc: ["block.height", "transaction.transactionIndex"]}
      currency: {is: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN"}
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
        creator: signer
        transactionIndex
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
    }
  }
}
```

## Solana Transfers Involving the SPL Token Program {#spl-token-program-transfers}

Many SPL movements are mediated by the **Token program**. Filter `programId` to **TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA** when you need **accounting** or **audit** samples aligned to standard SPL instruction surfaces (with program and external action metadata).

**Variations:** Swap `programId` for another program (DEX, lending, etc.). Narrow `date` and raise `limit` for larger samples.

```
{
  solana(network: solana) {
    transfers(
      date: {since: "2023-05-05"}
      options: {limit: 10, asc: ["block.height", "transaction.transactionIndex"]}
      programId: {is: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"}
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
        creator: signer
        transactionIndex
      }
      block {
        height
        timestamp {
          iso8601
        }
      }
    }
  }
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

## Solana Wallet Inflow and Outflow Transfers at Block Height {#block-inflow-outflow}

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

## Solana Wallet Transfers Within a Start and End Time Range {#wallet-time-range}

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

## Largest Solana Token Transfers by Amount After a Date {#largest-transfers-after-date}

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

## Solana Wallet Historical SOL and Stablecoin Balances via Transfers {#historical-sol-stablecoin-rows}

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

## Solana Transfers for All Instructions in One Transaction Signature {#per-signature-transfers}

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

## Bulk Export: Solana Transfer Data (S3 and Parquet) {#bulk-export-s3-parquet}

For **audit**, **regulatory**, and **warehouse** workloads, teams often need **complete historical** transfer rows at scale—not only interactive GraphQL. Bitquery delivers blockchain datasets through **cloud export**, including delivery to **Amazon S3** as **Apache Parquet** for analytics engines (Snowflake, BigQuery, DuckDB, Spark, and similar), retention policies, and ACL-governed buckets. This complements the queries on this page: use GraphQL for targeted samples and dashboards, and bulk files for population-level extracts and workpaper pipelines.

Read how V1 relates to cloud delivery in [V1 vs V2 and data in the cloud](/docs/graphql-ide/v1-and-v2). For product details, see [Data in the cloud / streaming](https://bitquery.io/products/streaming). Contact Bitquery sales or support for availability, scope, and formats for your use case.

## Related Resources

- [Solana transfers schema (fields and filters)](/docs/Schema/solana/transfers)
- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana address API examples](https://docs.bitquery.io/v1/docs/Examples/Solana/address-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
