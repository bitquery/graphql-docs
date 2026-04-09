---
title: "Solana Transactions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Solana transactions. Get transactions by time range, fees, instructions, and block context."
keywords: [Solana API examples, Solana GraphQL queries, Bitquery]
---

# Solana Transactions API

The Solana Transactions API returns transaction-level data including fee payer, instruction counts, success status, and block context. Use it for transaction monitoring, fee analysis, and wallet activity tracking.

## Get Solana Transactions by Date Range

Fetch Solana transactions within a precise UTC time window. Returns fee payer, instruction counts, success flag, and transaction signature for each transaction. [Run query](https://ide.bitquery.io/transactions-in-a-specific-timeperiod).

**Variations:** Adjust the `time` range as needed. Add `signer: {is: "..."}` to filter by wallet. Use `success: true` to exclude failed transactions. Add [limit/offset](/docs/query-features/filtering/options) for pagination.

```
query MyQuery {
  solana {
    transactions(
      time:{since:"2025-07-25T00:00:00Z" till:"2025-07-25T01:00:00Z"}
      options: {limit: 10, desc: ["transactionIndex", "block.height"]}
    ) {
      block {
        hash
        height
        timestamp {
          iso8601
        }
      }
      feePayer
      instructionsCount
      innerInstructionsCount
      recentBlockHash
      signature
      success
      transactionFee
      transactionIndex
    }
  }
}

```

## Get Solana Address Transactions by Date Range

Get all transactions signed by a specific wallet within a time range using the `signer` filter. Returns instruction counts, fees, success status, and block details. [Run query](https://ide.bitquery.io/transactions-of-an-address-in-a-specific-timeperiod).

**Variations:** Change the `signer` address and `time` range. Add `feePayer: {is: "..."}` if the fee payer differs from the signer. Use `success: false` to find failed transactions.

```
query MyQuery {
  solana {
    transactions(
      time: {since: "2025-07-19T01:00:00Z" till:"2025-07-19T21:00:00Z"}
      options: {limit: 100, desc: ["transactionIndex", "block.height"]}
      signer: {is: "9vKgXDW6N3S4QDdqswq7m9U9eWp839HanvQ7RhUTtKZ1"}
    ) {
      block {
        hash
        height
        timestamp {
          iso8601
        }
      }
      feePayer
      instructionsCount
      innerInstructionsCount
      recentBlockHash
      signature
      success
      transactionFee
      transactionIndex
    }
  }
}

```

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana transfers examples](https://docs.bitquery.io/v1/docs/Examples/Solana/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
