---
title: "Cosmos Address API"
description: "Query Cosmos address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Cosmos API", "Cosmos Address", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Cosmos Address API"/>
<meta name="description" content="Query Cosmos address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."/>
<meta name="keywords" content="Cosmos API, Cosmos Address, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Cosmos Address API" />
<meta property="og:description" content="Query Cosmos address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Cosmos Address API" />
<meta property="twitter:description" content="Query Cosmos address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
</head>

# Address

The `address` field allows us to retrieve basic information about a particular address or list of address like balance, annotation, etc.

Here is an exmaple that demonstrates retrival of balance for an address:

```
{
  cosmos {
    address(address: {is: "cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv"}) {
      address
      balance
    }
  }
}
```

<details>
<summary>Filtering Addresses</summary>

Address data can be filtered using following arguments:

-   `address`: filter by specific address or a list of addresses.

</details>

-   `address`: returns the address
  
-   `annotation`: returns annotation of the address is available
  
-   `balance`: returns native currency balance of the address
  
-   `tokensInfo`: returns token info

## Related Resources

- [Cosmos schema overview](https://docs.bitquery.io/v1/docs/Schema/cosmos/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Cosmos Coinpath API](https://docs.bitquery.io/v1/docs/Schema/cosmos/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
