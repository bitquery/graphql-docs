---
title: "Tron Transactions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron transactions. Get transactions by block, height, fees, energy, and counts."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

# Transaction API

Query Tron transactions by block height, including fees, energy usage, net consumption, and result status.

## List Tron Transactions at Block Height With Fees Energy and Logs

Retrieve all transactions at a given Tron block height along with energy fees, total energy usage, net fees, log counts, result status, and signatures.

**Variations:** Change the `height` filter to target a different block, or add [date and time filters](/docs/category/query-features) to select a range.

```
{
  tron {
    transactions(height: {is: 53420256}) {
      energyFee
      energyUsageTotal
      fee
      hash
      logsCount
      netFee
      netUsage
      result
      signatures
    }
  }
}
```

## Count Tron Transactions at a Specific Block Height

Count the total number of transactions recorded at a specific Tron block height.

**Variations:** Swap `height` for a [date range filter](/docs/category/query-features) to count transactions across multiple blocks.

```
{
  tron {
    transactions(height: {is: 53420256}) {
      count
    }
  }
}
```

This query retrieves the count of transactions that occurred at a specific block height (53420256) on the Tron blockchain.

<!-- ADDED BY CLAUDE — please review. SEO target: "Tron energy usage", "Tron bandwidth fees",
     "Tron failed transactions", "TRX gas tracker". Energy/bandwidth is unique to Tron and
     is one of the most-searched Tron developer topics. -->

## Top Tron Energy Spenders (TRC20 Resource Consumers)

Tron uses an energy/bandwidth model instead of EVM-style gas, so identifying the biggest energy consumers is a uniquely Tron analytics use case. This query ranks addresses by total energy burned — useful for stablecoin issuers, DEX routers, and dApps optimizing TRX rental costs.

```graphql
{
  tron(network: tron) {
    transactions(
      date: {since: "2026-05-01", till: "2026-05-02"}
      options: {desc: "total_energy", limit: 25}
    ) {
      total_energy: energyUsageTotal(calculate: sum)
      total_energy_fee: energyFee(calculate: sum)
      tx_count: count
      sender: contractAddress {
        address
      }
    }
  }
}
```

Returns the 25 addresses that spent the most energy on Tron in January 2024, including total energy fee paid and transaction count.

## Daily Tron Network Fees and Energy Burn (Time Series)

Aggregate daily Tron network fee and energy metrics, which can be used in the canonical chain-health dashboards.

```graphql
{
  tron(network: tron) {
    transactions(
      date: {since: "2026-01-01", till: "2026-03-31"}
      options: {asc: "date.date"}
    ) {
      date {
        date(format: "%Y-%m-%d")
      }
      tx_count: count
      total_fees: fee(calculate: sum)
      total_energy: energyUsageTotal(calculate: sum)
      total_net_usage: netUsage(calculate: sum)
      total_energy_fee: energyFee(calculate: sum)
    }
  }
}
```

Returns one row per day with transaction count, total TRX fees, total energy and bandwidth (`netUsage`) consumed, and total energy fee — the four metrics every Tron chain-health dashboard needs.

<!-- END Claude additions -->
## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron transfers examples](https://docs.bitquery.io/v1/docs/Examples/tron/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
