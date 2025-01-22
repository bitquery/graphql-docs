---
sidebar_position: 1
---

# Tron API Overview

Bitquery's Tron API offers access to indexed data from the Tron network including shards, block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as shard information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the tron blockchain, you need to provide the `tron` argument with the value `tron` as shown below:

```
query MyQuery {
  tron(network: tron){
    __typename
  }
}


```

Let's dive in and explore the Tron data available through Bitquery API.

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::