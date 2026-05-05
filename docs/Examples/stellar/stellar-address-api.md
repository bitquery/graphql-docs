---
title: "Stellar Address API Examples — Bitquery GraphQL"
description: "Example GraphQL queries for Stellar addresses. Get wallet balances, assets, issuers, and asset codes."
keywords: [Stellar API examples, Stellar GraphQL queries, Bitquery]
---

# Stellar Address API

Look up Stellar wallet balances — native XLM, token holdings, asset codes, and issuer details — using the Bitquery GraphQL API.


## Get Stellar Wallet Balance

Get the native XLM balance plus every token balance held by a Stellar wallet, including each asset's type, issuer, and code. [Run the query on the IDE](https://ide.bitquery.io/latest-balance-of-stellar-wallet).

**Variations:** Replace the `address` to inspect a different wallet. Pair with the [Stellar payments API](/docs/Examples/stellar/stellar-payments-api) to correlate holdings with recent payment activity.

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

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Stellar payments examples](https://docs.bitquery.io/v1/docs/Examples/stellar/stellar-payments-api)
- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)