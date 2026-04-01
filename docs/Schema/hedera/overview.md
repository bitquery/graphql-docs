---
sidebar_position: 1
title: "Hedera API — Blockchain Data Schema | Bitquery"
description: "Access Hedera blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Hedera API, Hedera GraphQL, Hedera blockchain data, Bitquery]
---

# Overview

Our API makes it easy to access different types of data from the Hedera blockchain, like addresses, arguments, calls, and more.

## Getting Started

To use the API, specify the network parameter with the Hedera network name. For example:

```
{
    hedera(network: hedera){
        __typename
    }
}
```

Supported networks:

- `hedera`: Hedera Mainnet

Let's dive in and explore the Hedera data available through Bitquery API.

## Using the Explorer

You can also use our user-friendly [explorer](https://explorer.bitquery.io/hedera) to interactively explore Hedera blockchain data.

[![Hedera Explorer](/img/hedera-explorer.png)](https://explorer.bitquery.io/hedera)

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Hedera API examples](https://docs.bitquery.io/v1/docs/Examples/hedera)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
