---
title: "Cardano Mints API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Cardano native-token mints. Get recent mint events and aggregate mint counts over time."
keywords:
  [
    Cardano API examples,
    Cardano GraphQL queries,
    Bitquery,
    Cardano mints,
    native tokens,
    policy ID,
  ]
---

# Cardano Mints API

Cardano native tokens are created and destroyed through **minting policies** rather than smart contracts. The Mints API returns on-chain mint and burn events with the minting transaction, policy-based asset identifiers, amounts, and block context — useful for tracking NFT collection drops, fungible-token issuance, and supply changes.

## Get Recent Cardano Mint Events

Retrieve the 10 most recent mint events across all Cardano minting policies. Each result includes the block height and timestamp, the minted amount, the transaction hash and index, and the full currency metadata (policy-based `address`, name, symbol, `tokenId`, `tokenType`, and decimals). A positive `value` is a mint, a negative value is a burn.

**Variations:** Filter to a time window with `date: {since: ..., till: ...}`, use `options: {desc: "value", limit: 10}` to surface the largest mints, or inspect `currency.address` in results to identify a specific policy's activity (the policy ID is the first 56 hex chars; the remainder is the hex-encoded asset name).

```
{
  cardano(network: cardano) {
    mints(options: {limit: 10, desc: "block.height"}, date: {is: "2026-05-01"}) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      value
      transaction {
        hash
        index
      }
      currency {
        address
        name
        symbol
        tokenId
        tokenType
        decimals
      }
    }
  }
}
```

## Aggregate Cardano Mint Counts by Month

Summarize total minting activity per month by pulling the monthly `mintCount` from the `transactions` cube. Returns the month bucket, total mint count, input and output values, and fees — useful for tracking issuance trends over quarters and years.

**Variations:** Change `startOfInterval(unit: month)` to `week` or `day` for finer buckets, narrow the `date` window, or drop `mintCount(calculate: sum)` for per-transaction detail. Combine with the query above to drill from monthly totals down to individual mint events.

```
{
  cardano(network: cardano) {
    transactions(
      options: {desc: "date.month", limit: 12}
      date: {since: "2023-01-01", till: "2023-12-31"}
    ) {
      date {
        month
        startOfInterval(unit: month)
      }
      mintCount(calculate: sum)
      inputValue
      input_value_usd: inputValue(in: USD)
      outputCount
      inputCount
      feeValue
      fee_value_usd: feeValue(in: USD)
    }
  }
}
```

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Cardano Mints schema](https://docs.bitquery.io/v1/docs/Schema/cardano/mints)
- [Cardano Transactions API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/transactions)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
