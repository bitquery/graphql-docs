---
title: "Solana Blocks API — Slot Height, Hash, Timestamp, Transaction Count"
description: "Query Solana blocks with Bitquery V1 GraphQL: slot height, parent slot, block hash, timestamp, transaction counts, and aggregated rewards. Built for explorers, throughput monitoring, and slot-correlated reporting."
keywords:
  [
    "Solana blocks API",
    "Solana slot",
    "Solana block height",
    "Solana block hash",
    "Solana throughput",
    "Bitquery V1",
    "Solana GraphQL",
  ]
---

# Blocks

The Solana **Blocks API** returns indexed metadata for blocks on the Solana network — slot height, parent slot, block hash, timestamp, transaction count, and aggregate rewards. Solana blocks are produced at sub-second intervals by the current leader validator in the slot schedule; each block contains a slot height, parent slot reference, transaction count, block hash, and aggregate rewards distributed to validators and stakers.

Use the blocks API for **network throughput monitoring**, **explorer-style recent-block feeds**, **slot-correlated reporting**, and as a join key when you need to attach block context to transfers and transactions for audit, accounting, and forensics.

```
query ($network: SolanaNetwork!,$from: ISO8601DateTime, $till: ISO8601DateTime) {
  solana(network: $network) {
    blocks(
      options: {desc: "height", limit: 10, offset: 0}
      date: {since: $from, till: $till}
    ) {
      time {
        time(format: "%Y-%m-%d %H:%M:%S")
      }
      height
      transactionCount
      parentSlot
      rewards
      blockHash
    }
  }
}
<!-- Parameters -->
{
  "network": "solana",
  "from": "2023-07-26",
  "till": "2023-08-02T23:59:59",
  "dateFormat": "%Y-%m-%d"
}
```

## Common use cases

- **Throughput and capacity monitoring** — track transaction count per block to size infra and detect congestion windows.
- **Explorer feeds** — power "recent blocks" widgets with hash, slot, timestamp, and transaction count.
- **Audit and slot correlation** — anchor [transfer](/docs/Examples/Solana/transfers) and [transaction](/docs/Examples/Solana/transactions-api) rows to a specific slot/block height for evidence packages.
- **Validator economics** — combine `rewards` with [Solana block rewards](/docs/Schema/solana/blockRewards) for per-epoch performance views.

<details>

<summary>Filtering Blocks</summary>

`rewards`: This field allows you to filter blocks by the amount of rewards they contain.

`previousBlockHash`: This field allows you to filter blocks by their previous block hash.

`parentSlot`: This field allows you to filter blocks by their parent slot.

`options`: Filter returned data by ordering, limiting, and constraining it.

`height`: This field allows you to filter blocks by their height.

`date`: This field allows you to filter blocks by their date.

`blockHash`: This field allows you to filter blocks by their block hash.

`any`: This field allows you to filter blocks by any of the other fields (OR logic).

`transactionCount`: This field allows you to filter blocks by the number of transactions they contain.

</details>

## Related Resources

- [Solana transfers schema (V1)](/docs/Schema/solana/transfers) — pair with block height for historical balance reconstruction
- [Solana transactions schema (V1)](/docs/Schema/solana/transactions) — fees, fee payer, signer in block context
- [Solana block rewards (V1)](/docs/Schema/solana/blockRewards)
- [Solana schema overview (V1)](/docs/Schema/solana/overview)
- [Solana transfers examples (V1)](/docs/Examples/Solana/transfers)
- [Getting started with the GraphQL IDE](/docs/graphql-ide/how-to-start)
- [V1 vs V2 API and cloud data](/docs/graphql-ide/v1-and-v2)
