---
title: Bitcoin Address Stats API
---

<head>
<meta name="title" content="Bitcoin Address Stats API"/>
<meta name="description" content="Access address statistics with the Bitcoin API, including balance, transactions, and more for a specific blockchain address."/>

<meta name="keywords" content="Bitcoin api, Bitcoin python api, Bitcoin nft api, Bitcoin scan api, Bitcoin matic api, Bitcoin api docs, Bitcoin crypto api, Bitcoin blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Bitcoin  Address Stats API" />
<meta property="og:description" content="Access address statistics with the Bitcoin API, including balance, transactions, and more for a specific blockchain address." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Bitcoin Address Stats API" />
<meta property="twitter:description" content="Access address statistics with the Bitcoin API, including balance, transactions, and more for a specific blockchain address." />
</head>

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Here is an example that demonstrates how to retrieve statistics about a specific address:

```
{
  bitcoin {
    addressStats(address: {is: "bc1pu4q5amnl4t02mu0wf7ul7lqesjnzt7xqnu2zgcagpr4322rp6haqdyf5mv"}) {
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
