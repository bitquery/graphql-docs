---
sidebar_position: 1
title: "Filecoin API — Blockchain Data Schema | Bitquery"
description: "Access Filecoin blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Filecoin API, Filecoin GraphQL, Filecoin blockchain data, Bitquery]
---

# Overview

Filecoin is a network built on top of IPFS that allows you store and retrieve data. It uses proof of storage: a miner’s power in the consensus protocol is proportional to the amount of storage it provides. 
Bitquery's filecoin data includes an explorer for easy-viewing and extensive APIs.


![filecoin explorer](/img/ide/filecoin.png)

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

**Filecoin** is a decentralized storage network: miners earn **FIL** by committing storage, and the chain records **storage deals** and proofs rather than a generic “world computer” model. On Filecoin, **actors** (not EVM-style contracts) implement protocol logic, and the ledger records **messages**—the primary unit of chain activity—rather than Ethereum-like “transactions” alone. Bitquery exposes this model as **blocks**, **messages**, **calls**, **transfers**, **addresses**, and **coinpath** for tracing flows.

## What You Can Query

- **Blocks** — heights, timestamps, and structural metadata for tipsets and chain progression
- **Messages** — Filecoin messages with senders, recipients, method names, and execution outcomes where indexed
- **Calls** — actor method invocations and related execution detail for storage, market, and payment actors
- **Transfers** — FIL movements between addresses, including fees and value associated with messages
- **Addresses** — activity and balance-oriented fields for miners, clients, and regular accounts as exposed in the schema
- **Coinpath** — multi-hop FIL flows for following value through intermediate addresses

## Common Use Cases

- **Storage economics** — relate message and call patterns to deal activity, miner behavior, and network utilization
- **Miner and client reporting** — summarize transfers and address-level flows for operational or financial reporting
- **Forensics** — use **coinpath** to reconstruct how FIL moved across wallets tied to deals or market actors
- **Enterprise data compliance** — organizations storing regulated data on Filecoin can audit deal lifecycles, storage-provider relationships, and FIL payment flows for procurement and data-residency reporting

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Filecoin API examples](https://docs.bitquery.io/v1/docs/Examples/filecoin)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
