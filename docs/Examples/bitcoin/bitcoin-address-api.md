---
title: "Bitcoin Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Bitcoin address data. Get balances, inputs, outputs, UTXO activity, and USD values."
keywords: [Bitcoin API examples, Bitcoin GraphQL queries, Bitquery, Bitcoin balance API, Bitcoin UTXO, BTC address balance, Bitcoin wallet balance, Bitcoin inputs outputs]
---

# BTC Balance API

Bitquery's Bitcoin Input and Output APIs let you query any address on the Bitcoin blockchain. The recommended way to calculate a Bitcoin address balance is to sum all outputs (received) and subtract all inputs (spent). This approach works directly with on-chain UTXO data, giving you accurate and verifiable results. You can also retrieve historical USD values because Bitquery stores the BTC price at the time of each transaction.

## Bitcoin Balance API

### Bitcoin Address Balance via Inputs and Outputs (Recommended)

The most reliable way to get a Bitcoin address balance using the Bitquery API. This query fetches the total BTC sent (inputs) and received (outputs) for an address, along with USD-equivalent values and first/last activity dates. Subtract inputs from outputs to get the current balance.

```
{
  bitcoin(network: bitcoin) {
    inputs(
      inputAddress: {is: "bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq"}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
    outputs(
      outputAddress: {is: "bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq"}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}

```

### Bitcoin Address Balance via addressStats

:::caution
The `addressStats` query returns pre-aggregated data. In some cases it may be slightly out of date or inaccurate. For precise balance calculations, use the **Inputs and Outputs** method above.
:::

[Run Query](https://ide.bitquery.io/Bitcoin-balance_5)

```
{
  bitcoin(network: bitcoin) {
    addressStats(address: {is: "bc1q6xra3s8c5c4vr8m5f9htkuc3neyn4zykv5seua"}) {
      address {
        balance
        inboundTransactions
        firstActive {
          time
        }
        address
        annotation
        outflows
        lastActive {
          time
        }
        uniqueSenders
        uniqueReceivers
      }
    }
  }
}

```

### Bitcoin Balance at a Specific Block Height

Need to know what a Bitcoin wallet held at a particular point in time? Use the `height` filter to cap inputs and outputs at a given block number. This is useful for audits, tax reporting, and historical portfolio snapshots. The balance at that height equals `outputs.value - inputs.value`.

[Run Query](https://ide.bitquery.io/bitcoin-balance-at-a-given-height)

```
{
  bitcoin(network: bitcoin) {
    inputs(
      inputAddress: {is: "bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq"}
      height: {lteq: 944000}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
    outputs(
      outputAddress: {is: "bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq"}
      height: {lteq: 944000}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
    }
  }
}
```

## Get Aggregated Bitcoin Balances for Multiple Addresses

Query the combined balance of several Bitcoin addresses in a single API call. Pass an array of addresses to the `inputAddress` and `outputAddress` filters using `{in: [...]}`. Results are grouped by address, so you can see each wallet's activity side by side — ideal for exchanges, custodians, or portfolio trackers monitoring multiple wallets.

```
{
  bitcoin(network: bitcoin) {
    inputs(
      inputAddress: {in: ["bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq", "bc1p2gel5e7ny42epalps3vddqrwedqh8ca4v6fdjem3pa3930ltl90s2cfg6e"]}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
      inputAddress {
        address
      }
    }
    outputs(
      outputAddress: {in: ["bc1ppu6akjngyvpxwz0w38n4evcygwh08tjtmcc0dx6ft2zzgkxtd97stwehcq", "bc1p2gel5e7ny42epalps3vddqrwedqh8ca4v6fdjem3pa3930ltl90s2cfg6e"]}
    ) {
      count
      value
      value_usd: value(in: USD)
      min_date: minimum(of: date)
      max_date: maximum(of: date)
      outputAddress {
        address
      }
    }
  }
}


```

Try this API [here](https://ide.bitquery.io/BTC-balance-API-for-multiple-addresses).

## Get Bitcoin Address First and Last Active Timestamps

Determine when a Bitcoin wallet was first and last used on-chain. This is commonly used for wallet age analysis, identifying dormant addresses, and compliance checks that need to verify how long an address has been active.

:::caution
The `addressStats` query returns pre-aggregated data which may occasionally be inaccurate. Use it for quick lookups; for precise timestamps, query inputs and outputs directly with `minimum(of: date)` and `maximum(of: date)`.
:::

```

query ($network: BitcoinNetwork!) {
  bitcoin(network: $network) {
    addressStats(address: {is: "ADDRESS_HERE"}) {
      address {
        firstActive {
          year
          month
          dayOfMonth
        }
        lastActive {
          year
          month
          dayOfMonth
        }
      }
    }
  }
}

```

Replace `ADDRESS_HERE` with the Bitcoin address you want to query.

## Bitcoin Address Inputs and Outputs Over a Date Range

Track all inflows and outflows of a Bitcoin address within a specific time window. This query returns individual transactions with block heights, timestamps, values in BTC and USD, and input/output indexes. Useful for generating transaction reports, reconciling payments, or monitoring wallet activity during a particular period.

```
{
  bitcoin(network: bitcoin) {
    outputs(
      date: {since: "2024-03-19", till: "2024-03-26"}
      outputAddress: {is: "bc1p2gel5e7ny42epalps3vddqrwedqh8ca4v6fdjem3pa3930ltl90s2cfg6e"}
      options: {desc: ["block.height", "outputIndex"], limit: 10, offset: 0}
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
    }
    inputs(
      date: {since: "2024-03-19", till: "2024-03-26"}
      inputAddress: {is: "bc1p2gel5e7ny42epalps3vddqrwedqh8ca4v6fdjem3pa3930ltl90s2cfg6e"}
      options: {desc: ["block.height", "transaction.index"], limit: 10, offset: 0}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      outputTransaction {
        hash
        index
      }
      transaction {
        hash
        index
      }
      inputIndex
      value
      value_usd: value(in: USD)
    }
  }
}

```

Try this API [here](https://ide.bitquery.io/Input-and-outputs-of-a-bitcoin-address).

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Bitcoin examples index](https://docs.bitquery.io/v1/docs/examples/Bitcoin/index)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)