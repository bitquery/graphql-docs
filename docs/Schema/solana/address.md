---
title: "Solana Address API"
description: "Query Solana address data using Bitquery GraphQL API. Get address balances, annotations, and related activity."
keywords: ["Solana API", "Solana Address", "Bitquery", "GraphQL"]
---

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
