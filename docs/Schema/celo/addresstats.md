---
title: "Celo Address Stats API"
description: "Query Celo address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."
keywords: ["Celo API", "Celo Address Stats", "Bitquery", "GraphQL"]
---

# Address Stats

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Address statistics aggregate a Celo address's lifetime activity: total sent and received amounts, transaction counts, fee expenditure, and active-day counts across CELO and stablecoin transfers. This is useful for compliance profiling, remittance-corridor analysis, and building account health dashboards for Celo's mobile-payment ecosystem.

Here is an example that demonstrates how to retrieve statistics about a smart contract:

```
{
  ethereum (network: celo_mainnet){
    addressStats(address: {is: "address here"}) {
      address {
        balance
        callTxCount
        calledTxCount
        daysWithReceived
        daysWithSent
        daysWithTransactions
        daysWithTransfers
        feeAmount
        otherTxCount
        receiveAmount
        receiveFromCurrencies
        receiveTxCount
        receiveFromCount
        sendAmount
        sendToCount
        sendToCurrencies
        sendTxCount
      }
    }
  }
}
```

<details>
<summary>Filtering Address Stats</summary>

-   `address`: Filter by a specific address or a list of addresses
-   `options`:  Filter returned data by ordering, limiting, and constraining it. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`.

</details>

-   `address`: Returns statistics for the blockchain address

## Related Resources

- [Celo schema overview](https://docs.bitquery.io/v1/docs/Schema/celo/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Celo Coinpath API](https://docs.bitquery.io/v1/docs/Schema/celo/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
