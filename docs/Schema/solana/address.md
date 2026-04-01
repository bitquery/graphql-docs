---
title: "Solana Address API"
description: "Query Solana address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Solana API", "Solana Address", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Solana Address API"/>
<meta name="description" content="Query Solana address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."/>
<meta name="keywords" content="Solana API, Solana Address, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Solana Address API" />
<meta property="og:description" content="Query Solana address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Solana Address API" />
<meta property="twitter:description" content="Query Solana address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
</head>

# Address

The Solana address API gives you information of the balance of a wallet in SOL.

```
query MyQuery {
  solana(network: solana) {
    address(address: {is: "address of the wallet"}) {
      address
      balance
      annotation
    }
  }
}


```



<details><summary>Filtering Address</summary>

`address`:  Specify the address of the wallet. The `is` keyword is used to specify that the address must match the value that is provided.

</details>

## Fields


`address`

The address field specifies the address of the account that you want to get the balance for.

`annotation`

Any label on the account.

`balance`

The balance of the account in SOL.

The balance of the account.

## Related Resources

- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Solana Coinpath API](https://docs.bitquery.io/v1/docs/Schema/solana/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
