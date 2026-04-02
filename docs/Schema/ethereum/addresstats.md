---
title: "Ethereum Addresses Stats API"
description: "Explore comprehensive address statistics, including counts, aggregates, and historical data for transfers, balances, fees, and more."
---

<head>
<meta name="title" content="Ethereum Addresses Stats API"/>

<meta name="description" content="Explore comprehensive address statistics, including counts, aggregates, and historical data. Get insights into transfers, balances, fees, and more."/>

<meta name="keywords" content="Address Stats, ERC721, NFT, NFTs, Token Balance, ERC20, USDT Balance, USDC Balance, ETH Balance, Ethereum, Ethereum Address"/>

<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />

<meta property="og:title" content="Ethereum Addresses Stats API" />

<meta property="og:description" content="Explore comprehensive address statistics, including counts, aggregates, and historical data. Get insights into transfers, balances, fees, and more." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<meta property="twitter:title" content="Ethereum Addresses Stats API" />

<meta property="twitter:description" content="Explore comprehensive address statistics, including counts, aggregates, and historical data. Get insights into transfers, balances, fees, and more." />
</head>

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Address statistics provide an aggregate profile of an Ethereum address in a single query: total sent and received amounts, transaction counts (including calls and called transactions), fee expenditure, the number of distinct currencies involved, and the count of active days. This is useful for compliance profiling, risk scoring, explorer summary pages, and any workflow where you need a high-level view of an address's lifetime activity without pulling every individual transaction.

Here is an example that demonstrates how to retrieve statistics about the USDT smart contract:

```
{
  ethereum {
    addressStats(address: {is: "0xdac17f958d2ee523a2206206994597c13d831ec7"}) {
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

- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Transfer API examples](https://docs.bitquery.io/v1/docs/Examples/Transfers/transfer-api)
- [Coinpath (Ethereum)](https://docs.bitquery.io/v1/docs/Schema/ethereum/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)
