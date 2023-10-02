---
sidebar_position: 3
---

# Coinpath for Ledger-Based Networks

Payment ledger blockchains, as Stellar and Ripple, impose additional complexity due to the following features of payment transactions:

1.  **Payments can be sent in one currency and received in another currency.** This means that the money flow graph must be able to track the conversion of currencies between addresses.
2.  **There may be multiple conversions between currencies in one payment transaction.** This means that the money flow graph must be able to track all of the conversions that occur in a single transaction.
3.  **Currencies may have multiple issuers.** This means that the money flow graph must be able to track the flow of money between different issuers of the same currency.
4.  **Blockchain API for Ripple does not allow to explicitly determine all transfers between addresses in scope of one transaction.** This means that the money flow graph must be able to infer all of the transfers that occur in a single transaction, even if they are not explicitly specified in the blockchain data.

To address these challenges, the money flow graph implementation for payment ledger blockchains makes the following adaptations:

- Every transfer have separately defined sent and received amounts, with sent and received currencies, that may be different.
- Pre-processing extracts all value transfers between addresses, even when they are implicitly done inside a transaction.
- The money flow graph represents edges with different currencies on the same path.
- The money flow graph allows the same address to exist on the path on level N and N+1 (transferring himself as a result of trading).
- Only "taker" trades appear in the money flow result, as the "maker" side is not involved in the money flow path.
