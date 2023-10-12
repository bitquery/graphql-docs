---
title: Dash Address Stats API
---

<head>
<meta name="title" content="Dash Address Stats API"/>
<meta name="description" content="Get address balance and history on the Dash blockchain. Also, get address balance and history for tokens on the Dash blockchain."/>
<meta name="keywords" content="Dash api, Dash python api, Dash nft api, Dash scan api, Dash matic api, Dash api docs, Dash crypto api, Dash blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dash  Address Stats API" />
<meta property="og:description" content="Get address balance and history on the Dash   blockchain. Also, get address balance and history for tokens or NFTs on the Dash blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dash Address Stats API" />
<meta property="twitter:description" content="Get address balance and history on the Dash blockchain. Also, get address balance and history for tokens or NFTs on the Dash blockchain." />
</head>

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Here is an example that demonstrates how to retrieve statistics about a specific address:

```
{
  Dash(network: dash) {
    addressStats(address: {is: "Xe57RefnjoHrN67uA4y6qanvBc8BQE49Qg"}) {
      address {
        address
        annotation
        balance
        inboundTransactions
        inflows
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
<summary>Filtering Address Stats</summary>

-   `address`: Filter by a specific address or a list of addresses
-   `options`:  Filter returned data by ordering, limiting, and constraining it. Available fields: `asc`, `ascByInteger`, `desc`, `descByInteger`, `limit`, `limitBy`, `offset`.

</details>

-   `address`: Returns statistics for the blockchain address
