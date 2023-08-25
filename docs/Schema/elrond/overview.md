---
sidebar_position: 1
---

# Overview

MultiversX API offers access to indexed data from the MultiversX network including shards, block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as shard information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the elrond blockchain, you need to provide the `elrond` argument with the value `elrond` as shown below:

```
query MyQuery {
  elrond(network: elrond){
    __typename
  }
}

```

Let's dive in and explore the elrond data available through Bitquery API.