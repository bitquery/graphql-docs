---
sidebar_position: 1
---

# Overview

Bitquery API offers access to indexed data from the Algorand blockchain.

to fetch data from Algorand blockchain, you need to provide the `network` argument with the value `algorand`as shown below:

```
{
  algorand(network: algorand) {
    __typename
  }
}
```

You can also fetch data from Algorand Testnet (`algorand_testnet`) and Algorand Betanet (`algorand_betanet`).

Let's dive in and explore the Algorand data available through Bitquery API.