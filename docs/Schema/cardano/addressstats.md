---
title: "Cardano Address Stats API"
description: "Query Cardano address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."
keywords: ["Cardano API", "Cardano Address Stats", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Cardano Address Stats API"/>
<meta name="description" content="Query Cardano address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics."/>
<meta name="keywords" content="Cardano API, Cardano Address Stats, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cardano Address Stats API" />
<meta property="og:description" content="Query Cardano address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cardano Address Stats API" />
<meta property="twitter:description" content="Query Cardano address stats data using Bitquery GraphQL API. Get aggregate address statistics and activity metrics." />
</head>

# AddressStats

The AddressStats API schema returns information about a wallet on its inflows, outflows and activity. The schema includes the following fields:


```
query MyQuery {
  cardano(network: cardano) {
    addressStats(
      address: {is: "addr1q8wp4tc65hgvvff0lg2dgp8dnd2hy5u4vyz9mgk8qancwmtdf8tun55syv9gvfd0dgdhx02vlyg6dp56up92a5l9qxhs9nhrfy"}
    ) {
      address {
        address
        annotation
        balance
        firstActive {
          time
        }
        inboundTransactions
        inflows
        lastActive {
          time
        }
        outboundTransactions
        outflows
        uniqueDaysWithTransfers
        uniqueReceivers
        uniqueSenders
      }
    }
  }
}
```
<details>
<summary>Filtering AddressStats</summary>

`address`
The address of the wallet

`options`
Additional options for the query, such as sorting and pagination.

</details>

## Related Resources

- [Cardano schema overview](https://docs.bitquery.io/v1/docs/Schema/cardano/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cardano Coinpath API](https://docs.bitquery.io/v1/docs/Schema/cardano/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
