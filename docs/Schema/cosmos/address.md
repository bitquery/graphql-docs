---
title: "Cosmos Address API"
description: "Cosmos address field: native balance, annotations, and token holdings metadata for bech32 accounts via Bitquery GraphQL."
keywords: ["Cosmos API", "Cosmos Address", "Bitquery", "GraphQL"]
---

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
