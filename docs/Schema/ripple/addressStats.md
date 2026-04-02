---
title: "Ripple Addresses Stats API"
description: "Query aggregate address statistics on the XRP Ledger."
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

Address statistics provide aggregate metrics for an XRP Ledger account: transaction counts, sent and received amounts across XRP and issued currencies, fee totals, and active-day counts. These summaries are useful for compliance profiling, payment corridor analysis, and building explorer-style account pages without scanning every ledger entry.

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

## Related Resources

- [XRP Ledger schema overview](https://docs.bitquery.io/v1/docs/Schema/ripple/overview)
- [Ripple API examples](https://docs.bitquery.io/v1/docs/Examples/ripple)
- [Coinpath (XRP Ledger)](https://docs.bitquery.io/v1/docs/Schema/ripple/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

