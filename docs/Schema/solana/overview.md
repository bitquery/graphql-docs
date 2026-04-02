---
sidebar_position: 1
title: "Solana API — Blockchain Data Schema | Bitquery"
description: "Access Solana blockchain data through Bitquery's GraphQL API. Query blocks, transactions, transfers, smart contracts, and more."
keywords: [Solana API, Solana GraphQL, Solana blockchain data, Bitquery]
---

# Overview

Bitquery API offers access to indexed data from the Solana blockchain. This schema is specifically designed to enable blockchain data retrieval via GraphQL API for developers.
The schema contains information on blockRewards, address, transfers, transactions, instructions
and instructionAccounts.


```
query MyQuery {
  solana(network: solana){
    __typename
  }
}

```

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

**Solana** is optimized for **high throughput** and low latency: on-chain programs (often called **programs** rather than “contracts”) receive **instructions**, and each instruction references **instruction accounts** that define which accounts are read or written. **SPL tokens** behave like the chain’s fungible-token standard, and **block rewards** compensate validators for securing the network. Bitquery’s Solana schema surfaces **blocks**, **transactions**, **transfers**, **instructions**, **instruction accounts**, and **coinpath** for flow tracing.

## What You Can Query

- **Blocks** — slot-relative structure, block heights or identifiers, timestamps, and aggregates where available
- **Transactions** — signatures, fee payers, success or failure, and the list of instructions executed in one atomic batch
- **Instructions** — program IDs, discriminators or decoded types, and the logical operations inside each transaction
- **Instruction accounts** — per-instruction account metas (writable, signer, addresses) for deep program analytics
- **Transfers** — native SOL and **SPL token** movements with mints, amounts, and counterparties
- **Block rewards** — validator reward and fee distribution fields as indexed for staking and economics views
- **Coinpath** — multi-hop SOL and SPL flows across addresses for tracing funds

## Common Use Cases

- **Program analytics** — break down instruction mix and account usage for DeFi, NFT, or consumer programs
- **Wallet and SPL portfolios** — aggregate token balances and transfer history per owner or token mint
- **Validator economics** — combine **block rewards** with transaction fees for performance or yield reporting

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana API examples](https://docs.bitquery.io/v1/docs/Examples/Solana)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
