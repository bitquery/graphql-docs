---
title: "Bitcoin Fee API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Bitcoin transaction fees. Get per-tx fees, USD fees, and fee aggregates by account."
keywords: [Bitcoin API examples, Bitcoin GraphQL queries, Bitquery]
---

# Bitcoin Fee API

Query Bitcoin transaction fees with per-transaction breakdowns and aggregate totals in both BTC and USD. Useful for fee estimation, cost analysis, and wallet expense tracking.

import VideoPlayer from "../../../src/components/HomepageFeatures/videoplayer.js";

## List Bitcoin Transactions with Per-Tx Fees and USD Fees

Get individual Bitcoin transactions for a specific address with per-transaction fee amounts in BTC and USD, input/output values, and counts. [Run query](https://ide.bitquery.io/bitcoin-trxn-fees-for-a-account_2).

**Variations:** Remove the `inputAddress` filter to see fees across all transactions. Add `date: {since: ..., till: ...}` for a time range. Sort by `feeValue` to find highest-fee transactions.

```
qquery MyQuery {
  bitcoin(network: bitcoin) {
    transactions(
      options: {limit: 10, desc: ["block.height"]}
      date: {is: "2025-05-08"}
      inputAddress: {is: "bc1qrtjvr4d8qtstw5334mspp7rmrzl55uj3dcwj09"}
    ) {
      block {
        timestamp {
          iso8601
        }
        height
      }
      feeValue
      feeInUSD: feeValue(in:USD)
      feeValueDecimal
      hash
      index
      inputValue
      inputCountBigInt
      inputCount
      index
      outputValueDecimal
      outputValue
      outputCountBigInt
      outputCount
      inputValueDecimal
    }
  }
}
```

## Sum Total Bitcoin Fees Paid by an Address on One Day

Aggregate total fees paid by a Bitcoin address on a specific day using `feeValue(calculate: sum)` in both BTC and USD. [Run query](https://ide.bitquery.io/Get-Total-fees-paid-by-an-account-on-Bitcoin-network).

**Variations:** Change `date` to a range for multi-day totals. Remove the `inputAddress` filter for network-wide fee aggregates. Add `feeValue(calculate: average)` for average fee per transaction.

```
query MyQuery {
  bitcoin(network: bitcoin) {
    transactions(
      date: {is: "2025-05-08"}
      inputAddress: {is: "bc1qrtjvr4d8qtstw5334mspp7rmrzl55uj3dcwj09"}
    ) {
      total_fees_in_usd: feeValue(calculate:sum in:USD)
      total_fees: feeValue(calculate:sum)
    }
  }
}
```

## Video Tutorial | How to get Bitcoin Transaction Fees data using Bitquery APIs

<VideoPlayer url="https://www.youtube.com/watch?v=OR_7gQT71D4" />

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin examples index](https://docs.bitquery.io/v1/docs/examples/Bitcoin/index)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
