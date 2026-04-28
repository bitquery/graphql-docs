---
title: "Solana Coinpath API — Multi-Hop SOL & SPL Fund Flow Tracing"
description: "Trace multi-hop SOL and SPL fund flows on Solana with Bitquery V1 Coinpath GraphQL: inbound/outbound graphs by depth, address, currency, and date. Built for compliance, AML investigations, audit, and forensics."
keywords:
  [
    "Solana Coinpath",
    "Solana fund flow",
    "Solana AML",
    "Solana compliance",
    "Solana forensics",
    "Solana investigations",
    "Bitquery V1",
    "Solana GraphQL",
  ]
---

# Coinpath

The Solana **Coinpath API** traces **multi-hop SOL and SPL fund flows** to and from any Solana address. You can configure depth, direction, currency, and date range to build inbound and outbound graphs of where funds came from and where they went — making it the reference API for **compliance and AML-style investigations**, **audit and forensics**, **incident triage**, and **counterparty risk** workflows.

Coinpath complements the [transfers API](/docs/Schema/solana/transfers): use transfers when you need raw rows or aggregations, and use Coinpath when you need a precomputed, depth-aware flow graph.

```
query ($network: SolanaNetwork!, $address: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
  solana(network: $network) {
    inbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: 1}
      options: {direction: inbound, asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: $from, till: $till}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount
      currency {
        symbol
        name
        address
        decimals
        tokenId
        tokenType
      }
      depth
      count
      signature {
        value
        hash
      }
    }
    outbound: coinpath(
      initialAddress: {is: $address}
      depth: {lteq: 1}
      options: {asc: "depth", desc: "amount", limitBy: {each: "depth", limit: 10}}
      date: {since: $from, till: $till}
    ) {
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      amount
      currency {
        symbol
        name
        address
        decimals
        tokenId
        tokenType
      }
      depth
      count
      signature {
        value
        hash
      }
    }
  }
}

<!-- Parameters -->

{
  "network": "solana",
  "address": "aGhLX8kiZ2sWbcdpqwbGMHL1PLBY8Xe3srCFv8aoFbv",
  "from": "2023-07-31",
  "till": "2023-08-07T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Common use cases

- **Compliance and AML** — trace inbound funds back N hops from a flagged Solana wallet to identify originating sources, mixers, and exchanges.
- **Investigations and forensics** — build outbound graphs from incident wallets to follow stolen or laundered SOL/SPL.
- **Audit and assurance** — produce signed flow graphs as evidence for fund custody and movement reviews.
- **Counterparty risk** — preview the inbound/outbound counterparty mix before onboarding a Solana address.
- **Bubble-map style visualization** — pair Coinpath with the [multi-wallet aggregate query](/docs/Examples/Solana/transfers#multi-wallet-aggregates) for visual cluster analysis.

<details>

<summary>Filtering Coinpath</summary>

-   **initialAddress**

    The address of the account whose coinpath you want to get. The filter can be used to specify the initial address of the coinpath.

-   **depth**

    The maximum depth of the coinpath. The filter can be used to specify the maximum depth of the fund flow either inbound and outbound.

-   **options**

    A set of options that can be used to filter the results. The following options are supported:

    -   **direction**
        -   The direction of the coinpath. The supported directions are  `inbound`  and  `outbound`.
    -   **asc**
        -   The order of the coinpath. The supported orders are  `asc`  and  `desc`.
    -   **limitBy**
        -   The limit of the coinpath. The limit is the maximum number of accounts that will be included in the coinpath.
    -   **minimumTxAmount**
        -   The minimum amount of funds that must be transferred in a transaction.
    -   **maximumAddressTxCount**
        -   The maximum number of transactions that can be included for a single address.
    -   **maximumTotalTxCount**
        -   The maximum number of transactions that can be included in the coinpath.
    -   **offset**
        -   The offset of the coinpath. The offset is the number of accounts that will be skipped at the beginning of the coinpath.
    -   **seed**
        -   The seed of the coinpath. The seed is a random number that can be used to randomize the order of the coinpath.
-   **date**

    The date range of the coinpath. The filter can be used to specify the start date and end date of the coinpath.

-   **receiver**

    The address of the receiver of the transfer. The filter can be used to specify the receiver address of the coinpath.

-   **time**

    The timestamp of the transfer. The filter can be used to specify the timestamp of the coinpath.

-   **sender**

    The address of the sender of the transfer. The filter can be used to specify the sender address of the coinpath.

-   **currency**

    The currency of the transfer. The filter can be used to specify the currency of the coinpath.

-   **initialTime**

    The timestamp of the initial transaction. The filter can be used to specify the timestamp of the initial transaction.

-   **initialDate**

    The date of the initial transaction. The filter can be used to specify the date of the initial transaction.

</details>

## Fields

`sender`

The address of the sender of the transfer.

`receiver`

The address of the receiver of the transfer.

`amount`

The amount of funds that was transferred.

`currency`

The currency that was transferred.

`depth`

The depth of the connection between the two addresses.

`signature`

The signature of the transfer.

## Related Resources

- [Coinpath explained](/docs/building-queries/Coinpath-Explained/Overview)
- [Solana transfers schema (V1)](/docs/Schema/solana/transfers)
- [Solana transfers examples (V1)](/docs/Examples/Solana/transfers) — including [multi-wallet bubble-map aggregates](/docs/Examples/Solana/transfers#multi-wallet-aggregates) and [system-program funding](/docs/Examples/Solana/transfers#system-program-funding)
- [Solana schema overview (V1)](/docs/Schema/solana/overview)
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
