---
title: BNB Address Stats API
description: "Get address balance history and aggregate statistics on BNB Smart Chain."
---

<head>
<meta name="title" content="BNB Address Stats API"/>
<meta name="description" content="Get address balance and history on the BNB blockchain. Also, get address balance and history for tokens or NFTs on the BNB blockchain."/>
<meta name="keywords" content="BNB api, BNB python api, BNB nft api, BNB scan api, BNB matic api, BNB api docs, BNB crypto api, BNB blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="BNB  Address Stats API" />
<meta property="og:description" content="Get address balance and history on the BNB   blockchain. Also, get address balance and history for tokens or NFTs on the BNB blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="BNB  Address Stats API" />
<meta property="twitter:description" content="Get address balance and history on the BNB blockchain. Also, get address balance and history for tokens or NFTs on the BNB blockchain." />
</head>


The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Address statistics aggregate a BSC address's lifetime activity into a single response: total BNB and token amounts sent and received, transaction counts, fee totals, distinct currency counts, and the number of active days. This helps compliance teams profile addresses, exchange operators build account-health dashboards, and analytics products surface whale or bot behavior without replaying individual transactions.

Here is an example that demonstrates how to retrieve statistics about the USDT smart contract:

```
{
  ethereum (network: bsc){
    addressStats(address: {is: "0x55d398326f99059ff775485246999027b3197955"}) {
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

- [BNB Smart Chain schema overview](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/overview)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath (BNB Smart Chain)](https://docs.bitquery.io/v1/docs/Schema/binance_smart_chain/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)

