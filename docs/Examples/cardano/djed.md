---
title: "Djed Stablecoin API Examples — Bitquery GraphQL on Cardano"
description: "Query Djed stablecoin on Cardano with Bitquery GraphQL. Track DJED mints and burns, list recent DJED transfers, and see DJED received or sent by a specific address."
keywords:
  [
    Djed,
    DJED,
    Cardano stablecoin,
    Bitquery,
    GraphQL,
    Cardano,
    DjedMicroUSD,
    stablecoin supply,
    native token filter,
  ]
---

# Djed Stablecoin API

[Djed](https://djed.xyz) is an overcollateralized, crypto-backed stablecoin on Cardano. It is issued by COTI and was designed and implemented in collaboration with Input Output Global. Djed is a USD-pegged stablecoin (ticker **DJED**, asset name `DjedMicroUSD`) backed by ADA reserves — every issuance and redemption is a native-token **mint** or **burn** on Cardano. That means its on-chain footprint maps cleanly onto Bitquery's Cardano v1 primitives: mint activity through the `mints` API, holder balances through the `address` API, and transfers through the `inputs` / `outputs` APIs.

You can verify the DJED asset on Cardanoscan: [DjedMicroUSD token page](https://cardanoscan.io/token/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61446a65644d6963726f555344).

### How to Filter by DJED in Bitquery

On Cardano, Bitquery's `currency: {is: "..."}` filter matches native tokens by their **`tokenId`** — the [CIP-14 asset fingerprint](https://cips.cardano.org/cip/CIP-0014). For DJED, that value is:

```
currency: {is: "asset15f3ymkjafxxeunv5gtdl54g5qs8ty9k84tq94x"}
```

The asset name / symbol (`DjedMicroUSD`) and the `currency.address` field are **not** usable as filter values — Bitquery returns `currency.address` as `"-"` for Cardano native tokens. Always filter by the `tokenId` fingerprint.

## 1. Recent DJED Mint and Burn Events

Pull the 25 most recent DJED-specific mint events, filtered server-side. A positive `value` is a mint (stablecoin issued against ADA collateral) and a negative `value` is a burn (redemption). Useful for monitoring Djed supply changes, correlating large mints with ADA price moves, or driving an issuance dashboard.

**Variations:** Tighten `date` for a specific week or month, raise `limit` for deeper history, or sort with `options: {desc: "value", limit: 25}` to surface the largest single mints and burns. See [Cardano Mints examples](/docs/Examples/cardano/mints) for the same field selection used without a currency filter.

```
{
  cardano(network: cardano) {
    mints(
      currency: {is: "asset15f3ymkjafxxeunv5gtdl54g5qs8ty9k84tq94x"}
      options: {limit: 25, desc: "block.height"}
    ) {
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

## 2. Wallet's DJED and ADA Balances

Return every asset held by a Cardano address, along with its stake and rewards context. The `balance` block lists one entry per currency, so you'll see ADA plus every native token the wallet holds — including DJED if present. On the client, match `currency.tokenId == "asset15f3ymkjafxxeunv5gtdl54g5qs8ty9k84tq94x"` to extract just the DJED position.

Use this query for portfolio tracking of Djed holders, wallet-level risk analytics, or simple balance widgets in a Djed-aware wallet UI.

**Variations:** Replace the placeholder with the wallet you want to inspect, drop the `staking` block if you don't need stake / rewards context, or pair this with `addressStats` — see the [Cardano Address examples](/docs/Examples/cardano/address) — to combine per-asset balances with aggregate activity metrics in a single request.

```
{
  cardano(network: cardano) {
    address(
      address: {is: "addr1q8de89fu0j09gze96nf8mfrcz056tw8nz35lqkr46zn52j9cvtjm8enawhyjjkcf6eves2cwz4c8y9tvhjuzpvmu4rwstxfht5"}
    ) {
      address {
        address
        annotation
      }
      balance {
        value
        currency {
          name
          symbol
          decimals
          tokenId
          tokenType
        }
      }
      staking {
        controlledTotalStake
        stakedAmount
        stakedAmountWithRewards
        rewardsAmount
        rewardsAvailable
        withdrawnAmount
        address {
          address
          annotation
        }
      }
    }
  }
}
```

## 3. Recent 10 DJED Inputs and Outputs

List the 10 most recent DJED movements network-wide — `inputs` are UTXOs being spent (DJED "sent"), `outputs` are UTXOs being created (DJED "received"). Each row includes block height and timestamp, transaction hash, the counterparty address, UTXO index, raw DJED `value`, and the USD-equivalent `value_usd`. Useful for a live activity feed, a recent-transfers widget, or auditing large DJED movements.

**Variations:** Widen or narrow `limit`, add `date: {since: ..., till: ...}` to scope a period, or replace `options` with aggregate fields (`count`, `value(calculate: sum)`, `value(in: USD, calculate: sum)`) to get totals instead of a detail list.

```
{
  cardano(network: cardano) {
    inputs(
      currency: {is: "asset15f3ymkjafxxeunv5gtdl54g5qs8ty9k84tq94x"}
      options: {desc: "block.height", limit: 10}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      inputAddress {
        address
        annotation
      }
      inputIndex
      value
      value_usd: value(in: USD)
      currency {
        name
        symbol
        tokenId
      }
    }
    outputs(
      currency: {is: "asset15f3ymkjafxxeunv5gtdl54g5qs8ty9k84tq94x"}
      options: {desc: "block.height", limit: 10}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      outputAddress {
        address
        annotation
      }
      outputIndex
      outputDirection
      value
      value_usd: value(in: USD)
      currency {
        name
        symbol
        tokenId
      }
    }
  }
}
```

## 4. DJED Received by a Specific Address

List the 20 most recent DJED-bearing UTXOs received by a given Cardano address, with block context, transaction hash, output index, raw DJED `value`, and USD-equivalent. In the eUTXO model, "received" means the address appears as the `outputAddress` on a UTXO containing DJED. Useful for merchant payment ingestion, on-chain invoicing, or exchange deposit monitoring.

**Variations:** Add `date: {since: ..., till: ...}` to scope a window, change `limit` or add `offset` for pagination, pass `outputAddress: {in: [...]}` with a list of addresses to aggregate receipts across several wallets, or strip `options` and use aggregates (`count`, `value(calculate: sum)`, `value(in: USD, calculate: sum)`) to get totals received.

```
{
  cardano(network: cardano) {
    outputs(
      currency: {is: "asset15f3ymkjafxxeunv5gtdl54g5qs8ty9k84tq94x"}
      outputAddress: {is: "addr1q8de89fu0j09gze96nf8mfrcz056tw8nz35lqkr46zn52j9cvtjm8enawhyjjkcf6eves2cwz4c8y9tvhjuzpvmu4rwstxfht5"}
      options: {desc: "block.height", limit: 20}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      outputIndex
      outputDirection
      value
      value_usd: value(in: USD)
      currency {
        name
        symbol
        tokenId
      }
    }
  }
}
```

## 5. DJED Sent by a Specific Address

List the 20 most recent DJED-bearing UTXOs spent by a given Cardano address. In the eUTXO model, "sent" means the address appears as the `inputAddress` on a UTXO containing DJED (that UTXO is being consumed in a transaction). Useful for tracking outflows from a wallet, spend-side accounting, or tax reporting.

**Variations:** Add `date: {since: ..., till: ...}` for a specific period, pass `inputAddress: {in: [...]}` for multi-wallet aggregation, or drop `options` in favour of aggregates (`count`, `value(calculate: sum)`, `value(in: USD, calculate: sum)`) for totals sent. Combine with Query 4 in a single request to reconstruct a wallet's full DJED ledger — net DJED held equals the sum of received `value` minus the sum of sent `value`.

```
{
  cardano(network: cardano) {
    inputs(
      currency: {is: "asset15f3ymkjafxxeunv5gtdl54g5qs8ty9k84tq94x"}
      inputAddress: {is: "addr1q8de89fu0j09gze96nf8mfrcz056tw8nz35lqkr46zn52j9cvtjm8enawhyjjkcf6eves2cwz4c8y9tvhjuzpvmu4rwstxfht5"}
      options: {desc: "block.height", limit: 20}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        hash
      }
      inputIndex
      value
      value_usd: value(in: USD)
      currency {
        name
        symbol
        tokenId
      }
    }
  }
}
```

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Cardano Mints API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/mints)
- [Cardano Address API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/address)
- [Cardano Inputs and Outputs API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/inputs-outputs)
- [Cardano Coinpath API examples](https://docs.bitquery.io/v1/docs/Examples/cardano/coinpath)
- [Djed official site](https://djed.xyz)
- [Djed app (mint / redeem UI)](https://app.djed.xyz/)
- [Djed paper — COTI launch post](https://medium.com/cotinetwork/a-new-era-for-stablecoins-begins-djed-is-live-on-mainnet-55971971f2a8)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
