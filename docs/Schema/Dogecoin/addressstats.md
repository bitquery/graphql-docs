---
title: Dogecoin Address Stats API
---

<head>
<meta name="title" content="Dogecoin Address Stats API"/>
<meta name="description" content="Get address balance and history on the Dogecoin blockchain. Also, get address balance and history for tokens on the Dogecoin blockchain."/>
<meta name="keywords" content="Dogecoin api, Dogecoin python api, Dogecoin nft api, Dogecoin scan api, Dogecoin matic api, Dogecoin api docs, Dogecoin crypto api, Dogecoin blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Dogecoin  Address Stats API" />
<meta property="og:description" content="Get address balance and history on the Dogecoin   blockchain. Also, get address balance and history for tokens or NFTs on the Dogecoin blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Dogecoin Address Stats API" />
<meta property="twitter:description" content="Get address balance and history on the Dogecoin blockchain. Also, get address balance and history for tokens or NFTs on the Dogecoin blockchain." />
</head>

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Here is an example that demonstrates how to retrieve statistics about a specific address:

```
{
    bitcoin(network: dogecoin) {
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
