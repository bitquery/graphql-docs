---
title: "Ripple Addresses Stats API"
---

<head>
<meta name="title" content="Ripple Addresses Stats API"/>

<meta name="description" content="Explore comprehensive address statistics, including counts, aggregates, and historical data. Get insights into transfers, balances, fees, and more."/>

<meta name="keywords" content="Address Stats, NFT, NFTs, Token Balance, XRP, USDT Balance, USDC Balance, XRP Balance, Ripple, Ripple Address"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ripple Addresses Stats API" />

<meta property="og:description" content="Explore comprehensive address statistics, including counts, aggregates, and historical data. Get insights into transfers, balances, fees, and more." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ripple Addresses Stats API" />

<meta property="twitter:description" content="Explore comprehensive address statistics, including counts, aggregates, and historical data. Get insights into transfers, balances, fees, and more." />
</head>


The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Here is an example that demonstrates how to retrieve statistics about the USDT smart contract:

```
{
  ripple {
    addressStats(address: {is: "rUTEn2jLLv4ESmrUqQmhZfEfDN3LorhgvZ"}) {
      address {
        balance
        daysWithReceived
        daysWithSent
        daysWithTransactions
        daysWithTransfers
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