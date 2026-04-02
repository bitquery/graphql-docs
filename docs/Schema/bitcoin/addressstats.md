---
title: Bitcoin Address Stats API
description: "Get address balance and history on the Bitcoin blockchain. Also, get address balance and history for tokens on the Bitcoin blockchain."
---

<head>
<meta name="title" content="Bitcoin Address Stats API"/>
<meta name="description" content="Get address balance and history on the Bitcoin blockchain. Also, get address balance and history for tokens on the Bitcoin blockchain."/>
<meta name="keywords" content="Bitcoin api, Bitcoin python api, Bitcoin nft api, Bitcoin scan api, Bitcoin matic api, Bitcoin api docs, Bitcoin crypto api, Bitcoin blockchain api,matic network api"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Bitcoin  Address Stats API" />
<meta property="og:description" content="Get address balance and history on the Bitcoin   blockchain. Also, get address balance and history for tokens or NFTs on the Bitcoin blockchain." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Bitcoin Address Stats API" />
<meta property="twitter:description" content="Get address balance and history on the Bitcoin blockchain. Also, get address balance and history for tokens or NFTs on the Bitcoin blockchain." />
</head>

The `addressstats` field allows us to retrieves statistics related to blockchain addresses.

Address statistics provide an aggregate profile of a Bitcoin address: total sent and received amounts, transaction counts, fee totals, and the number of active days. This is useful for risk scoring, compliance profiling, and building explorer-style address summary pages without pulling individual transaction history. Because Bitcoin uses a UTXO model, these aggregates are derived from input and output activity rather than account-level state.

Here is an example that demonstrates how to retrieve statistics about a specific address; there is a balance field, too; please avoid using it; if you require a BTC balance, then please use [this API](https://docs.bitquery.io/v1/docs/examples/Bitcoin/bitcoin-address-api).

```
{
  bitcoin {
    addressStats(address: {is: "bc1pu4q5amnl4t02mu0wf7ul7lqesjnzt7xqnu2zgcagpr4322rp6haqdyf5mv"}) {
      address {
        address
        annotation
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

## Related Resources

- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
- [Bitcoin API examples](https://docs.bitquery.io/v1/docs/examples/Bitcoin)
- [Coinpath (Bitcoin)](https://docs.bitquery.io/v1/docs/Schema/bitcoin/coinpath)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Documentation intro](https://docs.bitquery.io/v1/docs/intro)
