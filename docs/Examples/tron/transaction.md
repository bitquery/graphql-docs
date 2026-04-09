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

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron transfers examples](https://docs.bitquery.io/v1/docs/Examples/tron/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)