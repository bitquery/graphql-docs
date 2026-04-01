---
title: "Tron Transactions API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Tron transactions. Get transactions by block, height, fees, energy, and counts."
keywords: [Tron API examples, Tron GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Tron Transactions API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Tron transactions. Get transactions by block, height, fees, energy, and counts."/>
<meta name="keywords" content="Tron API examples, Tron GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Tron Transactions API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Tron transactions. Get transactions by block, height, fees, energy, and counts." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Tron Transactions API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Tron transactions. Get transactions by block, height, fees, energy, and counts." />
</head>

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

## Related Resources

- [Tron schema overview](https://docs.bitquery.io/v1/docs/Schema/tron/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Tron transfers examples](https://docs.bitquery.io/v1/docs/Examples/tron/transfers)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)