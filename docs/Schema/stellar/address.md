---
title: "Stellar Address API"
description: "Query Stellar address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Stellar API", "Stellar Address", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Stellar Address API"/>
<meta name="description" content="Query Stellar address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."/>
<meta name="keywords" content="Stellar API, Stellar Address, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Stellar Address API" />
<meta property="og:description" content="Query Stellar address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Stellar Address API" />
<meta property="twitter:description" content="Query Stellar address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
</head>

# Address

Stellar Address API helps you get information on Address balance in the network. Below are the fields in the API:

```
query ($network: StellarNetwork!) {
  stellar(network: $network) {
    address(
      address: {is: "GDBRKQ43BSDBSCXKPD42RNK3BXDPOYBL6NI6IFSEW2FG7DBNN55435D5"}
    ) {
      address
      annotation
      balance
      tokenBalances {
        assetIssuer
        assetType
        balance
        assetCode
      }
    }
  }
}
{
  "network": "stellar"
}

```

<details>
<summary>Filtering Address</summary>

**address**

    The Stellar address of the account.

</details>

## Fields

- **address**

  The Stellar address of the account.

- **annotation**

  The annotation for the address that contains additional information.

- **balance**

  The balance of the account in XLM. This is the total amount of XLM that the account holds.

- **tokenBalances**

  An array of objects that represent the balances of the account in other assets. Each object has the following fields:

  - **assetIssuer** The Stellar address of the asset issuer.
  - **assetType** The type of the asset. This can be either `native` (for XLM) or `credit_alphanum4` (for other assets).
  - **balance** The balance of the account in the asset.
  - **assetCode** The symb of the asset.

## Related Resources

- [Stellar schema overview](https://docs.bitquery.io/v1/docs/Schema/stellar/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Stellar Coinpath API](https://docs.bitquery.io/v1/docs/Schema/stellar/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
