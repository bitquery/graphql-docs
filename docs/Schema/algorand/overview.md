---
sidebar_position: 1
title: Algorand API Overview
description: Explore Algorand with Bitquery's Algorand API. Get data for blocks, transactions, addresses and much more. 
image: /img/social-preview/algorand-social.png
keywords: [algorand, algorand crypto, algorand explorer, algorand nft, algorand stats, algorand tvl, algorand staking, algorand block explorer]
---

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