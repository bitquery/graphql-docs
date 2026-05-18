---
title: "Transfer API Examples"
description: "Example GraphQL queries for token and native transfers on EVM chains. Filter by address, contract, and time."
keywords: [transfer API examples, GraphQL queries, Bitquery]
sidebar_position: 1
---

# Transfer API

The Transfer API returns token movements — both native (ETH, BNB, SOL) and non-native (ERC-20, BEP-20, SPL) — across all supported blockchains. Use it to track deposits, withdrawals, and internal contract transfers with USD-equivalent amounts, timestamps, and transaction hashes.

## Get All WBNB Token Transfers on BNB Chain

Fetch the latest transfers for a specific token by passing its contract address in the `currency` filter. This query returns the 10 most recent WBNB transfers on BNB Chain with sender, receiver, USD amounts, and transaction hashes.

**Variations:** Query multiple tokens at once with `currency: {in: ["token1", "token2"]}`. For native tokens use the symbol directly — e.g. `{is: "BNB"}`. Switch `network` to any supported EVM chain. Apply [sorting](/docs/query-features/filtering/sorting) or [limit/offset](/docs/query-features/filtering/options) for pagination.

[Open this query on IDE](https://ide.bitquery.io/WBNB-transfers-on-the-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
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

## Track WBNB Transfers Sent by a BNB Chain Address

Filter token transfers by `sender` to see all outgoing movements from a specific wallet. Returns the latest WBNB transfers sent by the given address with block timestamps and USD values.

**Variations:** Swap `sender` for `receiver` to track inflows instead. Use `any` to get both directions. Add [aggregations](/docs/query-features/aggregation/) like `count` or `sum` on the `amount` field to summarize activity.

[Open this query in IDE](https://ide.bitquery.io/WBNB-transfers-of-a-sender-on-the-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      sender: { in: ["0x170d2ed0b2a5d9f450652be814784f964749ffa4"] }
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
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

## Get WBNB Transfers Received by a BNB Chain Address

Retrieve all incoming token deposits for a wallet by filtering on `receiver`. Returns deposit amounts in BNB and USD with sender details and block timestamps — useful for payment verification or deposit tracking.

**Variations:** Combine with a `date` filter for a specific time window. Use `amount: {gt: 1000}` to surface only large deposits. Apply [count aggregation](/docs/query-features/aggregation/count) to get total deposit count.

[Open this query on IDE](https://ide.bitquery.io/WBNB-transfers-of-a-receiver-on-the-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      receiver: { in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"] }
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
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

## Query All WBNB Transfers Sent and Received by an Address

Get a combined view of all incoming and outgoing transfers for a wallet using the `any` filter (OR on `sender` and `receiver`). This is the standard pattern for building a complete token transfer history.

**Variations:** Narrow results with `currency`, `date`, or `amount` filters. Apply [sorting](/docs/query-features/filtering/sorting) by `block.height` or `amount` for different orderings.

[Open this query on IDE](https://ide.bitquery.io/WBNB-transfers-of-an-address-on-the-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "block.height", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      any: [
        { sender: { in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"] } }
        { receiver: { in: ["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"] } }
      ]
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
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

## Fetch Largest WBNB Transfers on BNB Chain by Amount

Find the largest token transfers by sorting with `desc: "amount"`. This query surfaces the top 10 WBNB whale movements on BNB Chain in a given date range — useful for whale alerts or market-impact analysis.

**Variations:** Add `sender` or `receiver` filters to focus on a specific address. Use `amount: {gt: 10000}` to set a minimum threshold. Switch to [ascending sort](/docs/query-features/filtering/sorting) for smallest transfers.

[Open this query on IDE](https://ide.bitquery.io/Top-10-WBNB-Transfers-on-Binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      options: { desc: "amount", limit: 10, offset: 0 }
      date: { since: "2023-07-15", till: "2023-07-19" }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      amount: { gt: 0 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
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

## Get All Transfers Inside a BNB Chain Transaction

Inspect every token movement inside a single transaction by filtering on `txHash`. Returns all transfers (native and token) triggered by that transaction, including internal contract-to-contract movements.

**Variations:** Add `external: true` to see only direct transfers, or `external: false` for internal-only. Combine with [smart contract calls](/docs/Examples/smartcontractCalls/smart-contract-calls-api) on the same `txHash` for a full execution trace.

[Open this query on IDE](https://ide.bitquery.io/All-transfers-for-a-transaction-on-binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      amount: { gt: 0 }
      txHash: {
        is: "0xda0e780b6c527ced6e7d29e002643f65fc194b6f23df153cf35b4396f71a80d6"
      }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
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

## Query All Transfers in a Specific BNB Chain Block

Get every token transfer that occurred in a specific block by filtering on `height`. Useful for block-level auditing or reconstructing the full state change of a block.

**Variations:** Use `height: {between: [N, M]}` for a range of blocks. Filter by `currency` to focus on a single token. Add [count aggregation](/docs/query-features/aggregation/count) to get total transfer count per block.

[Open this query on IDE](https://ide.bitquery.io/All-transfers-in-a-block-on-binance-chain)

```graphql
{
  ethereum(network: bsc) {
    transfers(amount: { gt: 0 }, height: { is: 30068951 }) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
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

## Query Internal-Only Transfers in a BNB Chain Block

Filter for internal-only transfers triggered by smart contract execution within a block using `external: false`. Internal transfers are not visible in standard transaction lists but are critical for understanding DeFi protocol flows and contract interactions.

**Variations:** Set `external: true` to see only direct (user-initiated) transfers. Combine both in separate queries to compare internal vs external activity in a block.

```graphql
{
  ethereum(network: bsc) {
    transfers(amount: { gt: 0 }, height: { is: 30068951 }, external: false) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
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

## Aggregate Tokens Received by a BNB Chain Wallet Since a Date

Summarize all tokens received by a wallet since a given date. This query aggregates incoming transfers grouped by currency — showing total amount received in each token with USD values.

:::note
BNB Chain has very high transaction volume. Always include a `date` filter and avoid querying more than 1 year of data to keep response times fast.
:::

**Variations:** Switch `receiver` to `sender` for outbound totals. Add [aggregations](/docs/query-features/aggregation/) like `count` per currency for transfer frequency. Use `amount(calculate: sum)` for explicit totals.

[Open this query on IDE](https://ide.bitquery.io/Summary-of-tokens-received-by-an-address)

```graphql
{
  ethereum(network: bsc) {
    transfers(
      amount: { gt: 0 }
      receiver: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      date: { since: "2023-01-01" }
    ) {
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
    }
  }
}
```

## Get Latest Filecoin Blocks Sorted by Height

Fetch the latest Filecoin blocks with height, timestamp, transaction count, and miner rewards. Uses query variables for `limit`, `offset`, and date range — a pattern you can reuse for any paginated query.

**Variations:** Adjust `limit` and `offset` variables for pagination. Use [sorting](/docs/query-features/filtering/sorting) with `asc: "height"` for chronological order. Add `reward(calculate: sum)` to aggregate total rewards over a period.

[Access query here](https://ide.bitquery.io/latest-filecoin-transfers)

```

  query ($network: FilecoinNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  filecoin(network: $network) {
    blocks(
      options: {desc: "height", limit: $limit, offset: $offset}
      date: {since: $from, till: $till}
    ) {
      timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      count
      messageCount
      reward
      minerTips
    }
  }
}

<!-- Parameters -->
{

  "limit": 10,
  "offset": 0,
  "network": "filecoin",
  "from": "2023-02-22",
  "till": "2023-03-01T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Get SPL Token Transfers on Solana Excluding Native SOL

Retrieve SPL token transfers on Solana while excluding native SOL using the `currency: {not: "SOL"}` filter. Returns sender, receiver, token details, and USD-equivalent amounts within a specified time window.

**Variations:** Remove the `not` filter to include SOL transfers. Use `currency: {is: "TOKEN_ADDRESS"}` to track a specific SPL token. Adjust the `time` variables for different date ranges. Apply [limit/offset](/docs/query-features/filtering/options) for pagination.

You can run the query [here](https://ide.bitquery.io/solana_transfers_token_)

```

query ($network: SolanaNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  solana(network: $network) {
    transfers(
      options: {desc: "block.height", limit: $limit, offset: $offset}
      time: {since: $from, till: $till}
      currency:{not:"SOL"}
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
      }
      receiver {
        address
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        signature
      }
    }
  }
}


{
  "limit": 10,
  "offset": 0,
  "network": "solana",
  "from": "2024-01-12T21:35:54.000Z",
  "till": "2024-01-12T23:50:54.999Z",
  "dateFormat": "%Y-%m-%d"
}
```

## Fetch GANG and CeloPunks NFT Transfers on Celo Mainnet

Track NFT transfers on Celo by passing collection contract addresses in the `currency: {in: [...]}` filter. This query returns the latest ChinChilla Gang and CeloPunks NFT movements with gas costs, block timestamps, and token metadata.

**Variations:** Replace the contract addresses with any NFT collection on Celo. Check `tokenType` in the response to confirm ERC-721 vs ERC-1155. Add `sender` or `receiver` filters to track a specific wallet's NFT activity.
You can find the query [here](https://ide.bitquery.io/Celo-NFT-Transfers)

```
query MyQuery {
  ethereum(network: celo_mainnet) {
    transfers(
      currency: {in: ["0xc8DF51073CD581902b4fb50131d31f29343131F0","0x9f46B8290A6D41B28dA037aDE0C3eBe24a5D1160"]}
      options: {limit: 10, desc: "block.height"}
    ) {
      currency {
        address
        name
        symbol
        tokenType
      }
      amount
      sender {
        address
      }
      receiver {
        address
      }
      transaction {
        gas
        gasPrice
        gasValue
        hash
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

## Detailed NFT Transfers

For detailed NFT transfer data including token IDs, metadata, and richer filtering, use the [V2 Streaming APIs](https://bitquery.io/products/streaming) which have dedicated NFT support.

## Related Resources

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Transaction API examples](https://docs.bitquery.io/v1/docs/Examples/Transactions/transaction-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)