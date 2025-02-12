---
sidebar_position: 1
---

# Overview

Bitquery API offers access to indexed data from the Ethereum blockchain through the ethereum schema. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.

The ethereum schema contains various types of queries, including block, transaction, event, transactions, transfers, and more. These queries can be used to retrieve blockchain data, such as block information, transaction details, events, token transfers, and other relevant information.

To retrieve data from the Ethereum blockchain, you need to provide the `network` argument with the value `ethereum` as shown below:

```
query {
  ethereum(network: ethereum){
    __typename
  }
}
```
:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

Let's dive in and explore the Ethereum data available through Bitquery API.