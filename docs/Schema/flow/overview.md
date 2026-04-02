---
sidebar_position: 1
title: "Flow API — Blockchain Data Schema | Bitquery"
description: "Access Flow blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Flow API, Flow GraphQL, Flow blockchain data, Bitquery]
---

# Overview

Flow is a layer 1 blockchain for creating and trading non-fungible tokens (NFTs), decentralized applications (dApps), and games.
![flow explorer](/img/flow.png)


:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

Flow targets consumer-scale apps: NFT collections (for example NBA Top Shot), games, and marketplaces, with smart contracts written in **Cadence**. On-chain state is often modeled around resources, collections, and events. Bitquery indexes blocks, transactions, transfers, events, and account input/output style fields plus coinpath for tracing value across accounts.

## What You Can Query

- **Blocks** — heights, timestamps, and the transactions executed in each sealed block
- **Transactions** — ids, status, payer and proposer context, and links to script interaction
- **Transfers** — FLOW and token movements between accounts with amounts and asset identifiers
- **Events** — emitted Cadence events for NFT mints, sales, deposits, and custom contract signals
- **Inputs and outputs** — account-level debits and credits aligned with Flow’s transaction model where indexed
- **Coinpath** — multi-hop tracing of FLOW and supported assets across accounts

## Common Use Cases

- **NFT and collection analytics** — monitor mints, transfers, and marketplace events for a contract or collection
- **Game and app telemetry** — aggregate user- or contract-driven events for retention and economy dashboards
- **Account flow tracing** — follow FLOW or tokens through several hops for treasury or compliance workflows

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Solana schema overview](https://docs.bitquery.io/v1/docs/Schema/solana/overview)
