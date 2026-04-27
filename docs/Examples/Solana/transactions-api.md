---
title: "Solana Transactions API Examples — Fees, Fee Payer, Signers, Block Context"
description: "Production-ready GraphQL examples for Solana transactions on Bitquery V1: query by date range, signer, fee payer, success/failure, and inner instruction counts. Built for fee analysis, wallet activity, audit, and reporting."
keywords:
  [
    "Solana transactions API",
    "Solana GraphQL",
    "Solana fee payer",
    "Solana signer",
    "Solana failed transactions",
    "Solana historical transactions",
    "Solana audit",
    "Bitquery V1",
  ]
---

# Solana Transactions API examples

The Solana **Transactions API** returns transaction-level data on Bitquery V1 — fee payer, signer, transaction fee, success or failure, instruction and inner-instruction counts, signature, and full block context — across the **entire historical chain**. Use it for **fee analysis**, **wallet activity reporting**, **audit and reconciliation**, **operations dashboards**, and as a complement to the [Solana transfers API](/docs/Examples/Solana/transfers) when you need transaction-level metadata rather than per-transfer rows.

> Looking for parsed instructions, program IDs, or DEX swap decoding? Those have moved to the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** — see also [V1 vs V2](/docs/graphql-ide/v1-and-v2).

## Use cases at a glance {#use-cases}

- **Fee analysis and capacity planning** — [transactions in a date range](#date-range), [paid by a specific fee payer](#fee-payer-vs-signer)
- **Wallet activity and operations** — [a wallet's signed transactions in a window](#wallet-signed-range)
- **Audit and reconciliation** — pair with [transfers](/docs/Examples/Solana/transfers#parallel-sent-received-range) to attach fees, success status, and signer to every booked movement
- **Failure analytics and debugging** — [filter to failed transactions](#failed-transactions)
- **Sponsored transactions** — [find transactions where fee payer ≠ signer](#fee-payer-vs-signer)

## Get Solana transactions in a date range {#date-range}

Fetch Solana transactions within a precise UTC time window. Returns fee payer, instruction counts, success flag, and transaction signature for each transaction. [Run query](https://ide.bitquery.io/transactions-in-a-specific-timeperiod).

**Variations:** Adjust the `time` range as needed. Add `signer: {is: "..."}` to filter by wallet. Use `success: {is: true}` to exclude failed transactions, or `success: {is: false}` to focus on failures. Add [limit/offset and sort](/docs/query-features/filtering/options) for pagination and ordering.

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

## Solana transactions for a wallet (signer) in a date range {#wallet-signed-range}

Get all transactions signed by a specific wallet within a time window using the `signer` filter. Returns instruction counts, fees, success status, and block details. Useful for wallet activity reports, billing reconciliation, and per-user analytics. [Run query](https://ide.bitquery.io/transactions-of-an-address-in-a-specific-timeperiod).

**Variations:** Change the `signer` address and `time` range. Add `feePayer: {is: "..."}` if the fee payer differs from the signer. Use `success: {is: false}` to find failed transactions. Combine with the [transfers API](/docs/Examples/Solana/transfers#wallet-sender-receiver) to attach the actual SOL/SPL movements.

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

## Failed Solana transactions in a window {#failed-transactions}

Filter to **failed** Solana transactions only. Useful for debugging stuck workflows, monitoring contract or relayer health, and surfacing user error patterns. [Open in IDE](https://ide.bitquery.io/).

**Variations:** Add `signer: {is: "..."}` to focus on a single wallet, or `feePayer: {is: "..."}` to track relayer/protocol fee-payer failures. Adjust the `time` window for incident postmortems.

```
{
  solana(network: solana) {
    transactions(
      time: {since: "2025-07-25T00:00:00Z", till: "2025-07-25T01:00:00Z"}
      success: {is: false}
      options: {limit: 50, desc: ["block.height", "transactionIndex"]}
    ) {
      block {
        height
        timestamp { iso8601 }
      }
      signer
      feePayer
      transactionFee
      instructionsCount
      innerInstructionsCount
      signature
      success
    }
  }
}
```

## Distinguish fee payer from signer {#fee-payer-vs-signer}

Find transactions where the **fee payer** is different from the **signer** — common for sponsored transactions, relayer architectures, and dapp-funded user flows. Useful for cost attribution, treasury controls, and protocol-fee analytics.

**Variations:** Replace the `feePayer` address with your relayer or treasury wallet. Combine with [transfers](/docs/Examples/Solana/transfers#per-token-sent-received-balance) to attribute net flow to the funded users.

```
{
  solana(network: solana) {
    transactions(
      time: {since: "2025-07-01", till: "2025-07-31"}
      feePayer: {is: "FeePayerWalletAddressHere"}
      success: {is: true}
      options: {limit: 100, desc: ["block.height", "transactionIndex"]}
    ) {
      signer
      feePayer
      transactionFee
      signature
      instructionsCount
      block { height timestamp { iso8601 } }
    }
  }
}
```

## Related Resources

- [Solana transfers API examples](/docs/Examples/Solana/transfers) — full historical SOL and SPL transfer rows, including [bulk export to S3 + Parquet](/docs/Examples/Solana/transfers#bulk-export-s3-parquet)
- [Solana address API examples](/docs/Examples/Solana/address-api) — wallet balance and multi-address lookups
- [Solana schema overview](/docs/Schema/solana/overview)
- [Solana transactions schema](/docs/Schema/solana/transactions)
- [Solana Coinpath schema](/docs/Schema/solana/coinpath)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2) — where Solana instruction- and DEX-level data lives
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
