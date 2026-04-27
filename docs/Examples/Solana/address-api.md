---
title: "Solana Address API Examples — Wallet Balance, Annotation, Multi-Address"
description: "Production-ready GraphQL examples for Solana addresses on Bitquery V1: query SOL balance and annotation for one wallet, batch multiple wallets, and pair with full historical transfers for SPL portfolios, accounting, and audit."
keywords:
  [
    "Solana address API",
    "Solana wallet balance",
    "Solana SPL portfolio",
    "Solana annotation",
    "Solana multi-address",
    "Bitquery V1",
    "Solana GraphQL",
  ]
---

# Solana Address API examples

The Solana **Address API** on Bitquery V1 returns the latest **SOL balance** and **annotation** for any Solana account, including batched lookups across many wallets in one request. It is the fastest entry point for **wallet directories**, **portfolio dashboards**, **accounting bootstraps**, and **compliance pre-checks** — and it pairs naturally with the [Solana transfers API](/docs/Examples/Solana/transfers) when you need full SPL token portfolios or historical balances.

## Use cases at a glance {#use-cases}

- **Portfolio and dashboards** — [single-wallet SOL balance](#single-balance), [batched multi-wallet lookup](#multi-balance)
- **Accounting and audit** — pair with [historical balance at a timestamp](/docs/Examples/Solana/transfers#balance-point-in-time) for end-of-period closing balances
- **SPL token portfolios** — pair with [per-token balance from transfers](/docs/Examples/Solana/transfers#per-token-sent-received-balance) for full token-level positions
- **Compliance pre-checks** — verify whether an address has any Bitquery annotation before deeper diligence

## Latest SOL balance for a single Solana address {#single-balance}

Look up the current SOL balance and annotation for a single Solana address. [Run query](https://ide.bitquery.io/address-balance-api).

**Variations:** For SPL token balances, use the [transfers API](/docs/Examples/Solana/transfers#per-token-sent-received-balance) with aggregation. For balance at a specific timestamp or block height, see [historical balance](/docs/Examples/Solana/transfers#balance-point-in-time). Combine with the multi-address query below for batch lookups.

```
query MyQuery {
  solana {
    address(address: {is: "AgexL8gWCy62B6z95WqeGFcs5Y8AmiP65Yte4xyvbsfv"}) {
      address
      annotation
      balance
    }
  }
}
```

## Batch multi-wallet SOL balance lookup {#multi-balance}

Batch-query SOL balances for multiple Solana addresses in one request using `address: {in: [...]}`. Returns balance and annotation for each address — ideal for treasury dashboards, partner-program reporting, and exchange wallet sets. [Run query](https://ide.bitquery.io/latest-balances-of-multiple-addresses).

**Variations:** Add or remove addresses from the array. Combine with the [transfers API](/docs/Examples/Solana/transfers#per-token-sent-received-balance) for per-token balances across wallets. For [bubble-map style aggregation across the same wallets](/docs/Examples/Solana/transfers#multi-wallet-aggregates), use the multi-wallet aggregate query in the transfers examples.

```
query MyQuery {
  solana {
    address(address: {in: ["AgexL8gWCy62B6z95WqeGFcs5Y8AmiP65Yte4xyvbsfv","u4JVgijAL87QWhuig6YNnJCoxgEKbYZt1q3nPbfbUBC","9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM"]}) {
      address
      annotation
      balance
    }
  }
}
```

## When to use the Address API vs Transfers {#address-vs-transfers}

| Need                                                      | Use                                                                                            |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Latest SOL balance for one or many wallets                | **Address API** (this page)                                                                    |
| SPL token balance per wallet/token                        | [Transfers + amount(calculate: sum)](/docs/Examples/Solana/transfers#per-token-sent-received-balance) |
| Balance at a specific timestamp or block                  | [Historical balance](/docs/Examples/Solana/transfers#balance-point-in-time)                    |
| Sender or receiver activity history                       | [Transfers (sender/receiver filters)](/docs/Examples/Solana/transfers#wallet-sender-receiver)  |
| Multi-hop fund flow across addresses                      | [Coinpath](/docs/Schema/solana/coinpath)                                                       |

## Related Resources

- [Solana transfers API examples](/docs/Examples/Solana/transfers) — historical balances, sent/received, multi-wallet aggregates, S3 bulk export
- [Solana transactions API examples](/docs/Examples/Solana/transactions-api) — fee, signer, success, block context
- [Solana schema overview](/docs/Schema/solana/overview)
- [Solana address schema](/docs/Schema/solana/address)
- [Solana Coinpath schema](/docs/Schema/solana/coinpath)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
