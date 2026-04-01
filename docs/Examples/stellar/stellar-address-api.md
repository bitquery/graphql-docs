---
title: "Stellar Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Stellar addresses. Get wallet balances, assets, issuers, and asset codes."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

<head>
<meta name="title" content="Stellar Address API Examples — Bitquery GraphQL"/>
<meta name="description" content="Example GraphQL queries for Stellar addresses. Get wallet balances, assets, issuers, and asset codes."/>
<meta name="keywords" content="Stellar API examples, Stellar GraphQL queries, Bitquery"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Stellar Address API Examples — Bitquery GraphQL" />
<meta property="og:description" content="Example GraphQL queries for Stellar addresses. Get wallet balances, assets, issuers, and asset codes." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Stellar Address API Examples — Bitquery GraphQL" />
<meta property="twitter:description" content="Example GraphQL queries for Stellar addresses. Get wallet balances, assets, issuers, and asset codes." />
</head>

# Stellar Address API

This API allows you to retrieve detailed information about Stellar wallet addresses, including their balances and token holdings.


## Latest Balance of a Wallet

In the below query we will retrieve the latest balance of a specific Stellar wallet address. 

```
query MyQuery {
  stellar(network: stellar) {
    address(address: {is: "GA5Q3UHRKBBZFUQBFF3CEEPY322UIEALGUA7KS7LKGMAK7WJ4NF3W742"}) {
      balance
      tokenBalances {
        balance
        assetType
        assetIssuer
        assetCode
      }
    }
  }
}

```
You can run the query [here](https://ide.bitquery.io/latest-balance-of-stellar-wallet)

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar payments examples](https://docs.bitquery.io/v1/docs/Examples/stellar/stellar-payments-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)