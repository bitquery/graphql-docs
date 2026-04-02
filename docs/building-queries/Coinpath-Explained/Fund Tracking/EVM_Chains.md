---
sidebar_position: 1
title: "Coinpath for EVM Networks — LRFS Fund Tracking"
description: "How Coinpath traces fund flows on EVM chains (Ethereum, BSC, Polygon, etc.) using the Last-Received First-Spent algorithm. Includes a worked example and a ready-to-run query."
keywords: [Coinpath, EVM, Ethereum, BSC, Polygon, LRFS, fund tracking, money flow, Bitquery]
---

# Coinpath for EVM Networks

EVM chains have balances associated with accounts, and a transfer is a record of adding or subtracting amounts from those balances. Coinpath supports all EVM-compatible networks, including **Ethereum, Binance Smart Chain (BSC), Polygon, Cronos, Celo and Avalanche C-Chain**, and others.

## How the Algorithm Works

The algorithm is **recursive**: it starts at the initial address(es) and calculates the money flow for each subsequent depth level, going deeper into the graph.

At each level, Coinpath considers all incoming and outgoing transactions for every address and uses the **Last-Received First-Spent (LRFS)** method to associate incoming funds with outgoing ones.

### LRFS Step by Step

1. Start at the initial address and move to the next depth level.
2. Collect all incoming and outgoing transactions for each address at the current level.
3. Associate each incoming transaction with the **first** outgoing transaction whose amount is equal to or less than the incoming amount.
4. When multiple outgoing transactions qualify, the one **sent earliest** gets priority.
5. Repeat until all incoming transactions are matched or the specified depth is reached.

### Worked Example

Suppose address `0xABC` receives three deposits and makes two withdrawals in this order:

| # | Direction | Amount | Time |
|---|---|---|---|
| 1 | IN | 5 ETH | 10:00 |
| 2 | IN | 3 ETH | 10:05 |
| 3 | OUT | 4 ETH | 10:10 |
| 4 | IN | 2 ETH | 10:15 |
| 5 | OUT | 6 ETH | 10:20 |

Under LRFS:

- **OUT #3 (4 ETH)** is matched against **IN #1 (5 ETH)** — the earliest unspent receipt that covers the amount. 4 ETH is attributed; 1 ETH remains unmatched from IN #1.
- **OUT #5 (6 ETH)** consumes the remaining **1 ETH from IN #1**, then **3 ETH from IN #2**, then **2 ETH from IN #4** — totalling 6 ETH.

This gives a precise, deterministic attribution of which incoming funds were spent in each outgoing transfer.

## Example Query — Ethereum Outbound Fund Flow

Track where funds went from an address over 2 hops on Ethereum:

[Open this query on IDE](https://ide.bitquery.io/destination-of-funds-for-upbit-hackers)

```graphql
{
  ethereum(network: ethereum) {
    outbound: coinpath(
      initialAddress: { is: "0xa09871aeadf4994ca12f5c0b6056bbd1d343c029" }
      currency: { is: "ETH" }
      depth: { lteq: 2 }
      options: {
        seed: 110
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
      date: { since: "2018-03-01", till: "2021-01-31" }
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
      }
      depth
      count
    }
  }
}
```

## Related Resources

- [Coinpath Overview](../Overview) — what Coinpath is and cross-chain comparison.
- [How to Read a Coinpath Graph](../How_to_read_coinpath_graph) — nodes, edges, depth levels.
- [UTXO Fund Tracking](./UTXO_Chains) | [Ledger-Based Fund Tracking](./Ledger_Based_Chains)
- [Ethereum Coinpath schema reference](https://docs.bitquery.io/v1/docs/Schema/ethereum/coinpath)
- [Coinpath Money Flow API — query cookbook](https://docs.bitquery.io/v1/docs/examples/coinpath/money-flow-api)
