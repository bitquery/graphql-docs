---
title: "Conflux Active Address API"
description: "Query Conflux active address data using Bitquery GraphQL API. Get active address metrics and participation."
keywords: ["Conflux API", "Conflux Active Address", "Bitquery", "GraphQL"]
---

# Conflux Active Address API

Conflux Active Address API gives you information on the active addresses on the Conflux chain. The following are the fields on the schema:

```
query ($network: ConfluxNetwork!) {
  conflux(network: $network) {
    activeAddresses(date: {is: "2023-08-10"}, options: {limit: 10}) {
      address {
        address
        annotation
      }
    }
  }
}
{
  "network": "conflux_hydra"
}

```

<details>

<summary> Filtering Active Address</summary>


`address`
The address of the wallet

</details>

## Fields

`address`
The address of the wallet

`annotation`
Any information about the address

## Related Resources

- [Conflux schema overview](https://docs.bitquery.io/v1/docs/Schema/conflux/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Conflux Coinpath API](https://docs.bitquery.io/v1/docs/Schema/conflux/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
