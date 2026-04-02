---
title: "Conflux Address API"
description: "Conflux address API: native CFX balance and annotations on Conflux networks (e.g. Hydra) through Bitquery GraphQL."
keywords: ["Conflux API", "Conflux Address", "Bitquery", "GraphQL"]
---

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
