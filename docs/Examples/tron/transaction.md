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