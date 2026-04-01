---
title: "Filecoin Address API"
description: "Query Filecoin address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Filecoin API", "Filecoin Address", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Filecoin Address API"/>
<meta name="description" content="Query Filecoin address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."/>
<meta name="keywords" content="Filecoin API, Filecoin Address, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Filecoin Address API" />
<meta property="og:description" content="Query Filecoin address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Filecoin Address API" />
<meta property="twitter:description" content="Query Filecoin address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
</head>

# Address

The Address API allows you to query information about addresses on the Filecoin blockchain.



```
query MyQuery {
  filecoin(network: filecoin) {
    address(address: {is: "f02216385"}) {
      address
      annotation
      balance
    }
  }
}

```
<details><summary>Filtering Address</summary>

`is`: This option specifies that the address must match the specified value.

</details>

## Fields


`address`: The address of the actor.
`annotation`: The annotation for the address.
`balance`: The balance of the address.

## Related Resources

- [Filecoin schema overview](https://docs.bitquery.io/v1/docs/Schema/filecoin/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Filecoin Coinpath API](https://docs.bitquery.io/v1/docs/Schema/filecoin/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
