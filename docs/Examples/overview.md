---
title: "Blockchain API Examples"
sidebar_position: 1
description: "Browse production-ready GraphQL examples for Bitquery V1 across Ethereum, Solana, Bitcoin, Ripple, Tron, and more — built for accounting, audit, trading, compliance, and bulk export to S3 and Parquet."
keywords:
  [
    Bitquery,
    GraphQL examples,
    blockchain API,
    Solana API,
    Ethereum API,
    Bitcoin API,
    Bitquery V1,
    query library,
    documentation,
  ]
---

# Overview

This section is a query library for the Bitquery V1 GraphQL API. Each chain page contains production-ready examples that you can run directly in the [GraphQL IDE](/docs/graphql-ide/how-to-start) and adapt for accounting, tax, audit, trading research, compliance, treasury, and bulk data delivery.

## Featured: Solana on V1

Bitquery's V1 Solana surface indexes the **complete historical** chain for SOL and SPL token movement, transactions, addresses, blocks, block rewards, and Coinpath fund-flow tracing. Highlights:

- [Solana transfers API examples](/docs/Examples/Solana/transfers) — full historical SOL and SPL transfers for [accounting and tax](/docs/Examples/Solana/transfers#wallet-sender-receiver), [audit](/docs/Examples/Solana/transfers#parallel-sent-received-range), [trading research](/docs/Examples/Solana/transfers#earliest-mint-transfer), [compliance and forensics](/docs/Examples/Solana/transfers#multi-wallet-aggregates), and [bulk export to S3 + Parquet](/docs/Examples/Solana/transfers#bulk-export-s3-parquet).
- [Solana transactions API examples](/docs/Examples/Solana/transactions-api) — fee, fee payer, signer, success, and block context.
- [Solana address API examples](/docs/Examples/Solana/address-api) — wallet balance and batched multi-address lookups.

> Looking for parsed Solana instructions, program IDs, or DEX swap decoding? Those have moved to the **[V2 Solana Instructions API](https://docs.bitquery.io/docs/blockchain/Solana/solana-instructions/)** — see also [V1 vs V2](/docs/graphql-ide/v1-and-v2).

## Related Resources

- [Bitquery documentation home](/docs/intro)
- [How to start with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [Solana schema overview](/docs/Schema/solana/overview)
- [Ethereum schema overview](/docs/Schema/ethereum/overview)
- [Coinpath explained — overview](/docs/building-queries/Coinpath-Explained/Overview)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)