---
sidebar_position: 3
title: "Coinpath for Ledger-Based Networks — Multi-Currency Fund Tracking"
description: "How Coinpath handles the unique challenges of payment-ledger blockchains like Ripple (XRP) and Stellar (XLM): cross-currency payments, multi-issuer tokens, and implicit transfers."
keywords: [Coinpath, Ripple, XRP, Stellar, XLM, ledger, payment, fund tracking, cross-currency, money flow, Bitquery]
---

# Coinpath for Ledger-Based Networks

Payment-ledger blockchains — primarily **Ripple (XRP Ledger)** and **Stellar (XLM)** — work differently from both UTXO and EVM chains. Instead of simple value transfers, a single payment transaction can involve currency conversions, multiple issuers, and implicit intermediate transfers.

## Challenges Specific to Payment Ledgers

### 1. Cross-Currency Payments

A sender can pay in one currency while the receiver receives a different currency. For example, Alice sends **USD** and Bob receives **EUR** — the ledger's built-in DEX converts between them automatically inside the same transaction.

Coinpath handles this by recording **separate sent and received amounts and currencies** on every edge, so the money-flow graph accurately reflects what each party actually sent and received.

### 2. Multiple Conversions in a Single Transaction

A payment may pass through several order-book hops before settling. A single Ripple `Payment` transaction can trigger a chain like USD → XRP → EUR → GBP behind the scenes.

Coinpath extracts **each intermediate hop** as a distinct edge in the fund-flow graph, giving you visibility into the full conversion path rather than just the start and end points.

### 3. Multiple Issuers for the Same Currency

On Ripple and Stellar, anyone can issue a token with the same symbol. "USD" from Gateway A is a different asset than "USD" from Gateway B. Two tokens named `USD` are not fungible unless they share the same issuer.

Coinpath distinguishes assets by **(symbol + issuer)** so that fund-flow edges are never incorrectly merged across different trust lines.

### 4. Implicit Transfers (Ripple-Specific)

The Ripple API does not always surface every address-to-address transfer within a transaction. Some transfers happen implicitly as a side effect of order-book matching or path-finding.

Coinpath's **pre-processing layer** reconstructs all implicit value transfers between addresses, even when they are not explicitly listed in the raw transaction data.

## Adaptations in the Money-Flow Graph

To address these challenges, the Coinpath graph for ledger-based chains differs from EVM/UTXO graphs in several ways:

| Feature | EVM / UTXO | Ledger-based |
|---|---|---|
| Edge currencies | Same on both sides | May differ (sent currency ≠ received currency) |
| Same address at consecutive levels | Not allowed | Allowed (self-trades from DEX matching) |
| Trade visibility | All transfers explicit | Only **taker** side appears; maker side excluded from path |
| Pre-processing | Minimal | Extracts implicit transfers from raw tx data |

## Related Resources

- [Coinpath Overview](../Overview) — what Coinpath is and cross-chain comparison.
- [How to Read a Coinpath Graph](../How_to_read_coinpath_graph) — nodes, edges, depth levels.
- [EVM Fund Tracking](./EVM_Chains) | [UTXO Fund Tracking](./UTXO_Chains)
- [Ripple schema reference](https://docs.bitquery.io/v1/docs/Schema/ripple/overview)
- [Coinpath Money Flow API — query cookbook](https://docs.bitquery.io/v1/docs/examples/coinpath/money-flow-api)
