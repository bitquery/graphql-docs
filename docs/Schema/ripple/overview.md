---
sidebar_position: 1
title: "Ripple API — Blockchain Data Schema | Bitquery"
description: "Access Ripple blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Ripple API, Ripple GraphQL, Ripple blockchain data, Bitquery]
---

# Overview

Bitquery's Ripple APIs give you information on the XRP's blocks, transactions, addresses, offers, payments and so on.
To get started, visit the [Ripple Explorer](https://explorer.bitquery.io/ripple)

![explorer](/img/ide/ripple.png)

To retrieve data from the Ripple blockchain, you need to use the API as shown below:

```
query{
  ripple{
    __typename
  }
}
```

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ripple API examples](https://docs.bitquery.io/v1/docs/Examples/ripple)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
