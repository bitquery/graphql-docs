---
title: "Stellar Address API"
description: "Stellar accounts: native XLM plus multi-asset tokenBalances (issuer, code, type) and annotations—GraphQL."
keywords: ["Stellar API", "Stellar Address", "Bitquery", "GraphQL"]
---

# Address

Stellar Address API helps you get information on Address balance in the network. Below are the fields in the API:

Stellar addresses (public keys) identify accounts on the Stellar network. The address API returns balance, annotation, and account-level metadata. Use it for wallet lookups, anchor verification, and portfolio dashboards that need to resolve a Stellar account before querying operations, payments, or trust-line details.

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
