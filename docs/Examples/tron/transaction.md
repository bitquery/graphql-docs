# Transaction API

Our Tron Transaction API provides detailed information about transactions from Tron Blockchain.

## Get List Of Transaction In A Particular Block

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

This query retrieves details of a specific Tron blockchain transaction at height 53420256, including energy fee, total energy usage, transaction fee, transaction hash, number of logs, net fee, net usage, transaction result, and transaction signatures.

## Get Count of Transaction In The Block

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