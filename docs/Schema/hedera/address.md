---
title: "Hedera Address API"
description: "Query Hedera address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Hedera API", "Hedera Address", "Bitquery", "GraphQL"]
---

<head>
<meta name="title" content="Hedera Address API"/>
<meta name="description" content="Query Hedera address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."/>
<meta name="keywords" content="Hedera API, Hedera Address, Bitquery, GraphQL"/>
<meta name="robots" content="index, follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="language" content="English"/>
<meta property="og:type" content="website" />
<meta property="og:title" content="Hedera Address API" />
<meta property="og:description" content="Query Hedera address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Hedera Address API" />
<meta property="twitter:description" content="Query Hedera address data using Bitquery GraphQL API. Get address balances, annotations, and related activity." />
</head>

# Address

The Address API provides basic information about addresses on the Hedera Blockchain. It offers information about various aspects, including the balance of the native currency associated with the address, any available annotations, and more.

Here's an example that shows how to retrieve the balance of an address:

```
{
  hedera {
    address(address: {is: "0x0000000000000000000000000000000000000c9d"}) {
      address
      balance
    }
  }
}
```

<details>
<summary>Fitlering Address</summary>

Use the `address` field to filter by a specific address or a list of addresses, you can use both EVM address format and compact format.

</details>

### Returned Address Information

- `address`: provides the address itself
- `annotation`: offers any available annotation associated with the address
- `balance`: displays the balance of the native currency
- `tokenBalances`: shows balances of all tokens, both fungible and non-fungible

## Related Resources

- [Hedera schema overview](https://docs.bitquery.io/v1/docs/Schema/hedera/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Hedera Coinpath API](https://docs.bitquery.io/v1/docs/Schema/hedera/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
