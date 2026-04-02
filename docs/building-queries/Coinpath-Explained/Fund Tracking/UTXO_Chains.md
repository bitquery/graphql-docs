---
sidebar_position: 2
title: "Coinpath for UTXO Networks — Proportional Attribution"
description: "How Coinpath traces fund flows on UTXO chains (Bitcoin, Litecoin, Dogecoin, etc.) using proportional input-output amount attribution. Includes a worked example and a ready-to-run query."
keywords: [Coinpath, UTXO, Bitcoin, Litecoin, Dogecoin, fund tracking, proportional attribution, money flow, Bitquery]
---

# Coinpath for UTXO Networks

UTXOs (Unspent Transaction Outputs) are the basic unit of value on UTXO-based blockchains. Each UTXO represents a discrete amount that can be consumed as an input to a new transaction. Coinpath supports all major UTXO networks, including **Bitcoin, Litecoin, Dogecoin, Bitcoin Cash, Zcash, and Dash**.

## How the Algorithm Works

Unlike EVM chains where balances change in-place, UTXO transactions consume one or more inputs and create one or more outputs. The challenge is: when a transaction has multiple inputs from different addresses, how much of each output should be attributed to each input?

Coinpath uses a **proportional input-output amount attribution** formula. Each output's amount is split across the inputs in proportion to their share of the total input value.

### Worked Example

Consider a transaction with two inputs and three outputs:

```
Inputs:
  Address A: 1 BTC
  Address B: 2 BTC
  ─────────────────
  Total:     3 BTC

Outputs:
  Address C: 0.5  BTC
  Address D: 2.0  BTC
  Address B: 0.49 BTC  (change)
  ─────────────────────
  Total:     2.99 BTC  (0.01 BTC fee)
```

**Proportional attribution:**

Address A contributed 1/3 of the total input, Address B contributed 2/3. So each output is attributed proportionally:

| Output | Total | From A (1/3) | From B (2/3) |
|---|---|---|---|
| Address C: 0.5 BTC | 0.5 | 0.167 BTC | 0.333 BTC |
| Address D: 2.0 BTC | 2.0 | 0.667 BTC | 1.333 BTC |
| Address B: 0.49 BTC (change) | 0.49 | 0.163 BTC | 0.327 BTC |

### Change Outputs

In UTXO mode, **change outputs are treated as separate outputs** and attributed like any other output. This is important because change goes back to one of the input addresses, and you may need to distinguish it from genuine transfers when analyzing fund flows. (In account-based / EVM mode, change is not a concept and is ignored.)

## Example Query — Bitcoin Outbound Coinpath

Track where BTC moved from an address over 2 hops:

[Open this query on IDE](https://ide.bitquery.io/Bitcoin-outbound-coinpath-example)

```graphql
{
  bitcoin(network: bitcoin) {
    outbound: coinpath(
      initialAddress: { is: "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S" }
      currency: { is: "BTC" }
      depth: { lteq: 2 }
      options: {
        seed: 110
        asc: "depth"
        desc: "amount"
        limitBy: { each: "depth", limit: 10 }
      }
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
- [EVM Fund Tracking](./EVM_Chains) | [Ledger-Based Fund Tracking](./Ledger_Based_Chains)
- [Bitcoin Coinpath schema reference](https://docs.bitquery.io/v1/docs/Schema/bitcoin/coinpath)
- [Bitcoin Coinpath API examples](https://docs.bitquery.io/v1/docs/examples/bitcoin/Bitcoin-Coinpath-API)
- [Coinpath Money Flow API — query cookbook](https://docs.bitquery.io/v1/docs/examples/coinpath/money-flow-api)
