---
title: Algorand Address API
description: Get in-depth information about Algorand addresses with the Algorand Address API.
image: /img/social-preview/algorand-social.png
keywords: [algorand, algorand explorer, algorand nft, algorand stats]
---

The `address` field allows us to fetch information about a specific address or a list of addresses from the Algorand blockchain.

Here is an example that demonstrates how to retrieve basic information about a specific address:

```
query {
  algorand {
    address(
      address: {is: "COZR4NBZO3AHDQWPZM3YPXGOADRNS5NSXWYMZJNORQIIGQPDSBZIA5K2PE"}
    ) {
      balance
      pendingRewards
      rewards
      round
      status
    }
  }
}
```

<details>
<summary>Filtering Algorand Address</summary>

Algorand address data can be filtered using following argument:

- `address`: You can pass a specific address or a list of addresses to the `address` argument to information on them.

</details>

The following are available fields for the `address`:

- `address`: returns the address and its annotation (if an annotation is given to that address).
- `balance`: returns the current balance of the address.
- `pendingRewards`:  returns the current pending reward for the address.
- `rewards`: returns the current reward for the address.
- `round`: returns the current round.
- `smartContract`: returns information about a smart contract if it exists at the address.
- `status`: returns the current status of the address.