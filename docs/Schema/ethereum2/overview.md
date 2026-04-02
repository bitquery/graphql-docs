---
sidebar_position: 1
title: "Ethereum Beacon Chain API — Blockchain Data Schema | Bitquery"
description: "Access Ethereum Beacon Chain data through Bitquery's GraphQL API. Query attestations, validators, beacon blocks, proposer slashings, and staking data."
keywords: [Ethereum Beacon Chain API, Ethereum Beacon Chain GraphQL, Ethereum Beacon Chain blockchain data, Bitquery]
---

# Ethereum Beacon Chain API Overview

Bitquery provides APIs to access Eth2 data. You can get info on the ethereum's staking model. It uses the Proof-of-stake, a consensus method that blockchain networks utilize to reach distributed consensus. 

These APIs provide details on validators, their staked amounts, their exits and so on. The easiest way to start is through the [Beacon Chain Explorer](https://explorer.bitquery.io/eth2)

![eth2](/img/ide/eth2.png)

:::info

Sign up on our **[GraphQL IDE](https://ide.bitquery.io/)** and get your Access Token, Read _[our guide](/docs/graphql-ide/how-to-start/)_ on getting started.

:::

The **Ethereum Beacon Chain** is the **proof-of-stake consensus layer**: it coordinates **validators**, **attestations**, block proposals, **deposits**, **voluntary exits**, and **slashings** (including **proposer slashings** where applicable). It is **not** the execution layer where user transactions and smart contracts run—that data lives in the **[ethereum](/docs/Schema/ethereum/overview)** schema. Bitquery’s Beacon APIs focus on this consensus-side lifecycle and staking behavior.

## What You Can Query

- **Beacon blocks** — slots, roots or identifiers, and linkage to the consensus timeline as exposed by the schema
- **Validators** — participation in staking, balances, and state changes such as activation or exit
- **Attestations** — votes that support checkpoints and chain head, for participation and finality-related analysis
- **Deposits** — staking deposits that connect the economic security model to validator onboarding
- **Slashings** — evidence of protocol violations, including proposer-related cases where indexed
- **Voluntary exits** — validator-initiated exits from active duty as recorded on the Beacon Chain

## Common Use Cases

- **Staking dashboards** — monitor validator counts, effective balances, and attestation participation over time
- **Risk and slashings** — surface slashings and unusual validator behavior for operations or research
- **Consensus research** — correlate deposits, exits, and beacon block progression without mixing in execution-layer DEX or NFT data

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [ETH2 Beacon Chain examples](https://docs.bitquery.io/v1/docs/Examples/Beacon%20Chain%20Examples/eth2_examples)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
