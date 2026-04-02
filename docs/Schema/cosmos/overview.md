---
sidebar_position: 1
title: "Cosmos API — Blockchain Data Schema | Bitquery"
description: "Access Cosmos blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Cosmos API, Cosmos GraphQL, Cosmos blockchain data, Bitquery]
---

# Overview

Bitquery empowers developers by offering comprehensive access to indexed data from the Cosmos blockchain through our user-friendly and efficient GraphQL API.

Our Cosmos schema simplifies the process of retrieving blockchain data, providing developers with easy access to various types of indexed information, including detailed data about addresses, attributes, blocks, messages, transactions, and transfers.

To fetch data using the Cosmos API, simply include the `network` argument and provide the name of the specific network you wish to retrieve data from, as demonstrated below:

```
{
  cosmos(network: cosmoshub) {
    __typename
  }
}
```

Bitquery supports following networks:

- `cosmosbub`: Cosmos Hub
- `heimdall`: Heimdall (Matic Verification Network)
- `crypto_mainnet`: Crypto.org mainnet

Let's dive in and explore the Cosmos data available through Bitquery API.

The **Cosmos** ecosystem is built on **Tendermint** consensus and the **IBC** interoperability protocol; **ATOM** secures the **Cosmos Hub**, but many zones define their own staking assets. Transactions are often **message-oriented**: a single transaction can batch multiple **messages** (send, delegate, IBC transfer, governance vote, and so on), and indexers surface **attributes** from events for filtering. Bitquery supports **Cosmos Hub**, **Heimdall** (Polygon’s verification network), and **Crypto.org** via the `network` argument, and exposes **blocks**, **transactions**, **transfers**, **messages**, **attributes**, and **coinpath**.

## What You Can Query

- **Blocks** — heights, timestamps, and proposer or validator context as indexed for each supported network
- **Transactions** — wrappers that contain one or more Cosmos SDK–style messages and their overall results
- **Messages** — individual state transitions inside a transaction (bank sends, staking, IBC packets, governance, etc.)
- **Attributes** — key–value pairs from chain events for precise filters on message outcomes and module-specific data
- **Transfers** — token movements including **ATOM** on the Hub and assets on **Crypto.org**, plus IBC-related flows where indexed
- **Coinpath** — multi-hop token tracing across Cosmos accounts for analytics and investigations

## Common Use Cases

- **Multi-network operations** — compare **Cosmos Hub**, **Heimdall**, and **Crypto.org** traffic using the same schema with different `network` values
- **Staking products** — aggregate delegate, undelegate, and reward **messages** for validators and delegators
- **IBC observability** — when indexing covers IBC, relate **transfers** and **messages** to cross-chain volume and corridor health
- **Institutional staking and validator management** — custodians and staking-as-a-service providers can track delegation, reward accrual, and validator performance across Cosmos networks for client reporting and SLA compliance

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Cosmos API examples](https://docs.bitquery.io/v1/docs/Examples/cosmos)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
