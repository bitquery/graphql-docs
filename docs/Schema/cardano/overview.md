---
sidebar_position: 1
---

# Overview

Bitquery provides as [explorer](https://explorer.bitquery.io/cardano) for you to easily view data on Cardano. 

![chains](/img/ide/cardano.png)

Bitquery API offers access to indexed data from the Cardano blockchain.

to fetch data from Algorand blockchain, you need to provide the `network` argument with the value `algorand`as shown below:

```
{
  cardano(network: cardano) {
    __typename
  }
}
```


Let's dive in and explore the cardano data available through Bitquery API.