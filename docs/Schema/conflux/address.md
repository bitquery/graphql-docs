---
title: "Conflux Address API"
description: "Query Conflux address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Conflux API", "Conflux Address", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Conflux Address API"/>
<meta name="description" content="Query Conflux address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."/>
<meta name="keywords" content="Conflux API, Conflux Address, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Conflux Address API" />
<meta property="og:description" content="Query Conflux address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Conflux Address API" />
<meta property="twitter:description" content="Query Conflux address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
</head>

# Conflux Address API

The Address API schema returns information about a wallet. The schema includes the following fields:

```

query ($network: ConfluxNetwork!, $address: String!) {
  conflux(network: $network) {
    address(address: {is: $address}) {
      balance
      annotation
      address
    }
  }
}

{
  "network": "conflux_hydra",
  "address": "address here"
}
```

<details><summary>Filtering Address</summary>

`address`
The address of the wallet

</details>

## Fields

- `address`: returns the address and its annotation (if an annotation is given to that address).
- `balance`: returns the current balance of the address.

## Related Resources

- [Conflux schema overview](https://docs.bitquery.io/v1/docs/Schema/conflux/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Conflux Coinpath API](https://docs.bitquery.io/v1/docs/Schema/conflux/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
