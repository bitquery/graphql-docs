---
title: "Cronos Address Stats API"
description: "Query Cronos address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."
keywords: ["Cronos API", "Cronos Address Stats", "Bitquery", "GraphQL"]
---

# Address Stats

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Address statistics aggregate a Cronos address's lifetime activity into a single response: total CRO and token amounts sent and received, transaction counts, fee totals, and active-day counts. This is useful for compliance profiling, exchange account monitoring, and building summary pages for the Cronos ecosystem without scanning every transaction individually.

Here is an example that demonstrates how to retrieve statistics about the USDT smart contract:

```
{
  ethereum (network: cronos){
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

- [Cronos schema overview](https://docs.bitquery.io/v1/docs/Schema/Cronos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cronos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/Cronos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
