---
title: "Velas Address Stats API"
description: "Query Velas address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."
keywords: ["Velas API", "Velas Address Stats", "Bitquery", "GraphQL"]
---

# Address Stats

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Here is an example that demonstrates how to retrieve statistics about the USDT smart contract:

```
{
  ethereum (network: velas){
    addressStats(address: {is: "0x01445c31581c354b7338ac35693ab2001b50b9ae"}) {
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

- [Velas schema overview](https://docs.bitquery.io/v1/docs/Schema/velas/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Velas Coinpath API](https://docs.bitquery.io/v1/docs/Schema/velas/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
