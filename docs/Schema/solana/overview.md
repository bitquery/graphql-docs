---
sidebar_position: 1
title: "Solana API — Blockchain Data Schema | Bitquery"
description: "Access Solana blockchain data through Bitquery's GraphQL API: blocks, transactions, full historical SPL and SOL transfers, programs, and Coinpath."
keywords: [Solana API, Solana GraphQL, Solana blockchain data, Bitquery]
---

# Overview

Bitquery's V1 Solana API offers indexed access to the Solana blockchain via GraphQL. The V1 schema is focused on **historical Solana transfers, transactions, addresses, blocks, block rewards, and Coinpath** — the surfaces most often used for accounting, tax, audit, trading research, compliance, treasury, and bulk data delivery.

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

:::note Instructions on V1 have been retired

V1 no longer exposes the `instructions` and `instructionAccounts` queries for Solana. The replacement is the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** at `https://streaming.bitquery.io/graphql`, which serves program-, instruction-, and DEX-trade-level analytics with parsed methods, account lists, logs, and real-time WebSocket subscriptions — see also the [V2 docs home](https://docs.bitquery.io/) and [V1 vs V2](/docs/graphql-ide/v1-and-v2). All other Solana V1 surfaces below are unchanged.

:::

**Solana** is a high-throughput, low-latency chain whose on-chain **programs** are invoked through **instructions**, and where **SPL tokens** behave as the fungible-token standard. Bitquery's V1 Solana schema indexes **blocks**, **transactions**, full historical **SOL and SPL transfers**, **block rewards**, **addresses**, and **Coinpath** — all the building blocks for wallet, token, and validator analytics that do not require raw instruction parsing.

## What You Can Query

- **Transfers** — native SOL and **SPL token** movements with mints, amounts, counterparties, and program/instruction context where available; **complete historical** transfer rows for accounting, audit, trading, and compliance ([examples](/docs/Examples/Solana/transfers), [schema](/docs/Schema/solana/transfers)). Enterprise **cloud export** (e.g. S3, Parquet) is available for large-scale pipelines — see [V1 vs V2 and cloud data](/docs/graphql-ide/v1-and-v2).
- **Transactions** — signatures, fee payers, success/failure, signers, instruction counts, fees, and block context ([examples](/docs/Examples/Solana/transactions-api), [schema](/docs/Schema/solana/transactions)).
- **Address** — wallet SOL balance, annotation, and batched multi-address lookups ([examples](/docs/Examples/Solana/address-api), [schema](/docs/Schema/solana/address)).
- **Blocks** — slot, height, parent slot, hash, timestamps, transaction counts, and aggregate rewards ([schema](/docs/Schema/solana/blocks)).
- **Block rewards** — validator and stake account reward distribution per epoch for economics and yield reporting ([schema](/docs/Schema/solana/blockRewards)).
- **Coinpath** — multi-hop SOL and SPL fund flows across addresses for tracing and forensics ([schema](/docs/Schema/solana/coinpath)).

## Common Use Cases

- **Accounting and tax** — reconcile every SOL/SPL credit and debit per wallet, per token, per period using [transfers](/docs/Examples/Solana/transfers#wallet-sender-receiver) and [aggregations](/docs/Examples/Solana/transfers#per-token-sent-received-balance).
- **Audit and assurance** — produce signed-source-of-record evidence for SOL/SPL movements with [parallel sent and received](/docs/Examples/Solana/transfers#parallel-sent-received-range) and [historical balance](/docs/Examples/Solana/transfers#balance-point-in-time) queries.
- **Trading research** — discover [first transfer for a mint](/docs/Examples/Solana/transfers#earliest-mint-transfer), [token creators](/docs/Examples/Solana/transfers#earliest-mint-transfer), and program-scoped flows.
- **Compliance and forensics** — build [bubble-map style multi-wallet aggregates](/docs/Examples/Solana/transfers#multi-wallet-aggregates) and trace funds with [Coinpath](/docs/Schema/solana/coinpath).
- **Treasury and operations** — monitor inflows and outflows, [funding sources](/docs/Examples/Solana/transfers#system-program-funding), and per-token portfolio activity.
- **Validator economics** — combine [block rewards](/docs/Schema/solana/blockRewards) with [transaction fees](/docs/Schema/solana/transactions) for performance and yield reporting.
- **Bulk data delivery** — sync full historical Solana transfers to S3 in **Parquet** for Snowflake, BigQuery, or Databricks pipelines — see [bulk export](/docs/Examples/Solana/transfers#bulk-export-s3-parquet).

## Related Resources

- [Bitquery documentation intro](https://docs.bitquery.io/v1/docs/intro)
- [Getting started with the GraphQL IDE](https://docs.bitquery.io/v1/docs/graphql-ide/how-to-start)
- [Solana transfers examples](https://docs.bitquery.io/v1/docs/Examples/Solana/transfers)
- [Solana API examples](https://docs.bitquery.io/v1/docs/Examples/Solana)
- [Ethereum schema overview](https://docs.bitquery.io/v1/docs/Schema/ethereum/overview)
- [Bitcoin schema overview](https://docs.bitquery.io/v1/docs/Schema/bitcoin/overview)
