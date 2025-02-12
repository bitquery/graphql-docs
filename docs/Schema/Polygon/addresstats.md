---
title:  Polygon Address Balance and Activity Summary
---


<head>
<meta name="title" content="Polygon Token, Smart contract Details API"/>
<meta name="description" content="Get Polygon (Matic) Token supply and other attributes. Also, get Smart Contract property details of the Polygon blockchain."/>
<meta name="keywords" content="polygon api, polygon python api, polygon nft api, polygon scan api, polygon matic api, polygon api docs, polygon crypto api, polygon blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Polygon Token, Smart contract Details API" />
<meta property="og:description" content="Get Polygon (Matic) Token supply and other attributes. Also, get Smart Contract property details of the Polygon blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Polygon Token, Smart contract Details API" />
<meta property="twitter:description" content="Get Polygon (Matic) Token supply and other attributes. Also, get Smart Contract property details of the Polygon blockchain." />
</head>

# Address Stats

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Here is an example that demonstrates how to retrieve statistics about the USDT smart contract:

```
{
  ethereum(network: matic) {
    addressStats(address: {is: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"}) {
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


:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::