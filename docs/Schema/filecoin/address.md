---
title: "Filecoin Address API"
description: "Filecoin actor addresses (f0/f1/f2…): FIL balance, annotation labels, and account lookup for storage and wallet actors."
keywords: ["Filecoin API", "Filecoin Address", "Bitquery", "GraphQL"]
---

# Address

The Address API allows you to query information about addresses on the Filecoin blockchain.

Filecoin addresses (actors) come in several formats—f0 (ID), f1 (secp256k1), f2 (actor/contract), and f3 (BLS). The address API returns the address itself, any annotation label, and the FIL balance. Use it for miner lookups, client account verification, and wallet dashboards that need a quick snapshot before querying messages or deal activity.

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
