---
title: "Celo Address Stats API"
description: "Query Celo address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."
keywords: ["Celo API", "Celo Address Stats", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Celo Address Stats API"/>
<meta name="description" content="Query Celo address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."/>
<meta name="keywords" content="Celo API, Celo Address Stats, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Celo Address Stats API" />
<meta property="og:description" content="Query Celo address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Celo Address Stats API" />
<meta property="twitter:description" content="Query Celo address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics." />
</head>

# Address Stats

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

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
