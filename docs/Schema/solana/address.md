---
title: "Solana Address API — Wallet SOL Balance, Annotation"
description: "Query Solana wallet SOL balance and account annotations with Bitquery V1 GraphQL. Use it for wallet directories, portfolio dashboards, accounting bootstraps, and compliance pre-checks."
keywords:
  [
    "Solana address API",
    "Solana wallet balance",
    "Solana annotation",
    "Solana portfolio",
    "Bitquery V1",
    "Solana GraphQL",
  ]
---

# Address

The Solana **address API** returns the latest **SOL balance** and **annotation** for a Solana account, plus account-level metadata where indexed. Solana addresses (public keys) can be regular wallets, token accounts, or program-derived addresses; this API is the fastest way to fetch balance and label data without traversing transfer history.

It is most useful for **wallet directories**, **portfolio dashboards**, **accounting bootstraps** (opening balances), and **compliance pre-checks** (does an address have a Bitquery annotation?). For SPL token portfolios or balance at a specific timestamp/block, pair this API with the [transfers API](/docs/Examples/Solana/transfers).

```
query MyQuery {
  solana(network: solana) {
    address(address: {is: "address of the wallet"}) {
      address
      balance
      annotation
    }
  }
}
```

## Common use cases

- **Portfolio and dashboards** — single-wallet SOL balance and batched [multi-address lookups](/docs/Examples/Solana/address-api#multi-balance).
- **Accounting and audit** — combine current SOL balance with [historical balance from transfers](/docs/Examples/Solana/transfers#balance-point-in-time) for opening/closing positions.
- **SPL token portfolios** — per-token positions are derived from [transfers + aggregation](/docs/Examples/Solana/transfers#per-token-sent-received-balance).
- **Compliance pre-checks** — surface any Bitquery annotation on an address before deeper diligence.

<details>

<summary>Filtering Address</summary>

`address`:  Specify the address of the wallet. The `is` keyword is used to specify that the address must match the value that is provided.

</details>

## Fields

`address`

The address field specifies the address of the account that you want to get the balance for.

`annotation`

Any label on the account.

`balance`

The balance of the account in SOL.

## Related Resources

- [Solana address examples (V1)](/docs/Examples/Solana/address-api)
- [Solana transfers schema (V1)](/docs/Schema/solana/transfers) — for SPL token balances, historical balance, and full transfer history
- [Solana transfers examples (V1)](/docs/Examples/Solana/transfers)
- [Solana schema overview (V1)](/docs/Schema/solana/overview)
- [Solana Coinpath API (V1)](/docs/Schema/solana/coinpath)
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
