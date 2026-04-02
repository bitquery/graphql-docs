---
title: "Flow Address API"
description: "Flow account addresses: native FLOW balance and annotations for Cadence wallets, contracts, and filtered address lookups."
keywords: ["Flow API", "Flow Address", "Bitquery", "GraphQL"]
---

# Address

:::caution Deprecated
Bitquery has stopped supporting the Flow blockchain. Historical data may still be available, but it is no longer updated. The schema reference below is preserved for archival purposes.
:::

The Flow Address API offers basic information about addresses from the Flow Blockchain.

Flow addresses identify accounts that can hold FLOW tokens, NFT collections, and Cadence resources. The address API returns balance, annotation, and account-level metadata. Use it for wallet lookups, collection dashboards, and verifying account identity before drilling into events or transfer history.

<details>

<summary>Filtering Addresses</summary>

You can filter addresses using the following fields:

-   address: filter data using a specific address or a list of addresses

</details>

### Returned Address Information

-   address: provides the address itself
-   annotation: provides any available annotation
-   balance: shows the balance of the native token for the given address

## Related Resources

- [Flow schema overview](https://docs.bitquery.io/v1/docs/Schema/flow/overview)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
- [Flow Coinpath API](https://docs.bitquery.io/v1/docs/Schema/flow/coinpath)
- [GraphQL examples overview](https://docs.bitquery.io/v1/docs/Examples/overview)
