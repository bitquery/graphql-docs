---
sidebar_position: 2
---

# Coinpath for UTXO Networks

UTXOs are the basic unit of value on UTXO chains, and they represent the amount of tokens that can be spent in a single transaction.

Coinpath also uses a proportional input-output amount attribution formula to split the amounts between inputs and outputs in a transaction. This formula takes into account the amount of each input and output, as well as the total amount of all inputs.

For example, consider the following transaction:

```
Inputs:
Address A: 1 BTC
Address B: 2 BTC

Outputs:
Address C: 0.5 BTC
Address D: 2 BTC
Address B: 0.49 BTC

```

Using the proportional input-output amount attribution formula, Coinpath would attribute the following amounts to each output:

- Address C: 0.5 BTC
- Address D: 1.51 BTC (2 BTC - 0.49 BTC change)
- Address B: 0.49 BTC (change)

The change output is treated as a separate output in UTXO mode, but it is ignored in account-based mode.
