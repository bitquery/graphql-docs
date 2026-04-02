---
sidebar_position: 1
title: "Avalanche API — Blockchain Data Schema | Bitquery"
description: "Access Avalanche blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Avalanche API, Avalanche GraphQL, Avalanche blockchain data, Bitquery]
---

Avalanche is an open-source platform for building dApps that uses its own consensus protocol (Avalanche Consensus).
Bitquery offers a Avalanche C-Chain [explorer](https://explorer.bitquery.io/avalanche) to view Avalanche data easily.

![chains](/img/ide/avalanche.png)

You can use Avalanche APIs by mentioning

```
ethereum(network: avalanche){

__typename
}
```

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

Avalanche’s architecture is built around **subnets**; most developer-facing activity lives on the **Contract Chain (C-Chain)**, which is **EVM-compatible**, uses **AVAX** for gas, and hosts major **DeFi** venues such as **Trader Joe** and **Pangolin**. Bitquery indexes this EVM surface so you can query C-Chain blocks, contracts, and token flows alongside other networks.

## What You Can Query

- **Blocks** — heights, timestamps, miner or producer fields, block size, and transaction counts on the C-Chain
- **Transactions** — hashes, fees paid in AVAX, senders and recipients, finality or status, and gas usage
- **Transfers** — native AVAX and token movements with amounts, symbols or contract addresses, and USD values where available
- **Smart contracts** — deployments, calls, and contract-level activity in the same style as other EVM chains
- **DEX trades** — swap and liquidity events from integrated decentralized exchanges on Avalanche
- **Coinpath** — multi-hop tracing of how assets moved between addresses across several steps

## Common Use Cases

- **DeFi analytics** — rank pairs, volume, and liquidity events tied to ecosystems such as Trader Joe or Pangolin
- **Treasury and wallets** — aggregate AVAX and token balances and transfer history for custody or accounting
- **Investigations** — follow **coinpath** traces to explain how funds flowed through intermediaries on the C-Chain
- **Enterprise subnet and tokenization projects** — institutions launching permissioned subnets or tokenized assets on Avalanche can monitor C-Chain contract activity, token flows, and settlement patterns for compliance and operational reporting

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Avalanche API examples](https://docs.bitquery.io/v1/docs/Examples/avalanche)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Coinpath explained](https://docs.bitquery.io/v1/docs/building-queries/Coinpath-Explained/Overview)
